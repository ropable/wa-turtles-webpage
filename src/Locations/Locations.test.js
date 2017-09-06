// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { shallow } from "enzyme";
import "jest-enzyme";

import Locations from "./Locations";

it("renders shallow without crashing", () => {
  shallow(<Locations />);
});

// it("renders withough crashing", () => {
//   const wrapper = document.createElement("div");
//   ReactDOM.render(<Locations />, wrapper);
// });
