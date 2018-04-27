import React from "react";
import ReactDOM from "react-dom";
import { Collapse } from "react-bootstrap";
import { shallow, mount, render } from "enzyme";
import "jest-enzyme";
import Footer from "./Footer";

describe("Footer test suite", function() {
  it("renders shallow without crashing", () => {
    shallow(<Footer />);
  });

  it("renders static without crashing", () => {
    render(<Footer />);
  });

  it("renders fully without crashing", () => {
    mount(<Footer />);
  });
});
