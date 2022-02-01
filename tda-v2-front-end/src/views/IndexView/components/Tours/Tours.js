import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, NoSsr } from '@material-ui/core';
import { Image } from 'components/atoms';
import CardBase from './CardBase';

const useStyles = makeStyles(theme => ({
  cardBase: {
    background: 'transparent',
    '&:hover': {
      background: 'rgba(59, 176, 229, 1)',
      '& .card-icon, & .card-title': {
        color: 'white',
      },
    },
  },
  icon: {
    fontSize: 60,
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      fontSize: 80,
    },
  },
  title: {
    color: 'white',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
  subtitle: {
    color: 'white',
    margin: '2rem 0 4rem',
  },
}));

const Tours = ({ setSelectedTour, className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let tourIsChanged = tour => {
    setSelectedTour(tour);
  };

  return (
    <div className={className} {...rest}>
      <Grid
        item
        xs={12}
        className="section-header__title-wrapper"
        data-aos="fade-up"
      >
        <Typography
          align="center"
          variant="h4"
          className={clsx('section-header__title', classes.title)}
          color="textPrimary"
        >
          Tours
        </Typography>
      </Grid>

      <Grid item xs={12} className="section-header__subtitle-wrapper">
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          className={clsx('section-header__subtitle', classes.subtitle)}
        >
          Join us for a guided tour on our favourite routes. Our experienced and
          well informed guides will take you to the beautiful surroundings of
          Amsterdam that remain hidden for most tourists. Riding the best
          cycling path network of the world completes a perfect day on the bike.
        </Typography>
      </Grid>

      <Grid container spacing={isMd ? 4 : 2}>
        <Grid
          onClick={() => tourIsChanged('tour-de-omloop')}
          item
          xs={12}
          sm={4}
          data-aos="fade-up"
        >
          <CardBase withShadow liftUp className={classes.cardBase}>
            <>
              <div>
                <NoSsr>
                  <Image
                    className={clsx(
                      classes.icon,
                      'fas fa-door-open',
                      'card-icon',
                    )}
                    src={
                      'https://assets.it22.nl/tda/home/tour-de-omloop-category.png'
                    }
                    alt="thefront"
                    lazy={true}
                  />
                </NoSsr>
              </div>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                noWrap
                className={clsx(classes.title, 'card-title')}
              >
                Tour de Omloop
              </Typography>
            </>
          </CardBase>
        </Grid>
        <Grid
          onClick={() => tourIsChanged('tulip')}
          item
          xs={12}
          sm={4}
          data-aos="fade-up"
        >
          <CardBase withShadow liftUp className={classes.cardBase}>
            <>
              <div>
                <NoSsr>
                  <Image
                    className={clsx(
                      classes.icon,
                      'fas fa-door-open',
                      'card-icon',
                    )}
                    src={'https://assets.it22.nl/tda/home/tulip-category.png'}
                    alt="thefront"
                    lazy={true}
                  />
                </NoSsr>
              </div>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                noWrap
                className={clsx(classes.title, 'card-title')}
              >
                Tulip Tour
              </Typography>
            </>
          </CardBase>
        </Grid>
        <Grid
          onClick={() => tourIsChanged('tailor-made-tour')}
          item
          xs={12}
          sm={4}
          data-aos="fade-up"
        >
          <CardBase withShadow liftUp className={classes.cardBase}>
            <>
              <div>
                <NoSsr>
                  <Image
                    className={clsx(
                      classes.icon,
                      'fas fa-door-open',
                      'card-icon',
                    )}
                    src={
                      'https://assets.it22.nl/tda/home/tailor-made-tour-category.png'
                    }
                    alt="thefront"
                    lazy={true}
                  />
                </NoSsr>
              </div>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                noWrap
                className={clsx(classes.title, 'card-title')}
              >
                Tailor-made tour
              </Typography>
            </>
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tours;
