import React from "react";
import ReactDOM from "react-dom";
import { Alert, Col, Grid, Row } from "react-bootstrap";
import { shallow, render, mount } from "enzyme";
import "jest-enzyme";
import Spinner from "react-spinkit";

import AlertRow from "./AlertRow";

it("hides the spinner unless showSpinner is given and true", () => {
  const wrapper = shallow(<AlertRow />);
  const msg = <span />;
  expect(wrapper).toContainReact(msg);
});

it("hides the spinner if showSpinner is false", () => {
  const wrapper = shallow(<AlertRow showSpinner={false} />);
  const msg = <span />;
  expect(wrapper).toContainReact(msg);
});

it("should render custom message", function() {
  expect(render(<AlertRow message="test" />).text()).toContain("test");
});

it("should hide on clicking the x", () => {
  const wrapper = mount(<AlertRow />);
  wrapper.instance().hide();
  expect(wrapper.find(".alert")).toHaveLength(0);
});
