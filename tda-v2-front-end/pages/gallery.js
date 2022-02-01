/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Gallery from 'views/Gallery';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const GalleryPage = () => {
  return <WithLayout component={Gallery} layout={Main} />;
};

export default GalleryPage;
