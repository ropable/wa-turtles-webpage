import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import "jest-enzyme";
import Dashboard from "./Dashboard";

it("renders NWS heading", () => {
  const wrapper = shallow(<Dashboard />);
  const msg = <h1>North West Shelf Flatback Turtle Conservation Program</h1>;
  expect(wrapper).toContainReact(msg);
});
