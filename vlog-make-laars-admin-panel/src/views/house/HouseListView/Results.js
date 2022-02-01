import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { GraphQLClient, gql } from 'graphql-request';
import { useSnackbar } from 'notistack';

import capitalize from 'src/utils/capitalize';

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
  FormControlLabel,
  Grid,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles,
  CircularProgress,
  Popover,
  Typography,
  Switch
} from '@material-ui/core';

import {
  Trash2 as TrashIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
} from 'react-feather';

import Image from 'src/components/Image';
import DeleteModal from './DeleteModal';
import moment from 'moment';
import mail from 'src/utils/mail';

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
    background: '#AB3535',
    color: '#fff',
    borderColor: '#AB3535',
    '&:hover': {
      background: '#fff',
      color: '#AB3535'
    }
  },
  addNewhouse: {
    height: 40
  },
  thumbnail: {
    height: '50px',
    width: '80px',
    paddingRight: 20
  },
  searchIcon: {
    color: '#263238'
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
  ownerName: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: theme.palette.secondary.main,
    }
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
  setOpenDeleteModal,
  ...rest
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(25);
  const [query, setQuery] = useState('');

  const [selectedHouses, setSelectedHouses] = useState([]);
  const [houses, setHouses] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [enableBulkOperations, setEnableBulkOperations] = useState(false);
  const [render, setRender] = useState(false);

  const [search, setSearch] = useState('');
  const [isPublished, setIsPublished] = useState(null);
  const [published, setPublished] = useState(false);
  const [unPublished, setUnPublished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sortDirection, setSortDirection] = useState(false);

  const [sortColumn, setSortColumn] = useState({
    streetNo: false,
    city: false,
    owner: false,
    isPublished: false,
    updatedAt: false,
    isReviewed: false,
  });

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!render) {
      findAllObject();
    }
  }, [page, limit, isSubmitting, sortDirection]);

  // Prepare Headers and Client
  const graphQLClient = new GraphQLClient(
    `${process.env.REACT_APP_OBJECT_URL}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        languages: 'eng'
      }
    }
  );

  const getAdminUserById = (userId) => {

    const registerQuery = gql`
    {
      getAdminUserById(userId: "${userId}"){
        email
      }
    }`;

    const graphQLClient = new GraphQLClient(
      process.env.REACT_APP_ADMIN_URL,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      },
    );

    // IIFE(Immediately invoked functions Expression)
    (async () => {
      await graphQLClient.request(registerQuery).then(data => {
        mail('landlord_house_is_published', data?.getAdminUserById?.email, {}).then(response => {
          enqueueSnackbar('Huis succesvol gepubliceerd!', {
            variant: 'success'
          });

          setTimeout(function () {
            window.location.href = '/admin/huizen';
          }, 2000);
        });
      });
    })().catch(error => {
      //console.error('error', error);
      enqueueSnackbar('Er is geen eigenaar verbonden aan het huidige huis. E-mail wordt dus alleen doorgestuurd naar de huurder.', {
        variant: 'error',
        autoHideDuration: 5000
      });
      setTimeout(function () {
        window.location.href = '/admin/huizen';
      }, 10000);
    });
  };

  const findAllObject = () => {
    (async () => {
      let searchFilter = '';
      if (search?.length) {
        searchFilter = `search: "${search?.trim()}"`;
      }

      let sortFilter = '';
      let direction = sortDirection ? 1 : -1;

      if (sortColumn?.streetNo) {
        sortFilter = `sortColumn:"{'address.streetNo': ${direction}}"`
      }

      if (sortColumn?.city) {
        sortFilter = `sortColumn:"{'address.city': ${direction}}"`
      }

      if (sortColumn?.owner) {
        sortFilter = `sortColumn:"{'ownerDetails.firstName': ${direction}}"`
      }

      if (sortColumn?.isPublished) {
        sortFilter = `sortColumn:"{'isPublished': ${direction}}"`
      }

      if (sortColumn?.updatedAt) {
        sortFilter = `sortColumn:"{'updatedAt': ${direction}}"`
      }
      
      if (sortColumn?.isReviewed) {
        sortFilter = `sortColumn:"{'isPublished': ${direction}}"`
      }

      let isPublishedFilter = '';
      if (published && unPublished) {
        isPublishedFilter = '';
      }
      else if (published || unPublished) {
        if (published) {
          isPublishedFilter = `isPublished: true`;
        }
        if (unPublished)
          isPublishedFilter = `isPublished: false`;
      }


      const query = gql`
        query {
          objectSearchFilter(
            ${searchFilter}
            ${sortFilter}
            ${isPublishedFilter}
            sort: "desc"
            pageNum: ${page} 
            perPage: ${limit}) {
              data {
                _id
                title
                houseId
                isPublished
                ownerId
                address {
                  streetNo
                  city
                }
                ownerDetails {
                  firstName
                  lastName
                  email
                  mobileNumber
                }
                mediaImage{
                  blobIdImage
                  title
                }
                updatedAt
              }
              totalCount
            }
          }
        `;
      await graphQLClient.request(query).then(data => {
        setHouses(data?.objectSearchFilter?.data);
        setTotalCount(data?.objectSearchFilter?.totalCount);
        setEnableBulkOperations(selectedHouses.length > 0);
        setIsSubmitting(false);
      });
    })().catch(err => {
      setHouses([]);
      setTotalCount(0);
      setIsSubmitting(false);
      //console.error(err);
    });
  };

  var isPublishedCheckboxes = [];

  if (houses.length > 0) {
    var isPublishedCheckboxes = houses.reduce((item, house) => {
      item[`isPublished${house.id}`] = house.isPublished;
      return item;
    }, {});
  }

  const [publishedCheckboxes, setPublishedCheckboxes] = useState(
    isPublishedCheckboxes
  );

  const [filtersClass, setFiltersClass] = useState('flex-end');

  const handleSearchChange = (event) => {
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

  const handleChange = event => {
    setPublishedCheckboxes({
      ...publishedCheckboxes,
      [event.target.id]: event.target.checked
    });
  };
  const publishObject = (e, _id, publishedStatus) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const query = gql`
    mutation {
      publishObject(
        id: "${_id}"
        publish: ${!publishedStatus}) {
        title
        ownerId
        availability
        isPublished
        details {
          neighbourhood {
            title
          }
        }
      }
    }
    `;

    (async () => {
      await graphQLClient.request(query).then(data => {
        if (!publishedStatus) {
          getAdminUserById(data?.publishObject?.ownerId);
        }
        else {
          enqueueSnackbar('Huis succesvol gepubliceerd!', {
            variant: 'success'
          });

          setTimeout(function () {
            window.location.href = '/admin/huizen';
          }, 2000);
        }
      });
    })().catch(err => {
      //console.error(err);
      enqueueSnackbar('Er is geen eigenaar verbonden aan het huidige huis. E-mail wordt dus alleen doorgestuurd naar de huurder.', {
        variant: 'error',
        autoHideDuration: 5000
      });
      setTimeout(function () {
        window.location.href = '/admin/huizen';
      }, 10000);
    });
  };

  const searchOwner = (e, email) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    localStorage.setItem('ownerEmail', email);
    window.open('/admin/klanten', '_blank');
  };

  const handleHouseSelection = (e, houseId) => {
    e.stopPropagation();
    if (!selectedHouses.includes(houseId)) {
      setFiltersClass('space-between');
      setSelectedHouses(prevSelected => [...prevSelected, houseId]);
      setEnableBulkOperations(true);
      setRender(true);
    } else {
      setFiltersClass('flex-end');
      setSelectedHouses(prevSelected =>
        prevSelected.filter(id => id !== houseId)
      );
      setEnableBulkOperations(false);
      setRender(true);
    }
  };

  const handlePageChange = (event, newPage) => {
    setHouses([]);
    setPage(newPage);
    setRender(false);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value));
    setRender(false);
  };

  const handleClickDeleteModalOpen = () => {
    setOpenDeleteModal(true);
  };

  const navigateToEditForm = (e, id) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (!e.target.value) {
      window.location.href = `/admin/huizen/edit/${id}/`;
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilters = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFiltersClose = () => {
    setAnchorEl(null);
  };

  const handleFilterPubCheckBox = (event) => {
    if (event.target.checked) {
      setPublished(true);
      setIsSubmitting(true);
    }
    else {
      setPublished(false);
      setIsSubmitting(true);
    }
  }

  const handleFilterUnPubCheckBox = (event) => {
    if (event.target.checked) {
      setUnPublished(true);
      setIsSubmitting(true);
    }
    else {
      setUnPublished(false);
      setIsSubmitting(true);
    }
  }

  const handleSortColumn = column => {
    switch (column) {
      case 'streetNo': {
        setSortColumn({
          streetNo: true,
          city: false,
          owner: false,
          isPublished: false,
          updatedAt: false,
          isReviewed: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'city': {
        setSortColumn({
          streetNo: false,
          city: true,
          owner: false,
          isPublished: false,
          updatedAt: false,
          isReviewed: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'owner': {
        setSortColumn({
          streetNo: false,
          city: false,
          owner: true,
          isPublished: false,
          updatedAt: false,
          isReviewed: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'isPublished': {
        setSortColumn({
          streetNo: false,
          city: false,
          owner: false,
          isPublished: true,
          updatedAt: false,
          isReviewed: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'updatedAt': {
        setSortColumn({
          streetNo: false,
          city: false,
          owner: false,
          isPublished: false,
          updatedAt: true,
          isReviewed: false,
        });
        setSortDirection(!sortDirection);
        break;
      }
      case 'isReviewed': {
        setSortColumn({
          streetNo: false,
          city: false,
          owner: false,
          isPublished: false,
          updatedAt: false,
          isReviewed: true,
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
                    label="Gepubliceerde Huizen"
                    name="Published"
                    onClick={e => handleFilterPubCheckBox(e)}
                    checked={published}
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
                    label="Niet Gepubliceerde Huizen"
                    name="Un-Published"
                    checked={unPublished}
                    onClick={e => handleFilterUnPubCheckBox(e)}
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
      </Box>
      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.streetNo
                })} onClick={() => handleSortColumn('streetNo')} >Straat
                  {sortColumn?.streetNo && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.streetNo && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.city
                })} onClick={() => handleSortColumn('city')} >Stad
                  {sortColumn?.city && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.city && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.owner
                })} onClick={() => handleSortColumn('owner')} >Eigenaar
                  {sortColumn?.owner && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.owner && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.isPublished
                })} onClick={() => handleSortColumn('isPublished')} >Publiceren
                  {sortColumn?.isPublished && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.isPublished && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.updatedAt
                })} onClick={() => handleSortColumn('updatedAt')} >Edit
                  {sortColumn?.updatedAt && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.updatedAt && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
                <TableCell className={clsx(classes.tableCell, {
                  [classes.isSortedColumn]: sortColumn?.isReviewed
                })} onClick={() => handleSortColumn('isReviewed')} >Reviewed
                  {sortColumn?.isReviewed && sortDirection && (<ChevronUpIcon className={classes.chevronIcon} />)}
                  {sortColumn?.isReviewed && !sortDirection && (<ChevronDownIcon className={classes.chevronIcon} />)}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {houses?.map(house => {
                const isHouseSelected = selectedHouses.includes(house._id);
                let owner = 'Niet beschikbaar';
                let ownerEmail = '';
                if (house?.ownerDetails?.length === 1) { 
                  let ownerDetails = house?.ownerDetails[0];
                  owner = ownerDetails?.firstName + ' ' + ownerDetails?.lastName;
                  ownerEmail = ownerDetails?.email;
                }
                return (
                  <TableRow
                    hover
                    key={house._id}
                    selected={isHouseSelected}
                    onClick={e => navigateToEditForm(e, house._id)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isHouseSelected}
                        onChange={event =>
                          handleHouseSelection(event, house._id)
                        }
                        value={isHouseSelected}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Image
                          src={
                            house?.mediaImage?.length > 0
                              ? `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/${house?.mediaImage[0].blobIdImage}?${localStorage.getItem('sasToken')}`
                              : `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/dummyImage.png?${localStorage.getItem('sasToken')}`
                          }
                          className={classes.thumbnail}
                        />{' '}
                        {house?.address?.streetNo}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {capitalize(house?.address?.city)}
                      </Box>
                    </TableCell>

                    <TableCell
                      onClick={e =>
                        searchOwner(e, ownerEmail)
                      }>
                      <Box display="flex" alignItems="center" className={classes.ownerName}>
                        {capitalize(owner)}
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <div>
                          <Switch
                            id={`isPublished${house.id}`}
                            checked={house?.isPublished}
                            onClick={e =>
                              publishObject(e, house._id, house.isPublished)
                            }
                            edge="start"
                            name={`isPublished[${house.id}]`}
                            onChange={handleChange}
                          />
                        </div>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {/* {moment(house.updatedAt).format('DD MMM, YYYY')} */}
                        {moment(house?.updatedAt).format('DD MMM, YYYY')}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Image
                          src={
                            house?.isPublished === false
                              ? 'https://assets.it22.nl/vlog-make-laars/admin/house/reviewed-rejected.png'
                              : 'https://assets.it22.nl/vlog-make-laars/admin/house/reviewed-passed.png'
                          }
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
              {houses?.length == 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Geen Huizen Gevonden
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

      {/* Delete houses Modal */}
      <DeleteModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        selectedHouses={selectedHouses}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string
};

Results.defaultProps = {
  houses: []
};

export default Results;
