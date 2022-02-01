/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ClinicsBooking from 'views/ClinicsBooking';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ClinicsBookingPage = () => {
  return <WithLayout component={ClinicsBooking} layout={Main} />;
};

export default ClinicsBookingPage;
