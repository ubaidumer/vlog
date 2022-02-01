import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  grid: {
    maxWidth: '100%',
    background: '#1A2A49',
  },
  title: {
    color: 'white',
    fontWeight: 700,
    marginBottom: '2rem',
  },
  subTitle: {
    color: 'white',
  },
}));

const TulipsTour = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item container alignItems="center" xs={12} md={5}>
          <Section data-aos="fade-up">
            <Typography
              variant="h2"
              noWrap
              color="textSecondary"
              className={classes.title}
            >
              Tulip Tour
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.subTitle}
            >
              We perform all types of maintenance on your racing bike, mountain
              bike, gravel / cross bike, holiday bike or hybrid bike.
            </Typography>
          </Section>
        </Grid>
        <Grid item xs={12} md={7} data-aos="fade-up">
          <Image
            src="https://assets.it22.nl/tda/gallery/tulip-tour-vector.png"
            lazy={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TulipsTour;
