import React from "react";
import ReactDOM from "react-dom";
import { shallow, render, mount } from "enzyme";
import "jest-enzyme";
import axios from "axios";
import moxios from "moxios";
import sinon from "sinon";
import Projects from "./Projects";
import ProjectRow from "./ProjectRow";
import AlertRow from "../AlertRow/AlertRow";

const projects = [
  {
    id: 176,
    absolute_url: "/projects/scienceproject/176/",
    project_type_year_number_plain: "SP 2012-014",
    title: "<p>WAMMP Sub-project 2: Historical time-series development</p>",
    title_plain: "WAMMP Sub-project 2: Historical time-series development",
    status: "completed",
    status_display: "Completed and closed",
    tagline: "",
    tagline_plain: "",
    comments: "<p>KF advises folded into SPP 2012-008 - PG</p>",
    image: "",
    team_list_plain: "K Friedman, K Friedman, K Bancroft, C Simpson",
    program: "Marine Science",
    area_list_nrm_region: "",
    area_list_ibra_imcra_region: "",
    area_list_dpaw_region: "All Regions",
    area_list_dpaw_district: ""
  },
  {
    id: 175,
    absolute_url: "/projects/scienceproject/175/",
    project_type_year_number_plain: "SP 2012-013",
    title:
      "<p>WAMMP Sub-project 1: Asset knowledge review and standard operating protocol documentation</p>",
    title_plain:
      "WAMMP Sub-project 1: Asset knowledge review and standard operating protocol documentation",
    status: "completed",
    status_display: "Completed and closed",
    tagline: "",
    tagline_plain: "",
    comments: "<p>KF advises folded into SPP 2012-008 - PG</p>",
    image: "",
    team_list_plain:
      "K Friedman, C Simpson, A Kendrick, S Wilson, K Bancroft, K Onton, T Holmes, M Rule, K Waples",
    program: "Marine Science",
    area_list_nrm_region: "",
    area_list_ibra_imcra_region: "",
    area_list_dpaw_region: "All Regions",
    area_list_dpaw_district: ""
  },
  {
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
  }
];

beforeEach(function() {
  // import and pass your custom axios instance to this method
  moxios.install();
});
afterEach(function() {
  // import and pass your custom axios instance to this method
  moxios.uninstall();
});

/* Basic component rendering */
it("renders shallow without crashing", () => {
  const wrapper = shallow(<Projects />);

  wrapper.instance().loadData();

  moxios.wait(function() {
    let request = moxios.requests.mostRecent();
    request
      .respondWith({
        status: 200,
        data: projects
      })
      .then(function() {
        expect(wrapper.instance().state.projects).toEqual(projects);
        done();
      });
  });
});

it("renders shallow without crashing after server error", () => {
  const wrapper = shallow(<Projects />);

  wrapper.instance().loadData();

  moxios.wait(function() {
    let request = moxios.requests.mostRecent();
    request
      .respondWith({
        status: 500,
        error: "halt hammerzeit"
      })
      .then(function() {
        expect(wrapper.instance().state.projects).toEqual([]);
        expect(wrapper.instance().state.status).toBe("error");
        done();
      });
  });
});

it("renders shallow without crashing", () => {
  const wrapper = shallow(<Projects />);
});

it("renders static without crashing", () => {
  const wrapper = render(<Projects />);
});

it("renders fully without crashing", () => {
  const wrapper = mount(<Projects />);
  // console.log(wrapper);
});

it("render loading message initially", () => {
  const wrapper = shallow(<Projects />);
  const msg = (
    <AlertRow
      showSpinner={true}
      bsStyle="info"
      message="Loading data, hang tight..."
    />
  );

  expect(wrapper).toContainReact(msg);
});

it("renders error message on loading error", () => {
  const wrapper = shallow(<Projects />);
  wrapper.setState({ status: "error" });
  const msg = (
    <AlertRow
      bsStyle="danger"
      message="Error loading data from https://sdis.dpaw.wa.gov.au"
    />
  );
  expect(wrapper).toContainReact(msg);
});

/* State */
it("renders content in loaded state", () => {
  const wrapper = shallow(<Projects />);
  wrapper.setState({ status: "loaded" });
  expect(wrapper.find(".content").length).toEqual(1);
});

/* Functions */
it("handles search input", () => {
  const wrapper = shallow(<Projects />);
  wrapper.instance().handleFilterTextInput("term");
  expect(wrapper.state().filterText).toEqual("term");
});

it("clears search input", () => {
  const wrapper = shallow(<Projects />);
  wrapper.instance().clearFilterTextInput();
  expect(wrapper.state().filterText).toEqual("");
});

it("handles click on tag", () => {
  const wrapper = shallow(<Projects />);
  wrapper.instance().handleClickTag({ value: "adaptive", count: 25 });
  expect(wrapper.state().filterText).toEqual("adaptive");
});

it("calculates wordFreq", () => {
  const wrapper = shallow(<Projects />);

  expect(wrapper.instance().wordFreq(["the", "the", "stuff"])).toEqual({
    stuff: 1,
    the: 2
  });
});

it("computes tagCloud", () => {
  const wrapper = shallow(<Projects />);

  expect(
    wrapper.instance().makeTags({
      stuff: 1,
      the: 2
    })
  ).toEqual([{ count: 1, value: "stuff" }, { count: 2, value: "the" }]);
});

it("tokenizes SDIS output", () => {
  const wrapper = shallow(<Projects />);

  expect(wrapper.instance().sdisTokenizer(projects)).toEqual([
    "wammp",
    "sub-project",
    "",
    "historical",
    "time-series",
    "developmentwammp",
    "sub-project",
    "",
    "asset",
    "knowledge",
    "review",
    "standard",
    "operating",
    "protocol",
    "documentationstrategic",
    "plan",
    "development",
    "implementation",
    "western",
    "australian",
    "marine",
    "monitoring",
    "program",
    "",
    "wammp",
    ""
  ]);
});

it("prepares filtered project rows", () => {
  const wrapper = shallow(<Projects />);
  // const prows = wrapper
  //   .instance()
  //   .makeFilteredProjectRows(projects, "", "https://sdis.dpaw.wa.gov.au");
  // expect(prows.length).toBe(3);
});

it("prepares filtered project rows", () => {
  const wrapper = shallow(<Projects />);
  wrapper.instance().setStateLoaded(projects);
  expect(wrapper.instance().state.status).toEqual("loaded");
});

it("handles loading error", () => {
  const wrapper = shallow(<Projects />);
  wrapper.instance().setStateError("error");
  expect(wrapper.instance().state.status).toEqual("error");
});
