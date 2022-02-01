import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  image: {
    marginTop: '1rem',
    objectFit: 'contain',
  },
  bikeFitLeftSection: {},
  makeAnAppointmentBtn: {
    marginTop: '2rem',
    background: '#3BB0E5',
    padding: '1rem 2rem',
    color: 'white',
    border: '1px solid #3BB0E5',
    '&:hover': {
      background: 'white',
      color: '#3BB0E5',
    },
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
              How does a bike fit work?
            </Typography>

            <Typography
              variant="h6"
              align="left"
              className={clsx('section-header__subtitle')}
            >
              First of all, you always do a bike fit to sit better on your bike.
              During the bikefit we work for two hours on testing and adjusting
              your (future) bike. At the end of the measurement you will have a
              bike that fits your body and riding style well. Because a bikefit
              makes you sit better on your bike, a bike fit is recommended for
              everyone; cycling suddenly becomes (even) more fun! It could be
              the right start now that you've just bought your new racing
              monster. Or you want to get rid of the complaints that arise -
              sometimes only after a few hours. Frequently heard complaints that
              we can remedy with a bike fit are, for example: Saddle pain,
              Tingling in feet and hands, Pain in the back, neck and shoulders.
              'Cycling is suffering' and 'pain is part of it', you never have to
              think this after a bike fit! Pain on the bike is really not
              necessary. We offer our customers a free bike fit when purchasing
              a bicycle.
            </Typography>
            <Button
              className={classes.makeAnAppointmentBtn}
              variant="contained"
              size="small"
            >
              Make An Appointment
            </Button>
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
