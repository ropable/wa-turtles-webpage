// @flow
import React, { Component } from 'react';
// import { BrowserRouter } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Datasets from './Datasets';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Dashboard />
        <Row>
          <Col xs={12} md={6}>
            <Datasets />
          </Col>
          <Col xs={12} md={6}>
            <Projects />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
