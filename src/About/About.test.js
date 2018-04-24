import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import "jest-enzyme";
import About from "./About";

it("renders Program heading", () => {
  const wrapper = shallow(<About />);
  const msg = <h1>Program</h1>;
  expect(wrapper).toContainReact(msg);
});
