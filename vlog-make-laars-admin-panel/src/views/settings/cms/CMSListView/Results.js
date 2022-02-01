import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AddClient from '../AddCMS/index';
import EditClient from '../EditCMS/index';
import { useSnackbar } from 'notistack';
import axios from 'axios';
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
  Filter as FilterIcon
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
    },
  },
  queryField: {},
  isDeletedField: {
    flexBasis: 200
  },
  popOver: {
    maxHeight: "50%",
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
    paddingLeft: 10,

  }
}));

const options = [
  { value: 1, label: 'Gemeenschappelijke secties' },
  { value: 2 , label: 'Startpagina' },
  { value: 3 , label: 'Alle woning vlogs' },
  { value: 4 , label: 'Woningdetails' },
  { value: 5 , label: 'Registreren pagina' },
  { value: 6 , label: 'Login pagina' },
  { value: 7 , label: 'Wachtwood vergeten' },
  { value: 8 , label: 'Wachtwood resetten' },
  { value: 9 , label: 'Dashboard' },
  { value: 10 , label: 'Mijn Gegevens' },
  { value: 11 , label: 'Mijn Documenten' },
  { value: 12 , label: 'Mijn Vlogs' },
  { value: 13 , label: 'Mijn Huizen' },
  { value: 14 , label: 'Mijn Aanvragen' },
  { value: 15 , label: 'Facturen' },
];
  
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enableBulkOperations, setEnableBulkOperations] = useState(false);
  const [selectedCMSId, setselectedCMSId] = useState();
  const [cmsArray, SetCmsArray] = useState([]);
  const [search, setSearch] = useState('');
  let [totalCount, setTotalCount] = useState(0);
  let token = localStorage.getItem('accessToken');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getAllCMSData();
  }, [limit, page, isSubmitting])

  const getAllCMSData = () => {
    const pageListCheck = filter.length > 0 ? true : false;

    let URL = `${process.env.REACT_APP_CMS_URL}?perPage=${limit}&pageNum=${page}&sort=asc${search ? '&search=' + search : ''}${pageListCheck ? `&pageList=[${filter}]` : ''}`;

    let headers = { 'headers': { 'authorization': `bearer ${token}` } };

    axios.get(URL, headers).
      then((response) => {
        SetCmsArray(response.data.data);
        setTotalCount(response.data.totalCount);
        setIsSubmitting(false);
      }).catch(error => {
        setTotalCount(0);
        if (error?.response?.code === 404 || error?.response?.status === 404) {
          SetCmsArray([]);
        }
        setIsSubmitting(false);
      })
  }
  const handleSelectOneCMS = (e, clientId) => {
    e.stopPropagation();
    setOpenEditModal(false);
    if (!selectedClients.includes(clientId)) {
      selectedClients.push(clientId);
      setSelectedClients(selectedClients);
      setEnableBulkOperations(true);
      setselectedCMSId(clientId);
    } else {
      setSelectedClients(prevSelected =>
        prevSelected.filter(id => id !== clientId)
      );
      setEnableBulkOperations(false);
      setselectedCMSId(clientId);
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickModalOpen = clientId => {
    setselectedCMSId(clientId);
    setOpenEditModal(true);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value));
  };

  const handleClickDeleteModalOpen = () => {
    setOpenDeleteModal(true);
  };

  const handleFilters = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFiltersClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSearch = event => {
    event.persist();
    if (event.key == 'Enter') {
      setIsSubmitting(true);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event?.target?.value);
    if (event?.target?.value?.length === 0) {
      setIsSubmitting(true);
    }
  }

  const handleFilterCheckBox = (event, item) => {
    const checkValue = filter.filter(value => value === item.value)
    if (checkValue.length < 1) {
      setFilter(prev => [...prev, item.value]);
      setIsSubmitting(true);
    }
    else {
      const updateList = filter.filter(value => value !== item.value)
      setFilter(updateList);
      setIsSubmitting(true);
    }
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>

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
            className={classes.addNewhouse}
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
            className={classes.popOver}
          >

            <Typography>
              {options && options.map((item, index) => {
                return (
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
                      label={item.label}
                      name={item.label + item.value}
                      onClick={e => handleFilterCheckBox(e, item)}
                      checked={filter.find(Item => Item === item.value)}
                    />
                  </Grid>
                )
              })
              }
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
                  {isSubmitting ? (<CircularProgress className={classes.loadingCircle} />) :
                    (<SvgIcon fontSize="small" color="action">
                      <SearchIcon className={classes.searchIcon} />
                    </SvgIcon>
                    )}
                </InputAdornment>
              )
            }}
            onKeyPress={handleSearch}
            onChange={handleSearchChange}
            placeholder="Zoeken"
            value={search}
            variant="outlined"
          />
        </Box>
      </Box>

      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>Key</TableCell>
                <TableCell>Bladzijde</TableCell>
                <TableCell>Nederlandse inhoud</TableCell>
                <TableCell>Engelse inhoud</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {cmsArray.length > 0 ?
                cmsArray?.map(cms => {
                  const isCMS = selectedClients.includes(cms._id);

                  return (
                    <TableRow
                      hover
                      key={cms._id}
                      selected={isCMS}
                      onClick={e => handleClickModalOpen(cms)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isCMS}
                          onChange={e => handleSelectOneCMS(e, cms._id)}
                          value={isCMS}
                        />
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <div style={{ display: 'block' }}>
                            <Typography style={{ fontSize: '15px' }}>
                              {cms.key}
                            </Typography>
                          </div>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {options.find(option => option?.value === cms?.page)?.label}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {cms.valueNL.replace(/<[^>]+>/g, '')}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {cms.valueEN.replace(/<[^>]+>/g, '')}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">

                        </Box>

                      </TableCell>
                    </TableRow>
                  );
                }) :
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    Geen verslagen gevonden
                  </TableCell>
                </TableRow>
              }
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
        rowsPerPageOptions={[25, 50, 100]}
      />

      <AddClient openModal={openModal} setOpenModal={setOpenModal} />
      <EditClient
        selectedCMSId={selectedCMSId}
        setselectedCMSId={setselectedCMSId}
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
