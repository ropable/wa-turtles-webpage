import React from "react";
import ReactDOM from "react-dom";
import { Glyphicon } from "react-bootstrap";
import Leaflet from "leaflet";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import TimeAgo from "react-timeago";
import { shallow, mount, render } from "enzyme";
import "jest-enzyme";
import ProjectRow from "./ProjectRow";

const pro = {
  id: 174,
  absolute_url: "/projects/scienceproject/174/",
  project_type_year_number_plain: "SP 2012-012",
  title:
    "<p>Strategic plan for the development and implementation of the Western Australian Marine Monitoring Program (WAMMP)</p>",
  title_plain:
    "Strategic plan for the development and implementation of the Western Australian Marine Monitoring Program (WAMMP)",
  status: "completed",
  status_display: "Completed and closed",
  tagline: "",
  tagline_plain: "",
  comments: "",
  image: "",
  team_list_plain: "K Friedman, K Friedman, C Simpson",
  program: "Marine Science",
  area_list_nrm_region: "",
  area_list_ibra_imcra_region: "",
  area_list_dpaw_region: "",
  area_list_dpaw_district: ""
};

/* Basic component rendering */
it("renders shallow without crashing", () => {
  shallow(<ProjectRow project="" key="" />);
});

it("renders static without crashing", () => {
  render(<ProjectRow project="" key="" />);
});

it("renders fully without crashing", () => {
  mount(<ProjectRow project="" key="" />);
});

it("renders fully with data without crashing", () => {
  mount(<ProjectRow project={pro} key="1" />);
});

it("renders missing message if no dataset is given", () => {
  const wrapper = shallow(<ProjectRow project="" key="test" />);
  const msg = <h4>No project</h4>;
  expect(wrapper).toContainReact(msg); // jest-enzyme
});

it("renders project title", () => {
  const wrapper = shallow(<ProjectRow project={pro} key="test" />);
  const msg = (
    <h4>
      Strategic plan for the development and implementation of the Western
      Australian Marine Monitoring Program (WAMMP)
    </h4>
  );
  expect(wrapper).toContainReact(msg);
});

/* Functions */
it("toggles sitemap visibility", () => {
  const wrapper = shallow(<ProjectRow />);
  expect(wrapper.state().showComment).toBe(false);
  wrapper.instance().toggleComment();
  expect(wrapper.state().showComment).toBe(true);
});

it("renders htmlString", () => {
  const wrapper = shallow(<ProjectRow />);
  expect(wrapper.instance().wrapHTML("<span>some stuff</span>")).toEqual({
    __html: "<span>some stuff</span>"
  });
});

it("renders none htmlString to placeholder", () => {
  const wrapper = shallow(<ProjectRow />);
  expect(wrapper.instance().wrapHTML()).toEqual({ __html: "Not provided" });
});
