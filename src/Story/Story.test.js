import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";

import Story from "./Story";

describe("Story test suite", function() {
  it("renders shallow without crashing", () => {
    shallow(<Story />);
  });

  it("renders static without crashing", () => {
    render(<Story />);
  });

  it("renders fully without crashing", () => {
    mount(<Story />);
  });

  it("renders first h1 to read 'Program'", () => {
    expect(
      shallow(<Story />)
        .find("h1")
        .first()
        .text()
    ).toEqual("The Flatback Story");
  });
});
