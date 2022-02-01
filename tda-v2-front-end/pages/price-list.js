/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PriceList from 'views/PriceList';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const PriceListPage = () => {
  return <WithLayout component={PriceList} layout={Main} />;
};

export default PriceListPage;
