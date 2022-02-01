import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  Link,
} from '@material-ui/core';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  cardBase: {
    height: '100%',
    alignItems: 'flex-start',
  },
  wrapper: {
    justifyContent: 'center',
    top: '-40px',
    position: 'relative',
    zIndex: 1,
  },
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
    fontSize: '12px',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  priceParent: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  price: {
    fontWeight: 700,
    borderTopLeftRadius: '2rem',
    borderBottomLeftRadius: '2rem',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  perPerson: {
    fontSize: '2rem',
    color: '#AAA9AB',
  },
  accessoryTitle: {
    fontSize: '20px',
    fontWeight: 700,
  },
  fullWidth: {
    width: '100%',
  },
  makeAnAppointmentBtn: {
    border: '1px solid #3BB0E5',
    background: 'white',
    padding: '1rem 2rem',
    marginTop: '1rem',
    color: '#3BB0E5',
    '&:hover': {
      color: 'white',
      background: '#3BB0E5',
    },
  },
  listIcon: {
    paddingRight: '1rem',
  },
}));

const FeaturedPackages = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2} className={classes.wrapper}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase align="left" withShadow liftUp className={classes.cardBase}>
            <div className={classes.fullWidth}>
              <Typography
                variant="h5"
                color="textPrimary"
                align="left"
                fontWeight="bold"
                className={classes.accessoryTitle}
              >
                Try-out package
              </Typography>

              <Typography
                variant="h6"
                color="textPrimary"
                align="left"
                className={classes.subTitle}
              >
                With bicycle!
              </Typography>

              <div className={classes.priceParent}>
                <div className={classes.price}>
                  <div className={classes.fullWidth}>
                    €60{' '}
                    <Typography
                      component={'span'}
                      variant={'body2'}
                      color="textPrimary"
                      align="left"
                      fontWeight="bold"
                      className={classes.perPerson}
                    >
                      /person
                    </Typography>
                  </div>
                </div>
              </div>

              <List disablePadding className={classes.list}>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/check-icon.png"
                  />
                  5 training sessions
                </ListItem>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/check-icon.png"
                  />
                  Racing bike
                </ListItem>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/check-icon.png"
                  />
                  Helmet
                </ListItem>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/check-icon.png"
                  />
                  Cycling shoes
                </ListItem>
              </List>
              <a href="/clinics-booking">
                <Button
                  className={classes.makeAnAppointmentBtn}
                  variant="contained"
                  size="small"
                  fullWidth
                >
                  Book Now
                </Button>
              </a>
            </div>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase align="left" withShadow liftUp className={classes.cardBase}>
            <div className={classes.fullWidth}>
              <Typography
                variant="h5"
                color="textPrimary"
                align="left"
                fontWeight="bold"
                className={classes.accessoryTitle}
              >
                Cycling training
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                align="left"
                className={classes.subTitle}
              >
                Own racing bike
              </Typography>

              <div className={classes.priceParent}>
                <div className={classes.price}>
                  <div className={classes.fullWidth}>
                    €150{' '}
                    <Typography
                      component={'span'}
                      variant={'body2'}
                      color="textPrimary"
                      align="left"
                      fontWeight="bold"
                      className={classes.perPerson}
                    >
                      /person
                    </Typography>
                  </div>
                </div>
              </div>

              <List disablePadding className={classes.list}>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/check-icon.png"
                  />
                  5 training sessions
                </ListItem>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/times-icon.png"
                  />
                  Racing bike
                </ListItem>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/times-icon.png"
                  />
                  Helmet
                </ListItem>
                <ListItem
                  disableGutters
                  data-aos="fade-up"
                  className={classes.listItem}
                >
                  <Image
                    className={classes.listIcon}
                    src="https://assets.it22.nl/tda/clinics/times-icon.png"
                  />
                  Cycling shoes
                </ListItem>
              </List>

              <a href="/clinics-booking">
                <Button
                  className={classes.makeAnAppointmentBtn}
                  variant="contained"
                  size="small"
                  fullWidth
                >
                  Book Now
                </Button>
              </a>
            </div>
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

FeaturedPackages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FeaturedPackages;
