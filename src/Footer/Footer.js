// @flow
import React from "react";
import { Col, Button, Collapse, Media, Row, Navbar } from "reactstrap";

import "./Footer.css";
import dbcalogo from "../img/dbca_logo.svg";

type State = {
  showSitemap: boolean
};

export default class Footer extends React.Component<State> {
  state = {
    showSitemap: false
  };

  toggleSitemap = () => {
    this.setState({ showSitemap: !this.state.showSitemap });
  };

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedBottom>
          <Collapse id="Sitemap" in={this.state.showSitemap}>
            <div className="credit">
              <Row>
                <Col xs={12} md={4} lg={3}>
                  <h3>The Science</h3>
                  <p>Locations</p>
                  <p>Projects</p>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <h3>About</h3>
                </Col>
              </Row>
            </div>
          </Collapse>

          <span className="text-muted credit">
            <a href="https://github.com/dbca-wa/wa-turtles-webpage" target="_">
              <Media
                object
                data-src={dbcalogo}
                className="footer-logo"
                alt="Department of Biodiversity, Conservation and Attractions"
              />
            </a>
          </span>
          <span className="text-muted credit">
            <Button
              id="btnToggleSitemap"
              bsSize="xsmall"
              bsStyle="primary"
              onClick={this.toggleSitemap}
            >
              Sitemap
            </Button>
          </span>
        </Navbar>
      </div>
    );
  }
}
