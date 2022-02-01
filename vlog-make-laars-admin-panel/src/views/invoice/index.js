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

const HouseListView = () => {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const invoices = [
    {
      id: 1,
      updatedDate: moment()
        .subtract(135, 'days')
        .toDate(),
      invoice_num:101168,
      name:'Collins',
      price:'€ 5,00',
      pdf:'f'
    },
    {
      id: 2,
      updatedDate: moment()
        .subtract(135, 'days')
        .toDate(),
      invoice_num:301141,
      name:'Leslie Alxendar',
      price:'€ 2,00',
      pdf:'f'
    },
    {
      id: 3,
      updatedDate: moment()
        .subtract(135, 'days')
        .toDate(),
      invoice_num:402011,
      name:'De Jong',
      price:'€ 250,00',
      pdf:'f'
    },
    {
      id: 4,
      updatedDate: moment()
        .subtract(135, 'days')
        .toDate(),
      invoice_num:301010,
      name:'KettnerMakelaar',
      price:'€ 5,00',
      pdf:'f'
    }
  ];

  return (
    <Page className={classes.root} title="Manage Facturen">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results
            openDeleteModal={openDeleteModal}
            setOpenDeleteModal={setOpenDeleteModal}
            invoices={invoices}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default HouseListView;
