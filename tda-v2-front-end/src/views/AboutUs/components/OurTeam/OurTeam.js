import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Divider, Avatar } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  webinarAvatar: {
    width: 150,
    height: 150,
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
  divider: {
    marginBottom: '3.25rem',
  },
  label: {
    color: '#2d3748',
    fontWeight: 700,
  },
}));

function getOddMember(props) {
  const { item, isMd, classes } = props;
  return (
    <>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={4}
        justify={isMd ? 'flex-end' : 'center'}
        alignItems="flex-start"
      >
        <Avatar
          {...item.image}
          alt={item.name}
          className={classes.webinarAvatar}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <SectionHeader
          label={item.name}
          labelVariant="h4"
          labelProps={{ className: classes.label }}
          title={item.designation}
          titleVariant="h6"
          subtitle={item.description}
          align={isMd ? 'left' : 'center'}
          disableGutter
        />
      </Grid>
    </>
  );
}

function getEvenMember(props) {
  const { item, isMd, classes } = props;
  return (
    <>
      <Grid item xs={12} sm={12} md={8}>
        <SectionHeader
          label={item.name}
          labelVariant="h4"
          labelProps={{ className: classes.label }}
          title={item.designation}
          titleVariant="h6"
          subtitle={item.description}
          align={isMd ? 'left' : 'center'}
          disableGutter
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={4}
        justify={isMd ? 'flex-end' : 'center'}
        alignItems="flex-start"
      >
        <Avatar
          {...item.image}
          alt={item.name}
          className={classes.webinarAvatar}
        />
      </Grid>
    </>
  );
}

const OurTeam = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our Story"
        subtitle="Tour de Amsterdam was founded in 2015 by Jelte Sinnema. What started with guiding road bikers on a tour and renting out ten road bikes from the living room, has now grown into a beautiful shop specialised in road bikes, gravel bikes and hybrid/holiday bikes. And we now have more than 50 different good quality rental bikes. We still love to take you with us on the bike for one of our tours. On top of that we have been so lucky to build quite some new road bikers with our beginner clinics.
Passion for cycling and traveling is still at the core of Tour de Amsterdam."
        fadeUp
      />
      <SectionHeader
        title="Future vision"
        subtitle="In the future we hope to offer tours throughout the Netherlands and even rod bike holidays in the future. The Netherlands have so much beauty to offer and Tour de Amsterdam is happy to show you these special places. If you have any suggestions for this, please let us know!"
        fadeUp
      />
      <Grid container justify="center">
        {data.map((item, index) => (
          <>
            <Grid
              key={index}
              item
              container
              data-aos={'fade-up'}
              justify="space-between"
              spacing={isMd ? 4 : 2}
              className={classes.listGrid}
              direction="row-reverse"
            >
              {index % 2 === 0
                ? getEvenMember({ item, isMd, classes })
                : getOddMember({ item, isMd, classes })}
            </Grid>

            {data.length !== index + 1 ? (
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
            ) : (
              ''
            )}
          </>
        ))}
      </Grid>
    </div>
  );
};

OurTeam.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default OurTeam;
