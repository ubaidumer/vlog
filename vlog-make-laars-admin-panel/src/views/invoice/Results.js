import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles,
  TextField,
  InputAdornment,
  CircularProgress,
  SvgIcon
} from '@material-ui/core';

import {
  Trash2 as TrashIcon,
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

import { GraphQLClient, gql } from 'graphql-request';

import moment from 'moment';

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
  },
  loadingCircle: {
    color: '#DF1683',
    width: '25px !important',
    height: '25px !important',
    marginLeft: 10,
    marginRight: 10
  },
  loading: {
    display: 'flex',
    marginLeft: 5
  },
}));

const Results = ({
  className,
  openModal,
  setOpenModal,
  openDeleteModal,
  setOpenDeleteModal,
  ...rest
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(25);
  const [invoices, setInvoices] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

const [search, setSearch] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);

const [filtersClass, setFiltersClass] = useState('flex-end');

  useEffect(() => {
    findAllInvoices();
  }, [page, limit, isSubmitting]);

  const findAllInvoices = () => {
    (async () => {
      let searchFilter = '';
      if (search?.length) {
        let formattedSearch = search?.replace(',', '.');
        formattedSearch = formattedSearch?.replace('€', '');
        formattedSearch = formattedSearch?.replace('€ ', '');
        searchFilter = `search: "${formattedSearch?.trim()}"`;
      }
      const query = gql`
      {
        invoiceSearchFilter(
          ${searchFilter}
          sort: "desc"
          pageNum: ${page}
          perPage: ${limit}
        )
        {
          data
          {
            _id
            invoiceNumber
            ownerID
            renterName
            renterID
            applicationId
            houseID
            amount
            updatedAt
          }
          totalCount
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
        let filteredResults = data?.invoiceSearchFilter?.data;
        setInvoices(filteredResults);
        setTotalCount(data?.invoiceSearchFilter?.totalCount);
        setIsSubmitting(false);
      });
    })().catch(err => {
      setInvoices([]);
      setTotalCount(0);
      setIsSubmitting(false);
      //console.error(err);
    });
  };

  const handlePageChange = (event, newPage) => {
    setInvoices([]);
    setPage(newPage);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value));
  };

  const handleChange = (event) => {
    setSearch(event?.target?.value);
    if (event?.target?.value?.length === 0) {
      setIsSubmitting(true);
    }
  }

  const handleSearch = event => {
    event.persist();
    if (event.key == 'Enter') { 
      setIsSubmitting(true);
    }
  };

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>
        <br />
        <Box display="flex" justifyContent={filtersClass}>
        <Box
          className={classes.rightButtonsWrapper}
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          {/* <Box mr={1} display="flex" alignItems="center">
            <Button
              onClick={handleFilters}
              variant="outlined"
              className={classes.addNewclient}
              style={{
                textTransform: 'none',
                fontSize: 15
              }}
              startIcon={
                <SvgIcon fontSize="small">
                  <FilterIcon />
                </SvgIcon>
              }
            >
              Filters
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleFiltersClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography>
                <Grid
                  item
                  md={4}
                  xs={4}
                  className={classes.nameWrapper}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleRoleChange(0)}
                      />
                    }
                    label="Eigenaar"
                  />
                </Grid>

                <Grid
                  item
                  md={4}
                  xs={4}
                  className={classes.nameWrapper}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleRoleChange(1)}
                        name="role"
                      />
                    }
                    label="Makelaar"
                  />
                </Grid>
              </Typography>
            </Popover>
          </Box> */}
          <Box mr={1} display="flex" alignItems="center">
            <TextField
              size="small"
              className={classes.queryField}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    className={classes.inputAdornment}
                    position="start"
                  >
                      { isSubmitting ? ( <CircularProgress className={classes.loadingCircle} />) :
                        (<SvgIcon fontSize="small" color="action">
                        <SearchIcon className={classes.searchIcon} />
                      </SvgIcon>
                        ) }
                  </InputAdornment>
                )
              }}
              onKeyPress={handleSearch}
              onChange={handleChange}
              placeholder="Zoeken"
              value={search}
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>

        <PerfectScrollbar>
          <Box minWidth={1200}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Datum</TableCell>
                  <TableCell>Factuur nr</TableCell>
                  <TableCell>Naam</TableCell>
                  <TableCell>Bedrag</TableCell>
                  <TableCell>Download PDF</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map(invoice => {
                  return (
                    <TableRow hover key={invoice?._id}>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {moment(invoice?.updatedAt).format('DD MMM, YYYY')}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {invoice?.invoiceNumber}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {invoice?.renterName}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          €{' '}
                          {Number(invoice?.amount).toLocaleString('es-ES', {
                            minimumFractionDigits: 2
                          })}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="start">
                          <a href={`/admin/facturen/download/${invoice?._id}`} target="_blank">
                            <div className={classes.pdfPicture}>
                              <PictureAsPdfIcon />
                            </div>
                          </a>
                          {/* onClick={() => downloadPDF(invoice)} */}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}

                {invoices.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      Geen factuurrecord gevonden.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          labelRowsPerPage="Rijen per pagina"
          component="div"
          count={totalCount}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[25, 50, 75, 100]}
        />
      </Card>
    </>
  );
};

Results.propTypes = {
  className: PropTypes.string
};

export default Results;
