// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Panel, Row } from 'react-bootstrap';
import axios from 'axios';
import { TagCloud } from 'react-tagcloud';
import ProjectRow from './ProjectRow';
import SearchBar from './SearchBar';
import AlertRow from '../AlertRow/AlertRow';

type Props = {
  apiUrl: string,
  apiParams: string
};

type State = {
  projects: PropTypes.array,
  status: string,
  filterText: string,
  tags: PropTypes.array
};

export default class Projects extends React.Component<Props, State> {
  static defaultProps = {
    apiUrl: 'https://sdis.dpaw.wa.gov.au',
    apiParams: '/api/projects/?format=json'
  };

  state = {
    projects: [],
    status: 'loading',
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

  componentDidMount() {
    const main = this;

    axios
      .get(main.props.apiUrl + main.props.apiParams)
      .then(res => {
        main.setState({ projects: res.data, status: 'loaded' });
      })
      .catch(error => {
        main.setState({ status: 'error' });
      });
  }

  render() {
    const { projects, status, filterText } = this.state;

    if (status === 'loaded') {
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
              apiUrl={this.props.apiUrl}
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
    } else if (status === 'loading') {
      return <AlertRow />;
    } else if (status === 'error') {
      return <AlertRow bsStyle="danger" message="Error loading data." />;
    }
  }
}
