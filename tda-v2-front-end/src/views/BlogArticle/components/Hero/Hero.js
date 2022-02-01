import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  useMediaQuery,
  Grid,
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import { menu_items } from '../../../../data';
import { Topbar, Sidebar } from '..';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundImage: "url('https://assets.it22.nl/tda/blog/hero.png')",
    background: 'white',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2.85rem',
  },
  subtitle: {
    fontSize: '1.25rem',
  },
  section: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 1,
    animationName: 'fadeInOpacity',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in',
    animationDuration: '2s',
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 60,
    width: 60,
  },
}));

const Hero = props => {
  const { className, cover, title, subtitle, author, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div>
        <Section className={classes.section}>
          <>
            <SectionHeader
              title={title}
              subtitle={subtitle}
              align="left"
              data-aos="fade-up"
              titleProps={{
                className: clsx(classes.title, classes.textWhite),
                variant: 'h3',
              }}
              subtitleProps={{
                className: classes.textWhite,
              }}
            />
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    {...author.photo}
                    alt={author.name}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`Published by ${author.name}`}
                  secondary={`on ${author.date}`}
                  primaryTypographyProps={{
                    className: classes.textWhite,
                    variant: 'subtitle1',
                  }}
                  secondaryTypographyProps={{
                    className: classes.textWhite,
                    variant: 'subtitle1',
                  }}
                />
              </ListItem>
            </List>
          </>
        </Section>
      </div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Cover of the hero
   */
  cover: PropTypes.object.isRequired,
  /**
   * Title of the hero
   */
  title: PropTypes.string.isRequired,
  /**
   * Subtitle of the hero
   */
  subtitle: PropTypes.string.isRequired,
  /**
   * Author of the post
   */
  author: PropTypes.object.isRequired,
};

export default Hero;
