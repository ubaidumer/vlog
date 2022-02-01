import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Form from './Form';
import FileUpload from './picture/fileUpload.js';
import { ApolloProvider } from '@apollo/client';
import object from '../../../lib/object';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const AddHouse = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Nieuwe Huizen">
      <Container maxWidth={false}>
        <ApolloProvider client={object}>
          <Header />
          <Box mt={3}>
            <Form />
            <FileUpload />
          </Box>
        </ApolloProvider>
      </Container>
    </Page>
  );
};

export default AddHouse;
