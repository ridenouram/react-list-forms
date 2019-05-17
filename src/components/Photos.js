import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './style.css';

export default function Photos({ photos }) {
  const photosList = photos.map(photo => {
    return (
      <li className={styles.li}key={photo}>
        <Photo photo={photo} />
      </li>
    );
  });

  return (
    <ul className={styles.Photos}>
      {photosList}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
