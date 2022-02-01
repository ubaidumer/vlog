/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Clinics from 'views/Clinics';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ClinicsPage = () => {
  return <WithLayout component={Clinics} layout={Main} />;
};

export default ClinicsPage;
