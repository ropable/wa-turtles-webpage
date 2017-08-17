// @flow
import React, { Component } from 'react';
import { Alert, Button, Col, Grid, Image, Row, Well } from 'react-bootstrap';
// import "./Datasets.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      sdisStatus: 'loading'
    };
  }

  _get_projects = projects => {
    const main = this;
    main.setState({ sdisStatus: 'loading' });
    var url = 'https://sdis.dpaw.wa.gov.au/api/projects/?format=json';

    fetch(url)
      .then(function(response) {
        return response;
      })
      .then(function(response) {
        setTimeout(function() {
          main.setState({
            sdisStatus: 'loaded'
          });
        }, 300);
        return response.json();
      })
      .then(function(data) {
        main.setState({ projects: data });
      })
      .catch(function() {
        main.setState({ sdisStatus: 'error' });
      });
  };

  componentDidMount() {
    this._get_projects();
  }

  render() {
    const { projects, sdisStatus } = this.state;
    let data = null;

    if (sdisStatus === 'loaded') {
      var leftPad = (s, c, n) => c.repeat(n - s.length) + s;
      data = (
        <Grid>
          {projects.map(function(pro) {
            return (
              <Well key={pro.id.toString()}>
                <Row>
                  <Col xsHidden md={4}>
                    <Image
                      src={'https://sdis.dpaw.wa.gov.au/media/' + pro.image}
                      responsive
                      rounded
                    />
                  </Col>
                  <Col xs={12} md={8}>
                    <h3>
                      {pro.year}-{leftPad(pro.number, '0', 3)}{' '}
                      {pro.title.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, '')}
                    </h3>
                    {pro.tagline.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, '')}
                  </Col>
                </Row>
              </Well>
            );
          })}
        </Grid>
      );
    } else if (sdisStatus === 'loading') {
      data = (
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Alert bsStyle="info">Loading projects...</Alert>
            </Col>
          </Row>
        </Grid>
      );
    } else if (sdisStatus === 'error') {
      data = (
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Alert bsStyle="danger">
                <strong>Error loading data.</strong>
                <br />
                Please install the following browser extension to view SDIS
                projects:
                <Button
                  bsStyle="link"
                  href="https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/"
                >
                  Firefox
                </Button>
                <Button
                  bsStyle="link"
                  href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en"
                >
                  Chrome
                </Button>
              </Alert>
            </Col>
          </Row>
        </Grid>
      );
    }
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Alert bsStyle="info">
                This is an example list of projects maintained in SDIS.
              </Alert>
            </Col>
          </Row>
        </Grid>
        {data}
      </div>
    );
  }
}

export default Projects;
