import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Colors colors={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
