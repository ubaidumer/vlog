import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Button,
  Breadcrumbs,
  Box,
  Link,
  Dialog,
  Grid,
  Typography,
  makeStyles,
  Hidden
} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    },
    fontSize: '30px'
  }
}));

const Header = (props, { className, invoice, ...rest }) => {
  const classes = useStyles();
  const [viewPDF, setViewPDF] = useState(false);
  const [modClose, setModClose] = useState(false);

  let handleModalClose = () => {
    setModClose(true);
  };

  return (
    <Grid
      style={{ backgroundColor: '#FAFAFA' }}
      container
      justify="space-between"
      spacing={1}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item style={{ marginLeft: '20px' }}>
        <Typography variant="subtitle1" color="textSecondary">
          E-mail
        </Typography>
        <Typography variant="h3" color="textPrimary">
          E-mail Bewerken
        </Typography>
      </Grid>
      <Grid item>
        <Hidden smDown>
          <Button
            className={classes.action}
            onClick={() => setViewPDF(true)}
          ></Button>
        </Hidden>

        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => props.handleModalClose()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2028 10L19.6805 2.52146C19.8862 2.3156 19.9997 2.04095 20 1.74808C20 1.45505 19.8865 1.18008 19.6805 0.974535L19.0252 0.31937C18.8192 0.113015 18.5446 0 18.2514 0C17.9587 0 17.6841 0.113015 17.478 0.31937L10.0003 7.79742L2.52228 0.31937C2.31659 0.113015 2.04179 0 1.74878 0C1.4561 0 1.1813 0.113015 0.97561 0.31937L0.32 0.974535C-0.106667 1.40123 -0.106667 2.09526 0.32 2.52146L7.79789 10L0.32 17.4782C0.114146 17.6844 0.000813008 17.9591 0.000813008 18.2519C0.000813008 18.5448 0.114146 18.8194 0.32 19.0255L0.975447 19.6806C1.18114 19.8868 1.4561 20 1.74862 20C2.04163 20 2.31642 19.8868 2.52211 19.6806L10.0002 12.2024L17.4779 19.6806C17.6839 19.8868 17.9585 20 18.2512 20H18.2515C18.5444 20 18.819 19.8868 19.025 19.6806L19.6803 19.0255C19.886 18.8196 19.9995 18.5448 19.9995 18.2519C19.9995 17.9591 19.886 17.6844 19.6803 17.4784L12.2028 10Z"
              fill="#3F3F3F"
            />
          </svg>
        </Typography>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  invoice: PropTypes.object.isRequired.color
};

export default Header;
