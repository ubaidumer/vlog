/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ForgotPassword from 'views/ForgotPassword';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ForgotPasswordPage = () => {
  return <WithLayout component={ForgotPassword} layout={Main} />;
};

export default ForgotPasswordPage;
