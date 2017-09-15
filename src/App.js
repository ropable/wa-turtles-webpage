// @flow
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {
  // applyMiddleware,
  createStore,
  compose
} from "redux";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";

import "./App.css";
import Navigation from "./Navigation/Navigation";
import Dashboard from "./Dashboard/Dashboard";
import Education from "./Education/Education";
import Datasets from "./Datasets/Datasets";
import Projects from "./Projects/Projects";
import Locations from "./Locations/Locations";
import EncounterRecorder from "./Encounters/EncounterRecorder";
import Footer from "./Footer/Footer";
import todoApp from "./reducers";

// let store = createStore(todoApp);
const preloadedState = {};
const store = createStore(
  todoApp,
  preloadedState,
  compose(
    // applyMiddleware(middleware),
    offline(offlineConfig)
  )
);

export default class App extends React.Component<{}> {
  embedInfosheets = () => {
    return <Datasets apiParams={"groups:science-information-sheets"} />;
  };

  embedTurtleData = () => {
    return <Datasets apiParams={"tags:asset_turtles"} />;
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path={"/"} component={Dashboard} />
            <Route exact path={"/datasets"} render={this.embedTurtleData} />
            <Route exact path={"/infosheets"} render={this.embedInfosheets} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/locations"} component={Locations} />
            <Route exact path={"/encounters"} component={EncounterRecorder} />
            <Route exact path={"/education"} component={Education} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
