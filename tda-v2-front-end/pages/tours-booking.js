/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ToursBooking from 'views/ToursBooking';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ToursBookingPage = () => {
  return <WithLayout component={ToursBooking} layout={Main} />;
};

export default ToursBookingPage;
