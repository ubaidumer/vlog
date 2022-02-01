import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    maxWidth: theme.layout.contentWidth,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  heroRightSide: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 8),
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '500px',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2),
    },
  },
  heroLeftSide: {
    maxWidth: '50%',
    flex: '0 0 50%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '500px',
      width: '100%',
    },
  },
  heroCover: {
    position: 'relative',
    width: '50vw',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroImageContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    left: '0%',
    width: '100%',
    height: '100%',
  },
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShapedLeftSide = props => {
  const { leftSide, rightSide, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
      <div className={clsx('hero-shaped__wrapper', classes.hero)}>
        <div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
          <div className={clsx('hero-shaped__cover', classes.heroCover)}>
            <div
              className={clsx(
                'hero-shaped__image-container',
                classes.heroImageContainer,
              )}
            >
              <div className={clsx('hero-shaped__image', classes.heroImage)}>
                {leftSide}
              </div>
            </div>
          </div>
        </div>
        <Section
          className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
        >
          {rightSide}
        </Section>
      </div>
    </div>
  );
};

HeroShapedLeftSide.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section right side
   */
  rightSide: PropTypes.node.isRequired,
  /**
   * Children to placed inside the section left side
   */
  leftSide: PropTypes.node.isRequired,
};

export default HeroShapedLeftSide;
