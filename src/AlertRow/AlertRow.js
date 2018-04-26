// @flow
import React from "react";
import PropTypes from "prop-types";
import { Alert, Col, Container, Row } from "reactstrap";
import Spinner from "react-spinkit";

export default class AlertRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const alert = this.state.alertVisible ? (
      <Row>
        <Col xs={12} md={12}>
          <Alert color={this.props.color} toggle={this.toggle}>
            {this.props.message}
          </Alert>
        </Col>
      </Row>
    ) : (
      <div />
    );

    const spinner = this.props.showSpinner ? (
      <Row>
        <Col xs={4} sm={3}>
          <Spinner name="pacman" color="orange" fadeIn="half" />
        </Col>
      </Row>
    ) : (
      <div />
    );

    return (
      <div className="content">
        <Container>
          {alert}
          {spinner}
        </Container>
      </div>
    );
  }
}

AlertRow.propTypes = {
  bsStyle: PropTypes.string,
  message: PropTypes.string,
  showSpinner: PropTypes.bool
};

AlertRow.defaultProps = {
  color: "info",
  message: "Loading data, hang tight...",
  showSpinner: false
};
