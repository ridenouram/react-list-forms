import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('photo component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Photo photo='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
