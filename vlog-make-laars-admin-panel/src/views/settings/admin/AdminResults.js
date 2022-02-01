import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { GraphQLClient, gql } from 'graphql-request';
import AdminForm from './AdminForm';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormHelperText-root': {
      color: '#ff0000',
      opacity: 0.75
    }
  },
  parent: {
    marginBottom: '15px'
  },
  gridMargin: {
    marginTop: '10px',
    marginBottom: '15px',
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
  },
  loading: {
    display: 'flex',
    marginLeft: 5
  }
}));

const AdminResults = () => {
  const classes = useStyles();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getAllAdminUser();
  }, []);

  const getAllAdminUser = () => {
    (async () => {
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_ADMIN_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );

      const query = gql`
        query {
          getAllAdminUser {
            id
            firstName
            lastName
            username
            email
            attributes {
              profileImage
            }
          }
        }
      `;

      await graphQLClient.request(query).then(data => {
        setAdmins(data?.getAllAdminUser);
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  return (
    <div className={classes.parent}>
      {admins?.map((admin, i) => (
        <AdminForm admins={admins} admin={admin} i={i} />
      ))}
    </div>
  );
};

export default AdminResults;
