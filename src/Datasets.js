// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import DatasetRow from './DatasetRow';
import AlertRow from './AlertRow';

type Props = {
  ckanApiUrl: string
};

type State = {
  datasets: PropTypes.array,
  ckanStatus: string
};

class Datasets extends React.Component<Props, State> {
  static defaultProps = {
    ckanApiUrl: 'https://data.dpaw.wa.gov.au/api/3/action/'
  };

  state = {
    datasets: [],
    ckanStatus: 'loading'
  };

  _get_datasets = (datasets: PropTypes.array) => {
    const main = this;
    main.setState({ ckanStatus: 'loading' });
    var url =
      main.props.ckanApiUrl +
      'package_search?q=groups:habitat-sampling-initiative';

    fetch(url)
      .then(function(response) {
        return response;
      })
      .then(function(response) {
        setTimeout(function() {
          main.setState({
            ckanStatus: 'loaded'
          });
        }, 300);
        return response.json();
      })
      .then(function(data) {
        main.setState({ datasets: data.result.results });
      })
      .catch(function() {
        main.setState({ ckanStatus: 'error' });
      });
  };

  componentDidMount() {
    this._get_datasets();
  }

  render() {
    const { datasets, ckanStatus } = this.state;

    if (ckanStatus === 'loaded') {
      return (
        <div className="content">
          <Grid>
            {datasets.map(function(ds) {
              return <DatasetRow dataset={ds} key={ds.id} />;
            })}
          </Grid>
        </div>
      );
    } else if (ckanStatus === 'loading') {
      return <AlertRow />;
    } else if (ckanStatus === 'error') {
      return <AlertRow bsStyle="danger" message="Error loading data." />;
    }
  }
}

export default Datasets;
