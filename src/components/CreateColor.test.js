import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('CreateColor component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    expect(wrapper).toMatchSnapshot;
  });

  it('updates name on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    wrapper.find('[name="name"]').at(0).simulate('change', {
      target: { name: 'name', value: 'Red' }
    });

    expect(wrapper.state('name')).toEqual('Red');
  });

  it('updates hex on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    wrapper.find('[name="hex"]').at(0).simulate('change', {
      target: { name: 'hex', value: '#FF0000' }
    });

    expect(wrapper.state('hex')).toEqual('#FF0000');
  });
});
