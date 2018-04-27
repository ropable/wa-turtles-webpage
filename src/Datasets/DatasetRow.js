// @flow
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Leaflet from "leaflet";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import FontAwesome from "react-fontawesome";
import st from "geojson-bounds";
import { Col, Row, Card } from "reactstrap";
import TimeAgo from "react-timeago";

import ResourceRow from "./ResourceRow";
import "./DatasetRow.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/";

export default class DatasetRow extends React.Component {
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
    const disallowedTypes = ["blockquote"];
    if (ds) {
      const gj = this.getGeom(ds, this.props.defaultGeom);

      return (
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
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
              <Row>
                <Col xs={12}>
                  <h4>{ds.title}</h4>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FontAwesome name="home" /> {ds.organization.title}
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FontAwesome name="edit" />{" "}
                  <a
                    href={"mailto:" + ds.author_email}
                    title="The dataset author is the intellectual owner of the main dataset resource"
                  >
                    {ds.author}
                  </a>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FontAwesome name="quote-right" /> {ds.citation}
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FontAwesome name="copyright" />{" "}
                  <span glyph="copyright-mark" title="License" />{" "}
                  {ds.license_id}
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FontAwesome name="wrench" />{" "}
                  <a
                    href={"mailto:" + ds.maintainer_email}
                    title="The dataset maintainer wrote and updates this metadata entry"
                  >
                    {ds.maintainer}
                  </a>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FontAwesome
                    name="refresh"
                    ariaLabel="Update frequency of main dataset resource"
                  />{" "}
                  {ds.update_frequency}
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FontAwesome
                    name="calendar"
                    ariaLabel="Metadata last updated"
                  />{" "}
                  <TimeAgo date={ds.metadata_modified} />
                </Col>
              </Row>

              {ds.tags.map(tag => (
                <Row key={tag.id}>
                  <Col xs={12}>
                    <FontAwesome
                      name="tag"
                      ariaLabel="Tagged with keyword"
                    />{" "}
                    {tag.display_name}
                  </Col>
                </Row>
              ))}

              {ds.groups.map(group => (
                <Row key={group.id}>
                  <Col xs={12}>
                    <FontAwesome
                      name="folder-open"
                      ariaLabel="Thematic group"
                    />{" "}
                    {group.title}
                  </Col>
                </Row>
              ))}

              <Row>
                <Col xs={12}>
                  <FontAwesome
                    name="comment"
                    ariaLabel="Dataset description"
                  />{" "}
                  <ReactMarkdown
                    source={ds.notes || "No description provided"}
                    containerTagName="span"
                    disallowedTypes={disallowedTypes}
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  {ds.resources.map(r => (
                    <ResourceRow resource={r} key={r.id} />
                  ))}
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      );
    } else {
      return (
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <h4>No dataset</h4>
          </Card>
        </Col>
      );
    }
  }
}

DatasetRow.propTypes = {
  dataset: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  attr: PropTypes.string,
  mapurl: PropTypes.string,
  doubleClickZoom: PropTypes.bool,
  defaultGeom: PropTypes.object
};

DatasetRow.defaultProps = {
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
