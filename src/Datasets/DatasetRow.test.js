import React from 'react';
import ReactDOM from 'react-dom';
import { Glyphicon } from 'react-bootstrap';
import Leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import DatasetRow from './DatasetRow';

const ds = {
  license_title: 'Creative Commons Attribution Share-Alike',
  maintainer: 'Michael Rule',
  relationships_as_object: [],
  citation: '',
  private: false,
  maintainer_email: 'marinedatarequests@dpaw.wa.gov.au',
  num_tags: 5,
  organization: {
    description:
      '[Marine Science Program](http://www.dpaw.wa.gov.au/management/marine/60-marine-research) ([Wiki](https://confluence.dec.wa.gov.au/display/sd/Marine+Science)), \r\n[Science and Conservation Division](http://www.dpaw.wa.gov.au/about-us/science-and-research), \r\n[Department of Parks and Wildlife](http://www.dpaw.wa.gov.au/)',
    created: '2015-11-17T03:37:00.490959',
    title: 'Marine Science',
    name: 'marinescience',
    is_organization: true,
    state: 'active',
    image_url: '20140403-065014.260667biodiversity2.jpg',
    revision_id: 'b4d0839d-0eea-4a52-a165-33dbcb3b4e11',
    type: 'organization',
    id: '523911a2-ddd8-495e-84bd-98e1e20715ed',
    approval_status: 'approved'
  },
  update_frequency: '',
  id: '6c5d58f8-3a2d-4623-9d57-bdfdbf938490',
  metadata_created: '2015-11-17T03:43:17.530718',
  metadata_modified: '2017-08-18T03:15:08.149255',
  author: 'Michael Rule',
  author_email: 'michael.rule@dpaw.wa.gov.au',
  theme: '',
  state: 'active',
  version: '',
  spatial:
    '{"type": "MultiPolygon", "coordinates": [[[[115.66622251276195, -32.26228492802104], [115.66823914721607, -32.25946163978527], [115.70131195226362, -32.24494187171562], [115.70695852873516, -32.248975140623855], [115.7025219329361, -32.27075479272834], [115.70494189428103, -32.302617617103415], [115.72793152705799, -32.30584423223001], [115.73882135311023, -32.31471742382813], [115.74608123714505, -32.33327046080603], [115.74366127580011, -32.355050112910504], [115.72188162369562, -32.377636418796634], [115.6670291665436, -32.377233091905815], [115.66622251276195, -32.26228492802104]]]]}',
  license_id: 'cc-by-sa',
  type: 'dataset',
  resources: [
    {
      mimetype: 'text/html',
      cache_url: null,
      hash: 'f6cff6f8afd83bc4ba5ef7948e6e0fde742becb6',
      description: 'Point of truth for the dataset',
      name: 'Return to Seagrasses of Western Australia',
      format: 'HTML',
      url:
        'https://data.dpaw.wa.gov.au/dataset/seagrass-in-situ-surveys-in-western-australia',
      datastore_active: false,
      cache_last_updated: null,
      package_id: '6c5d58f8-3a2d-4623-9d57-bdfdbf938490',
      created: '2014-07-15T05:31:44.939405',
      state: 'active',
      mimetype_inner: null,
      last_modified: '2014-12-04T19:07:30.864381',
      position: 0,
      revision_id: '394caa48-9c77-4234-8134-8c9e853e0cf9',
      url_type: null,
      id: 'a25672bd-15d8-4644-933f-3eaa9fe6b320',
      resource_type: null,
      size: '57308'
    },
    {
      mimetype: null,
      cache_url: null,
      hash: '',
      description: '',
      name: 'Shoot density of seagrass at Shoalwater Islands MPA code',
      format: 'TXT',
      url:
        'https://data.dpaw.wa.gov.au/dataset/6c5d58f8-3a2d-4623-9d57-bdfdbf938490/resource/ef76d134-cc13-4c54-8864-0c441a36a127/download/jbmp_shoot_density_and_canopy_height_code.r',
      datastore_active: false,
      cache_last_updated: null,
      package_id: '6c5d58f8-3a2d-4623-9d57-bdfdbf938490',
      created: '2015-07-27T14:30:01.281965',
      state: 'active',
      mimetype_inner: null,
      last_modified: '2017-07-20T06:56:58.425225',
      position: 1,
      revision_id: 'b5d487f2-f50a-405e-afd1-078e8f1e1bd1',
      url_type: 'upload',
      id: 'ef76d134-cc13-4c54-8864-0c441a36a127',
      resource_type: null,
      size: null
    }
  ],
  num_resources: 10,
  tags: [
    {
      vocabulary_id: null,
      state: 'active',
      display_name: 'asset_seagrass',
      id: '7aa09a0c-5681-4790-861e-ac1598f49a6d',
      name: 'asset_seagrass'
    },
    {
      vocabulary_id: null,
      state: 'active',
      display_name: 'author_michael_rule',
      id: '02639c36-3f35-444d-9dfb-c6dc167fd7c1',
      name: 'author_michael_rule'
    },
    {
      vocabulary_id: null,
      state: 'active',
      display_name: 'data_products',
      id: 'f74ad36b-42d5-4da0-a660-ade7f34f194f',
      name: 'data_products'
    }
  ],
  data_homepage: '',
  language: '',
  groups: [
    {
      display_name: 'MPA reporting',
      description:
        'Datasets relevant to annual MPA reporting by Marine Science to the regional marine park managers ',
      image_display_url:
        'https://data.dpaw.wa.gov.au/uploads/group/20140415-044330.634591nmpawqdissolvedinorganicnitrogen.svg',
      title: 'MPA reporting',
      id: '53be9fab-6a80-4306-84e8-e61c6d0d2a52',
      name: 'mpa-reporting'
    }
  ],
  creator_user_id: '7561256b-5317-4d35-a5d5-f4ff37c24e8e',
  relationships_as_subject: [],
  data_portal: '',
  doi: '',
  name:
    'seagrass-in-situ-surveys-in-western-australia-shoot-density-at-shoalwater-islands-mp',
  isopen: true,
  url:
    'http://marine-data.dpaw.wa.gov.au/dataset/seagrass-in-situ-surveys-in-western-australia',
  notes: '',
  owner_org: '523911a2-ddd8-495e-84bd-98e1e20715ed',
  license_url: 'http://www.opendefinition.org/licenses/cc-by-sa',
  title: 'Seagrasses at Shoalwater Islands MPA',
  revision_id: '1c13c7f5-6214-411a-9c85-6e654e1d731e'
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DatasetRow dataset="" key="" />, div);
});

it('renders missing message if no dataset is given', () => {
  const wrapper = shallow(<DatasetRow dataset="" key="test" />);
  const msg = <h4>No dataset</h4>;
  expect(wrapper).toContainReact(msg); // jest-enzyme
});
