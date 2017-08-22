// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import { Col, Glyphicon, ListGroup, Panel, Well } from 'react-bootstrap';
import ResourceRow from './ResourceRow';
import './DatasetRow.css';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/';

type Props = {
  dataset: PropTypes.array,
  attr: string,
  mapurl: string,
  doubleClickZoom: boolean
};

type State = {
  lat: number,
  lng: number,
  zoom: number
};

export default class DatasetRow extends React.Component<Props, State> {
  static defaultProps = {
    attr: 'Tiles &copy; Esri &mdash; Source: Esri et al.',
    mapurl:
      'http://server.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Imagery/MapServer/tile/{z}/{y}/{x}',
    doubleClickZoom: true
  };

  state = {
    lat: -25,
    lng: 125,
    zoom: 3
  };

  render() {
    const ds = this.props.dataset;
    const position = [this.state.lat, this.state.lng];
    const disallowedTypes = ['p'];
    if (ds) {
      const geojson_geometry =
        ds && ds.spatial
          ? JSON.parse(ds.spatial)
          : {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [128.84765625000003, -11.523087506868514],
                    [128.67187500000003, -34.88593094075316],
                    [114.43359375000001, -37.020098201368114],
                    [110.91796875000001, -19.973348786110602],
                    [128.84765625000003, -11.523087506868514]
                  ]
                ]
              ]
            };
      return (
        <Col xs={12} md={6} lg={4}>
          <Well className="whitebg">
            <Map
              center={position}
              zoom={this.state.zoom}
              doubleClickZoom={this.props.doubleClickZoom}
            >
              <TileLayer
                attribution={this.props.attr}
                url={this.props.mapurl}
              />
              <GeoJSON ref={ds.id} data={geojson_geometry} />
            </Map>

            <h4>
              {ds.title}
            </h4>
            <p>
              <Glyphicon glyph="home" /> {ds.organization.title}
              <br />
              <Glyphicon glyph="edit" />{' '}
              <a href={ds.author_email}>{ds.author}</a>
              <br />
              <Glyphicon glyph="wrench" />{' '}
              <a href={ds.maintainer_email}>{ds.maintainer}</a>
              <br />
              <Glyphicon glyph="copyright-mark" /> {ds.license_id}
              <br />
              {ds.tags.map(function(tag) {
                return (
                  <span key={tag.id}>
                    <Glyphicon glyph="tag" /> {tag.display_name}
                    <br />
                  </span>
                );
              })}
              {ds.groups.map(function(group) {
                return (
                  <span key={group.id}>
                    <Glyphicon glyph="folder-open" /> {group.title}
                    <br />
                  </span>
                );
              })}
            </p>
            <Panel collapsible header="Description">
              <ReactMarkdown
                source={ds.notes}
                containerTagName="span"
                disallowedTypes={disallowedTypes}
              />
            </Panel>
            <Panel collapsible header="Resources">
              <ListGroup fill>
                {ds.resources.map(function(r) {
                  return <ResourceRow resource={r} key={r.id} />;
                })}
              </ListGroup>
            </Panel>
          </Well>
        </Col>
      );
    } else {
      return (
        <Col xs={12} md={6} lg={4}>
          <Well className="whitebg">
            <h4>No dataset</h4>
          </Well>
        </Col>
      );
    }
  }
}
