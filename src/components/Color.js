import React from 'react';
import PropTypes from 'prop-types';

export default function Color({ name, hex, rgb }) {
  Color.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.object.isRequired
  };

  return (
    <dl>
      <div style={{ background: hex, width: '50px', height: '50px' }} />
      <dt>Name</dt>
      <dd>{name}</dd>
      <dt>Hex</dt>
      <dd>{hex}</dd>
      <dt>RGB</dt>
      <dd>R: {rgb.r}</dd>
      <dd>G: {rgb.g}</dd>
      <dd>B: {rgb.b}</dd>
    </dl>
  );
}
