// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Panel, Row } from 'react-bootstrap';
import { TagCloud } from 'react-tagcloud';
import ProjectRow from './ProjectRow';
import SearchBar from './SearchBar';
import AlertRow from '../AlertRow/AlertRow';

type Props = {
  sdisUrl: string
};

type State = {
  projects: PropTypes.array,
  apiStatus: string,
  filterText: string,
  tags: PropTypes.array
};

export default class Projects extends React.Component<Props, State> {
  static defaultProps = {
    sdisUrl: 'https://sdis.dpaw.wa.gov.au'
  };

  state = {
    projects: [],
    apiStatus: 'loading',
    filterText: '',
    tags: [
      { value: 'jQuery', count: 25 },
      { value: 'MongoDB', count: 18 },
      { value: 'JavaScript', count: 38 },
      { value: 'React', count: 30 },
      { value: 'Nodejs', count: 28 },
      { value: 'Express.js', count: 25 },
      { value: 'HTML5', count: 33 },
      { value: 'CSS3', count: 20 },
      { value: 'Webpack', count: 22 },
      { value: 'Babel.js', count: 7 },
      { value: 'ECMAScript', count: 25 },
      { value: 'Jest', count: 15 },
      { value: 'Mocha', count: 17 },
      { value: 'React Native', count: 27 },
      { value: 'Angular.js', count: 30 },
      { value: 'TypeScript', count: 15 },
      { value: 'Flow', count: 30 },
      { value: 'NPM', count: 11 }
    ]
  };

  handleFilterTextInput = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  _get_projects = (projects: PropTypes.array) => {
    const main = this;
    main.setState({ apiStatus: 'loading' });

    var url = this.props.sdisUrl + '/api/projects/?format=json';

    fetch(url)
      .then(function(response) {
        return response;
      })
      .then(function(response) {
        setTimeout(function() {
          main.setState({
            apiStatus: 'loaded'
          });
        }, 300);
        return response.json();
      })
      .then(function(data) {
        main.setState({ projects: data });
      })
      .catch(function() {
        main.setState({ apiStatus: 'error' });
      });
  };

  componentDidMount() {
    this._get_projects();
  }

  render() {
    const { projects, apiStatus, filterText } = this.state;

    if (apiStatus === 'loaded') {
      let rows = [];
      projects
        .filter(
          project =>
            filterText
              ? project.title_plain
                  .toLowerCase()
                  .indexOf(filterText.toLowerCase()) > -1 ||
                project.tagline_plain
                  .toLowerCase()
                  .indexOf(filterText.toLowerCase()) > -1
              : project
        )
        .forEach(project => {
          rows.push(
            <ProjectRow
              project={project}
              key={project.id}
              sdisUrl={this.props.sdisUrl}
            />
          );
        });
      return (
        <div className="content">
          <Grid>
            <Row>
              <Col xs={12} md={3}>
                <SearchBar
                  filterText={this.state.filterText}
                  onFilterTextInput={this.handleFilterTextInput}
                />
              </Col>

              <Col xs={12} md={9}>
                <Panel className="whitebg">
                  <TagCloud
                    minSize={10}
                    maxSize={25}
                    tags={this.state.tags}
                    className="simple-cloud"
                    onClick={tag => console.log(`'${tag.value}' was selected!`)}
                  />
                </Panel>
              </Col>
            </Row>

            {rows}
          </Grid>
        </div>
      );
    } else if (apiStatus === 'loading') {
      return <AlertRow />;
    } else if (apiStatus === 'error') {
      return <AlertRow bsStyle="danger" message="Error loading data." />;
    }
  }
}
