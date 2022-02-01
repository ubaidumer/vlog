import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const AddHouse = props => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Nieuwe Huizen">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Form />
        </Box>
      </Container>
    </Page>
  );
};

export default AddHouse;
