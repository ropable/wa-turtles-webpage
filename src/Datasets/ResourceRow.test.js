import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import "jest-enzyme";
import { Button, Glyphicon, ListGroupItem } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import TimeAgo from "react-timeago";
import ResourceRow from "./ResourceRow";

const res = {
  mimetype: "text/html",
  cache_url: null,
  hash: "f6cff6f8afd83bc4ba5ef7948e6e0fde742becb6",
  description: "Point of truth for the dataset",
  name: "Return to Seagrasses of Western Australia",
  format: "HTML",
  url:
    "https://data.dpaw.wa.gov.au/dataset/seagrass-in-situ-surveys-in-western-australia",
  datastore_active: false,
  cache_last_updated: null,
  package_id: "6c5d58f8-3a2d-4623-9d57-bdfdbf938490",
  created: "2014-07-15T05:31:44.939405",
  state: "active",
  mimetype_inner: null,
  last_modified: "2014-12-04T19:07:30.864381",
  position: 0,
  revision_id: "394caa48-9c77-4234-8134-8c9e853e0cf9",
  url_type: null,
  id: "a25672bd-15d8-4644-933f-3eaa9fe6b320",
  resource_type: null,
  size: "57308"
};

it("renders empty without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResourceRow resource="" key="" />, div);
});

it("renders resource without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResourceRow resource={res} key="" />, div);
});

it("renders missing message if no resource is given", () => {
  const wrapper = shallow(<ResourceRow key="test" />);
  const msg = <h5>No resource</h5>;
  expect(wrapper).toContainReact(msg);
});

it("renders last_modified", () => {
  const wrapper = shallow(<ResourceRow resource={res} key="test" />);
  const msg = <TimeAgo date="2014-12-04T19:07:30.864381" />;
  expect(wrapper).toContainReact(msg);
});

it("renders download button", () => {
  const wrapper = shallow(<ResourceRow resource={res} key="test" />);
  const msg = <FontAwesome name="file" ariaLabel="Open resource file" />;
  expect(wrapper).toContainReact(msg);
});
