import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';

import App from './App';
import Dashboard from './Dashboard/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders shallow without crashing', () => {
  shallow(<App />);
});
