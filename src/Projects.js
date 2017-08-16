// @flow
import React, { Component } from 'react';
import {
  Button,
  Col,
  Glyphicon,
  Grid,
  Image,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  MenuItem,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Panel,
  Row,
  Well
} from 'react-bootstrap';
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
        <div>
          <h2>Projects</h2>
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
        </div>
      );
    } else if (sdisStatus === 'loading') {
      data = <div className="info loading">Loading projects...</div>;
    } else if (sdisStatus === 'error') {
      data = (
        <div className="info error">
          Error while loading projects. Try again later.
        </div>
      );
    }
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default Projects;
