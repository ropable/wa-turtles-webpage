// @flow
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {
  // applyMiddleware,
  createStore,
  compose
} from "redux";

// import {
//   // persistStore,
//   autoRehydrate
// } from "redux-persist";

import "./App.css";
import Navigation from "./Navigation/Navigation";
import Dashboard from "./Dashboard/Dashboard";
import Datasets from "./Datasets/Datasets";
import Projects from "./Projects/Projects";
import Locations from "./Locations/Locations";
import About from "./About/About";
import People from "./People/People";
import Participate from "./Participate/Participate";
import Story from "./Story/Story";
import Footer from "./Footer/Footer";
import todoApp from "./reducers";

const store = createStore(
  todoApp,
  undefined,
  compose()
  // applyMiddleware(middleware),
  // autoRehydrate()
);

export default class App extends React.Component {
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
          <div className="app">
            <Navigation />
            <Route exact path={"/"} component={Dashboard} />
            <Route exact path={"/story"} component={Story} />
            <Route exact path={"/datasets"} render={this.embedTurtleData} />
            <Route exact path={"/infosheets"} render={this.embedInfosheets} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/places"} component={Locations} />
            <Route exact path={"/program"} component={About} />
            <Route exact path={"/people"} component={People} />
            <Route exact path={"/participate"} component={Participate} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
