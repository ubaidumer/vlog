import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import { Icon } from 'components/atoms';

import {
  useMediaQuery,
  Grid,
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { menu_items } from '../../../../data';
import { Topbar, Sidebar } from '..';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundImage: "url('https://assets.it22.nl/tda/blog/hero.png')",
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
  SearchBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  searchInputContainer: {
    marginTop: '1.75rem',
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    background: '#3BB0E5',
    padding: '1rem 2rem',
    color: 'white',
    '&:hover': {
      color: 'white',
      background: '#e9511c',
    },
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
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
        <>
          <SectionHeader
            title="Our Newsroom"
            titleVariant="h2"
            subtitle="We are founded by a leading academic and researcher in the field of Industrial Systems Engineering."
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

          <div className={classes.searchInputContainer} data-aos="fade-up">
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      fontIconClass="fas fa-search"
                      fontIconColor={colors.blueGrey[900]}
                    />
                  </InputAdornment>
                }
                placeholder="Search our articles"
              />
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.searchButton}
            >
              Search
            </Button>
          </div>
        </>
      </Section>
    </div>
  );
};

export default Hero;
