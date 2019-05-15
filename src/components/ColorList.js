import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';

export default function ColorList({ colors }) {
  ColorList.PropTypes = {
    colors: PropTypes.array.isRequired
  };

  const colorList = colors.map(({ name, hex, rgb }) => {
    
  })

  return (
    <ul>
      
    </ul>
  )
}
