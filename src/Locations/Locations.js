// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
// import st from "geojson-bounds";
import { Col, Grid, Row, Well } from 'react-bootstrap';
import './Locations.css';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/';

type Props = {
  attr: string,
  mapurl: string,
  defaultGeom: PropTypes.array
};

type State = {
  content: PropTypes.array
};

export default class Locations extends React.Component<Props, State> {
  static defaultProps = {
    attr: 'Tiles &copy; Esri &mdash; Source: Esri et al.',
    mapurl:
      'http://server.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Imagery/MapServer/tile/{z}/{y}/{x}',
    defaultGeom: {
      type: 'MultiPolygon',
      properties: { title: 'Western Australia' },
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
    }
  };

  state = {
    content: []
  };

  /* Actions taken on each feature: title, popup, info preview */
  oef = feature => {
    console.log('feature: ' + feature + ' clicked');
    window.feature = feature;
    this.setState({ content: feature.layer.options.data.properties });
  };

  render() {
    const { content } = this.state;

    // const gj = this.props.defaultGeom;

    // /* react-leaflet doesn't seem to like fitBounds, so we'll roll our own */
    // const getCenter = gjs => [
    //   (st.yMax(gjs) + st.yMin(gjs)) * 0.5,
    //   (st.xMax(gjs) + st.xMin(gjs)) * 0.5
    // ];
    //
    // // Generate max extent in degrees from given GeoJSON
    // const getSpatialExtent = gjs =>
    //   Math.abs(st.yMax(gjs) - st.yMin(gjs), st.xMax(gjs) - st.xMin(gjs));
    //
    // Distill sum fine moonshine zoom level from coord extent of GeoJSON
    // const getZoom = gjs => -1 * Math.log(getSpatialExtent(gjs)) + 6.5;

    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} lg={8}>
              <Well className="pseudoThumbnail">
                <Map
                  id="turtlemap"
                  center={[-25, 120]}
                  zoom={4}
                  doubleClickZoom={true}
                >
                  <TileLayer
                    attribution={this.props.attr}
                    url={this.props.mapurl}
                  />
                  <GeoJSON
                    ref="gj"
                    data={this.props.defaultGeom}
                    onClick={this.oef}
                  >
                    <Tooltip>
                      <span>
                        Click to learn more about{' '}
                        {this.props.defaultGeom.properties.title}
                      </span>
                    </Tooltip>
                  </GeoJSON>
                </Map>
              </Well>
            </Col>
            <Col xs={12} lg={4}>
              <Well className="pseudoThumbnail">
                <h4>Map page heading</h4>
                <p>
                  This page will show an interactive map of all things turtle:
                </p>
                <ul>
                  <li>Species habitat (Global, WA, NWS stocks)</li>
                  <li>Study sites: on ground, aerial, track census, tagging</li>
                  <li>points of interest</li>
                  <li>live satellite tracking</li>
                </ul>
                <p>Planned features:</p>
                <ul>
                  <li>Actual data shown</li>
                  <li>Layer selector to toggle each layer on/off</li>
                  <li>Filter features where feasible</li>
                </ul>
                <p>
                  Features will have on-click popups or load page content on
                  click
                </p>
              </Well>

              <Well className="pseudoThumbnail">
                <h4>Details</h4>
                {content && content.title
                  ? 'Delightful details on ' + content.title
                  : 'Click on a map feature to view details'}
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
