import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Dashboard from './Dashboard';

it('renders welcome message', () => {
  const wrapper = shallow(<Dashboard />);
  const msg = <h1>Explore</h1>;
  expect(wrapper).toContainReact(msg);
});
