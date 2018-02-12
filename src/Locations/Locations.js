// @flow
import React from "react";
import PropTypes from "prop-types";
import Leaflet from "leaflet";
import {
  LayerGroup,
  LayersControl,
  Circle,
  CircleMarker,
  Map,
  TileLayer,
  Tooltip
} from "react-leaflet";
// import st from "geojson-bounds";
import { Col, Grid, Row, Well } from "react-bootstrap";

import "./Locations.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/";

const { BaseLayer, Overlay } = LayersControl;

type Props = {
  attr: string,
  mapurl: string,
  defaultGeom: PropTypes.array,
  rookeries: PropTypes.array
};

type State = {
  content: PropTypes.array
};

export default class Locations extends React.Component<Props, State> {
  static defaultProps = {
    attr:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, " +
      "GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    mapurl:
      "http://server.arcgisonline.com/ArcGIS/rest/services/" +
      "World_Imagery/MapServer/tile/{z}/{y}/{x}",
    defaultGeom: {
      type: "MultiPolygon",
      properties: { title: "Western Australia" },
      coordinates: [
        [[[128, -11], [128, -35], [114, -37], [110, -20], [128, -11]]]
      ]
    },
    rookeries: [
      {
        type: "Point",
        properties: { title: "Example Rookery 1", population: 100 },
        coordinates: [115, -11]
      },
      {
        type: "Point",
        properties: { title: "Example Rookery 2", population: 1000 },
        coordinates: [120, -9]
      }
    ]
  };

  state = {
    content: []
  };

  /* Actions taken on each feature: title, popup, info preview */
  oef = feature => {
    console.log("feature: " + feature + " clicked");
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
                  center={[-20, 123]}
                  zoom={5}
                  doubleClickZoom={true}
                >
                  <LayersControl position="topright">
                    <BaseLayer checked name="Aerial View">
                      <TileLayer
                        attribution={
                          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, " +
                          "USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, " +
                          "IGN, IGP, UPR-EGP, and the GIS User Community"
                        }
                        url={
                          "//server.arcgisonline.com/ArcGIS/rest/services/" +
                          "World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        }
                      />
                    </BaseLayer>

                    <BaseLayer name="Place names">
                      <TileLayer
                        attribution={
                          '&copy; <a href="//www.openstreetmap.org/' +
                          'copyright">OpenStreetMap</a>'
                        }
                        url={"//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                      />
                    </BaseLayer>

                    <BaseLayer name="Bathymetry">
                      <TileLayer
                        attribution={
                          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, " +
                          "USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, " +
                          "IGN, IGP, UPR-EGP, and the GIS User Community"
                        }
                        url={
                          "//server.arcgisonline.com/ArcGIS/rest/services/" +
                          "Ocean_Basemap/MapServer/tile/{z}/{y}/{x}"
                        }
                      />
                    </BaseLayer>

                    <BaseLayer name="Dirk Hartog mode">
                      <TileLayer
                        attribution={
                          'Map tiles by <a href="//stamen.com">Stamen Design</a>,' +
                          ' <a href="//creativecommons.org/licenses/by/3.0">' +
                          "CC BY 3.0</a> &mdash; Map data &copy; " +
                          '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        }
                        url={
                          "//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}"
                        }
                        subdomains={"abcd"}
                        minZoom={1}
                        maxZoom={16}
                        ext={"png"}
                      />
                    </BaseLayer>

                    <BaseLayer name="Real time true colour">
                      <TileLayer
                        attribution={
                          "Imagery provided by services from the Global Imagery" +
                          " Browse Services (GIBS), operated by the NASA/GSFC/Earth" +
                          " Science Data and Information System " +
                          ' (<a href="https://earthdata.nasa.gov">ESDIS</a>)' +
                          " with funding provided by NASA/HQ."
                        }
                        url={
                          "//map1.vis.earthdata.nasa.gov/wmts-webmerc/" +
                          "MODIS_Terra_CorrectedReflectance_TrueColor/default" +
                          "/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}"
                        }
                        bounds={[
                          [-85.0511287776, -179.999999975],
                          [85.0511287776, 179.999999975]
                        ]}
                        minZoom={1}
                        maxZoom={9}
                        format={"jpg"}
                        time={""}
                        tilematrixset={"GoogleMapsCompatible_Level"}
                      />
                    </BaseLayer>

                    <BaseLayer name="Real time false colour">
                      <TileLayer
                        attribution={
                          "Imagery provided by services from the Global Imagery" +
                          " Browse Services (GIBS), operated by the NASA/GSFC/Earth" +
                          " Science Data and Information System " +
                          ' (<a href="https://earthdata.nasa.gov">ESDIS</a>)' +
                          " with funding provided by NASA/HQ."
                        }
                        url={
                          "//map1.vis.earthdata.nasa.gov/wmts-webmerc/" +
                          "MODIS_Terra_CorrectedReflectance_Bands367/default/" +
                          "{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}"
                        }
                        bounds={[
                          [-85.0511287776, -179.999999975],
                          [85.0511287776, 179.999999975]
                        ]}
                        minZoom={1}
                        maxZoom={9}
                        format={"jpg"}
                        time={""}
                        tilematrixset={"GoogleMapsCompatible_Level"}
                      />
                    </BaseLayer>

                    <BaseLayer name="Light pollution">
                      <TileLayer
                        attribution={
                          "Imagery provided by services from the Global Imagery" +
                          " Browse Services (GIBS), operated by the NASA/GSFC/Earth" +
                          " Science Data and Information System " +
                          ' (<a href="https://earthdata.nasa.gov">ESDIS</a>)' +
                          " with funding provided by NASA/HQ."
                        }
                        url={
                          "//map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/" +
                          "default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}"
                        }
                        bounds={[
                          [-85.0511287776, -179.999999975],
                          [85.0511287776, 179.999999975]
                        ]}
                        minZoom={1}
                        maxZoom={8}
                        format={"jpg"}
                        time={""}
                        tilematrixset={"GoogleMapsCompatible_Level"}
                      />
                    </BaseLayer>

                    <Overlay name="Monitoring sites">
                      <LayerGroup>
                        <Circle
                          center={[-25, 120]}
                          color="red"
                          fillColor="red"
                          radius={200}
                        >
                          <Tooltip>
                            <span>absolutely no turtles here</span>
                          </Tooltip>
                        </Circle>
                      </LayerGroup>
                    </Overlay>
                    <Overlay checked name="Rookeries">
                      <LayerGroup>
                        <CircleMarker
                          color="orange"
                          fillColor="orange"
                          center={[-19.5, 121.0]}
                          radius={25}
                        >
                          <Tooltip>
                            <div>
                              <div>
                                <h3>Eighty Mile Beach</h3>
                                <h4>NWS index site</h4>
                                <div>
                                  Monitoring since 2004 by DBCA, BHP and
                                  Nyangumarta Traditional Owners
                                </div>
                                <div>Monitoring dates: Oct-Jan</div>
                                <div>Population: 1000-2000 turtles</div>
                                <div>
                                  <a
                                    href="https://bookings.conservationvolunteers.org/project/80-mile-beach-sea-turtle-monitoring-1"
                                    target="_"
                                  >
                                    Conservation Volunteers Australia
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Tooltip>
                        </CircleMarker>
                        <CircleMarker
                          color="orange"
                          fillColor="orange"
                          center={[-21.44, 115.05]}
                          radius={10}
                        >
                          <Tooltip>
                            <div>
                              <h4>Thevenard Island</h4>
                              <div>Rookery</div>
                              <div>Flatback, Green</div>
                              <div>Population: 100</div>
                            </div>
                          </Tooltip>
                        </CircleMarker>
                      </LayerGroup>
                    </Overlay>
                  </LayersControl>
                </Map>
              </Well>
            </Col>
            <Col xs={12} lg={4}>
              <Well className="pseudoThumbnail">
                <h4>Locations of interest</h4>
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
                <p>Features will have popups or load page content on click.</p>
              </Well>

              <Well className="pseudoThumbnail">
                <h4>Details</h4>
                {content && content.title ? (
                  "Delightful details on " + content.title
                ) : (
                  "Click on a map feature to view details"
                )}
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

/**
<GeoJSON
  ref="gjPoly"
  data={this.props.defaultGeom}
  onClick={this.oef}
>
  <Tooltip>
    <span>
      Click to learn more about{" "}
      {this.props.defaultGeom.properties.title}
    </span>
  </Tooltip>
</GeoJSON>
<GeoJSON
  ref="gjRookeries"
  data={this.props.rookeries}
  onClick={this.oef}
/>
*/
