import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';

export default function Colors({ colors }) {

  const colorList = colors.map(({ name, hex, rgb }) => {
    return (
      <li key={hex}>
        <Color name={name} hex={hex} rgb={rgb} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};
