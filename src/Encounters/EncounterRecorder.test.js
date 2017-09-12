import React from "react";
import ReactDOM from "react-dom";
import { Collapse } from "react-bootstrap";
import { shallow, mount, render } from "enzyme";
import "jest-enzyme";
import EncounterRecorder from "./EncounterRecorder";

/* Basic component rendering */
it("renders shallow without crashing", () => {
  shallow(<EncounterRecorder />);
});

it("renders static without crashing", () => {
  render(<EncounterRecorder />);
});

it("renders fully without crashing", () => {
  mount(<EncounterRecorder />);
});

/* Functions */
it("increments counter", () => {
  const wrapper = shallow(<EncounterRecorder />);
  expect(wrapper.state().count).toEqual(0);
  wrapper.instance().addEncounter();
  expect(wrapper.state().count).toEqual(1);
});

it("decrements counter", () => {
  const wrapper = shallow(<EncounterRecorder />);
  expect(wrapper.state().count).toEqual(0);
  wrapper.instance().addEncounter();
  expect(wrapper.state().count).toEqual(1);
  wrapper.instance().addEncounter();
  expect(wrapper.state().count).toEqual(2);
  wrapper.instance().delEncounter();
  expect(wrapper.state().count).toEqual(1);
});

it("resets counter", () => {
  const wrapper = shallow(<EncounterRecorder />);
  expect(wrapper.state().count).toEqual(0);
  wrapper.instance().addEncounter();
  expect(wrapper.state().count).toEqual(1);
  wrapper.instance().addEncounter();
  expect(wrapper.state().count).toEqual(2);
  wrapper.instance().resetEncounters();
  expect(wrapper.state().count).toEqual(0);
});
