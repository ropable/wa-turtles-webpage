import React from 'react';
import ReactDOM from 'react-dom';
import { Glyphicon } from 'react-bootstrap';
import Leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import TimeAgo from 'react-timeago';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import ProjectRow from './ProjectRow';

const pro = {
  id: 174,
  absolute_url: '/projects/scienceproject/174/',
  project_type_year_number_plain: 'SP 2012-012',
  title:
    '<p>Strategic plan for the development and implementation of the Western Australian Marine Monitoring Program (WAMMP)</p>',
  title_plain:
    'Strategic plan for the development and implementation of the Western Australian Marine Monitoring Program (WAMMP)',
  status: 'completed',
  status_display: 'Completed and closed',
  tagline: '',
  tagline_plain: '',
  comments: '',
  image: '',
  team_list_plain: 'K Friedman, K Friedman, C Simpson',
  program: 'Marine Science',
  area_list_nrm_region: '',
  area_list_ibra_imcra_region: '',
  area_list_dpaw_region: '',
  area_list_dpaw_district: ''
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectRow project="" key="" />, div);
});

it('renders missing message if no dataset is given', () => {
  const wrapper = shallow(<ProjectRow project="" key="test" />);
  const msg = <h4>No project</h4>;
  expect(wrapper).toContainReact(msg); // jest-enzyme
});

it('renders project title', () => {
  const wrapper = shallow(<ProjectRow project={pro} key="test" />);
  const msg = (
    <h4>
      Strategic plan for the development and implementation of the Western
      Australian Marine Monitoring Program (WAMMP)
    </h4>
  );
  expect(wrapper).toContainReact(msg);
});
