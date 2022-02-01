import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Hero, Gallery, TulipsTour, Packages } from './components';
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
  paddingBottomZero: {
    paddingBottom: 0,
  },
  grayBg: {
    background: 'rgb(245, 247, 255)',
  },
}));

import { galleryPackages, gallery } from '../../data';

const GalleryView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      <Section>
        <Packages data={galleryPackages} />
      </Section>
      <TulipsTour />
      <Section className={classes.paddingBottomZero}>
        <Gallery data={gallery} />
      </Section>
    </div>
  );
};

export default GalleryView;
