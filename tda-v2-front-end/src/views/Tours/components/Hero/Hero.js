import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { useMediaQuery, Divider } from '@material-ui/core';
import { menu_items } from '../../../../data';
import { Topbar, Sidebar } from '..';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundImage: "url('https://assets.it22.nl/tda/tours/hero.png')",
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
}));

const Hero = ({ tours, themeMode, className, ...rest }) => {
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
          title="Tours"
          titleVariant="h2"
          subtitle="Tour de Amsterdam takes you to beautiful places that remain hidden to most tourists. During the bicycle tours there is minimal traffic disruption and you will mostly ride on designated bicycle lanes - a big big bonus of cycling in the Netherlands! This makes sure we can cycle some proper distance and you can get in the flow. The maximum group size is ten people, so that we are able to adjust the speed to the level of the group. 
Our experienced guides will immerse you in the history of both Amsterdam and the Netherlands. The guide will share interesting anecdotes that bring the environment to life. We speak English, German and Dutch. <br>Read below to decide which tour suits your wishes best. Enjoy the ride!"
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
      </Section>
    </div>
  );
};

export default Hero;
