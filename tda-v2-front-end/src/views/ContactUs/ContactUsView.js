import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Hero, Contact, Form } from './components';
import { Section } from 'components/organisms';

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
  teamsWrapper: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  paddingBottomZero: {
    paddingBottom: 0,
  },
  formWrapper: {
    background: 'rgb(245, 247, 255)',
    borderBottomRightRadius: '50% 25%',
    borderBottomLeftRadius: '50% 25%',
    [theme.breakpoints.down('sm')]: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      marginTop: 50,
    },
  },
}));

import { locationAmsterdamMapData, locationUtrechtMapData } from '../../data';

const ContactUsView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
        <Contact
          locationAmsterdamMapData={locationAmsterdamMapData}
          locationUtrechtMapData={locationUtrechtMapData}
        />
      <Section className={classes.formWrapper}>
        <Form />
      </Section>
    </div>
  );
};

export default ContactUsView;
