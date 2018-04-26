// @flow
import React from "react";
import { Navbar } from "reactstrap";

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
        <Navbar color="dark" dark expand="md" fixed="bottom">
          <a href="https://github.com/dbca-wa/wa-turtles-webpage" target="_">
            <img
              src={dbcalogo}
              class="footer-logo"
              alt="Department of Biodiversity, Conservation and Attractions"
            />
          </a>
        </Navbar>
      </div>
    );
  }
}
