import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Datasets from './Datasets';
import AlertRow from '../AlertRow/AlertRow';

it('renders without crashing', () => {
  shallow(<Datasets />);
});

it('render loading message initially', () => {
  const wrapper = shallow(<Datasets />);
  const msg = <AlertRow bsStyle="info" message="Loading data, hang tight..." />;
  expect(wrapper).toContainReact(msg);
});

it('renders error message on loading error', () => {
  const wrapper = shallow(<Datasets />);
  wrapper.setState({ status: 'error' });
  const msg = (
    <AlertRow
      bsStyle="danger"
      message="Error loading data from https://data.dpaw.wa.gov.au"
    />
  );
  expect(wrapper).toContainReact(msg);
});
