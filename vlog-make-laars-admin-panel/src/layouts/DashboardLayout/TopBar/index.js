import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
  Typography
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import Logo from 'src/components/Logo';
import Account from './Account';
import Logout from './Logout';
import Search from './Search';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    boxShadow: '0px 0px 0px rgb(63 63 68 / 5%), 0px 1px 2px rgb(63 63 68 / 15%)',
    backgroundColor: 'white'
  },
  toolbar: {
    minHeight: 64
  },
  menu: {
    [theme.breakpoints.down('md')]: {
      color:theme.palette.secondary.main,
      marginRight:'10px'
    },
    '&:hover': {
      background: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
      color:'white'
    },

  
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <SvgIcon fontSize="small" className={classes.menu}>
              <MenuIcon />
              
            </SvgIcon>
          </IconButton>
        </Hidden>
       
          <RouterLink to="/">
            <Logo />
            
          </RouterLink>
    
        <Box ml={2} flexGrow={1} />
        <Search />
        {/* <Notifications /> */}
        <Logout />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => {}
};

export default TopBar;
