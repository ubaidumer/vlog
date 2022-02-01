import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AddUser from '../AddUser/index';
import EditUser from '../EditUser/index';

import CircularProgress from '@material-ui/core/CircularProgress';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import getEnumValue from 'src/utils/getEnumValue';

import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  Checkbox,
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
  Typography
} from '@material-ui/core';

import {
  Trash2 as TrashIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
} from 'react-feather';

import mail from 'src/utils/mail';

import DeleteModal from './DeleteModal';
import moment from 'moment';
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
  filters: {
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

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />

      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

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

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(25);
  const [deletionList, setDeletionList] = useState(['0', '1']);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [enableBulkOperations, setEnableBulkOperations] = useState(false);
  const [selectedSomeUsers, setSelectedSomeUsers] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState();

  const [search, setSearch] = useState('');

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const [sortColumn, setSortColumn] = useState({
    name: false,
    profession: false,
    profileCompletion: false,
    status: false,
    date: false,
  });
  
  const [sortDirection, setSortDirection] = useState(false);

  useEffect(() => {
    findAllUsers();
  }, [page, limit, deletionList, isSubmitting, sortDirection]);

  const findAllUsers = () => {
    (async () => {

      let searchFilter = '';
      let sortFilter = '';
      let direction = sortDirection ? 1 : -1;

      if (sortColumn?.date) {
        sortFilter = `sortColumn:"[['updatedAt', ${direction}]]"`
      }

      if (sortColumn?.status) {
        sortFilter = `sortColumn:"[['isDeleted', ${direction}]]"`
      }

      if (sortColumn?.name) {
        sortFilter = `sortColumn:"[['firstName', ${direction}], ['lastName', ${direction}], ['email', ${direction}]]"`
      }
      
      if (sortColumn?.profession) {
        sortFilter = `sortColumn:"[['profession', ${direction}]]"`
      }

      if (sortColumn?.profileCompletion) {
        sortFilter = `sortColumn:"[['profileCompletion', ${direction}]]"`
      }
  
      if (search?.length) {
        searchFilter = `search: "${search?.trim()}"`;
      }
      const query = gql`
      {
        userSearchFilter(
          ${searchFilter}
          ${sortFilter}
          roleIdList: ["2"]
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
            profileCompletion
            profession
            updatedAt
          }
          totalCount
        }
      }
    `;

      // Prepare Headers and User
      const graphQLUser = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLUser.request(query).then(data => {
        let filteredResults = data?.userSearchFilter?.data;
        setUsers(filteredResults);
        setTotalCount(data?.userSearchFilter?.totalCount);
        setEnableBulkOperations(selectedUsers.length === 1);
        setSelectedSomeUsers(
          selectedUsers.length > 0 && selectedUsers.length < users.length
        );
        setIsSubmitting(false);
      });
    })().catch(err => {
      setUsers([]);
      setTotalCount(0);
      setIsSubmitting(false);
      //console.error(err);
    });
  };

  const [filtersClass, setFiltersClass] = useState('flex-end');

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

  const handleUserStatus = (e, user) => {
    e.stopPropagation();
    setOpenEditModal(false);

    const isDeleted = user?.isDeleted === 1 ? 0 : 1;

    const graphQLQuery = gql`
    mutation {
      updateUserStatus(
      isDeleted: ${isDeleted}
      _id: "${user?._id}"
      ) {
        _id
      }
    }
  `;

    (async () => {
      // Prepare Headers and User
      const graphQLUser = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLUser.request(graphQLQuery).then(data => {
        if (data.updateUserStatus) {
          if (isDeleted) {
            mail('account_deleted', user?.email, {}).then(response => {
              enqueueSnackbar('Status is succesvol bijgewerkt.', {
                variant: 'success'
              });
              setTimeout(function () {
                window.location.href = '/admin/gebruikers';
              }, 2000);
            });
          }
          else {
            enqueueSnackbar('Status is succesvol bijgewerkt.', {
              variant: 'success'
            });
            setTimeout(function() {
              window.location.href = '/admin/gebruikers';
            }, 2000);
          }
        }
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  const handleSelectOneUser = (e, userId) => {
    e.stopPropagation();
    setOpenEditModal(false);
    if (!selectedUsers.includes(userId)) {
      setFiltersClass('space-between');
      selectedUsers.push(userId);
      setSelectedUsers(selectedUsers);
      setEnableBulkOperations(true);
      setSelectedUserId(userId);
    } else {
      setFiltersClass('flex-end');
      setSelectedUsers(prevSelected =>
        prevSelected.filter(id => id !== userId)
      );
      setEnableBulkOperations(false);
      setSelectedUserId(userId);
    }
  };

  const handleQueryChange = event => {
    event.persist();
    setQuery(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickModalOpen = userId => {
    setSelectedUserId(userId);
    setOpenEditModal(true);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value));
  };

  const handleClickDeleteModalOpen = () => {
    setOpenDeleteModal(true);
  };

  const allUsers = () => {
    setDeletionList(['0', '1']);
    setAll(true);
    setActive(false);
    setInActive(false);
  };

  const activeUsers = () => {
    setAll(false);
    setActive(true);
    setInActive(false);
    setDeletionList(['0']);
  };

  const inActiveUsers = () => {
    setDeletionList(['1']);
    setAll(false);
    setActive(false);
    setInActive(true);
  };

  const handleSortColumn = column => {
    switch (column) {
      case 'name': {
        setSortColumn({
          name: true,
          profession: false,
          profileCompletion: false,
          status: false,
          date: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'profession': {
        setSortColumn({
          name: false,
          profession: true,
          profileCompletion: false,
          status: false,
          date: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'profileCompletion': {
        setSortColumn({
          name: false,
          profession: false,
          profileCompletion: true,
          status: false,
          date: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'status': {
        setSortColumn({
          name: false,
          profession: false,
          profileCompletion: false,
          status: true,
          date: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'date': {
        setSortColumn({
          name: false,
          profession: false,
          profileCompletion: false,
          status: false,
          date: true,
        });
        setSortDirection(!sortDirection);
        break;
      }
    }
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <br />
      <Grid container style={{ marginTop: '10px', marginLeft: '20px' }}>
        <Grid item md={1}>
          <Button
            onClick={allUsers}
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
            onClick={activeUsers}
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
            onClick={inActiveUsers}
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
          {/* <Box mr={1} display="flex" alignItems="center">
            <Button
              style={{
                textTransform: 'none',
                fontSize: 15
              }}
              variant="outlined"
              className={classes.filters}
              startIcon={
                <SvgIcon fontSize="small">
                  <FilterIcon />
                </SvgIcon>
              }
            >
              Filters
            </Button>
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
                <TableCell padding="checkbox"></TableCell>

                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.name
                })} onClick={() => handleSortColumn('name')} >Naam 
                  {sortColumn?.name && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.name && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.type
                })} onClick={() => handleSortColumn('profession')} >Beroep 
                  {sortColumn?.profession && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.profession && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.type
                })} onClick={() => handleSortColumn('profileCompletion')} >Profiel % 
                  {sortColumn?.profileCompletion && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.profileCompletion && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
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
              {users?.map(user => {
                const isUserSelected = selectedUsers.includes(user?._id);
                return (
                  <TableRow
                    hover
                    key={user?._id}
                    selected={isUserSelected}
                    onClick={e => handleClickModalOpen(user?._id)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isUserSelected}
                        onChange={e => handleSelectOneUser(e, user?._id)}
                        value={isUserSelected}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <img
                          className={classes.thumbnail}
                          src={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_USER_IMAGE_CONTAINER}/${
                            user?.profilePicturePath !== undefined &&
                            user?.profilePicturePath
                              ? `${user?.profilePicturePath}?${localStorage.getItem('sasToken')}`
                              : `dummyImage.png?${localStorage.getItem('sasToken')}`
                          }`}
                          alt={`${user?.firstName} Profile Image`}
                        />{' '}
                        <div style={{ display: 'block' }}>
                          <Typography style={{ fontSize: '15px' }}>
                            {user?.firstName} {user?.lastName}
                          </Typography>
                          <Typography
                            style={{ fontSize: '14px', color: 'grey' }}
                          >
                            {user?.email}
                          </Typography>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {user?.profession}
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <CircularProgressbar
                          value={
                            user?.profileCompletion > 100
                              ? 100
                              : user?.profileCompletion
                          }
                          text={`${
                            user?.profileCompletion > 100
                              ? 100
                              : user?.profileCompletion
                          }%`}
                          styles={{
                            // Customize the root svg element
                            root: { width: '40px' },
                            // Customize the path, i.e. the "completed progress"
                            path: {
                              // Path color
                              stroke: '#D30000',
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'butt',
                              // Customize transition animation
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                              // Rotate the path
                              transform: 'rotate(1turn)',
                              transformOrigin: 'center center'
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                              // Trail color

                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'rounded',
                              // Rotate the trail
                              transform: 'rotate(0.25turn)',
                              transformOrigin: 'center center'
                            },
                            // Customize the text
                            text: {
                              // Text color
                              color: '#0000',
                              fill: '#000000',
                              // Text size
                              fontSize: '30px'
                            },
                            circleRatio: 0.1,
                            // Customize background - only used when the `background` prop is true
                            background: {
                              fill: '#ffff'
                            }
                          }}
                        />
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Typography
                          className={classes.isDeleted}
                          onClick={e => handleUserStatus(e, user)}
                          style={{
                            cursor: 'pointer',
                            textTransform: 'unset',
                            backgroundColor:
                              user?.isDeleted === 0 ? '#E8F5E9' : '#FFF3E0',
                            color: user?.isDeleted === 0 ? '#4CAF50' : '#F57C00'
                          }}
                        >
                          {getEnumValue(user?.isDeleted, 'STATUS_TYPE')}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {moment(parseInt(user.updatedAt)).format('DD MMM, YYYY')}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}

              {users.length === 0 && (
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

      <AddUser openModal={openModal} setOpenModal={setOpenModal} />
      <EditUser
        selectedUserId={selectedUserId}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />

      {/* Delete users Modal */}
      <DeleteModal
        selectedUsers={selectedUsers}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

Results.defaultProps = {
  users: []
};

export default Results;
