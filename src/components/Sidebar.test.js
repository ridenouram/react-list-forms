import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
