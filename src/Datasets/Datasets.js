// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import axios from 'axios';
import DatasetRow from './DatasetRow';
import AlertRow from '../AlertRow/AlertRow';

type Props = {
  apiUrl: string,
  apiParams: string
};

type State = {
  datasets: PropTypes.array,
  status: string
};

export default class Datasets extends React.Component<Props, State> {
  static defaultProps = {
    apiUrl: 'https://data.dpaw.wa.gov.au/api/3/action/',
    apiParams: 'package_search?q=groups:habitat-sampling-initiative'
  };

  state = {
    datasets: [],
    status: 'loading'
  };

  componentDidMount() {
    const main = this;

    axios
      .get(main.props.apiUrl + main.props.apiParams)
      .then(res => {
        main.setState({ datasets: res.data.result.results, status: 'loaded' });
      })
      .catch(error => {
        main.setState({ status: 'error' });
      });
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
      return <AlertRow bsStyle="danger" message="Error loading data." />;
    }
  }
}
