import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

export default function Photos({ photos }) {
  const photosList = photos.map(photo => {
    return (
      <li key={photo}>
        <Photo photo={photo} />
      </li>
    );
  });

  return (
    <ul>
      {photosList}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
