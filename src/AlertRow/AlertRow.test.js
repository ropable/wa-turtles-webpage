import React from 'react';
import ReactDOM from 'react-dom';
import { Alert, Col, Grid, Row } from 'react-bootstrap';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import AlertRow from './AlertRow';

it('renders default Alert style and message', () => {
  const wrapper = shallow(<AlertRow />);
  const msg = (
    <div className="content">
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Alert bsStyle="info">Loading data, hang tight...</Alert>
          </Col>
        </Row>
      </Grid>
    </div>
  );
  expect(wrapper).toContainReact(msg);
});

it('renders user-defined Alert style and message', () => {
  const wrapper = shallow(
    <AlertRow bsStyle="danger" message="DANGERMOUSE!!" />
  );
  const msg = (
    <div className="content">
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Alert bsStyle="danger">DANGERMOUSE!!</Alert>
          </Col>
        </Row>
      </Grid>
    </div>
  );
  expect(wrapper).toContainReact(msg);
});
