import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import "jest-enzyme";
import Story from "./Story";

it("renders a heading", () => {
  const wrapper = shallow(<Story />);
  const msg = <h1>The Flatback Story</h1>;
  expect(wrapper).toContainReact(msg);
});
