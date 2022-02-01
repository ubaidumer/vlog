import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Map } from 'components/organisms';

import { HeroShapedLeftSide, HeroShapedRightSide } from '../';

const useStyles = makeStyles(() => ({
  map: {
    zIndex: 9,
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
  title: {
    fontWeight: 700,
  },
  largeContentIcon: {
    background: 'transparent',
    borderRadius: 0,
    position: 'relative',
    top: -18,
  },
}));

const Contact = props => {
  const {
    locationAmsterdamMapData,
    locationUtrechtMapData,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroShapedLeftSide
        leftSide={
          <Map
            center={[52.3540497, 4.8558883]}
            pins={locationAmsterdamMapData}
            className={classes.map}
          />
        }
        rightSide={
          <div>
            <Typography
              variant="h5"
              display="block"
              fontWeight="800"
              gutterBottom
              className={classes.title}
            >
              Location Amsterdam
            </Typography>
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/phone-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/phone-icon.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Phone"
                  secondary="+ 31 6 81092633"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/mail-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/mail-icon.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary="info@tourdeamsterdam.nl"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/marker-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/marker-icon.png 2x"
                    className={classes.largeContentIcon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Location"
                  secondary={
                    <>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        Marco Polostraat 234H
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        1056 DP Amsterdam
                      </Typography>
                    </>
                  }
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/clock-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/clock-icon.png 2x"
                    className={classes.largeContentIcon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Shop opening times"
                  secondary={
                    <>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        Tuesday till Sunday, 9am till 5.30pm
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        (open by appointment)
                      </Typography>
                    </>
                  }
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            </List>
          </div>
        }
      />

      <HeroShapedRightSide
        leftSide={
          <div>
            <Typography
              className={classes.title}
              variant="h5"
              display="block"
              gutterBottom
            >
              Location Utrecht
            </Typography>
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/phone-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/phone-icon.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Phone"
                  secondary="+ 31 6 81092633"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/mail-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/mail-icon.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary="info@tourdeamsterdam.nl"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/marker-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/marker-icon.png 2x"
                    className={classes.largeContentIcon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Location"
                  secondary={
                    <>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        Burg. Huydecoperweg 26,
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        3615 HD Westbroek/Utrecht
                      </Typography>
                    </>
                  }
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.it22.nl/tda/contact-us/clock-icon.png"
                    srcSet="https://assets.it22.nl/tda/contact-us/clock-icon.png 2x"
                    className={classes.largeContentIcon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Timings"
                  secondary={
                    <>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        dinsdag – zondag: 9.00 – 17.30
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                      >
                        (open op afspraak)
                      </Typography>
                    </>
                  }
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            </List>
          </div>
        }
        rightSide={
          <Map
            center={[52.1490329, 5.1237378]}
            pins={locationUtrechtMapData}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
