/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import TermsAndConditions from 'views/TermsAndConditions';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const TermsAndConditionsPage = () => {
  return <WithLayout component={TermsAndConditions} layout={Main} />;
};

export default TermsAndConditionsPage;
