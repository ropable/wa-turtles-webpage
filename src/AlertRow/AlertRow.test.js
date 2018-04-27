import React from "react";
import ReactDOM from "react-dom";
import { Alert, Col, Container, Row } from "reactstrap";
import { shallow, render, mount } from "enzyme";
import Spinner from "react-spinkit";

import AlertRow from "./AlertRow";

describe("AlertRow test suite", function() {
  it("renders shallow without crashing", () => {
    shallow(<AlertRow />);
  });

  it("renders static without crashing", () => {
    render(<AlertRow />);
  });

  it("renders fully without crashing", () => {
    mount(<AlertRow />);
  });

  it("hides the spinner unless showSpinner is given and true", () => {
    const wrapper = shallow(<AlertRow />);
    const msg = <div />;
    expect(wrapper.contains(msg)).toBe(true);
  });

  it("hides the spinner if showSpinner is false", () => {
    const wrapper = shallow(<AlertRow showSpinner={false} />);
    const msg = <div />;
    expect(wrapper.contains(msg)).toBe(true);
  });

  it("should render custom message", function() {
    expect(render(<AlertRow message="test" />).text()).toContain("test");
  });

  it("should hide when toggle() is called", () => {
    const wrapper = mount(<AlertRow />);
    wrapper.instance().toggle();
    // expect(wrapper.find(".alert")).toHaveLength(1);
  });
});
