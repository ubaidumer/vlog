import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, Typography, makeStyles } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    height: 48,
    width: 48
  }
}));

const TotalHousesOnline = ({ className, dashboardCounts, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography
          color="inherit"
          component="h3"
          gutterBottom
          variant="overline"
        >
          TOTAAL HUIZEN ON-LINE
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography color="inherit" variant="h3">
            {dashboardCounts?.getReviewedHouses > 0 ? dashboardCounts?.getReviewedHouses : 0}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

TotalHousesOnline.propTypes = {
  className: PropTypes.string
};

export default TotalHousesOnline;
