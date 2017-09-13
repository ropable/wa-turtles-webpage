import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import moxios from "moxios";
import sinon from "sinon";
import { shallow, mount, render } from "enzyme";
import "jest-enzyme";
import Datasets from "./Datasets";
import AlertRow from "../AlertRow/AlertRow";

const api_url =
  "https://data.dpaw.wa.gov.au/api/3/action/package_search?q=groups:science-information-sheets";
const api_response = {
  help:
    "https://data.dpaw.wa.gov.au/api/3/action/help_show?name=package_search",
  success: true,
  result: {
    count: 1,
    sort: "score desc, metadata_modified desc",
    facets: {},
    results: [
      {
        license_title: "Creative Commons Attribution Share-Alike",
        maintainer: "Florian Mayer",
        relationships_as_object: [],
        citation: "",
        private: false,
        last_updated_on: "2016-12-01",
        num_tags: 1,
        organization: {
          description:
            "Public datasets of the Department of Parks and Wildlife, harvested from the [public data catalog](http://data-demo.dpaw.wa.gov.au/).",
          created: "2015-11-17T03:36:58.701959",
          title: "DPaW",
          name: "dpaw",
          is_organization: true,
          state: "active",
          image_url: "20150106-024754.505375carrot.gif",
          revision_id: "597108da-8568-4451-9677-c933a6de9b06",
          type: "organization",
          id: "44dbf724-8366-4001-a38a-cff23bb45957",
          approval_status: "approved"
        },
        update_frequency: "static",
        id: "92b723b3-d0b3-443f-86ce-0852082cdde3",
        metadata_created: "2017-08-29T07:54:12.032761",
        published_on: "2016-12-01",
        metadata_modified: "2017-08-29T07:55:59.588585",
        author:
          "S Wilson, T Holmes, G Shedrawi, K Bennett, D Collins, T Langlois and D McLean",
        author_email: "Shaun.Wilson@dbca.wa.gov.au",
        theme: "Environment and Conservation",
        state: "active",
        version: null,
        spatial:
          '{"type": "MultiPolygon", "coordinates": [[[[128.84765625000003, -11.523087506868514], [128.67187500000003, -34.88593094075316], [114.43359375000001, -37.020098201368114], [110.91796875000001, -19.973348786110602], [128.84765625000003, -11.523087506868514]]]]}',
        license_id: "cc-by-sa",
        type: "dataset",
        resources: [
          {
            mimetype: null,
            cache_url: null,
            hash: "",
            description: "",
            name: "Assessing benthic assemblages from fish  survey  videos",
            format: "PDF",
            url:
              "https://data.dpaw.wa.gov.au/dataset/92b723b3-d0b3-443f-86ce-0852082cdde3/resource/a2e2a0c2-ba1c-4aed-838d-41a84e8e1216/download/sdis090.pdf",
            datastore_active: false,
            cache_last_updated: null,
            package_id: "92b723b3-d0b3-443f-86ce-0852082cdde3",
            created: "2017-08-29T07:55:59.070027",
            state: "active",
            mimetype_inner: null,
            last_modified: "2017-08-29T07:55:59.042801",
            position: 0,
            revision_id: "86e295f0-fbd5-4150-bcec-f2da53c53a52",
            url_type: "upload",
            id: "a2e2a0c2-ba1c-4aed-838d-41a84e8e1216",
            resource_type: null,
            size: null
          }
        ],
        num_resources: 1,
        tags: [
          {
            vocabulary_id: null,
            state: "active",
            display_name: "science_information_sheet",
            id: "863afa7c-4045-4555-9d41-c1cabb9c0bbc",
            name: "science_information_sheet"
          }
        ],
        data_homepage: "",
        language: "English",
        groups: [
          {
            display_name: "Public datasets",
            description: "Datasets to be harvested into public facing outlets",
            image_display_url:
              "https://www-devup.dpaw.wa.gov.au/images/logos/logo_DBCA_Stacked.svg",
            title: "Public datasets",
            id: "d40b03db-ab51-420d-ad7a-58885ade37bc",
            name: "public-datasets"
          },
          {
            display_name: "Science Information Sheets",
            description: "Handy one-pagers about science projects.",
            image_display_url:
              "https://data.dpaw.wa.gov.au/uploads/group/2017-08-29-074742.525907Screenshot-from-2017-08-29-15-47-29.png",
            title: "Science Information Sheets",
            id: "04373c15-bf1b-4a25-8268-9121bcb08e79",
            name: "science-information-sheets"
          }
        ],
        creator_user_id: "7561256b-5317-4d35-a5d5-f4ff37c24e8e",
        maintainer_email: "Florian.Mayer@dbca.wa.gov.au",
        relationships_as_subject: [],
        data_portal: "",
        doi: "",
        name:
          "information-sheet-assessing-benthic-assemblages-from-fish-survey-videos",
        isopen: true,
        url: null,
        notes: "",
        owner_org: "44dbf724-8366-4001-a38a-cff23bb45957",
        license_url: "http://www.opendefinition.org/licenses/cc-by-sa",
        title: "Assessing benthic assemblages from fish survey videos",
        revision_id: "86e295f0-fbd5-4150-bcec-f2da53c53a52"
      }
    ],
    search_facets: {}
  }
};

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
  const wrapper = shallow(<Datasets />);
  // TODO how to load data using mock axios request?
  // console.log(wrapper.instance().state.datasets);
  wrapper.instance().loadData();

  moxios.wait(function() {
    let request = moxios.requests.mostRecent();
    request
      .respondWith({
        status: 200,
        data: api_response
      })
      .then(function() {
        expect(wrapper.instance().state.datasets).toEqual(
          api_response.result.results
        );
        done();
      });
  });
});

it("renders shallow without crashing after server error", () => {
  const wrapper = shallow(<Datasets />);

  wrapper.instance().loadData();

  moxios.wait(function() {
    let request = moxios.requests.mostRecent();
    request
      .respondWith({
        status: 500,
        error: "halt hammertime"
      })
      .then(function() {
        expect(wrapper.instance().state.datasets).toEqual([]);
        expect(wrapper.instance().state.status).toBe("error");
        done();
      });
  });
});

it("renders static without crashing", () => {
  const wrapper = render(<Datasets />);
});

it("handles simulated network error", () => {
  const wrapper = shallow(<Datasets />);
});

it("renders fully without crashing", () => {
  const wrapper = mount(<Datasets />);

  wrapper.instance().loadData();

  moxios.wait(function() {
    let request = moxios.requests.mostRecent();
    request
      .respondWith({
        status: 200,
        response: { data: { result: result } }
      })
      .then(function() {
        expect(wrapper.instance().state.datasets).toEqual([]); // should be result, not []
        done();
      });
  });
});

it("render loading message initially", () => {
  const wrapper = shallow(<Datasets />);
  const msg = (
    <AlertRow
      showSpinner={true}
      bsStyle="info"
      message="Loading data, hang tight..."
    />
  );
  expect(wrapper).toContainReact(msg);
});

/* State */
it("renders content in loaded state", () => {
  const wrapper = shallow(<Datasets />);
  wrapper.setState({ status: "loaded" });
  expect(wrapper.find(".content").length).toEqual(1);
});

it("renders loading message in loading state", () => {
  const wrapper = shallow(<Datasets />);
  wrapper.setState({ status: "loading" });
  const msg = <AlertRow showSpinner={true} />;
  expect(wrapper).toContainReact(msg);
});

it("renders error message on loading error", () => {
  const wrapper = shallow(<Datasets />);
  wrapper.setState({ status: "error" });
  const msg = (
    <AlertRow
      bsStyle="danger"
      message="Error loading data from https://data.dpaw.wa.gov.au"
    />
  );
  expect(wrapper).toContainReact(msg);
});

/* Functions */
it("builds default API url", () => {
  const wrapper = shallow(<Datasets />);
  const url = wrapper.instance().buildUrl();
  const expectedUrl =
    "https://data.dpaw.wa.gov.au/api/3/action/package_search?q=tags:asset_turtles";
  expect(url).toEqual(expectedUrl);
});

it("handles data loaded", () => {
  const wrapper = shallow(<Datasets />);
  wrapper.instance().setStateLoaded(api_response.result.results);
  expect(wrapper.instance().state.status).toEqual("loaded");
});

it("handles loading error", () => {
  const wrapper = shallow(<Datasets />);
  wrapper.instance().setStateError("error");
  expect(wrapper.instance().state.status).toEqual("error");
});
