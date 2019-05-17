import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

export default function PhotoAlbum({ title, photos }) {
  return (
    <container>
      <h2>{title}</h2>
      <Photos photos={photos} />
    </container>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
};
