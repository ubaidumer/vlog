import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inner: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const Wrapper = ({
  selectedTour,
  children,
  innerNarrowed,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <section
      className={clsx('section-alternate', className)}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://assets.it22.nl/tda/home/review-bg.png)',
      }}
      {...rest}
    >
      <div
        className={clsx(
          'section-alternate__content',
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {},
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
