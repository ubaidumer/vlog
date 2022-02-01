import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Typography, colors } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  learnMoreLink: {
    marginTop: theme.spacing(2),
  },
}));

const Clinics = ({ data, className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={<span>Clinics</span>}
        subtitle="All our rental bikes are in top condition. We adjust the bike for you,
        a helmet and repair kit are included in the price. "
        fadeUp
      />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined" align="left">
              <>
                <DescriptionListIcon
                  icon=""
                  title={item.title}
                  subtitle={item.description}
                  align="left"
                />
                <div style={{ flexGrow: 1 }} />
                <LearnMoreLink
                  href={item.link}
                  title="Learn more"
                  variant="body1"
                  className={classes.learnMoreLink}
                  color="secondary"
                />
              </>
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Clinics;
