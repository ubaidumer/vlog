/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import AboutUs from 'views/AboutUs';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const AboutUsPage = () => {
  return <WithLayout component={AboutUs} layout={Main} />;
};

export default AboutUsPage;
