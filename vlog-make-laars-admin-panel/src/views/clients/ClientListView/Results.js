import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AddClient from '../AddClient/index';
import EditClient from '../EditClient/index';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles,
  Grid,
  Divider,
  Typography,
  CircularProgress,
  Popover
} from '@material-ui/core';
import {
  Trash2 as TrashIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
} from 'react-feather';

import DeleteModal from './DeleteModal';
import moment from 'moment';
import getEnumValue from 'src/utils/getEnumValue';
import { GraphQLClient, gql } from 'graphql-request';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#263238',
    width: '100%',
    '& .MuiTablePagination-selectIcon': {
      color: '#263238 !important'
    },
    '& .MuiTableRow-hover': {
      cursor: 'pointer'
    }
  },
  queryField: {},
  isDeletedField: {
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
    background: '#AB3535',
    borderColor: '#AB3535',
    color: '#fff',
    '&:hover': {
      background: '#fff',
      color: '#AB3535'
    }
  },
  addNewclient: {
    height: 40
  },
  thumbnail: {
    width: 64,
    height: 42,
    paddingRight: 20
  },
  searchIcon: {
    color: '#263238'
  },
  isDeleted: {
    fontWeight: '400',
    minWidth: 60,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRadius: 5,
    padding: '5px 10px',
    cursor: 'pointer'
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
  filtersCheckbox: {
    paddingLeft: 10
  },
  tableCell: {
    cursor: 'pointer',
    height: '64.5px',
  },
  chevronIcon: {
    position: 'relative',
    top: 6,
    left: 20,
    width: 24
  },
  isSortedColumn: {
    position: 'relative',
    top: '-4px',
  },
}));

const Results = ({
  className,
  openModal,
  setOpenModal,
  openDeleteModal,
  openEditModal,
  setOpenEditModal,
  setOpenDeleteModal,
  ...rest
}) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const [selectedClients, setSelectedClients] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(25);
  const [deletionList, setDeletionList] = useState(['0', '1']);
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enableBulkOperations, setEnableBulkOperations] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState();

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inActive, setInActive] = useState(false);

  const [totalCount, setTotalCount] = useState(0);
  const [sortColumn, setSortColumn] = useState({
    name: false,
    type: false,
    status: false,
    date: false,
  });
  const [sortDirection, setSortDirection]= useState(false);
  
  const [ownerCheckBox, setOwnerCheckBox]= useState(false);
  const [agentCheckBox, setAgentCheckBox]= useState(false);
  useEffect(() => {
    findAllClients();
  }, [page, limit, deletionList, isSubmitting, sortDirection]);

  const findAllClients = () => {
    (async () => {
      let searchFilter = '';
      let sortFilter = '';
      let ownerSearch = localStorage.getItem('ownerEmail');
      let direction = sortDirection ? 1 : -1;

      if (localStorage.getItem('ownerEmail')) {
        setSearch(ownerSearch);
        localStorage.removeItem('ownerEmail');
      }

      if (sortColumn?.date) {
        sortFilter = `sortColumn:"[['updatedAt', ${direction}]]"`
      }

      if (sortColumn?.status) {
        sortFilter = `sortColumn:"[['isDeleted', ${direction}]]"`
      }

      if (sortColumn?.name) {
        sortFilter = `sortColumn:"[['firstName', ${direction}], ['lastName', ${direction}], ['email', ${direction}]]"`
      }
      
      if (sortColumn?.type) {
        sortFilter = `sortColumn:"[['role', ${direction}]]"`
      }

      if (search?.length) {
        searchFilter = `search: "${search?.trim()}"`;
      }

      if (ownerSearch?.length) {
        searchFilter = `search: "${ownerSearch?.trim()}"`;
      }

      let roleIDFilter = ``;
      if (ownerCheckBox && agentCheckBox) {
        roleIDFilter = `roleIdList: ["0", "1"]`;
      }
      else if (ownerCheckBox || agentCheckBox) {
        if (ownerCheckBox) {
          roleIDFilter = `roleIdList: ["0"]`;
        }
        if (agentCheckBox)
          roleIDFilter = `roleIdList: ["1"]`;
      }
      else {
        roleIDFilter = `roleIdList: ["0", "1"]`;
      }

      const query = gql`
      {
        userSearchFilter(
          ${searchFilter}
          ${roleIDFilter}
          ${sortFilter
          }
          deletionList: ${JSON.stringify(deletionList)}
          sort: "desc"
          pageNum: ${page}
          perPage: ${limit}
        ) {
          data {
            _id
            profilePicturePath
            firstName
            lastName
            email
            role
            isDeleted
            updatedAt
          }
          totalCount
        }
      }
    `;
    // Prepare Headers and Client
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLClient.request(query).then(data => {
        const filteredResults = data?.userSearchFilter?.data;
        setClients(filteredResults);
        setTotalCount(data?.userSearchFilter?.totalCount);
        setEnableBulkOperations(selectedClients.length === 1);
        setIsSubmitting(false);
      });
    })().catch(err => {
      setClients([]);
      setTotalCount(0);
      setIsSubmitting(false);
      //console.error(err);
    });
  };

  const [filtersClass, setFiltersClass] = useState('flex-end');

  const handleUserStatus = (e, client) => {
    e.stopPropagation();
    setOpenEditModal(false);
    const isDeleted = client.isDeleted === 1 ? 0 : 1;

    const graphQLQuery = gql`
    mutation {
      updateUserStatus(
      isDeleted: ${isDeleted}
      _id: "${client._id}"
      ) {
        _id
      }
    }
  `;

    (async () => {
      // Prepare Headers and Client
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLClient.request(graphQLQuery).then(data => {
        if (data.updateUserStatus) {
          enqueueSnackbar('Status is succesvol bijgewerkt.', {
            variant: 'success'
          });
          setTimeout(function() {
            window.location.href = '/admin/klanten';
          }, 2000);
        }
      });
    })().catch(err => {
      //console.error(err);
    });
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

  const handleSelectOneClient = (e, clientId) => {
    e.stopPropagation();
    setOpenEditModal(false);
    if (!selectedClients.includes(clientId)) {
      setFiltersClass('space-between');
      selectedClients.push(clientId);
      setSelectedClients(selectedClients);
      setEnableBulkOperations(true);
      setSelectedClientId(clientId);
    } else {
      setFiltersClass('flex-end');
      setSelectedClients(prevSelected =>
        prevSelected.filter(id => id !== clientId)
      );
      setEnableBulkOperations(false);
      setSelectedClientId(clientId);
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickModalOpen = clientId => {
    setSelectedClientId(clientId);
    setOpenEditModal(true);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value));
  };

  const handleClickDeleteModalOpen = () => {
    setOpenDeleteModal(true);
  };

  const allClients = () => {
    setDeletionList(['0', '1']);
    setAll(true);
    setActive(false);
    setInActive(false);
  };

  const activeClients = () => {
    setAll(false);
    setActive(true);
    setInActive(false);
    setDeletionList(['0']);
  };

  const inActiveClients = () => {
    setDeletionList(['1']);
    setAll(false);
    setActive(false);
    setInActive(true);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilters = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFiltersClose = () => {
    setAnchorEl(null);
  };

  const handleFilterOwnerCheckBox = (event)=>{
    if(event.target.checked){
      setOwnerCheckBox(true)
      setIsSubmitting(true);
    } 
    else {
      setOwnerCheckBox(false)
      setIsSubmitting(true);
    }
   }
 
   const handleFilterAgentCheckBox = (event)=>{
     if(event.target.checked){
       setAgentCheckBox(true);
       setIsSubmitting(true);
     } 
     else {
      setAgentCheckBox(false);
       setIsSubmitting(true);
     }
  } 
  
  const handleSortColumn = column => {
    switch (column) {
      case 'name': {
        setSortColumn({
          name: true,
          type: false,
          status: false,
          date: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'type': {
        setSortColumn({
          name: false,
          type: true,
          status: false,
          date: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'status': {
        setSortColumn({
          name: false,
          type: false,
          status: true,
          date: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'date': {
        setSortColumn({
          name: false,
          type: false,
          status: false,
          date: true,
        });
        setSortDirection(!sortDirection);
        break;
      }
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <br />
      <Grid container style={{ marginTop: '10px', marginLeft: '20px' }}>
        <Grid item md={1}>
          <Button
            onClick={allClients}
            style={{
              width: '100%',
              textAlign: 'center',
              color: all ? '#DF1683' : '#000000',
              textTransform: 'none'
            }}
          >
            ALLE
          </Button>

          <Divider style={{ backgroundColor: all ? '#DF1683' : '#000000' }} />
        </Grid>
        <Grid item md={1}>
          <Button
            onClick={activeClients}
            style={{
              width: '100%',
              textAlign: 'center',
              color: active ? '#DF1683' : '#000000',
              textTransform: 'none'
            }}
          >
            Actief
          </Button>
          <Divider
            style={{ backgroundColor: active ? '#DF1683' : '#000000' }}
          />
        </Grid>
        <Grid item md={1}>
          <Button
            onClick={inActiveClients}
            style={{
              width: '100%',
              textAlign: 'center',
              color: inActive ? '#DF1683' : '#000000',
              textTransform: 'none'
            }}
          >
            Niet Actief
          </Button>
          <Divider
            style={{ backgroundColor: inActive ? '#DF1683' : '#000000' }}
          />
        </Grid>
        <Grid item md={9}>
          <Button style={{ width: '95%', textAlign: 'center', color: '#ffff' }}>
            .
          </Button>
          <Divider style={{ width: '96%' }} />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent={filtersClass}>
        {enableBulkOperations && (
          <Box
            className={classes.leftButtonsWrapper}
            display="flex"
            justifyContent="flex-start"
            p={2}
          >
            <div className={classes.bulkOperations}>
              <div className={classes.bulkActions}>
                <Button
                  onClick={handleClickDeleteModalOpen}
                  variant="outlined"
                  className={clsx(classes.bulkAction, classes.deleteAction)}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <TrashIcon />
                    </SvgIcon>
                  }
                >
                  Delete
                </Button>
              </div>
            </div>
          </Box>
        )}
        <Box
          className={classes.rightButtonsWrapper}
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Box mr={1} display="flex" alignItems="center">
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
                  md={12}
                  xs={12}
                  className={classes.filtersCheckbox}
                >
                  <FormControlLabel
                    control={
                      <Checkbox />
                    }
                    label="Eigenaar"
                    checked={ownerCheckBox}
                    onClick={e=>handleFilterOwnerCheckBox(e)}
                  />
                </Grid>

                <Grid
                  item
                  md={12}
                  xs={12}
                  className={classes.filtersCheckbox}
                >
                  <FormControlLabel
                    control={
                      <Checkbox />
                    }
                    label="Makelaar"
                    checked={agentCheckBox}
                    onClick={e=>handleFilterAgentCheckBox(e)}
                  />
                </Grid>
              </Typography>
            </Popover>
          </Box>
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
                <TableCell padding="checkbox"></TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.name
                })} onClick={() => handleSortColumn('name')} >Naam 
                  {sortColumn?.name && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.name && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.type
                })} onClick={() => handleSortColumn('type')} >Type 
                  {sortColumn?.type && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.type && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.status
                })} onClick={() => handleSortColumn('status')} >Status 
                  {sortColumn?.status && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.status && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.date
                })} onClick={() => handleSortColumn('date')} >Datum Bijgewerkt 
                  {sortColumn?.date && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.date && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients?.map(client => {
                const isClientSelected = selectedClients.includes(client._id);

                return (
                  <TableRow
                    hover
                    key={client._id}
                    selected={isClientSelected}
                    onClick={e => handleClickModalOpen(client._id)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isClientSelected}
                        onChange={e => handleSelectOneClient(e, client._id)}
                        value={isClientSelected}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <img
                          className={classes.thumbnail}
                          src={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_USER_IMAGE_CONTAINER}/${
                            client?.profilePicturePath
                              ? `${client?.profilePicturePath}?${localStorage.getItem('sasToken')}`
                              : `dummyImage.png?${localStorage.getItem('sasToken')}`
                          }`}
                          // ${client.profilePicturePath
                          alt={`${client.firstName} Profile Image`}
                        />

                        <div style={{ display: 'block' }}>
                          <Typography style={{ fontSize: '15px' }}>
                            {client.firstName} {client.lastName}
                          </Typography>
                          <Typography
                            style={{ fontSize: '14px', color: 'grey' }}
                          >
                            {client.email}
                          </Typography>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {getEnumValue(client.role, 'ROLE_TYPE')}
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Typography
                          className={classes.isDeleted}
                          onClick={e => handleUserStatus(e, client)}
                          style={{
                            cursor: 'pointer',
                            textTransform: 'unset',
                            backgroundColor:
                              client.isDeleted === 0 ? '#E8F5E9' : '#FFF3E0',
                            color:
                              client.isDeleted === 0 ? '#4CAF50' : '#F57C00'
                          }}
                        >
                          {getEnumValue(client.isDeleted, 'STATUS_TYPE')}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {moment(parseInt(client.updatedAt)).format('DD MMM, YYYY')}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}

              {clients.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Geen gebruikersrecord gevonden.
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

      <AddClient openModal={openModal} setOpenModal={setOpenModal} />
      <EditClient
        selectedClientId={selectedClientId}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />

      {/* Delete clients Modal */}
      <DeleteModal
        selectedClients={selectedClients}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  clients: PropTypes.array.isRequired
};

Results.defaultProps = {
  clients: []
};

export default Results;
