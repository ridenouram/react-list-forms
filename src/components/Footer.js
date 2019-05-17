import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ text }) {
  return (
    <h3>{text}</h3>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired
};
