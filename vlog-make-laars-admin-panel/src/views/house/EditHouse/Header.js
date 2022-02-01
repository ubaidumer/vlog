import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Grid,
  Typography,
  Breadcrumbs,
  makeStyles,
  Link
} from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {},
  addNew: {
    border: `1px solid ${theme.palette.secondary.main}`,
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.background.default
    }
  }
}));

const Header = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justify="space-between"
      alignItems="center"
      spacing={3}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/admin/dashboard"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/admin/huizen"
            component={RouterLink}
          >
            Huizens
          </Link>
          <Typography variant="body1" color="textPrimary">
            Edit Huizen
          </Typography>
        </Breadcrumbs>

        <Typography variant="h3" color="textPrimary">
          Nieuw Huis Toevoegen
        </Typography>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
