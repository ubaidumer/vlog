import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { GraphQLClient, gql } from 'graphql-request';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Card, makeStyles, Grid, Divider, Typography } from '@material-ui/core';

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

const Sidebar = ({
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

  const [email, setEmail] = useState(false);

  const [cms, setCms] = useState(true);

  const CMS = () => {
    window.location.href='/admin/CMS'
  };

  const emailTemplates = () => {
    window.location.href = '/admin/email';
  };


  return (
    <>
      <Grid container >
        <Grid item lg={12} md={12} sm={12} xs={12}>
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
              <li className={cms ? classes.activeList :classes.list}>
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

      </Grid>
    </>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  invoices: PropTypes.array.isRequired
};

Sidebar.defaultProps = {
  invoices: []
};

export default Sidebar;
