import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import Sidebar from '../../Sidebar/Sidebar'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    padding:'26px'

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

          <Grid container spacing={3}>
          <Grid item md={12}>
          <Header
              handleModalClose={handleModalClose}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
            </Grid>
  
            <Grid item md={2}>
              <Sidebar/>
              </Grid>
            <Grid item md={10}>
              <Results
                openModal={openModal}
                setOpenModal={setOpenModal}
                openDeleteModal={openDeleteModal}
                openEditModal={openEditModal}
                setOpenEditModal={setOpenEditModal}
                setOpenDeleteModal={setOpenDeleteModal}
              />
            </Grid>
          </Grid>
    </Page>
  );
};

export default ClientListView;
