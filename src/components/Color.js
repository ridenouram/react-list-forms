import React from 'react';
const hexRgb = require('hex-rgb');
import PropTypes from 'prop-types';

export default function Color({ name, hex }) {
  Color.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired
  };

  const rgb = hexRgb(hex);

  return (
    <dl>
      <div style={{ background: hex, height: '40px', width: '40px' }}></div>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>red: {rgb.red}</dd>
      <dd>green: {rgb.green}</dd>
      <dd>blue: {rgb.blue}</dd>
    </dl>
  );
}
