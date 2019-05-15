import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Color name="blue" hex="#60b2e5" rgb={{ r: 96, g: 178, b: 229 }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

