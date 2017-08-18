// @flow
import React, { Component } from 'react';
import { Alert, Col, Grid, Row } from 'react-bootstrap';
import DatasetRow from './DatasetRow';

class Datasets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: null,
      ckanStatus: 'loading'
    };
  }

  _get_datasets = datasets => {
    const main = this;
    main.setState({ ckanStatus: 'loading' });
    var ckanApiUrl = 'https://data.dpaw.wa.gov.au/api/3/action/';
    var url =
      ckanApiUrl + 'package_search?q=groups:habitat-sampling-initiative';

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

  componentWillMount() {
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
      return (
        <div className="content">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <Alert bsStyle="info">Loading data...</Alert>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    } else if (ckanStatus === 'error') {
      return (
        <div className="content">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <Alert bsStyle="info">Error loading data.</Alert>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }
}

export default Datasets;
