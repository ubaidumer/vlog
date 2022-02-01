import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const UserListView = () => {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);

  const houses = [
    {
      id: 1,
      thumbnail:
        'https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png',
      naam: 'Albert Flores',
      email: 'albert.flores@example.com',
      beroep: 'Leraar',
      color: '#D30000',
      status: 'Active',
      profile: 25,
      Actie: true,
      updatedDate: moment()
        .subtract(135, 'days')
        .toDate(),
      is_reviewed: true
    }
  ];

  return (
    <Page className={classes.root} title="Manage Gebruikers">
      <Container maxWidth={false}>
        <Header openModal={openModal} setOpenModal={setOpenModal} />
        <Box mt={3}>
          <Results
            openModal={openModal}
            setOpenModal={setOpenModal}
            openDeleteModal={openDeleteModal}
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            setOpenDeleteModal={setOpenDeleteModal}
            houses={houses}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default UserListView;
