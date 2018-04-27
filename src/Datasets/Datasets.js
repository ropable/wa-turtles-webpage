// @flow
import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "reactstrap";
import axios from "axios";
import wrapper from "axios-cache-plugin";

import DatasetRow from "./DatasetRow";
import AlertRow from "../AlertRow/AlertRow";

let http = wrapper(axios, {
  maxCacheSize: 15
});
http.__addFilter(/datasets/);

export default class Datasets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: [],
      status: "loading"
    };
  }

  setStateLoaded = datasets => {
    this.setState({
      datasets: datasets,
      status: "loaded"
    });
  };

  setStateError = error => {
    this.setState({ status: "error" });
  };

  buildUrl = () =>
    `${this.props.webUrl}/api/3/action/package_search?q=${this.props
      .apiParams}`;

  loadData = () => {
    // axios
    //   .get(this.buildUrl())
    //   .then(res => this.setStateLoaded(res.data.result.results))
    //   .catch(error => this.setStateError(error));

    http
      .get(this.buildUrl())
      .then(res => this.setStateLoaded(res.data.result.results))
      .catch(error => this.setStateError(error));
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { datasets, status } = this.state;

    if (status === "loaded") {
      return (
        <Container>
          <Row>
            {datasets.map(function(ds) {
              return <DatasetRow dataset={ds} key={ds.id} />;
            })}
          </Row>
        </Container>
      );
    } else if (status === "loading") {
      return <AlertRow showSpinner={true} />;
    } else if (status === "error") {
      const msg = `Error loading data from ${this.props.webUrl}`;
      return <AlertRow color="danger" message={msg} />;
    }
  }
}

Datasets.propTypes = {
  webUrl: PropTypes.string,
  apiParams: PropTypes.string
};

Datasets.defaultProps = {
  webUrl: process.env.REACT_APP_CKAN_URL || "https://data.dpaw.wa.gov.au",
  apiParams: "tags:asset_turtles"
};
