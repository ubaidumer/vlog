/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SignUp from 'views/SignUp';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const SignUpPage = () => {
  return <WithLayout component={SignUp} layout={Main} />;
};

export default SignUpPage;
