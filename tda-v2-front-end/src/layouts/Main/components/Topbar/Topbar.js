import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Image } from 'components/atoms';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    color: '#fff',
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  stickyIconButton: {
    color: '#3BB0E5',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: '15rem',
    height: '3rem',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  image: {
    minHeight: 400,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  topBar: {
    transition: 'all 0.35s ease',
  },
  stickyNavBar: {
    background: 'white',
    position: 'fixed',
    top: 0,
    width: '100vw',
    height: '9vh',
    boxShadow: 'rgb(43 83 135 / 8%) 0px 3px 8px 0px',
    border: '1px solid rgba(255, 255, 255, 1)',
    zIndex: 1000,
    transition: 'all 0.35s ease',
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  openSidebar,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const [stickyNavBar, setStickyNavBar] = useState(false);
  const [logo, setLogo] = useState('https://assets.it22.nl/tda/logo_white.png');

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setStickyNavBar(true);
      setLogo('https://assets.it22.nl/tda/logo.png');
    } else {
      setLogo('https://assets.it22.nl/tda/logo_white.png');
      setStickyNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  let menuIcon = openSidebar ? <MenuOpenIcon /> : <MenuIcon />;

  return (
    <Toolbar
      disableGutters
      className={clsx(classes.topBar, stickyNavBar ? classes.stickyNavBar : '')}
    >
      <div className={classes.toolbar} {...rest}>
        <div className={classes.logoContainer}>
          <a href="/" title="Tour de Amsterdam Home">
            <Image
              className={classes.logoImage}
              src={logo}
              alt="Tour de Amsterdam Logo"
              lazy={true}
            />
          </a>
        </div>
        <div className={classes.flexGrow} />
        <IconButton
          className={clsx(
            classes.iconButton,
            stickyNavBar ? classes.stickyIconButton : '',
          )}
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
        >
          {menuIcon}
        </IconButton>
      </div>
    </Toolbar>
  );
};

export default Topbar;
