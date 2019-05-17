import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('photos component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Photos photos={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
