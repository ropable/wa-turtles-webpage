// @flow
import * as React from "react";
import { Alert, Col, Grid, Row } from "react-bootstrap";
import Spinner from "react-spinkit";

type Props = {
  bsStyle: string,
  message: string,
  showSpinner: boolean
};

type State = {
  alertVisible: boolean
};

export default class AlertRow extends React.Component<Props, State> {
  static defaultProps = {
    bsStyle: "info",
    message: "Loading data, hang tight...",
    showSpinner: false
  };

  state = { alertVisible: true };

  hide = () => {
    this.setState({ alertVisible: false });
  };

  render() {
    const { alertVisible } = this.state;
    const spinner = this.props.showSpinner ? (
      <div>
        <Spinner name="pacman" color="orange" />
      </div>
    ) : (
      <span />
    );

    if (alertVisible) {
      return (
        <div className="content">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <Alert bsStyle={this.props.bsStyle} onDismiss={this.hide}>
                  {this.props.message}
                </Alert>
                {spinner}
              </Col>
            </Row>
          </Grid>
        </div>
      );
    } else {
      return null;
    }
  }
}
