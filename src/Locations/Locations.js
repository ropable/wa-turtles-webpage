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
  // Popup,
  // Tooltip,
  TileLayer
} from "react-leaflet";
// import st from "geojson-bounds";
import { Container, Row, Col, Button, Card, CardBody } from "reactstrap";

import "./Locations.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/";

const { BaseLayer, Overlay } = LayersControl;

export default class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  /* Actions taken on each feature: title, popup, info preview */
  oef = feature => {
    // console.log("feature: " + feature.layer.feature.properties.name + " clicked");
    // console.log(feature.layer.feature);
    // window.feature = feature.layer.feature;
    this.setState({ content: feature.layer.feature.properties });
  };

  render() {
    const { content } = this.state;
    const ma_list =
      content && content.monitoring_activities
        ? content.monitoring_activities.map(ma => <li>{ma}</li>)
        : "";

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
      <Container>
        <Row>
          <Col xs={12} sm={6} md={8}>
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
                      style={this.props.polyStyle}
                      data={this.props.defaultGeom}
                      onClick={this.oef}
                    />
                  </LayerGroup>
                </Overlay>
              </LayersControl>
            </Map>
          </Col>

          <Col xs={12} sm={6} md={4}>
            {content && content.name ? (
              <Card>
                <CardBody>
                  <h3>{content.name}</h3>
                  <h4>{content.area_type}</h4>
                  <strong>Monitored since</strong> {content.monitored_since}
                  <br />
                  <strong>Monitoring season</strong> {content.monitoring_season}
                  <br />
                  <strong>Rookery size</strong> {content.rookery_sizerange}{" "}
                  turtles
                  <br />
                  <strong>Volunteers</strong> {content.volunteer_info}
                  <br />
                  <Button
                    color="primary"
                    size="small"
                    href={content.contact_url}
                    target="_"
                    title={content.contact_label}
                  >
                    Learn more
                  </Button>
                  <p>{content.description}</p>
                  <strong>Monitoring activities</strong>
                  <ul>{ma_list}</ul>
                </CardBody>
              </Card>
            ) : (
              <Card>
                <CardBody>
                  <h3>Select location</h3>
                  <h4>Click or tap a location</h4>

                  <p>
                    On mobile devices: Pinch to zoom, swipe to pan, and tap
                    locations marked in orange to view details.
                  </p>
                  <p>
                    On desktops: Hover and scroll mouse-wheel to zoom, click and
                    drag to pan, and click locations marked in orange to view
                    details.
                  </p>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

Locations.propTypes = {
  attr: PropTypes.string,
  mapurl: PropTypes.string,
  defaultGeom: PropTypes.object,
  rookeries: PropTypes.array
};

Locations.defaultProps = {
  polyStyle: {
    color: "#ff7800",
    weight: 5,
    opacity: 0.65
  },
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
          area_type: "NWS index site",
          name: "Cape Dommett",
          monitored_since: "2006-07 by DBCA and Charles Darwin University",
          monitoring_season: "June-October",
          rookery_sizerange: "2500-3500",
          rookery_size: 30,
          volunteer_info: "NA",
          contact_url: "mailto:turtles@dbca.wa.gov.au",
          contact_label: "DBCA",
          description:
            "Cape Domett lies on the eastern side of the Cambridge gulf, about 112 km north of Kununurra in the Kimberley. The main nesting beach is about 1.9km long and is the site of the largest flatback rookery in Western Australia, and one of the largest in Australia. Flatback monitoring began in the area with a partnership between DBCA and Charles Darwin University.  These turtles have a peak nesting season between August and September.",
          monitoring_activities: [
            "Track counts to assess nesting abundance and refine population estimate",
            "Aerial surveys",
            "Observation of nesting behaviour to determine nesting success trends",
            "Observation of predation of adult turtles and hatchlings",
            "Recovery of hatched nests to determine breeding biology and threats to clutch success",
            "Determine emergence to waterline success of hatchlings",
            "Flipper tagging to assist in population estimate and biology",
            "Satellite tracking"
          ],
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
          area_type: "NWS index site",
          name: "Cable Beach Broome",
          monitored_since:
            "2006-07 by Conservation Volunteers Australia, now DBCA and Yawuru Rangers",
          monitoring_season: "November - February",
          rookery_sizerange: "100",
          rookery_size: 1,
          volunteer_info: "Local and international volunteers",
          contact_url:
            "https://bookings.conservationvolunteers.org/project/naturewise-eco-beach-turtle-conservation ",
          contact_label: "DBCA and Yawuru Rangers",
          description:
            "Cable Beach, Broome is in the west Kimberley, 2240km north of Perth. Renowned as a spectacularly beautiful beach with white sand and azure water flatback turtles, and occasionally green turtles, nest here.  The beach is very popular with locals and tourists so the turtles face additional pressures here, of interaction with people and potential issues with 4-wheel drives using the beach.",
          monitoring_activities: [
            "Daily turtle track counts",
            "Monitoring nesting and hatching success"
          ],
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
          area_type: "NWS index site",
          name: "Eco Beach",
          monitored_since: "2009 by Conservation Volunteers Australia",
          monitoring_season: "November - December",
          rookery_sizerange: "100",
          rookery_size: 1,
          volunteer_info: "International",
          contact_url:
            "https://bookings.conservationvolunteers.org/project/naturewise-eco-beach-turtle-conservation ",
          contact_label: "Conservation Volunteers Australia",
          description:
            "Eco Beach is approximately 130km south of Broome on the Kimberley coast.  It is an isolated area with a luxury eco resort.  The flatback turtles that nest here have been found to be a different breeding stock from the North West Shelf, different again to the Eighty Mile Beach stock, which are about 260km to the south.  ",
          monitoring_activities: [
            "Patrolling at night, recording nesting turtles",
            "Tagging, measuring and data entry for nesting turtles",
            "Taking skin biopsies",
            "Monitoring nesting and hatching success"
          ],
          northern_extent: -18.3040103708094,
          centroid: {
            type: "Point",
            coordinates: [122.09723628299609, -18.31792685170971]
          }
        }
      },
      // {
      //   type: "Feature",
      //   geometry: {
      //     type: "Polygon",
      //     coordinates: [
      //       [
      //         [121.58569335937501, -19.041348796589013],
      //         [121.32202148437501, -19.414792438099557],
      //         [121.20666503906251, -19.53390722018251],
      //         [121.14624023437501, -19.476950206488414],
      //         [121.50604248046876, -18.981623204500757],
      //         [121.58569335937501, -19.041348796589013]
      //       ]
      //     ]
      //   },
      //   properties: {
      //     pk: 37,
      //     area_type: "Locality",
      //     name: "Anna Plains",
      //     northern_extent: -18.9816232045008,
      //     centroid: {
      //       type: "Point",
      //       coordinates: [121.36744197167313, -19.25828196805517]
      //     }
      //   }
      // },
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [119.4526553638153, -20.03422025202665],
              [119.4623352091951, -19.921288722596],
              [120.5690641976155, -19.71155873936765],
              [121.0046572397051, -19.49214891075954],
              [121.4628365876809, -19.0210631022774],
              [121.5531818112254, -19.04042279303694],
              [121.497802734375, -19.21780295966795],
              [121.3604736328125, -19.41997316110167],
              [120.9539794921875, -19.68914232238882],
              [120.6243896484375, -19.82355782477137],
              [120.2508544921875, -19.94753287798935],
              [119.8004150390625, -20.00948395533451],
              [119.586181640625, -20.1333128972237],
              [119.4526553638153, -20.03422025202665]
            ]
          ]
        },
        properties: {
          pk: 36,
          area_type: "Locality",
          name: "Eighty Mile Beach",
          monitored_since:
            "2004 by DBCA, BHP and Nyangumarta Traditional Owners",
          monitoring_season: "October - January",
          rookery_sizerange: "1000-2000",
          rookery_size: 20,
          volunteer_info: "International",
          contact_url:
            "https://bookings.conservationvolunteers.org/project/80-mile-beach-sea-turtle-monitoring-1",
          contact_label: "Conservation Volunteers Australia",
          description:
            "Eighty Mile Beach is located between Port Hedland and Broome in the Kimberley.  It is the longest, uninterrupted beach in Western Australia, at 220km long.  Eighty Mile Beach Marine Park was gazetted in 2013, and is jointly managed with the traditional owners.  It supports a significant population of nesting flatbacks as well as a Wetland of International Importance, listed with under the Ramsar Convention of Wetlands, which is one of the world’s most important feeding grounds for migratory shore birds.  The flatback turtles here are not part of the North West Shelf stock, this was recently discovered from genetic analysis (read more here). ",
          monitoring_activities: [
            "Patrolling beaches counting turtle tracks weekly",
            "Patrolling beaches counting turtle tracks daily during peak nesting season",
            "Deploying satellite tags on rehabilitated juvenile turtles",
            "Monitoring nesting and hatching success",
            "Deploying remote camera traps to check for the presence of predators"
          ],
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
          area_type: "NWS reference site",
          name: "Mundabullangana",
          monitored_since: "2005-06 by Pendoley Environmental",
          monitoring_season: "November - January",
          rookery_sizerange: "1500",
          rookery_size: 15,
          volunteer_info: "9 per week",
          contact_url: "https://www.penv.com.au/opportunities/",
          contact_label: "Pendoley Environmental",
          description:
            "Mundabullangana station is located on the West Yule River, 62 km south of Port Hedland and was first settled in 1867 by Roderick and Donald MacKay.  The station is over 200,000 hectares encompassing Cowrie Beach, a significant flatback turtle rookery, with around 1500 turtles nesting each year.  Mundabullangana is an important reference site for the North West Shelf Flatbacks program.  Research is also occurring on the station looking at the impact of feral animal predation of turtle eggs.",
          monitoring_activities: [
            "Patrolling all beaches counting turtle tracks each day",
            "Patrolling beaches at night recording nesting turtles",
            "Tagging, measuring and data entry for nesting turtles",
            "Taking skin biopsies, deploying satellite tags or data loggers on selected turtles",
            "Monitoring nesting and hatching success"
          ],
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
          area_type: "NWS reference site",
          name: "Port Hedland",
          monitored_since: "2004 by Care for Hedland, sponsored by BP",
          monitoring_season: "November - December",
          rookery_sizerange: "Unknown",
          rookery_size: 0,
          volunteer_info: "9 per night",
          contact_url:
            "www.careforhedland.org.au/programs/turtle-monitoring.aspx",
          contact_label: "Care for Hedland",
          description:
            "Port Hedland is the second largest town in the Pilbara. It is 1765 km north of Perth, has a large working harbour servicing iron ore processing and export as well as manganese export and salt production. The monitoring program is community-based.",
          monitoring_activities: [
            "To educate and bring awareness of the local flatback turtle and encourage positive methods for human interaction with the species.",
            "To collect data on flatback activity at Cemetery Beach and Pretty Pool Beach.",
            "Morning track counts are conducted between the end of October and late February.",
            "Morning hatchling monitoring occurs between late December and mid-February."
          ],
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
          area_type: "NWS reference site",
          name: "Delambre Island",
          monitored_since: "2008 by Rio Tinto",
          monitoring_season: "November - December",
          rookery_sizerange: "Unknown",
          rookery_size: 0,
          volunteer_info: "3-7 per week",
          contact_url: "turtles@dbca.wa.govo.au",
          contact_label: "Sabrina Fossette-Halot, Joanne King, DBCA",
          description:
            "Delambre Island lies within the Dampier Archipelago, a chain of 42 coastal islands islets and rocks within a 45km radius of Dampier in the Pilbara. The Dampier Archipelago is the richest area of marine biodiversity known in Western Australia. The first recorded description of flatback turtles comes from Delambre Island. The island is used predominantly by flatback turtles for nesting. Volunteers are involved in all aspects of research on the island.",
          monitoring_activities: [
            "Patrolling beaches counting turtle tracks each day",
            "Patrolling southern beaches at night recording nesting turtles",
            "Tagging, measuring and data entry for nesting turtles",
            "Taking skin biopsies, deploying satellite tags or data loggers on selected turtles",
            "Monitoring nesting and hatching success"
          ],
          northern_extent: -20.4276562804654,
          centroid: {
            type: "Point",
            coordinates: [117.07665098709887, -20.446801037181167]
          }
        }
      },
      // {
      //   type: "Feature",
      //   geometry: {
      //     type: "Polygon",
      //     coordinates: [
      //       [
      //         [116.55944824218751, -20.483627529921847],
      //         [116.60099029541017, -20.445672241294332],
      //         [116.62090301513672, -20.460469486630767],
      //         [116.61895036697389, -20.472832939335568],
      //         [116.6203022003174, -20.476270405346042],
      //         [116.6093158721924, -20.49512484300564],
      //         [116.58845901489258, -20.504852665189066],
      //         [116.55944824218751, -20.483627529921847]
      //       ]
      //     ]
      //   },
      //   properties: {
      //     pk: 40,
      //     area_type: "Locality",
      //     name: "Rosemary Island",
      //     monitored_since: "",
      //     monitoring_season: "",
      //     rookery_sizerange: "",
      //     rookery_size: 0,
      //     volunteer_info: "",
      //     contact_url: "",
      //     contact_label: "",
      //     description: "",
      //     monitoring_activities: "",
      //     northern_extent: -20.4456722412943,
      //     centroid: {
      //       type: "Point",
      //       coordinates: [116.59438221358559, -20.47680248337636]
      //     }
      //   }
      // },
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
          area_type: "NWS reference site",
          name: "West Pilbara Turtle Program",
          monitored_since: "2005-06 by DBCA partnered by Rio Tinto",
          monitoring_season: "November - March",
          rookery_sizerange: "100",
          rookery_size: 10,
          volunteer_info: "Mostly local community members",
          contact_url: "mailto:wptp@dbca.wa.gov.au ",
          contact_label: "DBCA West Pilbara Turtle Program Coordinator",
          description:
            "Wickham is a historic town in the city of Karratha, in the Pilbara.  It has a long history of iron ore production.  The West Pilbara Turtle Program brings together industry, government and the local community. The volunteer groups monitor Bells Beach and Cooling Water Beach, near Cape Lambert Port.  The port operations include iron ore handling, processing and shipping.  Flatback turtles are the most common nesting turtle in the area, however green and hawksbill turtles occasionally nest here.",
          monitoring_activities: [
            "Increase awareness of marine turtles in the Wickham area",
            "Patrol beaches daily to count tracks",
            "Determine nesting success",
            "Record evidence of impacts from human interference and feral animal predation on local beaches"
          ],
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
          area_type: "Impact monitoring site",
          name: "Barrow Island",
          monitored_since: "2005-06 by Pendoley Environmental",
          monitoring_season: "November - January",
          rookery_sizerange: "1500",
          rookery_size: 15,
          volunteer_info: "9 per week",
          contact_url: "https://www.penv.com.au/opportunities/",
          contact_label: "Pendoley Environmental",
          description:
            "Barrow Island is the largest island off the coast of the Pilbara.  It is 25km long and 10km wide, covering about 23,400 hectares. It sits approximately 56 km from the mainland, between Onslow and Karratha. The island was listed as a ‘Class A’ Nature Reserve in 1910.  Chevron Australia operate an oilfield, gas processing facility and LNG shipping facility on the island. There are up to 1500 flatback turtles nesting on the island each year, making this a significant rookery for flatbacks.",
          monitoring_activities: [
            "Patrolling all beaches counting turtle tracks each day",
            "Patrolling beaches at night recording nesting turtles",
            "Tagging, measuring and data entry for nesting turtles",
            "Taking skin biopsies, deploying satellite tags or data loggers on selected turtles",
            "Monitoring nesting and hatching success"
          ],
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
          area_type: "NWS reference site",
          name: "Thevenard Island",
          monitored_since: "2016-17",
          monitoring_season:
            "November - December plus one week in January or February",
          rookery_sizerange: "200-300",
          rookery_size: 20,
          volunteer_info: "3-7 per week",
          contact_url: "turtles@dbca.wa.gov.au",
          contact_label: "Sabrina Fossette-Halot, DBCA",
          description:
            "Thevenard Island is located approximately 22km off the coast from Onslow in the Pilbara region of Western Australia. The island is the largest of a group of ten islands called the Mackerel Islands.  The flatback turtle is the most common nesting turtle on the island; green and hawksbill turtles also nest on the island. Thevenard Island is a “Class C” Nature Reserve; it is approximately 6km in length and 550 hectares.  Limestone reefs and platforms surround the island, with diverse coral assemblages on the northern side. Volunteers are involved in all aspects of research on the island.",
          monitoring_activities: [
            "Patrolling all beaches counting turtle tracks each day",
            "Patrolling southern beaches at night recording nesting turtles",
            "Tagging, measuring and data entry for nesting turtles",
            "Taking skin biopsies, deploying satellite tags or data loggers on selected turtles",
            "Monitoring nesting and hatching success"
          ],
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
