import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
  shallow(<SearchBar />);
});

it('displays supplied filter text', () => {
  const sayHello = () => console.log('hello');
  const wrapper = shallow(
    <SearchBar filterText="test text" onFilterTextInput={sayHello} />
  );

  const msg = (
    <input
      type="text"
      placeholder="Type to filter..."
      value="test text"
      onChange={[Function]}
    />
  );
  expect(wrapper.find('input').prop('value')).toEqual('test text');
});

it('should pass a selected value to the onChange handler', () => {
  const value = '2';
  const onChange = jest.fn();
  const wrapper = shallow(
    <SearchBar value={value} onFilterTextInput={onChange} />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.find('input').simulate('change', {
    target: { value }
  });

  expect(onChange).toBeCalledWith(value);
});
