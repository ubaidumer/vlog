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
    backgroundImage: "url('https://assets.it22.nl/tda/contact-us/hero.png')",
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
          title="Contact Us"
          titleVariant="h2"
          subtitle="Life is like riding a bicycle. To keep your balance, you must keep moving."
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
