import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";

import About from "./About";

describe("About test suite", function() {
  // const program_heading = "<h1>Program</h1>";

  it("renders shallow without crashing", () => {
    shallow(<About />);
  });

  it("renders static without crashing", () => {
    render(<About />);
  });

  it("renders fully without crashing", () => {
    mount(<About />);
  });

  it("renders first h1 to read 'Program'", () => {
    // const wrapper = shallow(<About />);
    expect(
      shallow(<About />)
        .find("h1")
        .first()
        .text()
    ).toEqual("Program");
  });
});
