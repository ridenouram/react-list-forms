import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  const photos = [
    'https://www.dailydot.com/wp-content/uploads/2018/06/Possum.jpg',
    'https://i.redd.it/i14dg5ylj9m11.jpg',
    'https://static.boredpanda.com/blog/wp-content/uploads/2016/01/cute-possums-331__700.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTloMswUtwlLwegV3KidNCe7PYXQH-QYHC73pU15JkBl0IdYdr0',
    'https://66.media.tumblr.com/221b1b8d7899e0d4d8ffc610e118ba3b/tumblr_ospa7oyIP21w4xt9wo1_1280.jpg',
    'https://66.media.tumblr.com/cbdc8c596416dfa8453dec812174d196/tumblr_pb653uSoKz1w4xt9wo1_1280.jpg',
    'https://66.media.tumblr.com/ac4e2e2107a4a61f8fff3a4c328374b4/tumblr_p9zou5mSY81w4xt9wo1_1280.jpg',
    'https://66.media.tumblr.com/d61de80cb96e49dca84be214435777ac/tumblr_p9zos1zeSm1w4xt9wo1_500.jpg',
    'https://i.pinimg.com/originals/ab/ac/85/abac8573ca3c2465b553a2cc0ac61a51.jpg'
  ];
  
  return (
    <>
      <Header title='My Favorite Possums' />
      <PhotoAlbum title='So Many Good Bois' photos={photos} />
      <Footer title='Thanks for visiting my smokin hot photo album' />
    </>
  );
}
