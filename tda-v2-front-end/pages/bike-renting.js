/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BikeRentingDetails from 'views/BikeRentingDetails';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const BikeRentingDetailsPage = () => {
  return <WithLayout component={BikeRentingDetails} layout={Main} />;
};

export default BikeRentingDetailsPage;
