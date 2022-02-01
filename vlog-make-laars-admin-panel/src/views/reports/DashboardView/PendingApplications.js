import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  LinearProgress,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  }
}));

const PendingApplications = ({ className, dashboardCounts, ...rest }) => {
  const classes = useStyles();

  const pendingApplicationsPer =
    dashboardCounts?.getRegisteredApplications > 0 &&
    dashboardCounts?.getTotalApplications > 0
      ? (dashboardCounts?.getRegisteredApplications /
          dashboardCounts?.getTotalApplications) *
        100
      : 0;

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Typography
        component="h3"
        gutterBottom
        variant="overline"
        color="textSecondary"
      >
        LOPENDE AANVRAGEN
      </Typography>
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Typography variant="h3" color="textPrimary">
          {pendingApplicationsPer.toFixed(2)}%
        </Typography>
        <LinearProgress
          className={classes.progress}
          value={pendingApplicationsPer}
          color="secondary"
          variant="determinate"
        />
      </Box>
    </Card>
  );
};

PendingApplications.propTypes = {
  className: PropTypes.string
};

export default PendingApplications;
