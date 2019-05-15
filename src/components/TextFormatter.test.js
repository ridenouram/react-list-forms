import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('TextFormatter component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
