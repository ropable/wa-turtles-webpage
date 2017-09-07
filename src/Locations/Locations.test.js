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
it("clicking on a feature sets state var content to feature title", () => {
  const wrapper = shallow(<Locations />);
  // TODO render map, add feature, simulate click on feature
  const feature = {
    layer: {
      options: {
        data: {
          properties: { title: "a title", description: "a description" }
        }
      }
    }
  };
  wrapper.instance().oef(feature);
  expect(wrapper.state().content).toEqual({
    title: "a title",
    description: "a description"
  });
});
