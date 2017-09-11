// @flow
import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Glyphicon, Grid, Row, Well } from "react-bootstrap";
// import axios from "axios";

// import AlertRow from "../AlertRow/AlertRow";
// import EncounterView from "./EncounterView";
import "./EncounterRecorder.css";

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

  render() {
    // const store = this.props.store;
    return (
      <div className="content">
        <Grid>
          <Row id="data-collection">
            <Col xs={6} md={3}>
              <Well className="jumboWell">
                <h1>Track (fresh)</h1>
                <p>Made last night</p>
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
                  Record
                </Button>
              </Well>
            </Col>
            <Col xs={6} md={3}>
              <Well className="jumboWell">
                <h1>Track (old)</h1>
                <p>Made before last night</p>
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
                  Record
                </Button>
              </Well>
            </Col>
            <Col xs={6} md={3}>
              <Well className="jumboWell">
                <h1>Nest, unhatched</h1>
                <p>Nest, unhatched, no track</p>
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
                  Record
                </Button>
              </Well>
            </Col>
            <Col xs={6} md={3}>
              <Well className="jumboWell">
                <h1>Nest, hatched</h1>
                <p>Nest, hatched, hatchling tracks</p>
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
                  Record
                </Button>
              </Well>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Well className="jumboWell">
                <h1>Count: {this.state.count}</h1>
                <Button
                  bsSize="large"
                  bsStyle="primary"
                  onClick={this.resetEncounters}
                >
                  <Glyphicon glyph="upload" title="Upload data" /> Upload
                </Button>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  onNewEncounter = () => {
    console.log("new encounter created");
  };
}
