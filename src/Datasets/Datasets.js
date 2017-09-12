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

  getData = (url: PropTypes.string) => {
    axios
      .get(url)
      .then(res => {
        this.setState({ datasets: res.data.result.results, status: "loaded" });
      })
      .catch(error => {
        this.setState({ status: "error" });
      });
  };

  componentDidMount() {
    this.getData(
      this.props.webUrl +
        "/api/3/action/package_search?q=" +
        this.props.apiParams
    );
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
