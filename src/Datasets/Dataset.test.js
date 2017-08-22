import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Datasets from './Datasets';

it('renders without crashing', () => {
  shallow(<Datasets />);
});
