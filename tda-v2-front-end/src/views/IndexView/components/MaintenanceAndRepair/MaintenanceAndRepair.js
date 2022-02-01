import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  grid: {
    maxWidth: '100%',
    background: '#1A2A49',
  },
  textWhite: {
    color: 'white',
  },
  learnMore: {
    background: '#FFFFFF',
    fontWeight: 700,
    textTransform: 'capitalize',
  },
}));

const MaintenanceAndRepair = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={7} data-aos="fade-up">
          <Image
            src="https://assets.it22.nl/tda/home/maintenance_and_repairs.png"
            lazy={false}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={5}>
          <Section>
            <SectionHeader
              title={
                <span className={classes.textWhite}>Maintenance & Repairs</span>
              }
              titleVariant="h3"
              description={
                <span className={classes.textWhite}>
                  We perform all types of maintenance on your racing bike,
                  mountain bike, gravel / cross bike, holiday bike or hybrid
                  bike.
                </span>
              }
              ctaGroup={[
                <a href="/maintenance-and-repairs">
                  <Button
                    className={classes.learnMore}
                    variant="contained"
                    size="large"
                  >
                    Learn More
                  </Button>
                </a>,
              ]}
              align="left"
              disableGutter
              data-aos="fade-up"
            />
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaintenanceAndRepair;
