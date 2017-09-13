// @flow
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Leaflet from "leaflet";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import st from "geojson-bounds";
import { Col, Glyphicon, ListGroup, Panel, Well } from "react-bootstrap";
import TimeAgo from "react-timeago";

import ResourceRow from "./ResourceRow";
import "./DatasetRow.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/";

type Props = {
  dataset: PropTypes.array,
  attr: string,
  mapurl: string,
  doubleClickZoom: boolean,
  defaultGeom: PropTypes.array
};

export default class DatasetRow extends React.Component<Props> {
  static defaultProps = {
    attr: "Tiles &copy; Esri &mdash; Source: Esri et al.",
    mapurl:
      "http://server.arcgisonline.com/ArcGIS/rest/services/" +
      "World_Imagery/MapServer/tile/{z}/{y}/{x}",
    doubleClickZoom: true,
    defaultGeom: {
      type: "MultiPolygon",
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

  /* Return Dataset's GeoJSON Multipolygon geometry or fallback */
  getGeom = (ds, fallback) => {
    return ds.spatial ? JSON.parse(ds.spatial) : fallback;
  };

  /* react-leaflet doesn't seem to like fitBounds, so we'll roll our own */
  getCenter = gjs => [
    (st.yMax(gjs) + st.yMin(gjs)) * 0.5,
    (st.xMax(gjs) + st.xMin(gjs)) * 0.5
  ];

  // Generate max extent in degrees from given GeoJSON
  getSpatialExtent = gjs =>
    Math.max(
      Math.abs(st.yMax(gjs) - st.yMin(gjs)),
      Math.abs(st.xMax(gjs) - st.xMin(gjs))
    );

  // Distill sum fine moonshine zoom level from coord extent of GeoJSON
  getZoom = gjs => -1 * Math.log(this.getSpatialExtent(gjs)) + 6.5;

  render() {
    const ds = this.props.dataset;
    const disallowedTypes = ["p"];
    if (ds) {
      const gj = this.getGeom(ds, this.props.defaultGeom);

      return (
        <Col xs={12} md={6} lg={4}>
          <Well className="pseudoThumbnail">
            <Map
              id="map"
              center={this.getCenter(gj)}
              zoom={this.getZoom(gj)}
              doubleClickZoom={this.props.doubleClickZoom}
            >
              <TileLayer
                attribution={this.props.attr}
                url={this.props.mapurl}
              />
              <GeoJSON ref="gj" data={gj} />
            </Map>
            <div className="pseudoCaption">
              <h4>{ds.title}</h4>
              <p>
                <Glyphicon
                  glyph="home"
                  title="The dataset belongs to this organisation"
                />{" "}
                {ds.organization.title}
                <br />
                <Glyphicon
                  glyph="edit"
                  title="The dataset author is the intellectual owner of the main dataset resource"
                />{" "}
                <a href={"mailto:" + ds.author_email}>{ds.author}</a>
                <br />
                <Glyphicon glyph="comment" title="Citation" /> {ds.citation}
                <br />
                <Glyphicon glyph="copyright-mark" title="License" />{" "}
                {ds.license_id}
                <br />
                <Glyphicon
                  glyph="wrench"
                  title="The dataset maintainer wrote and updates this metadata entry"
                />{" "}
                <a href={"mailto:" + ds.maintainer_email}>{ds.maintainer}</a>
                <br />
                <Glyphicon
                  glyph="repeat"
                  title="Update frequency of main dataset resource"
                />{" "}
                {ds.update_frequency}
                <br />
                <Glyphicon glyph="refresh" title="Metadata last updated" />{" "}
                <TimeAgo date={ds.metadata_modified} />
                <br />
                {ds.tags.map(function(tag) {
                  return (
                    <span key={tag.id}>
                      <Glyphicon glyph="tag" title="Tagged with keyword" />{" "}
                      {tag.display_name}
                      <br />
                    </span>
                  );
                })}
                {ds.groups.map(function(group) {
                  return (
                    <span key={group.id}>
                      <Glyphicon
                        glyph="folder-open"
                        title="Thematic group"
                      />{" "}
                      {group.title}
                      <br />
                    </span>
                  );
                })}
              </p>

              <Panel
                collapsible
                header="Description"
                title="Click to read the dataset's description"
              >
                <ReactMarkdown
                  source={ds.notes || "Not provided"}
                  containerTagName="span"
                  disallowedTypes={disallowedTypes}
                />
              </Panel>
              <Panel
                collapsible
                header="Resources"
                title="Dataset resources are files or hyperlinks, click to view"
              >
                <ListGroup fill componentClass="div">
                  {ds.resources.map(function(r) {
                    return <ResourceRow resource={r} key={r.id} />;
                  })}
                </ListGroup>
              </Panel>
            </div>
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
