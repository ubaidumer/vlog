/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ResetPassword from 'views/ResetPassword';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ResetPasswordPage = () => {
  return <WithLayout component={ResetPassword} layout={Main} />;
};

export default ResetPasswordPage;
