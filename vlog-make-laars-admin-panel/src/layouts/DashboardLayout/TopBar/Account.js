import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import jwtDecode from 'jwt-decode';

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
    borderRadius: 0
  },
  popover: {
    width: 200
  },
  userName: {
    color: '#263238'
  }
}));

const Account = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const { user } = useAuth();
  const [isOpen, setOpen] = useState(false);
  let fullName = '';

  const accessToken = localStorage.getItem('accessToken');
  const decoded = jwtDecode(accessToken);
  if (decoded) {
    fullName = `${decoded.given_name} ${decoded.family_name}`;
  }
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        {/* <Avatar
          alt="User"
          className={classes.avatar}
          src="https://assets.it22.nl/vlog-make-laars/admin/profile_picture.png"
        /> */}
        <Hidden smDown>
          <Typography
            className={classes.userName}
            variant="h6"
            color="secondary"
          >
            {fullName}
          </Typography>
        </Hidden>
      </Box>
      {/* <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={RouterLink} to="/app/social/profile">
          Profile
        </MenuItem>
        <MenuItem component={RouterLink} to="/app/account">
          Account
        </MenuItem>
      </Menu> */}
    </>
  );
};

export default Account;
