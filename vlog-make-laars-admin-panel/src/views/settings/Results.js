import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Card, makeStyles, Grid, Divider, Typography } from '@material-ui/core';

import AdminResults from './admin/AdminResults';
import EmailTemplates from './email/EmailTemplates';

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
  swt,
  emails,
  admin,
  checkState,
  duplicate,
  setAdmin,
  sendId
}) => {
  const classes = useStyles();
  const [selectedinvoices, setSelectedinvoices] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
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

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const [admi, setAdmi] = useState(true);
  const [email, setEmail] = useState(false);
  const [cms, setCms] = useState(false);


  const adminSetting = () => {
    setAdmi(true);
    setEmail(false);
    setCms(false);
    checkState('admin');
    window.location.href = '/admin/instellingen'

  };

  const emailTemplates = () => {
    window.location.href = '/admin/email'
  };

  const CMS = () => {
    setEmail(false);
    setAdmi(false);
    setCms(true);
    checkState('cms');
    window.location.href='/admin/CMS'
  };

  let [idz, setIdz] = useState('');

  let setMIdz = o => {
    setIdz(o);
    sendId(idz);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={2} md={3} sm={12} xs={12}>
          <Card>
            <ul>
              <li className={admi ? classes.activeList : classes.list } onClick={adminSetting}>
                <Typography
                  color="textSecondary"
                  style={{ margin: '10px 0px 10px 10px', width: '90%',overflow: 'hidden',textOverflow: 'ellipsis',     
                  }}
                >
                  Beheerdersinstellingen
                </Typography>
                <ArrowForwardIosIcon style={{ margin: '11px 0px 10px 20px' }} />
              </li>
              <Divider />
              <li className={email ? classes.activeList : classes.list } onClick={emailTemplates}>
                <Typography
                  color="textSecondary"
                  style={{ margin: '10px 0px 10px 10px', width: '90%',overflow: 'hidden',textOverflow: 'ellipsis' }}
                >
                  E-mailsjablonen
                </Typography>
                <ArrowForwardIosIcon style={{ margin: '11px 0px 10px 20px' }} />
              </li>
              <Divider />
              <li className={cms ? classes.activeList : classes.list } onClick={CMS}>
                <Typography
                  color="textSecondary"
                  style={{ margin: '10px 0px 10px 10px', width: '90%',overflow: 'hidden',textOverflow: 'ellipsis' }}
                >
                  CMS Limited
                </Typography>
                <ArrowForwardIosIcon style={{ margin: '11px 0px 10px 20px' }} />
              </li>
            </ul>
          </Card>
        </Grid>
        {admi && (
          <Grid md={9} sm={12} xs={12} className={classes.gridMargin}>
            <div style={{ marginBottom: '20px' }}>{swt && duplicate}</div>

            <AdminResults admin={admi} setMIdz={setMIdz} />
          </Grid>
        )}

        {email && (
          <Grid md={10} sm={12} xs={12}>
            <EmailTemplates
              emails={emails}
              openDeleteModal={openDeleteModal}
              setOpenDeleteModal={setOpenDeleteModal}
              openModal={openModal}
              openModel={openModel}
              setOpenModel={setOpenModel}
              setOpenModal={setOpenModal}
            />
          </Grid>
        )}

        {cms && (
          <Grid md={10}>
            {' '}
            
          </Grid>
        )}
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
