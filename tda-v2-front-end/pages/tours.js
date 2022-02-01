/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Tours from 'views/Tours';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ToursPage = () => {
  return <WithLayout component={Tours} layout={Main} />;
};

export default ToursPage;
