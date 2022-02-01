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

const ApplicationListView = () => {
  const classes = useStyles();
  const { openModal, setOpenModal } = useState(false)

  return (
    <Page className={classes.root} title="Manage Aanvragen">
      <Container maxWidth={false}>
        <Header  openModal={openModal} setOpenModal={setOpenModal}/>
        <Box mt={3}>
          <Results 
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ApplicationListView;
