import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Typography, colors } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  bookNowBtn: {
    marginTop: 10,
    background: '#3BB0E5',
    padding: '1rem 2rem',
    color: 'white',
    '&:hover': {
      background: 'white',
      border: '1px solid #3BB0E5',
      color: '#3BB0E5',
    },
  },
  activeClinic: {
    border: '1px solid rgba(59, 176, 229)',
    boxShadow:
      '0 .25rem 1rem rgba(59, 176, 229, .5),0 .3rem 0.5rem -.50rem rgba(59, 176, 229) !important',
  },
}));

const Packages = ({ page, data, className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
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
            <CardBase
              className={page === item.link ? classes.activeClinic : ''}
              liftUp
              variant="outlined"
              align="left"
            >
              <>
                <DescriptionListIcon
                  icon=""
                  title={item.title}
                  subtitle={item.description}
                  align="left"
                />
                <div style={{ flexGrow: 1 }} />
                <a href="/clinics-booking">
                  <Button
                    className={classes.bookNowBtn}
                    variant="contained"
                    size="small"
                  >
                    Book Now
                  </Button>
                </a>
              </>
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Packages;
