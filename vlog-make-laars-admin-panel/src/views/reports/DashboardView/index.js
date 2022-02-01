import React, { useState, useEffect } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import TopHouses from './TopHouses';
import TotalRequests from './TotalRequests';
import SalesData from './SalesData';
import RealTime from './RealTime';
import TotalHousesOnline from './TotalHousesOnline';
import PendingApplications from './PendingApplications';
import TeamTasks from './NewHousesReview';
import TodayTurnover from './TodayTurnover';

import { GraphQLClient, gql } from 'graphql-request';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const DashboardView = () => {
  const classes = useStyles();

  const [dashboardCounts, setDashboardCounts] = useState([]);
  const [totalInvoiceAmount, setTotalInvoiceAmount] = useState(0);

  const getAdminDashboardCounts = () => {
    {
      const query = gql`
        query {
          getAdminDashboardCounts {
            getCurrentDateApplicationsRequest
            getRegisteredApplications
            getTotalApplications
            getHouses
            getReviewedHouses
            getEnduser
            getClient
            getActiveUser
          }
        }
      `;

      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );

      (async () => {
        await graphQLClient.request(query).then(data => {
          setDashboardCounts(data?.getAdminDashboardCounts);
        });
      })().catch(err => {
        //console.error(err);
      });
    }
  };

  const getTotalInvoiceAmount = () => {
    {
      const query = gql`
        {
          totalInvoiceAmount
        }
      `;

      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_INVOICE_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );

      (async () => {
        await graphQLClient.request(query).then(data => {
          setTotalInvoiceAmount(data?.totalInvoiceAmount);
        });
      })().catch(err => {
        //console.error(err);
      });
    }
  };

  useEffect(() => {
    getAdminDashboardCounts();
    getTotalInvoiceAmount();
  }, []);

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <TodayTurnover totalInvoiceAmount={totalInvoiceAmount} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <TotalRequests dashboardCounts={dashboardCounts} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <PendingApplications dashboardCounts={dashboardCounts} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <TotalHousesOnline dashboardCounts={dashboardCounts} />
          </Grid>
          <Grid item lg={3} xs={12}>
            <RealTime dashboardCounts={dashboardCounts} />
          </Grid>
          <Grid item lg={9} xs={12}>
            <SalesData />
          </Grid>
          <Grid item lg={5} xl={4} xs={12}>
            <TeamTasks />
          </Grid>
          <Grid item lg={7} xl={8} xs={12}>
            <TopHouses />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardView;
