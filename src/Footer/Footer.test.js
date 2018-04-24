import React from "react";
import ReactDOM from "react-dom";
import { Collapse } from "react-bootstrap";
import { shallow, mount, render } from "enzyme";
import "jest-enzyme";
import Footer from "./Footer";

/* Basic component rendering */
it("renders shallow without crashing", () => {
  shallow(<Footer />);
});

it("renders static without crashing", () => {
  render(<Footer />);
});

it("renders fully without crashing", () => {
  mount(<Footer />);
});

// it("has a Sitemap toggle button", () => {
//   const wrapper = shallow(<Footer />);
//   expect(wrapper.find("#btnToggleSitemap").text()).toEqual("<Button />");
// });

it("has a Sitemap", () => {
  const wrapper = shallow(<Footer />);

  // Sitemap is always there, even if collapsed
  const msg = <h3>The Science</h3>; // The first Sitemap heading
  expect(wrapper).toContainReact(msg);
  expect(wrapper.find("h3").length).toBe(2); // 2 headings in sitemap
});

/* Props */

/* State */
it("shows Sitemap only when showSitemap is true", () => {
  const wrapper = mount(<Footer />);
  // console.log(wrapper.find("#Sitemap").debug());

  // Sitemap is hidden by default
  expect(wrapper.state().showSitemap).toBe(false);
  expect(wrapper.find("#Sitemap").hasClass("in")).toEqual(false);

  // Toggle Sitemap
  wrapper.setState({ showSitemap: true });
  expect(wrapper.state().showSitemap).toBe(true);

  // Sitemap should be visible as <Collapse class="collapse in">
  expect(wrapper.find("#Sitemap").hasClass("in")).toEqual(false);
});

/* Events */
// it("Sitemap button toggles sitemap visibility", () => {
//   const wrapper = shallow(<Footer />);
//   wrapper.find("#btnToggleSitemap").simulate("click"); // toggle Sitemap on
//   expect(wrapper.state().showSitemap).toBe(true);

//   wrapper.find("#btnToggleSitemap").simulate("click"); // toggle Sitemap off
//   expect(wrapper.state().showSitemap).toBe(false);
// });

/* Functions */
it("toggles sitemap visibility", () => {
  const wrapper = shallow(<Footer />);
  wrapper.instance().toggleSitemap();
  expect(wrapper.state().showSitemap).toBe(true);
});
