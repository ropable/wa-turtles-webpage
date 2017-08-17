// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Grid, Image, Navbar } from 'react-bootstrap';
import dbcalogo from './dbca_logo.svg';
import ghlogo from './gh.png';

class Footer extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Navbar id="footer">
              <span className="text-muted credit">
                <Link to="https://github.com/parksandwildlife/wa-turtles-webpage">
                  <Image
                    className="logo"
                    src={dbcalogo}
                    alt="Department of Biodiversity, Conservation and Attractions"
                  />
                </Link>
              </span>

              <span className="text-muted credit">
                <Link to="https://github.com/parksandwildlife/wa-turtles-webpage">
                  <Image src={ghlogo} alt="GitHub" />
                </Link>
              </span>

              <span className="text-muted credit">
                <Link to="https://travis-ci.org/parksandwildlife/wa-turtles-webpage">
                  <Image
                    src="https://travis-ci.org/parksandwildlife/wa-turtles-webpage.svg?branch=master"
                    alt="Build Status"
                  />
                </Link>
              </span>
            </Navbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Footer;
