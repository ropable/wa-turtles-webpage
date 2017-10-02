// @flow
import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Glyphicon, Grid, Row, Well } from "react-bootstrap";
import { Provider } from "react-redux";
import { createStore } from "redux";

import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import FilterLink from "./FilterLink";

// import AlertRow from "../AlertRow/AlertRow";
// import EncounterView from "./EncounterView";
import "./EncounterRecorder.css";

import todoApp from "../reducers";
let store = createStore(todoApp);

type State = {
  encounters: PropTypes.array,
  count: number,
  count_fresh: number,
  count_old: number,
  count_nest: number,
  count_hatched: number
};

export default class EncounterList extends React.Component<State> {
  state = {
    encounters: [],
    count: 0,
    count_fresh: 0,
    count_old: 0,
    count_nest: 0,
    count_hatched: 0
  };

  addEncounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  delEncounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  resetEncounters = () => {
    this.setState({
      count: 0
    });
    // alert("Pretend we've just uploaded the data!");
  };

  geoSuccess = position =>
    `Lat ${position.coords.latitude} Lon ${position.coords.longitude}`;
  geoError = error => `Error ${error} occurred. Error code: ${error.code}`;
  // error.code can be:
  //   0: unknown error
  //   1: permission denied
  //   2: position unavailable (error response from location provider)
  //   3: timed out

  render() {
    // const store = this.props.store;
    return (
      <Provider store={store}>
        <div className="content">
          <Grid>
            <Well className="jumboWell">
              <Row id="data-collection">
                <Col xs={12} md={12}>
                  <Button
                    id="btnAddTrack"
                    bsSize="large"
                    bsStyle="primary"
                    onClick={this.addEncounter}
                  >
                    <Glyphicon
                      glyph="plus"
                      title="Record a fresh track on current location"
                    />{" "}
                    <h1>Track, fresh</h1>
                    <p>Made last night</p>
                  </Button>{" "}
                  <Button
                    id="btnAddOld"
                    bsSize="large"
                    bsStyle="primary"
                    onClick={this.addEncounter}
                  >
                    <Glyphicon
                      glyph="plus"
                      title="Record a fresh track on current location"
                    />{" "}
                    <h1>Track, old</h1>
                    <p>Made before last night</p>
                  </Button>{" "}
                  <Button
                    id="btnAddNest"
                    bsSize="large"
                    bsStyle="primary"
                    onClick={this.addEncounter}
                  >
                    <Glyphicon
                      glyph="plus"
                      title="Record a fresh track on current location"
                    />{" "}
                    <h1>Nest, unhatched</h1>
                    <p>Nest, unhatched, no track</p>
                  </Button>{" "}
                  <Button
                    id="btnAddHatched"
                    bsSize="large"
                    bsStyle="primary"
                    onClick={this.addEncounter}
                  >
                    <Glyphicon
                      glyph="plus"
                      title="Record a fresh track on current location"
                    />{" "}
                    <h1>Nest, hatched</h1>
                    <p>Nest, hatched, hatchling tracks</p>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <h1>Count: {this.state.count}</h1>
                  <Button
                    bsSize="large"
                    bsStyle="primary"
                    onClick={this.resetEncounters}
                  >
                    <Glyphicon glyph="upload" title="Upload data" /> Upload
                  </Button>
                </Col>
              </Row>
            </Well>

            <Well className="jumboWell">
              <Row>
                <Col xs={12} md={6}>
                  <h1>Todo</h1>
                  <span>
                    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
                    {", "}
                    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
                    {", "}
                    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                  </span>

                  <AddTodo />
                  <VisibleTodoList />
                  <div>
                    {navigator.geolocation ? (
                      navigator.geolocation.getCurrentPosition(
                        position => {
                          console.log(position);
                        },
                        error => {
                          console.log(error);
                        }
                      )
                    ) : (
                      "Geolocation unavailable"
                    )}
                  </div>
                </Col>
              </Row>
            </Well>
          </Grid>
        </div>
      </Provider>
    );
  }
}
