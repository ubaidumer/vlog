/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import RentABike from 'views/RentABike';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const RentABikePage = () => {
  return <WithLayout component={RentABike} layout={Main} />;
};

export default RentABikePage;
