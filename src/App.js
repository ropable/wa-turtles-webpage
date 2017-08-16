// @flow
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {
  Grid,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Jumbotron,
  Button
} from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: null,
      infoStatus: 'loading'
    };
  }
  _get_datasets = datasets => {
    const main = this;
    main.setState({ infoStatus: 'loading' });
    var ckanApiUrl = 'https://data.dpaw.wa.gov.au/api/3/action/';
    var url = ckanApiUrl + 'package_search?q=tags:public';

    fetch(url)
      .then(function(response) {
        return response;
      })
      .then(function(response) {
        setTimeout(function() {
          main.setState({
            infoStatus: 'loaded'
          });
        }, 300);
        return response.json();
      })
      .then(function(data) {
        main.setState({ datasets: data.result.results });
      })
      .catch(function() {
        main.setState({ infoStatus: 'error' });
      });
  };

  // componentWillMount() {
  //     this._get_datasets();
  // };

  componentDidMount() {
    this._get_datasets();
  }

  render() {
    const { datasets, infoStatus } = this.state;
    let data = null;

    if (infoStatus === 'loaded') {
      data = (
        <ul>
          {datasets.map(function(ds) {
            return (
              <li>
                {ds.title} {ds.id}
              </li>
            );
          })}
        </ul>
      );
    } else if (infoStatus === 'loading') {
      data = <div className="info loading">Loading public datasets...</div>;
    } else if (infoStatus === 'error') {
      data = (
        <div className="info error">
          Error while loading public datasets. Try again later.
        </div>
      );
    }
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Turtles WA</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Link
              </NavItem>
              <NavItem eventKey={2} href="/">
                Link
              </NavItem>
              <NavDropdown
                eventKey={3}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="/">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Turtles WA</h1>
            <p>
              <Button
                bsStyle="primary"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                A button!
              </Button>
            </p>
            {data}
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
