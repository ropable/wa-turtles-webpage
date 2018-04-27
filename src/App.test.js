import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import App from "./App";
import Dashboard from "./Dashboard/Dashboard";
import Datasets from "./Datasets/Datasets";
import Navigation from "./Navigation/Navigation";

describe("App test suite", function() {
  it("renders shallow without crashing", () => {
    shallow(<App />);
  });

  it("renders static without crashing", () => {
    render(<App />);
  });

  it("renders fully without crashing", () => {
    mount(<App />);
  });

  it("renders Navigation component", () => {
    const wrapper = shallow(<App />);
    const msg = <Navigation />;
    expect(wrapper.contains(msg)).toBe(true);
  });

  // it("toggles Navigation", () => {
  //   const wrapper = shallow(<Navigation />);
  //   // toggle();
  //   // test result
  // });

  /* Functions */
  it("renders turtle datasets without crashing", () => {
    const wrapper = shallow(<App />);
    const ds = wrapper.instance().embedTurtleData();
    // console.log(ds);
  });

  it("renders infosheets datasets without crashing", () => {
    const wrapper = shallow(<App />);
    const ds = wrapper.instance().embedInfosheets();
    // console.log(ds);
  });
});
