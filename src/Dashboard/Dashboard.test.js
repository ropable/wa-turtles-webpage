import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Dashboard from './Dashboard';

it('renders welcome message', () => {
  const wrapper = shallow(<Dashboard />);
  const welcome = <h1>Explore</h1>;
  //expect(wrapper.contains(welcome)).toEqual(true);
  expect(wrapper).toContainReact(welcome); // jest-enzyme
});
