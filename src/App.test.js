import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { shallow, mount, render } from "enzyme";
import "jest-enzyme";

import App from "./App";
import Dashboard from "./Dashboard/Dashboard";
import Datasets from "./Datasets/Datasets";
import Navigation from "./Navigation/Navigation";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders shallow without crashing", () => {
  shallow(<App />);
});

it("renders static without crashing", () => {
  render(<App />);
});

it("renders fully without crashing", () => {
  mount(<App />);
});

it("renders Datasets with parameters", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(Route).length).toBe(11);
});

it("renders Navigation component", () => {
  const wrapper = shallow(<App />);
  const msg = <Navigation />;
  expect(wrapper).toContainReact(msg);
});
