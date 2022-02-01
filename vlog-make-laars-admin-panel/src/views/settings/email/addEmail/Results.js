import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { GraphQLClient, gql } from 'graphql-request';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Card, makeStyles, Grid, Divider, Typography } from '@material-ui/core';
import EmailTemplates from './EmailTemplates';

const applyFilters = (invoices, query, filters) => {
  return invoices.filter(invoice => {
    let matches = true;

    if (query) {
      const properties = ['name', 'email'];
      let containsQuery = false;

      properties.forEach(property => {
        if (
          invoice.customer[property].toLowerCase().includes(query.toLowerCase())
        ) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    if (filters.status && invoice.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (invoices, page, limit) => {
  return invoices.slice(page * limit, page * limit + limit);
};

const useStyles = makeStyles(theme => ({
  root: {
    color: '#263238',
    width: '100%',
    '& .MuiTablePagination-selectIcon': {
      color: '#263238 !important'
    }
  },
  queryField: {},
  statusField: {
    flexBasis: 200
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    width: '100%',
    zIndex: 2
  },
  leftButtonsWrapper: {
    paddingLeft: 4
  },
  rightButtonsWrapper: {
    paddingRight: 4
  },
  textField: {
    height: 40
  },
  bulkAction: {
    marginLeft: theme.spacing(2),
    height: 40,
    color: '#fff',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14)',
    borderRadius: 4
  },
  editAction: {
    background: '#6F6F6F',
    borderColor: '#6F6F6F',
    '&:hover': {
      color: '#6F6F6F',
      background: '#fff'
    }
  },
  deleteAction: {
    background: '#fff',
    borderColor: '#6F6F6F',
    color: '#263238',
    '&:hover': {
      background: '#6F6F6F',
      color: '#fff'
    }
  },
  addNewinvoice: {
    height: 40
  },
  thumbnail: {
    paddingRight: 20
  },
  searchIcon: {
    color: '#263238'
  },
  gridMargin: {
    marginTop: '-5px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10px'
    }
  },
  list: {
    display: 'flex',
    '&:hover': {
      background: '#F2F2F2',
      color: '#DF1683',
      borderLeftStyle: 'solid',
      borderLeftWidth: 'thick',
      borderLeftColor: '#DF1683',
      cursor: 'pointer'
    }
  },
  activeList: {
    display: 'flex',
    background: '#F2F2F2',
    color: '#DF1683',
    borderLeftStyle: 'solid',
    borderLeftWidth: 'thick',
    borderLeftColor: '#DF1683',
    cursor: 'pointer'
  }
}));

const Results = ({
  className,
  openModal,
  setOpenModal,
  openModel,
  setOpenModel,
  openDeleteModal,
  setOpenDeleteModal,
  invoices,
  page,
  pageSize,
  setPageSize,
  setPage,
  template,
  pageNo,
  pageItem,
  swt,
  emails
}) => {
  const classes = useStyles();
  const [selectedinvoices, setSelectedinvoices] = useState([]);
  const [query, setQuery] = useState('');
  const [userArray, setUserArray] = useState([]);
  const [houseArray, setHouseArray] = useState([]);

  const [invoiceArray, setInvoiceArray] = useState([]);
  const [filters, setFilters] = useState({
    status: null
  });

  var isPublishedCheckboxes = invoices.reduce((item, invoice) => {
    item[`isPublished${invoice.id}`] = invoice.isPublished;
    return item;
  }, {});

  const [publishedCheckboxes, setPublishedCheckboxes] = React.useState(
    isPublishedCheckboxes
  );

  // Usually query is done on backend with indexing solutions
  const filteredinvoices = applyFilters(invoices, query, filters);

  const [email, setEmail] = useState(true);

  const getUserAttributes = () => {
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
      const query = gql`
        query {
          getUserAttributes
        }
      `;

      await graphQLClient.request(query).then(data => {
        let res = JSON.parse(data?.getUserAttributes);

        const userAttributes = res.map((attr, i) => ({
          id: attr,
          display: '{{' + attr + '}}'
        }));
        setUserArray(...userArray, userAttributes);
        // save in state
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  const getHouseAttributes = () => {
    const graphQLClient = new GraphQLClient(
      `${process.env.REACT_APP_OBJECT_URL}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          languages: 'eng'
        }
      }
    );

    (async () => {
      const query = gql`
        query {
          getObjectAttributes
        }
      `;

      await graphQLClient.request(query).then(data => {
        let res = JSON.parse(data?.getObjectAttributes);

        const houseAttributes = res.map((attr, i) => ({
          id: attr,
          display: attr
        }));
        setHouseArray(...houseArray, houseAttributes);
        // save in state
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  const getInvoiceAttributes = () => {
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
      const query = gql`
        query {
          getInvoiceAttributes
        }
      `;

      await graphQLClient.request(query).then(data => {
        // let flat = implode(' ', $array['keyvals']);
        let res = JSON.parse(data?.getInvoiceAttributes);

        const invoiceAttributes = res.map((attr, i) => ({
          id: attr,
          display: '@' + attr
        }));
        setInvoiceArray(...invoiceArray, invoiceAttributes);
        // save in state
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  const [userData, setUserData] = useState([]);
  const [cms, setCms] = useState(false);

  let combinedArr1 = userArray.concat(houseArray);
  let combinedArr2 = combinedArr1.concat(invoiceArray);

  const CMS = () => {
    setEmail(false);
    setCms(true);
    window.location.href='/admin/CMS'
  };

  const emailTemplates = () => {
    window.location.href = '/admin/email';
  };

  useMemo(() => {
    getUserAttributes();
    getHouseAttributes();
    getInvoiceAttributes();

    setUserData(...combinedArr2);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={2} md={3} sm={12} xs={12}>
          <Card>
            <ul>
              <li
                className={classes.list}
                onClick={() => (window.location.href = '/admin/instellingen')}
              >
                <Typography
                  color="textSecondary"
                  style={{
                    margin: '10px 0px 10px 10px',
                    width: '90%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Beheerdersinstellingen
                </Typography>
                <ArrowForwardIosIcon style={{ margin: '11px 0px 10px 20px' }} />
              </li>
              <Divider />
              <li className={email ? classes.activeList : classes.list}>
                <Typography
                  onClick={emailTemplates}
                  color="textSecondary"
                  style={{
                    margin: '10px 0px 10px 10px',
                    width: '90%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  E-mailsjablonen
                </Typography>
                <ArrowForwardIosIcon style={{ margin: '11px 0px 10px 20px' }} />
              </li>
              <Divider />
              <li className={classes.list}>
                <Typography
                  onClick={CMS}
                  color="textSecondary"
                  style={{
                    margin: '10px 0px 10px 10px',
                    width: '90%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  CMS Limited
                </Typography>
                <ArrowForwardIosIcon style={{ margin: '11px 0px 10px 20px' }} />
              </li>
            </ul>
          </Card>
        </Grid>

        {email && (
          <Grid md={10} sm={12} xs={12}>
            <EmailTemplates
              emails={emails}
              openDeleteModal={openDeleteModal}
              setOpenDeleteModal={setOpenDeleteModal}
              openModal={openModal}
              setOpenModal={setOpenModal}
              openModel={openModel}
              setOpenModel={setOpenModel}
              userArray={userArray}
              page={page}
              pageSize={pageSize}
              setPageSize={setPageSize}
              setPage={setPage}
              houseArray={houseArray}
              invoiceArray={invoiceArray}
              pageItem={pageItem}
              pageNo={pageNo}
              template={template}
              userData={userData}
            />
          </Grid>
        )}

        {cms && <Grid md={10}> </Grid>}
      </Grid>
    </>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  invoices: PropTypes.array.isRequired
};

Results.defaultProps = {
  invoices: []
};

export default Results;
