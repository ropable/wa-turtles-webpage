// @flow
import React from "react";
import PropTypes from "prop-types";
import Leaflet from "leaflet";
import {
  LayerGroup,
  LayersControl,
  // Circle,
  // CircleMarker,
  GeoJSON,
  Map,
  Popup,
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
  content: array,
  name: string
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
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [128.41575622558597, -14.788824836033024],
                [128.3731842041016, -14.81073240115442],
                [128.3786773681641, -14.833965277394848],
                [128.39447021484378, -14.827327567167233],
                [128.42948913574222, -14.79944696217637],
                [128.41575622558597, -14.788824836033024]
              ]
            ]
          },
          properties: {
            pk: 44,
            area_type: "Locality",
            name: "Cape Dommett",
            northern_extent: -14.788824836033,
            centroid: {
              type: "Point",
              coordinates: [128.39840914459595, -14.810347193881594]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [122.1851348876953, -17.9761206066376],
                [122.2077941894531, -17.95913848678392],
                [122.2167205810547, -17.90622219826821],
                [122.2153472900391, -17.8519829495791],
                [122.2126007080078, -17.81080235397858],
                [122.2036743164062, -17.80818739167189],
                [122.2091674804688, -17.85132936371782],
                [122.2091674804688, -17.88988681862532],
                [122.2023010253906, -17.93692863754943],
                [122.1906280517578, -17.96109804544851],
                [122.1810150146484, -17.96893606283576],
                [122.1851348876953, -17.9761206066376]
              ]
            ]
          },
          properties: {
            pk: 19,
            area_type: "Locality",
            name: "Cable Beach Broome",
            northern_extent: -17.8081873916719,
            centroid: {
              type: "Point",
              coordinates: [122.2068948164706, -17.90212892579326]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [122.2201538085937, -17.87943138654052],
                [122.2544860839844, -17.96893606283576],
                [122.2126007080078, -18.01465089622102],
                [122.1700286865234, -17.97546747836867],
                [122.2050476074219, -17.8866195622383],
                [122.2201538085937, -17.87943138654052]
              ]
            ]
          },
          properties: {
            pk: 15,
            area_type: "Locality",
            name: "Broome",
            northern_extent: -17.8794313865405,
            centroid: {
              type: "Point",
              coordinates: [122.2127226945699, -17.95185294404507]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [122.06428527832033, -18.327966172334122],
                [122.08522796630861, -18.330247504279658],
                [122.10599899291994, -18.315744238894524],
                [122.13312149047853, -18.30938849238909],
                [122.12762832641603, -18.304010370809404],
                [122.0932960510254, -18.31362568265309],
                [122.08368301391603, -18.322914544520046],
                [122.06686019897462, -18.322262710831495],
                [122.06428527832033, -18.327966172334122]
              ]
            ]
          },
          properties: {
            pk: 43,
            area_type: "Locality",
            name: "Eco Beach",
            northern_extent: -18.3040103708094,
            centroid: {
              type: "Point",
              coordinates: [122.09723628299609, -18.31792685170971]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [121.58569335937501, -19.041348796589013],
                [121.32202148437501, -19.414792438099557],
                [121.20666503906251, -19.53390722018251],
                [121.14624023437501, -19.476950206488414],
                [121.50604248046876, -18.981623204500757],
                [121.58569335937501, -19.041348796589013]
              ]
            ]
          },
          properties: {
            pk: 37,
            area_type: "Locality",
            name: "Anna Plains",
            northern_extent: -18.9816232045008,
            centroid: {
              type: "Point",
              coordinates: [121.36744197167313, -19.25828196805517]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [120.47058105468751, -19.906218644480848],
                [120.47058105468751, -19.678797982361385],
                [120.83587646484376, -19.678797982361385],
                [120.83587646484376, -19.906218644480848],
                [120.47058105468751, -19.906218644480848]
              ]
            ]
          },
          properties: {
            pk: 36,
            area_type: "Locality",
            name: "Eighty Mile Beach",
            northern_extent: -19.6787979823614,
            centroid: {
              type: "Point",
              coordinates: [120.65322875976564, -19.79250831342112]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [118.46282958984376, -20.308569296896167],
                [118.46008300781251, -20.354927584117682],
                [118.15795898437501, -20.390974413170603],
                [117.94372558593751, -20.571081893508183],
                [117.82836914062501, -20.689322775663346],
                [117.75146484375001, -20.699600246050338],
                [117.74871826171876, -20.655916189788172],
                [117.87506103515626, -20.52221649818549],
                [118.00689697265626, -20.40384623883599],
                [118.19641113281251, -20.2982655686933],
                [118.38043212890626, -20.2725032501349],
                [118.46282958984376, -20.308569296896167]
              ]
            ]
          },
          properties: {
            pk: 42,
            area_type: "Locality",
            name: "Mundabullangana",
            northern_extent: -20.2725032501349,
            centroid: {
              type: "Point",
              coordinates: [118.08658657492909, -20.444936620777128]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [118.4593963623047, -20.34913355846964],
                [118.4999084472656, -20.35106492450127],
                [118.6804962158203, -20.34398313100789],
                [118.6798095703125, -20.30019756994918],
                [118.6186981201172, -20.27701196492411],
                [118.5390472412109, -20.27894423113763],
                [118.4786224365234, -20.29633354334086],
                [118.4642028808594, -20.31436484269556],
                [118.4593963623047, -20.34913355846964]
              ]
            ]
          },
          properties: {
            pk: 13,
            area_type: "Locality",
            name: "Port Hedland",
            northern_extent: -20.2770119649241,
            centroid: {
              type: "Point",
              coordinates: [118.5713282156877, -20.31635373173291]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [117.08747863769531, -20.42797801256007],
                [117.09022521972658, -20.452106001346323],
                [117.07717895507814, -20.473335497651675],
                [117.0637893676758, -20.455644454542014],
                [117.06550598144531, -20.427656280465378],
                [117.08747863769531, -20.42797801256007]
              ]
            ]
          },
          properties: {
            pk: 39,
            area_type: "Locality",
            name: "Delambre Island",
            northern_extent: -20.4276562804654,
            centroid: {
              type: "Point",
              coordinates: [117.07665098709887, -20.446801037181167]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [116.55944824218751, -20.483627529921847],
                [116.60099029541017, -20.445672241294332],
                [116.62090301513672, -20.460469486630767],
                [116.61895036697389, -20.472832939335568],
                [116.6203022003174, -20.476270405346042],
                [116.6093158721924, -20.49512484300564],
                [116.58845901489258, -20.504852665189066],
                [116.55944824218751, -20.483627529921847]
              ]
            ]
          },
          properties: {
            pk: 40,
            area_type: "Locality",
            name: "Rosemary Island",
            northern_extent: -20.4456722412943,
            centroid: {
              type: "Point",
              coordinates: [116.59438221358559, -20.47680248337636]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [117.11185455322267, -20.648527202745747],
                [117.18635559082033, -20.693176908667347],
                [117.22927093505861, -20.6205743087071],
                [117.21073150634767, -20.575581867678267],
                [117.1904754638672, -20.563045895444446],
                [117.14447021484376, -20.603864380816592],
                [117.11185455322267, -20.648527202745747]
              ]
            ]
          },
          properties: {
            pk: 38,
            area_type: "Locality",
            name: "West Pilbara Turtle Program beaches Wickam",
            northern_extent: -20.5630458954444,
            centroid: {
              type: "Point",
              coordinates: [117.17670956962067, -20.62865561752322]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [115.433349609375, -20.640495287785964],
                [115.48828125000001, -20.668765746375144],
                [115.50750732421876, -20.74840871329924],
                [115.40313720703126, -20.912700155617568],
                [115.33721923828126, -20.99734274071184],
                [115.2850341796875, -20.85624519604873],
                [115.34820556640625, -20.725290873994197],
                [115.433349609375, -20.640495287785964]
              ]
            ]
          },
          properties: {
            pk: 41,
            area_type: "Locality",
            name: "Barrow Island",
            northern_extent: -20.640495287786,
            centroid: {
              type: "Point",
              coordinates: [115.39350666022567, -20.802871342522838]
            }
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [114.9659156799316, -21.45961898379511],
                [114.9781036376953, -21.44843528049521],
                [115.0071144104004, -21.4457191088098],
                [115.0261688232422, -21.4516307118307],
                [115.0313186645508, -21.45913969982141],
                [115.0198173522949, -21.46952383302392],
                [114.9715805053711, -21.46712756027387],
                [114.9659156799316, -21.45961898379511]
              ]
            ]
          },
          properties: {
            pk: 17,
            area_type: "Locality",
            name: "Thevenard Island",
            northern_extent: -21.4457191088098,
            centroid: {
              type: "Point",
              coordinates: [114.9990661411353, -21.45815134319211]
            }
          }
        }
      ]
    }
  };
  state = {
    content: [],
    name: ""
  };

  /* Actions taken on each feature: title, popup, info preview */
  oef = feature => {
    console.log(
      "feature: " + feature.layer.feature.properties.name + " clicked"
    );
    console.log(feature.layer.feature);
    // window.feature = feature.layer.feature;
    this.setState({ content: feature.layer.feature.properties });
  };

  render() {
    const { content, name } = this.state;

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

                    <Overlay checked name="Reference sites">
                      <LayerGroup>
                        <GeoJSON
                          ref="gjPoly"
                          key="sites-gj"
                          data={this.props.defaultGeom}
                          onClick={this.oef}
                        />
                      </LayerGroup>
                    </Overlay>
                  </LayersControl>
                </Map>
              </Well>
            </Col>

            <Col xs={12} lg={4}>
              <Well className="pseudoThumbnail">
                {content && content.name ? (
                  <h3>{content.name}</h3>
                ) : (
                  <h3>Click on a site to view details</h3>
                )}
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

// <Well className="pseudoThumbnail">
//   <h4>Locations of interest</h4>
//   <p>
//     This page will show an interactive map of all things turtle:
//   </p>
//   <ul>
//     <li>Species habitat (Global, WA, NWS stocks)</li>
//     <li>Study sites: on ground, aerial, track census, tagging</li>
//     <li>points of interest</li>
//     <li>live satellite tracking</li>
//   </ul>
//   <p>Planned features:</p>
//   <ul>
//     <li>Actual data shown</li>
//     <li>Layer selector to toggle each layer on/off</li>
//     <li>Filter features where feasible</li>
//   </ul>
//   <p>Features will have popups or load page content on click.</p>
// </Well>

// <Overlay checked name="Rookeries">
//   <LayerGroup>
//     <CircleMarker
//       color="orange"
//       fillColor="orange"
//       center={[-19.5, 121.0]}
//       radius={25}
//     >
//       <Tooltip>
//         <div>
//           <div>
//             <h3>Eighty Mile Beach</h3>
//             <h4>NWS index site</h4>
//             <div>
//               Monitoring since 2004 by DBCA, BHP and
//               Nyangumarta Traditional Owners
//             </div>
//             <div>Monitoring dates: Oct-Jan</div>
//             <div>Population: 1000-2000 turtles</div>
//             <div>
//               <a
//                 href="https://bookings.conservationvolunteers.org/project/80-mile-beach-sea-turtle-monitoring-1"
//                 target="_"
//               >
//                 Conservation Volunteers Australia
//               </a>
//             </div>
//           </div>
//         </div>
//       </Tooltip>
//     </CircleMarker>
//     <CircleMarker
//       color="orange"
//       fillColor="orange"
//       center={[-21.44, 115.05]}
//       radius={10}
//     >
//       <Tooltip>
//         <div>
//           <h4>Thevenard Island</h4>
//           <div>Rookery</div>
//           <div>Flatback, Green</div>
//           <div>Population: 100</div>
//         </div>
//       </Tooltip>
//     </CircleMarker>
//   </LayerGroup>
// </Overlay>
