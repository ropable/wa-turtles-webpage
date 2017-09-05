// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Navbar } from 'react-bootstrap';

import './Footer.css';
import dbcalogo from '../img/dbca_logo.svg';
import ghlogo from '../img/gh32.png';

export default class Footer extends React.Component<{}> {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedBottom>
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
          <span className="text-muted credit">
            <Link to="https://coveralls.io/github/parksandwildlife/wa-turtles-webpage">
              <Image
                src="https://coveralls.io/repos/github/parksandwildlife/wa-turtles-webpage/badge.svg"
                alt="Test Coverage"
              />
            </Link>
          </span>
          <span className="text-muted credit">
            <Link to="http://waffle.io/parksandwildlife/wa-turtles-webpage">
              <Image
                src="https://badge.waffle.io/parksandwildlife/wa-turtles-webpage.svg?label=ready&title=Ready"
                alt="To do"
              />
            </Link>
          </span>
        </Navbar>
      </div>
    );
  }
}
