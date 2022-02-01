import React, { useState } from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Hero,
  OurBikesRentalWrapper,
  OurBikesRental,
  MaintenanceAndRepair,
  Clinics,
  Tours,
  ToursWrapper,
  BikeFit,
  ReviewsWrapper,
  Reviews,
} from './components';

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
}));

import { clinics, bike_rentals, reviews } from '../../data';

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  const [selectedTour, setSelectedTour] = useState('tulip');

  return (
    <div>
      <Hero themeMode={themeMode} />
      <OurBikesRentalWrapper
        style={{ background: '#F5F7FF' }}
        className={classes.sectionNoPaddingTop}
      >
        <OurBikesRental data={bike_rentals} />
      </OurBikesRentalWrapper>
      <MaintenanceAndRepair />
      <SectionAlternate>
        <Clinics data={clinics} />
      </SectionAlternate>
      <ToursWrapper selectedTour={selectedTour}>
        <Tours setSelectedTour={setSelectedTour} />
      </ToursWrapper>
      <Section>
        <BikeFit />
      </Section>
      <ReviewsWrapper>
        <Reviews data={reviews} />
      </ReviewsWrapper>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
    </div>
  );
};

export default IndexView;
