/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SignIn from 'views/SignIn';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const SignInPage = () => {
  return <WithLayout component={SignIn} layout={Main} />;
};

export default SignInPage;
