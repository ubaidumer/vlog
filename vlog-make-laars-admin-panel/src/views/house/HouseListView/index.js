import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import moment from 'moment';
import { ApolloProvider } from "@apollo/client";
import object from "../../../lib/object"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const HouseListView = () => {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const houses = [
    {
      id: 1,
      thumbnail:
        'https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png',
      street: 'Teilingerstraat 55',
      city: 'Rotterdam',
      isPublished: true,
      updatedDate: moment()
        .subtract(135, 'days')
        .toDate(),
      is_reviewed: true
    },
    {
      id: 2,
      thumbnail:
        'https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png',
      street: 'Teilingerstraat 55',
      city: 'Rotterdam',
      isPublished: true,
      updatedDate: moment()
        .subtract(145, 'days')
        .toDate(),
      is_reviewed: true
    },
    {
      id: 3,
      thumbnail:
        'https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png',
      street: 'Teilingerstraat 55',
      city: 'Rotterdam',
      isPublished: false,
      updatedDate: moment()
        .subtract(145, 'days')
        .toDate(),
      is_reviewed: false
    },
    {
      id: 4,
      thumbnail:
        'https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png',
      street: 'Teilingerstraat 55',
      city: 'Rotterdam',
      isPublished: false,
      updatedDate: moment()
        .subtract(150, 'days')
        .toDate(),
      is_reviewed: false
    }
  ];

  return (
    <Page className={classes.root} title="Manage Huizen">
      <Container maxWidth={false}>
      <ApolloProvider client={object}>
        <Header />
        <Box mt={3}>
          <Results
            openDeleteModal={openDeleteModal}
            setOpenDeleteModal={setOpenDeleteModal}
            houses={houses}
          />
        </Box>
        </ApolloProvider>
      </Container>
    </Page>
  );
};

export default HouseListView;
