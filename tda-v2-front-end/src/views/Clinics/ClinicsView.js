import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Hero, Packages, PackagesSlider } from './components';
import { Section } from 'components/organisms';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {},
  },
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  paddingBottomZero: {
    paddingBottom: 0,
  },
  grayBg: {
    background: 'rgb(245, 247, 255)',
  },
  packagesWrapper: {
    position: 'relative',
    top: '-5rem',
    padding: '0',
  },
  packages: {
    position: 'relative',
    paddingTop: '0',
  },
}));

import { clinics } from '../../data';

const ClinicsView = ({ themeMode }) => {
  const classes = useStyles();

  const currentPage = window.location.pathname;

  return (
    <div>
      <Hero clinics={clinics} themeMode={themeMode} />
      <Section className={classes.packagesWrapper}>
        <Packages
          page={currentPage}
          className={clsx(classes.packages)}
          data={clinics}
        />
      </Section>
      <PackagesSlider
        page={currentPage}
        className={classes.sectionNoPaddingTop}
        data={clinics}
      />
      <div className={clsx(classes.grayBg)}></div>
    </div>
  );
};

export default ClinicsView;
