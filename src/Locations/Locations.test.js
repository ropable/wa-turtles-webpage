// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { shallow, render, mount } from "enzyme";
import "jest-enzyme";

import Locations from "./Locations";

/* Basic component rendering */
it("renders shallow without crashing", () => {
  shallow(<Locations />);
});

it("renders static without crashing", () => {
  render(<Locations />);
});

// it("renders fully without crashing", () => {
//   mount(<Locations />);
// });
// TypeError: Cannot read property '_layerAdd' of null

/* Test functions */
// it("clicking on a feature sets state var content to feature title", () => {
//   const wrapper = shallow(<Locations />);
//   // TODO render map, add feature, simulate click on feature
//   const feature = {
//           type: "Feature",
//           geometry: {
//             type: "Polygon",
//             coordinates: [
//               [
//                 [118.46282958984376, -20.308569296896167],
//                 [118.46008300781251, -20.354927584117682],
//                 [118.15795898437501, -20.390974413170603],
//                 [117.94372558593751, -20.571081893508183],
//                 [117.82836914062501, -20.689322775663346],
//                 [117.75146484375001, -20.699600246050338],
//                 [117.74871826171876, -20.655916189788172],
//                 [117.87506103515626, -20.52221649818549],
//                 [118.00689697265626, -20.40384623883599],
//                 [118.19641113281251, -20.2982655686933],
//                 [118.38043212890626, -20.2725032501349],
//                 [118.46282958984376, -20.308569296896167]
//               ]
//             ]
//           },
//           properties: {
//             pk: 42,
//             area_type: "NWS reference site",
//             name: "Mundabullangana",
//             monitored_since: "2005-06 by Pendoley Environmental",
//             monitoring_season: "November - January",
//             rookery_sizerange: "1500",
//             rookery_size: 15,
//             volunteer_info: "9 per week",
//             contact_url: "Pendoley Environmental",
//             contact_label: "Pendoley Environmental",
//             description:
//               "Mundabullangana station is located on the West Yule River, 62 km south of Port Hedland and was first settled in 1867 by Roderick and Donald MacKay.  The station is over 200,000 hectares encompassing Cowrie Beach, a significant flatback turtle rookery, with around 1500 turtles nesting each year.  Mundabullangana is an important reference site for the North West Shelf Flatbacks program.  Research is also occurring on the station looking at the impact of feral animal predation of turtle eggs.",
//             monitoring_activities: [
//               "Patrolling all beaches counting turtle tracks each day",
//               "Patrolling beaches at night recording nesting turtles",
//               "Tagging, measuring and data entry for nesting turtles",
//               "Taking skin biopsies, deploying satellite tags or data loggers on selected turtles",
//               "Monitoring nesting and hatching success"
//             ],
//             northern_extent: -20.2725032501349,
//             centroid: {
//               type: "Point",
//               coordinates: [118.08658657492909, -20.444936620777128]
//             }
//           }
//         };
//   wrapper.instance().oef(feature);
//   expect(wrapper.state().content).toEqual(feature);
// });
