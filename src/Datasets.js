// @flow
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Alert,
  Button,
  Col,
  Glyphicon,
  Grid,
  ListGroup,
  ListGroupItem,
  Panel,
  Row,
  Well
} from 'react-bootstrap';

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
    var url = ckanApiUrl + 'package_search?q=tags:public';

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
    let data = null;
    let message = '';
    let bsStyle = 'info';

    if (ckanStatus === 'loaded') {
      data = (
        <div>
          {datasets.map(function(ds) {
            return (
              <Well key={ds.id}>
                <Row>
                  <Col xs={12} md={12}>
                    <h3>
                      {ds.title}
                    </h3>
                    <ReactMarkdown source={ds.notes} />

                    <Panel collapsible header="Show resources">
                      <ListGroup fill>
                        {ds.resources.map(function(r) {
                          return (
                            <ListGroupItem key={r.id}>
                              <Button bsStyle="link" href={r.url}>
                                <Glyphicon glyph="download" />&nbsp;
                                {r.name} ({r.format})
                              </Button>
                              <ReactMarkdown
                                source={r.description}
                                containerTagName="span"
                              />
                            </ListGroupItem>
                          );
                        })}
                      </ListGroup>
                    </Panel>
                  </Col>
                </Row>
              </Well>
            );
          })}
        </div>
      );
    } else if (ckanStatus === 'loading') {
      message = <span>"Loading projects..."</span>;
    } else if (ckanStatus === 'error') {
      bsStyle = 'danger';
      message = <span>Error loading data, try again later.</span>;
    }
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Alert bsStyle={bsStyle}>
                {message}
              </Alert>
            </Col>
          </Row>
          {data}
        </Grid>
      </div>
    );
  }
}

export default Datasets;
