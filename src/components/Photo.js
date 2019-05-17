import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default function Photo({ photo }) {
  return (
    <img className={styles.Photo} src={photo} />
  );
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};
