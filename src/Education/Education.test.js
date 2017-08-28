import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Education from './Education';

it('renders first box', () => {
  const wrapper = shallow(<Education />);
  const msg = <h1>Discover Flatbacks</h1>;
  expect(wrapper).toContainReact(msg); // jest-enzyme
});
