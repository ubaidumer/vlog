import React, { useState } from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';

import {
  Hero,
  OurBikesRentalWrapper,
  OurBikesRental,
  BikesSlider,
  Accessories,
} from './components';
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
}));

import { bike_rentals } from '../../data';

const RentABikeView = ({ themeMode }) => {
  const classes = useStyles();

  const currentPage = window.location.pathname;

  return (
    <div>
      <Hero themeMode={themeMode} />
      <OurBikesRentalWrapper className={classes.sectionNoPaddingTop}>
        <OurBikesRental page={currentPage} data={bike_rentals} />
      </OurBikesRentalWrapper>
      <Section>
        <BikesSlider page={currentPage} data={bike_rentals} />
      </Section>
      <div className={clsx(classes.grayBg)}>
        <Section>
          <Accessories />
        </Section>
      </div>
    </div>
  );
};

export default RentABikeView;
