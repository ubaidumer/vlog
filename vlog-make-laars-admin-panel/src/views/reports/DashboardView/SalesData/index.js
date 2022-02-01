import React, { useEffect, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  makeStyles
} from '@material-ui/core';
import { GraphQLClient, gql } from 'graphql-request';

import GenericMoreButton from 'src/components/GenericMoreButton';
import Chart from './Chart';

const useStyles = makeStyles(() => ({
  root: {},
  chart: {
    height: '100%'
  }
}));

const SalesData = ({ className, ...rest }) => {
  const classes = useStyles();
  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    getSalesData();
  }, []);

  const getSalesData = () => {
    (async () => {
      const query = gql`
        {
          getSaleData
        }
      `
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_INVOICE_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLClient.request(query).then(data => {
        setSaleData(JSON.parse(data?.getSaleData));
      });
    })().catch(err => {
      //console.error("errors",err);
    });
  }

  const performance = {
    thisWeek: {
      data: [],
      labels: []
    },
    thisMonth: {
      data: [],
      labels: []
    },
    thisYear: {
      data: saleData,
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  };
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Omzet Data" />
      <Divider />
      <CardContent>
        <PerfectScrollbar>
          <Box height={375} minWidth={500}>
            <Chart
              className={classes.chart}
              data={performance.thisYear.data}
              labels={performance.thisYear.labels}
            />
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

SalesData.propTypes = {
  className: PropTypes.string
};

export default SalesData;
