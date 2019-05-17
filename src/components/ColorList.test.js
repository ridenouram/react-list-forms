import React from 'react';
import { shallow } from 'enzyme';
import ColorList from './ColorList';

describe('ColorList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ColorList />);
    expect(wrapper).toMatchSnapshot();
  });
});
