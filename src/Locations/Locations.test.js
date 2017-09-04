// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Locations from './Locations';

it('renders shallow without crashing', () => {
  shallow(<Locations />);
});
