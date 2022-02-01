import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { useMediaQuery, Button, Grid } from '@material-ui/core';
import { menu_items } from '../../../../data';
import { Topbar, Sidebar } from '..';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundImage: "url('https://assets.it22.nl/tda/bike-fit/hero.png')",
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
  makeAnAppointmentBtn: {
    background: '#3BB0E5',
    padding: '1rem 2rem',
    marginTop: '1rem',
    color: 'white',
    '&:hover': {
      color: 'white',
      background: '#e9511c',
    },
  },
  makeAnAppointmentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
}));

const Hero = ({ themeMode, className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = openSidebar;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        openSidebar={openSidebar}
        pages={menu_items}
        themeMode={themeMode}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={menu_items}
      />

      <Section className={classes.section}>
        <SectionHeader
          title="Clinics"
          titleVariant="h2"
          subtitle="All our rental bikes are in top condition. We adjust the bike for you,
a helmet and repair kit are included in the price."
          subtitleVariant="h4"
          align="center"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h2',
          }}
          subtitleProps={{
            className: `${classes.textWhite} ${classes.subtitle}`,
          }}
        />
        <Grid
          item
          xs={12}
          className="section-header__label-wrapper"
          className={classes.makeAnAppointmentWrapper}
        >
          <Button
            className={classes.makeAnAppointmentBtn}
            variant="contained"
            size="small"
          >
            Book Now
          </Button>
        </Grid>
      </Section>
    </div>
  );
};

export default Hero;
