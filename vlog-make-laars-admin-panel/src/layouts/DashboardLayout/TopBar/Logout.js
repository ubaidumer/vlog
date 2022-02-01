import React, { useRef, useState } from 'react';
import { IconButton, SvgIcon, Tooltip, makeStyles } from '@material-ui/core';
import { LogOut as LogOutIcon } from 'react-feather';
import { useSnackbar } from 'notistack';
import useAuth from 'src/hooks/useAuth';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  icon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  svgIcon: {
    color: '#303030'
  }
}));

const Logout = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const { enqueueSnackbar } = useSnackbar();
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      localStorage.clear();
      await logout();
      history.push('/');
    } catch (err) {
      //console.error(err);
      enqueueSnackbar('Kan niet uitloggen', {
        variant: 'error'
      });
    }
  };

  return (
    <>
      <Tooltip title="Logout">
        <IconButton color="inherit" ref={ref} onClick={handleLogout}>
          <SvgIcon className={classes.svgIcon}>
            <LogOutIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Logout;
