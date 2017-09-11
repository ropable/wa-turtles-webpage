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
