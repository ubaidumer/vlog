import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Typography, Grid } from '@material-ui/core';
import { Form } from '../../components';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  leftHeroImage: {
    width: '50%',
    backgroundImage: "url('https://assets.it22.nl/tda/login/left-hero-2.png')",
    background: 'white',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  rightHeroImage: {
    width: '50%',
    backgroundImage: "url('https://assets.it22.nl/tda/login/right-hero-3.png')",
    background: 'white',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      padding: '75px 0',
    },
  },
  imagesWrapper: {
    display: 'flex',
  },
  leftSideLogo: {
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    width: '50vw',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
  textWhite: {
    color: 'white',
  },
}));

const Hero = ({ tours, themeMode, className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.imagesWrapper}
      {...rest}
    >
      <Grid item xs={12} sm={12} md={6} className={classes.leftHeroImage}>
        <a href="/" title="Go Back To Home Page">
          <div className={classes.leftHeroWrapper}>
            <div className={classes.leftSideLogo}>
              <Image src="https://assets.it22.nl/tda/logo.png" />
            </div>
          </div>
        </a>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.rightHeroImage}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Hero;
