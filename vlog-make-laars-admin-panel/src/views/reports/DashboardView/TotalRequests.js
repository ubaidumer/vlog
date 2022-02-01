import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, Typography, makeStyles } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpenOutlined';
import Label from 'src/components/Label';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

const TotalRequests = ({ className, dashboardCounts, ...rest }) => {
  const classes = useStyles();

  const todayApplicationDiff =
    dashboardCounts?.getTotalApplications > 0
      ? dashboardCounts?.getTotalApplications -
        dashboardCounts.getCurrentDateApplicationsRequest
      : 0;

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          TOTAAL AANVRAGEN
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="textPrimary">
            {dashboardCounts?.getTotalApplications > 0 ? dashboardCounts?.getTotalApplications : 0}
          </Typography>
          <Label
            className={classes.label}
            color={todayApplicationDiff > 0 ? 'success' : 'error'}
          >
            {todayApplicationDiff > 0 ? '+' : ''}
            {todayApplicationDiff}%
          </Label>
        </Box>
      </Box>
    </Card>
  );
};

TotalRequests.propTypes = {
  className: PropTypes.string
};

export default TotalRequests;
