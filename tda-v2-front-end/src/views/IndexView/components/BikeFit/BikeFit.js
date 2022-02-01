import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  image: {
    maxWidth: 400,
  },
  bikeFitLeftSection: {
    background: '#3BB0E5',
    padding: '3rem',
    color: 'white',
  },
}));

const BikeFit = ({ className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container xs={12} md={6}>
          <Grid
            item
            xs={12}
            className={clsx(
              'section-header__title-wrapper',
              classes.bikeFitLeftSection,
            )}
            data-aos="fade-up"
          >
            <Typography
              align="left"
              variant="h4"
              gutterBottom
              className={clsx('section-header__title', classes.title)}
            >
              Bike Fit
            </Typography>

            <Typography
              variant="h6"
              align="left"
              className={clsx('section-header__subtitle')}
            >
              No more pain in your neck, shoulders, back? Do you want to get rid
              of numb feet and hands? Do you want to cycle faster and more
              efficient? Do not hesitate to book a bike fit and get on the bike
              with maximum cycling pleasure.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justify="flex-end" xs={12} md={6}>
          <Image
            src="https://assets.it22.nl/tda/home/bike_fit.png"
            srcSet="https://assets.it22.nl/tda/home/bike_fit.png"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BikeFit;
