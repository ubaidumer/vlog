import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const ClientListView = () => {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [modClose, setModClose] = useState(false);

  let handleModalClose = () => {
    setModClose(true);
  };

  return (
    <Page className={classes.root} title="Manage Klanten">
      <Container maxWidth={false}>
        <Header
          handleModalClose={handleModalClose}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <Box mt={3}>
          <Results
            openModal={openModal}
            setOpenModal={setOpenModal}
            openDeleteModal={openDeleteModal}
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            setOpenDeleteModal={setOpenDeleteModal}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ClientListView;
