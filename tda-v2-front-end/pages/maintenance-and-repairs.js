/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import MaintenanceAndRepairs from 'views/MaintenanceAndRepairs';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const MaintenanceAndRepairsPage = () => {
  return <WithLayout component={MaintenanceAndRepairs} layout={Main} />;
};

export default MaintenanceAndRepairsPage;
