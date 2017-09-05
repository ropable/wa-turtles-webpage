// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { applyMiddleware, createStore, compose } from "redux";
// import { offline } from "redux-offline";
// import offlineConfig from "redux-offline/lib/defaults";

import './App.css';
import Navigation from './Navigation/Navigation';
import Dashboard from './Dashboard/Dashboard';
import Education from './Education/Education';
import Datasets from './Datasets/Datasets';
import Projects from './Projects/Projects';
import Locations from './Locations/Locations';
import Footer from './Footer/Footer';

export default class App extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Dashboard} />
          <Route exact path={'/education'} component={Education} />
          <Route exact path="/datasets" component={Datasets} />
          <Route
            exact
            path="/infosheets"
            render={() => (
              <Datasets apiParams="/api/3/action/package_search?q=groups:science-information-sheets" />
            )}
          />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/locations" component={Locations} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
