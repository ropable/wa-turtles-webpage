// @flow
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { applyMiddleware, createStore, compose } from "redux";
// import { offline } from "redux-offline";
// import offlineConfig from "redux-offline/lib/defaults";

import "./App.css";
import Navigation from "./Navigation/Navigation";
import Dashboard from "./Dashboard/Dashboard";
import Education from "./Education/Education";
import Datasets from "./Datasets/Datasets";
import Projects from "./Projects/Projects";
import Locations from "./Locations/Locations";
import EncounterRecorder from "./Encounters/EncounterRecorder";
// import observableEncounterStore from "./Stores/EncounterStore";
import Footer from "./Footer/Footer";

export default class App extends React.Component<{}> {
  embedInfosheets = () => {
    return <Datasets apiParams={"groups:science-information-sheets"} />;
  };

  embedTurtleData = () => {
    return <Datasets apiParams={"tags:asset_turtles"} />;
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/datasets" render={this.embedTurtleData} />
          <Route exact path="/infosheets" render={this.embedInfosheets} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path={"/encounters"} component={EncounterRecorder} />
          <Route exact path={"/education"} component={Education} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
