import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('photo album component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<PhotoAlbum title='' photos={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
