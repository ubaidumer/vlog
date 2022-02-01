import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, NoSsr } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  cardBase: {},
  image: {
    marginTop: 15,
  },
  title: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
  subTitle: {
    color: '#908FA2',
    fontSize: '12px',
  },
  priceParent: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    position: 'relative',
    left: '55px',
  },
  price: {
    background: '#3BB0E5',
    color: 'white',
    fontWeight: 700,
    padding: '1rem',
    textAlign: 'center',
    borderTopLeftRadius: '2rem',
    borderBottomLeftRadius: '2rem',
    textTransform: 'uppercase',
    fontSize: '.825rem',
  },
  withRental: {
    textTransform: 'uppercase',
    fontSize: '0.6rem',
    color: 'white',
  },
  accessoryTitle: {
    textTransform: 'uppercase',
    fontSize: '1rem',
  },
}));

const Accessories = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Accessories"
        subtitle="View message performance and test against control."
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                fontWeight="bold"
                className={classes.accessoryTitle}
              >
                Navigation
              </Typography>

              <Typography
                variant="h6"
                color="textPrimary"
                align="center"
                className={classes.subTitle}
              >
                Garmin Edge 100
              </Typography>
              <NoSsr>
                <Image
                  src="https://assets.it22.nl/tda/rental/gps-icon.png"
                  className={classes.image}
                  alt="Navigation"
                  lazy={true}
                />
              </NoSsr>
              <div className={classes.priceParent}>
                <Typography noWrap className={classes.price}>
                  € 5 / day
                </Typography>
              </div>
            </div>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                fontWeight="bold"
                className={classes.accessoryTitle}
              >
                Cycling shoes
              </Typography>

              <Typography
                variant="h6"
                color="textPrimary"
                align="center"
                className={classes.subTitle}
              >
                All sizes
              </Typography>
              <NoSsr>
                <Image
                  src="https://assets.it22.nl/tda/rental/shoe-icon.png"
                  className={classes.image}
                  alt="Navigation"
                  lazy={true}
                />
              </NoSsr>
              <div className={classes.priceParent}>
                <Typography noWrap className={classes.price}>
                  € 5 / day
                </Typography>
              </div>
            </div>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                fontWeight="bold"
                className={classes.accessoryTitle}
              >
                Helmet
              </Typography>

              <Typography
                variant="h6"
                color="textPrimary"
                align="center"
                className={classes.subTitle}
              >
                All sizes
              </Typography>
              <NoSsr>
                <Image
                  src="https://assets.it22.nl/tda/rental/helmet-icon.png"
                  className={classes.image}
                  alt="Navigation"
                  lazy={true}
                />
              </NoSsr>
              <div className={classes.priceParent}>
                <div className={classes.price}>
                  <div>
                    Free{' '}
                    <Typography
                      component={'span'}
                      variant={'body2'}
                      color="textPrimary"
                      align="center"
                      fontWeight="bold"
                      className={classes.withRental}
                    >
                      with rental
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                fontWeight="bold"
                className={classes.accessoryTitle}
              >
                WATER DRINKING BOTTLE
              </Typography>

              <Typography
                variant="h6"
                color="textPrimary"
                align="center"
                className={classes.subTitle}
              >
                750ml
              </Typography>
              <NoSsr>
                <Image
                  src="https://assets.it22.nl/tda/rental/bottle-icon.png"
                  className={classes.image}
                  alt="Navigation"
                  lazy={true}
                />
              </NoSsr>
              <div className={classes.priceParent}>
                <Typography noWrap className={classes.price}>
                  € 6 / day
                </Typography>
              </div>
            </div>
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

Accessories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Accessories;
