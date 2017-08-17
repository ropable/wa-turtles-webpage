// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Datasets from './Datasets';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Dashboard} />
          <Route path="/datasets" component={Datasets} />
          <Route path="/projects" component={Projects} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
