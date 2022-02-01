import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  wrapper: {},
  cardBase: {
    height: '100%',
    alignItems: 'flex-start',
    background: 'rgba(233, 81, 28, 0.5);',
  },
  bookNowBtn: {
    background: 'color',
    padding: '1rem 2rem',
    marginTop: '1rem',
    color: '#e9511c',
    '&:hover': {
      color: 'white',
      background: '#e9511c',
    },
  },
  listItem: {
    color: 'white',
  },
  listIcon: {
    paddingRight: '1rem',
  },
  paddingZero: {
    padding: 0,
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
  },
  subTitle: {
    color: 'white',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontSize: 12,
  },
  completeServiceCheckImage: {
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundSize: 'cover',
    marginTop: '-15rem',
    backgroundPosition: 'center',
    flexDirection: 'column-reverse',
    display: 'flex',
  },
}));

const CompleteServiceCheck = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  let [currentTab, serCurrentTab] = useState(0);

  const onTabChange = (event, newValue) => {
    serCurrentTab(newValue);
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.wrapper} {...rest}>
      <div className={classes.swiperContainer} data-aos="fade-up">
        <div
          className={classes.completeServiceCheckImage}
          style={{
            backgroundImage:
              "url('https://assets.it22.nl/tda/maintenance-and-repairs/complete-service-check.png')",
          }}
        >
          <Section>
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
                    Complete Service Check
                  </Typography>

                  <Typography
                    variant="h6"
                    align="left"
                    className={clsx(
                      'section-header__subtitle',
                      classes.subTitle,
                    )}
                  >
                    All the maintenance your bike needs to keep performing.
                  </Typography>
                  <Typography
                    align="left"
                    variant="h4"
                    gutterBottom
                    className={clsx('section-header__title', classes.title)}
                  >
                    Only for €60
                  </Typography>
                  <Button
                    className={classes.bookNowBtn}
                    variant="contained"
                    size="small"
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>

              <Grid item container justify="flex-end" xs={12} md={4}>
                <CardBase
                  align="left"
                  withShadow
                  liftUp
                  className={classes.cardBase}
                >
                  <div className={classes.fullWidth}>
                    <List disablePadding className={classes.list}>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Adjust / check brakes
                      </ListItem>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Adjust / check chain or belt
                      </ListItem>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Adjust and check hubs
                      </ListItem>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Tension spokes and align wheels
                      </ListItem>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Adjust / check steering head
                      </ListItem>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Adjust / check crankshaft
                      </ListItem>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Checking / inflating tires
                      </ListItem>
                      <ListItem
                        disableGutters
                        data-aos="fade-up"
                        className={classes.listItem}
                      >
                        <Image
                          className={classes.listIcon}
                          src="https://assets.it22.nl/tda/maintenance-and-repairs/white-check-icon.png"
                        />
                        Retighten nuts and bolts
                      </ListItem>
                    </List>
                  </div>
                </CardBase>
              </Grid>
            </Grid>
          </Section>
        </div>
      </div>
    </div>
  );
};

CompleteServiceCheck.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default CompleteServiceCheck;
