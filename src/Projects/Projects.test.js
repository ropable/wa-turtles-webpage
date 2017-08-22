import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Projects from './Projects';

it('renders without crashing', () => {
  shallow(<Projects />);
});
