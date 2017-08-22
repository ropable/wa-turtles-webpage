import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});
