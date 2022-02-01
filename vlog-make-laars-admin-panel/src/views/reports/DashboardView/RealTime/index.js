import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Chart from './Chart';

const useStyles = makeStyles(theme => ({
  root: {},
  seeAll: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    display: 'flex',
    textDecoration: 'none',
    textTransform: 'unset',
  },
  current: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  }
}));

const RealTime = ({ className, dashboardCounts, ...rest }) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      dashboardCounts?.getActiveUser,
      dashboardCounts?.getHouses,
      dashboardCounts?.getTotalApplications,
      dashboardCounts?.getEnduser,
      dashboardCounts?.getClient
    ]);
  }, [dashboardCounts]);

  const labels = data.map((value, i) => i);

  const pages = [
    {
      pathname: '/houses',
      views: dashboardCounts?.getHouses
    },
    {
      pathname: '/applications',
      views: dashboardCounts?.getTotalApplications
    },
    {
      pathname: '/users',
      views: dashboardCounts?.getEnduser
    },
    {
      pathname: '/clients',
      views: dashboardCounts?.getClient
    }
  ];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={
          <Typography color="inherit" variant="h3">
            {dashboardCounts?.getActiveUser}
          </Typography>
        }
        classes={{ action: classes.current }}
        subheader="Page views"
        subheaderTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
        title="Active Gebruikers"
        titleTypographyProps={{ color: 'textPrimary' }}
      />
      <Chart data={data} labels={labels} />
      <List>
        {pages.map(page => (
          <ListItem divider key={page.pathname}>
            <ListItemText
              primary={page.pathname}
              primaryTypographyProps={{
                color: 'textSecondary',
                variant: 'body2'
              }}
            />
            <Typography color="inherit">{page.views}</Typography>
          </ListItem>
        ))}
        <div style={{paddingBottom: 50}}></div>
      </List>
    </Card>
  );
};

RealTime.propTypes = {
  className: PropTypes.string
};

export default RealTime;
