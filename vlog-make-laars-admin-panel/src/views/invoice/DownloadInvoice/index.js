import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import PDF from 'src/pdf'
import {
  makeStyles
} from '@material-ui/core';

import { GraphQLClient, gql } from 'graphql-request';

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
    },
    pdfAction: {
      background: '#fff',
      borderColor: '#6F6F6F',
      color: '#263238',
      '&:hover': {
        background: '#ffff',
        color: '#DF1683'
      }
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
  pdfPicture: {
    color: 'black',
    marginLeft: '10%',
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main
    }
  }
}));

const DownloadInvoice = () => {
  const classes = useStyles();
  const [isDownloadedInvoice, setDownloadInvoice] = useState(false);
  const [invoice, setInvoice] = useState({});
  const [user, setUser] = useState({});

  const invoiceId = window?.location?.href?.split('/').pop();

  useEffect(() => {
    getInvoicesById();
  }, []);

  const getUserByID = (renterID) => {
    (async () => {

      const query = gql`
        {
            findUserByID(id: "${renterID}") {
                _id
                username
                email
                mobileNumber
                landlinePhone
                createdAt
                address{
                    street
                    houseNumber
                    postCode
                    place
                    land
                }

            }
        }
    `;

      // Prepare Headers and User
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLClient.request(query).then(data => {
        setUser(data?.findUserByID)
        setDownloadInvoice(true);
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  const getInvoicesById = () => {
    (async () => {

      const query = gql`
        {
            getInvoicesById(id: "${invoiceId}") {
                _id
                invoiceNumber
                invoicesType
                renterName
                renterID
                amount
                createdAt
                userId
            }
        }
    `;

      // Prepare Headers and User
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_INVOICE_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLClient.request(query).then(data => {
        setInvoice(data?.getInvoicesById);
        setDownloadInvoice(true);
        getUserByID(data?.getInvoicesById?.renterID);
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  return (
    <>
    <PDF user={user} isDownloadedInvoice={isDownloadedInvoice} invoice={invoice} />
    </>
  );
};

DownloadInvoice.propTypes = {
  className: PropTypes.string
};

export default DownloadInvoice;
