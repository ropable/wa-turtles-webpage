// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Navbar } from 'react-bootstrap';
import dbcalogo from './dbca_logo.svg';
import ghlogo from './gh32.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedBottom>
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
      </div>
    );
  }
}

export default Footer;
