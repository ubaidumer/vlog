/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BikeFit from 'views/BikeFit';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const BikeFitPage = () => {
  return <WithLayout component={BikeFit} layout={Main} />;
};

export default BikeFitPage;
