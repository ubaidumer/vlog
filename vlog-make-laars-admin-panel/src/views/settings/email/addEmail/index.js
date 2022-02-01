import React, { useState, useMemo, useEffect } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import moment from 'moment';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormHelperText-root': {
      color: '#ff0000',
      opacity: 0.75
    }
  },
  gridMargin: {
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10px'
    }
  },
  loadingCircle: {
    color: '#DF1683',
    width: '10px !important',
    height: '10px !important',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  }
}));

const emails = [
  {
    id: 1,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'Collins',
    body:
      'Ametasdas--1 Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  },
  {
    id: 2,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'DReset Wactwoord',
    body:
      'Amet Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  },
  {
    id: 3,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'De Jong',
    body:
      'Amet Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  },
  {
    id: 4,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'Ketler',
    body:
      'Amet Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  }
];

const HouseListView = (props, admi) => {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModel, setOpenModel] = React.useState(false);
  const [template, setTemplate] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageSize, setPageSize] = useState(25);
  const [page, setPage] = useState(0);
  let [swt, setSwitch] = React.useState(false);
  let [id, setId] = useState('');

  let pageItem = (e, v) => {
    setPageSize(e);
  };

  let pageNo = (e) => {
    setPage(e);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_TEMPLATE_URL}?page_num=${page + 1}&page_size=${pageSize}`
      )
      .then(response => setTemplate(response?.data));
  }, [pageSize, page]);

  let sendId = i => {
    setId(i);
  };

  const [admin, setAdmin] = useState([
    {
      id: 1
    }
  ]);

  let hello = () => {
    setSwitch(true);
    setAdmin(state => [...admin, { id: 2 }]);
    setOpenModal(true);
  };

  let duplicate = props => {
    return <Grid container spacing={2} style={{ marginTop: '12px' }}></Grid>;
  };
  let [state, setState] = useState('admin');
  let checkState = e => {
    setState(e);
  };

  return (
    <Page title="Manage Instellingen">
      <Container maxWidth={false}>
        <Header hello={hello} />

        <Box mt={3}>
          <Results
            openDeleteModal={openDeleteModal}
            setOpenDeleteModal={setOpenDeleteModal}
            openModal={openModal}
            setOpenModal={setOpenModal}
            openModel={openModel}
            setOpenModel={setOpenModel}
            admin={admin}
            template={template}
            page={page}
            pageSize={pageSize}
            checkState={checkState}
            setPageSize={setPageSize}
            setPage={setPage}
            emails={emails}
            swt={swt}
            pageItem={pageItem}
            pageNo={pageNo}
            setAdmin={setAdmin}
            duplicate={duplicate()}
            sendId={sendId}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default HouseListView;
