// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import axios from 'axios';

import DatasetRow from './DatasetRow';
import AlertRow from '../AlertRow/AlertRow';

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
    webUrl: process.env.REACT_APP_CKAN_URL || 'https://data.dpaw.wa.gov.au',
    apiParams:
      '/api/3/action/package_search?q=groups:habitat-sampling-initiative'
  };

  state = {
    datasets: [],
    status: 'loading'
  };

  componentDidMount() {
    const main = this;

    axios
      .get(main.props.webUrl + main.props.apiParams)
      .then(res => {
        main.setState({ datasets: res.data.result.results, status: 'loaded' });
      })
      .catch(error => {
        main.setState({ status: 'error' });
      });

    // console.log(`webUrl for datasets is ${this.props.webUrl}`);
  }

  render() {
    const { datasets, status } = this.state;

    if (status === 'loaded') {
      return (
        <div className="content">
          <Grid>
            {datasets.map(function(ds) {
              return <DatasetRow dataset={ds} key={ds.id} />;
            })}
          </Grid>
        </div>
      );
    } else if (status === 'loading') {
      return <AlertRow />;
    } else if (status === 'error') {
      const msg = `Error loading data from ${this.props.webUrl}`;
      return <AlertRow bsStyle="danger" message={msg} />;
    }
  }
}
