import React from 'react';
import { shallow } from 'enzyme';
import PicList from './index';
test('renders the component', () => {
  const component = shallow(<PicList />);
  expect(component).toMatchSnapshot();
});