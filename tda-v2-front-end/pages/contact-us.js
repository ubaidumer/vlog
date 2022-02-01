/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ContactUs from 'views/ContactUs';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ContactUsViewPage = () => {
  return <WithLayout component={ContactUs} layout={Main} />;
};

export default ContactUsViewPage;
