import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Hero, BikeFitWork } from './components';
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
  bikeFitWorkWrapper: {
    paddingTop: '0',
    paddingBottom: '0',
    marginTop: '3rem',
  },
}));

const BikeFitView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      <Section className={classes.bikeFitWorkWrapper}>
        <BikeFitWork />
      </Section>
    </div>
  );
};

export default BikeFitView;
