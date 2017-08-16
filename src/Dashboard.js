// @flow
import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Turtles WA</h1>
            <p>"Nature's delicious speed bumps"</p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default Dashboard;
