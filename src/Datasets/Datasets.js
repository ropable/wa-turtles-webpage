// @flow
import React from "react";
import PropTypes from "prop-types";
import { Grid } from "react-bootstrap";
import axios from "axios";

import DatasetRow from "./DatasetRow";
import AlertRow from "../AlertRow/AlertRow";

type Props = {
  webUrl: string,
  apiParams: string
};

type State = {
  datasets: PropTypes.array,
  status: string
};

export default class Datasets extends React.Component<Props, State> {
  static defaultProps = {
    webUrl: process.env.REACT_APP_CKAN_URL || "https://data.dpaw.wa.gov.au",
    apiParams: "tags:asset_turtles"
  };

  state = {
    datasets: [],
    status: "loading"
  };

  setStateLoaded = datasets => {
    this.setState({
      datasets: datasets,
      status: "loaded"
    });
  };

  setStateError = error => {
    this.setState({ status: "error" });
    console.log(error);
  };

  buildUrl = () =>
    `${this.props.webUrl}/api/3/action/package_search?q=${this.props
      .apiParams}`;

  loadData = () => {
    axios
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
        <div className="content">
          <Grid>
            {datasets.map(function(ds) {
              return <DatasetRow dataset={ds} key={ds.id} />;
            })}
          </Grid>
        </div>
      );
    } else if (status === "loading") {
      return <AlertRow showSpinner={true} />;
    } else if (status === "error") {
      const msg = `Error loading data from ${this.props.webUrl}`;
      return <AlertRow bsStyle="danger" message={msg} />;
    }
  }
}
