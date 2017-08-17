// @flow
import React, { Component } from 'react';
import { Alert, Button, Col, Grid, Row } from 'react-bootstrap';
import ProjectRow from './ProjectRow';
import SearchBar from './SearchBar';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      sdisStatus: 'loading',
      filterText: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }
  handleFilterTextInput(filterText) {
    this.setState({ filterText: filterText });
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

  componentWillMount() {
    this._get_projects();
  }

  render() {
    const { projects, sdisStatus, filterText } = this.state;
    let data = [];
    let message = '';
    let bsStyle = 'info';

    if (sdisStatus === 'loaded') {
      let rows = [];
      projects
        .filter(
          project =>
            filterText
              ? project.title.toLowerCase().indexOf(filterText.toLowerCase()) >
                  -1 ||
                project.tagline
                  .toLowerCase()
                  .indexOf(filterText.toLowerCase()) > -1
              : project
        )
        .forEach(project => {
          rows.push(<ProjectRow project={project} key={project.id} />);
        });
      data =
        (
          <Row>
            <Col xs={12} md={12}>
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextInput={this.handleFilterTextInput}
              />
            </Col>
          </Row>
        ) + rows;
    } else if (sdisStatus === 'loading') {
      message = <span>"Loading projects..."</span>;
    } else if (sdisStatus === 'error') {
      bsStyle = 'danger';
      message = (
        <span>
          Please install the following browser extension to view SDIS projects:
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
        </span>
      );
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

export default Projects;
