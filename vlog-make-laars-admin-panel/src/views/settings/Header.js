import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Grid,
  Typography,
  SvgIcon,
  Breadcrumbs,
  makeStyles,
  Link
} from '@material-ui/core';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3)
  },
  addNewHouse: {
    textTransform: 'capitalize',
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

const Header = (props, { className, ...rest }) => {
  const classes = useStyles();

  const navigateToAddForm = () => {
    window.location.href = '/admin/huizen/create';
  };

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
          <Typography variant="body1" color="textPrimary">
            Instellingen
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          Instellingen
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => props.hello()}
          className={classes.addNewHouse}
          startIcon={
            <SvgIcon fontSize="small">
              <PlusCircleIcon />
            </SvgIcon>
          }
        >
          Nieuwe Admin
        </Button>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
