// @flow
import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import ProjectRow from './ProjectRow';
import SearchBar from './SearchBar';
import AlertRow from './AlertRow';

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
      return (
        <div className="content">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <SearchBar
                  filterText={this.state.filterText}
                  onFilterTextInput={this.handleFilterTextInput}
                />
              </Col>
            </Row>
            {rows}
          </Grid>
        </div>
      );
    } else if (sdisStatus === 'loading') {
      return (
        <div className="content">
          <Grid>
            <AlertRow bsStyle="info" message="Loading projects..." />
          </Grid>
        </div>
      );
    } else if (sdisStatus === 'error') {
      return (
        <div className="content">
          <Grid>
            <AlertRow
              bsStyle="danger"
              message="Error loading data, try again later."
            />
          </Grid>
        </div>
      );
    }
  }
}

export default Projects;
