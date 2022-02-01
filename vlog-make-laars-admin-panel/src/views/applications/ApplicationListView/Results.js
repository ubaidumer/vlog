import React, { useState, useEffect, useLayoutEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Select from 'react-select';

import Image from 'src/components/Image';

import Application from '../ViewApplicationById/index';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import capitalize from 'src/utils/capitalize';

import moment from 'moment';

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
  CircularProgress,
  makeStyles,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';
import {
  Edit as EditIcon,
  Trash2 as TrashIcon,
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

import mail from 'src/utils/mail';

import { GraphQLClient, gql } from 'graphql-request';

const useStyles = makeStyles(theme => ({
  TableRow: {
    cursor: 'pointer'
  },
  root: {
    color: '#263238',
    width: '100%',
    '& .Mui-disabled': {
      cursor: 'not-allowed !important',
      opacity: '0.5',
    },
    '& .MuiTablePagination-selectIcon': {
      color: '#263238 !important'
    },
    '& .css-1okebmr-indicatorSeparator': {
      backgroundColor: '#ffff'
    },
    '& .css-tj5bde-Svg': {
      fill: theme.palette.secondary.main
    },
    '& .css-yk16xz-control': {
      borderRadius: '0px 4px 4px 0px',
      borderLeft: 0,
      '&:focus': {}
    },
    '& .css-1pahdxg-control': {
      borderColor: '#DF1683',
      boxShadow: '0 0 0 1px #DF1683',

      '&:hover': {
        borderColor: '#DF1683',
        boxShadow: '0 0 0 1px #DF1683'
      }
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
  filters: {
    textTransform: 'capitalize'
  },
  filterButton: {
    [theme.breakpoints.down('md')]: {
      width: '89%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '87%'
    },
    [theme.breakpoints.up('md')]: {
      width: '87%'
    }
  },
  searchField: {
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },

  right: {
    [theme.breakpoints.down('sm')]: {}
  },

  moveItem: {
    textTransform: 'unset',
    borderRadius: '0px',
    height: '37px',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      fontSize: '8px'
    },
    [theme.breakpoints.down('md')]: {
      width: '30%',
      fontSize: '12px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '40%',
      fontSize: '12px',
      borderRadius: '4px'
    }
  },
  addNewhouse: {
    height: 40
  },
  native: {
    color: 'grey',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
      fontSize: '10px',
      padding: '0px 10px 4px 0px'
    },
    [theme.breakpoints.down('md')]: {
      width: '60%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '60%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      fontSize: '12px'
    }
  },

  voor: {
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '11px'
    }
  },
  color: {
    color: '#DF1683'
  },
  divider: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: '20px',
      marginRight: '20px'
    }
  },
  inges: {
    textTransform: 'capitalize',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '11px'
    }
  },
  geselect: {
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '11px'
    }
  },
  afg: {
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '11px'
    }
  },
  thumbnail: {
    width: 64,
    maxHeight: 42,
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
  address: {
    paddingLeft: 10,
    fontSize: 14,
  },
}));
let applicationStatus=7;
const Results = ({ className, ...rest }) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [selectedApplicantEmails, setSelectedApplicantEmails] = useState([]);
  const [selectedApplicationOwnerIds, setSelectedApplicationOwnerIds] = useState([]);
  const [selectedApplicationHouseIds, setSelectedApplicationHouseIds] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(25);

  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    isDeleted: null
  });
  const [applications, setApplications] = useState([]);
  const [enableBulkOperations, setEnableBulkOperations] = useState(false);
  const [selectedSomeApplications, setSelectedSomeApplications] = useState(
    false
  );
  const [selectedAllApplications, setSelectedAllApplications] = useState(false);

  const [applicationCounters, setApplicationsCounter] = useState({});

  const [totalCount, setTotalCount] = useState(0);

  var [registered, setRegistered] = useState(true);
  const [vav, setVav] = useState(false);
  const [ges, setGes] = useState(false);
  const [afg, setAfg] = useState(false);

  const [selectedStatus, setSelectedOptions] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  
  const [search, setSearch] = useState('');
  const [applicationIsSubmitting, setApplicationIsSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const findAllApplications = () => {
    (async () => {
      let searchFilter = '';
      if (search?.length) {
        searchFilter = `search: "${search?.trim()}"`;
      }
      const graphQLQuery = gql`
        {
          applicationSearchFilter (
             ${searchFilter}
              sort: "desc"
              pageNum: ${page}
              perPage: ${limit}
              isApproved: false
              statusList: ["${applicationStatus}"]
          ) {
            data {
              _id
              applicantId
              objectId
              status
              invoiceNumber
              isApproved
              profession
              houseNumber
              applicantName
              applicantDetails {
                dateOfBirth
              }
              email
              ownerId
              houseDetails {
                address {
                  city
                  streetNo
                }
              }
              vlogDescription
              applicantAge
              profilePicturePath
              houseThumbnail
              applicationAttachment {
                vlog {
                  attachmentId
                  title
                  type
                }
              }
            }
            totalCount
          }
        }
      `;
      // Prepare Headers and Client
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_APPLICATION_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      await graphQLClient.request(graphQLQuery).then(data => {
        // Fetch and Set Application counters in state
        getApplicationCounters();

        setApplications(data?.applicationSearchFilter ?.data);

        setTotalCount(data?.applicationSearchFilter ?.totalCount);

        setEnableBulkOperations(selectedApplications.length > 0);
        setSelectedSomeApplications(
          selectedApplications.length > 0 &&
            selectedApplications.length < applications.length
        );

        setSelectedAllApplications(
          selectedApplications?.length ===
            data?.applicationSearchFilter ?.data?.length
        );
        setIsSubmitting(false);
      });
    })().catch(err => {
      setApplications([]);
      setEnableBulkOperations(false);
      setSelectedSomeApplications(false);
      setSelectedAllApplications(false);
      setTotalCount(0);
      setIsSubmitting(false);
      //console.error(err);
    });
  };

  const [application, setApplicationData] = useState({});
  const getApplicationCounters = () => {
    const graphQLQuery = gql`
      {
        applicationCounts {
          Viewing
          InProgress
          Introduced_to_Landlord
          Selected
          Rejected
          Registered
          Complete
          Rented
        }
      }
    `;

    // Prepare Headers and Client
    const graphQLClient = new GraphQLClient(
      `${process.env.REACT_APP_APPLICATION_URL}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
    );

    graphQLClient
      .request(graphQLQuery)
      .then(data => {
        setApplicationsCounter(data.applicationCounts);
      })
      .catch(err => {
        //console.error(err);
      });
  };

  useEffect(() => {
    findAllApplications();
    getApplicationCounters();
  }, [page, limit,isSubmitting]);

  const [filtersClass, setFiltersClass] = useState('flex-end');

  const updateApplicationStatus = (status, idList, email, ownerId, houseId) => {
    setApplicationIsSubmitting(true);
    if ((status && selectedApplications?.length > 0) || status && idList?.length > 0) {
      const ids = idList || selectedApplications;
      const graphQLQuery = gql`
        mutation {
          updateApplicationStatus(
            status: ${parseInt(status)},
            idList: ${JSON.stringify(ids)}
          ) {
            _id
          }
        }
      `;
    
      // Single Application
      
      if (email !== undefined) {
        (async () => {
          // Prepare Headers and Client
          const graphQLClient = new GraphQLClient(
            `${process.env.REACT_APP_APPLICATION_URL}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            }
          );
          await graphQLClient.request(graphQLQuery).then(data => {
            if (data?.updateApplicationStatus) {
              if (parseInt(status) === 4) {
                mail('tenant_is_introduced_to_landlord', email, {}).then(response => {
                  if (ownerId?.length > 5) {
                    getAdminUserById(ownerId, 0, 1);
                  }
                  else {
                    getOwnerId(houseId, 0, 1);
                  }
                })
              }
              else if (parseInt(status) === 5) {
                mail('tenant_selected_for_house', email, {}).then(response => {
                  enqueueSnackbar('Status is succesvol bijgewerkt.', {
                    variant: 'success'
                  });

                  setTimeout(function () {
                    window.location.href = '/admin/aanvragen';
                  }, 2000);
                });
              }
              else if (parseInt(status) === 7) {
                enqueueSnackbar('Status is succesvol bijgewerkt.', {
                  variant: 'success'
                });

                setTimeout(function () {
                  window.location.href = '/admin/aanvragen';
                }, 2000);
              }
              else if (parseInt(status) === 6) {
                mail('tenant_application_rejected_pre_intro', email, {}).then(response => {
                  enqueueSnackbar('Status is succesvol bijgewerkt.', {
                    variant: 'success'
                  });

                  setTimeout(function () {
                    window.location.href = '/admin/aanvragen';
                  }, 2000);
                });
              }
              else {
                enqueueSnackbar('Status is succesvol bijgewerkt.', {
                  variant: 'success'
                });

                setTimeout(function () {
                  window.location.href = '/admin/aanvragen';
                }, 2000);
              }
            }
          })().catch(err => {
            //console.error(err);
          });
        })().catch(err => {
          //console.error(err);
        });
      }
      else {
          (async () => {
            // Prepare Headers and Client
            const graphQLClient = new GraphQLClient(
              `${process.env.REACT_APP_APPLICATION_URL}`,
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
              }
            );
          await graphQLClient.request(graphQLQuery).then(data => {
            
            // Multiple ID's
            for (let i = 0, count = selectedApplicantEmails?.length; i < count; i++) {
              if (data?.updateApplicationStatus) {
                if (parseInt(status) === 4) {
                  mail('tenant_is_introduced_to_landlord', selectedApplicantEmails[i], {}).then(response => {
                    if (selectedApplicationOwnerIds[i]?.length > 5) {
                      getAdminUserById(selectedApplicationOwnerIds[i], count, i)
                    }
                    else {
                      getOwnerId(selectedApplicationHouseIds[i], count, i);
                    }
                  })
                }
                else if (parseInt(status) === 5) {
                  mail('tenant_selected_for_house', selectedApplicantEmails[i], {}).then(response => {
                    if (i === count - 1) {
                      enqueueSnackbar('Status is succesvol bijgewerkt.', {
                        variant: 'success'
                      });
                      setTimeout(function () {
                        window.location.href = '/admin/aanvragen';
                      }, 2000);
                    }
                  });
                }
                else if (parseInt(status) === 6) {
                  mail('tenant_application_rejected_pre_intro', selectedApplicantEmails[i], {}).then(response => {
                    enqueueSnackbar('Status is succesvol bijgewerkt.', {
                      variant: 'success'
                    });
                    if (i === count - 1) {
                      setTimeout(function () {
                        window.location.href = '/admin/aanvragen';
                      }, 2000);
                    }
                  })
                }
                else if (parseInt(status) === 7) {
                  enqueueSnackbar('Status is succesvol bijgewerkt.', {
                    variant: 'success'
                  });

                  setTimeout(function () {
                    window.location.href = '/admin/aanvragen';
                  }, 2000);
                }
                else {
                  if (i === count - 1) {
                    enqueueSnackbar('Status is succesvol bijgewerkt.', {
                      variant: 'success'
                    });

                    setTimeout(function () {
                      window.location.href = '/admin/aanvragen';
                    }, 2000);
                  }
                }
              }
            }
          })().catch(err => {
            //console.error(err);
          });
          })().catch(err => {
            //console.error(err);
          });
        }
    }
  };

  const getOwnerId = (houseId, count, i) => {
    const query = gql`
      query {
        findManyHousesByHouseId(id: "${houseId}"){
          ownerId
        }
      }`;

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
      await graphQLClient.request(query).then(data => {
        getAdminUserById(data?.findManyHousesByHouseId?.ownerId, count, i)
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  const getAdminUserById = (userId, count, i) => {

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
      await graphQLClient.request(registerQuery).then(response => {
        mail('tenant_introduction_to_landlord', response?.getAdminUserById?.email, {}).then(response => {
          if (i === count - 1) {
            enqueueSnackbar('Status is succesvol bijgewerkt.', {
              variant: 'success'
            });

            setTimeout(function () {
              window.location.href = '/admin/aanvragen';
            }, 2000);
          }
        });
      });
    })().catch(error => {
      //console.error('error', error);

      if (i === count - 1) {
        enqueueSnackbar('Er is geen eigenaar verbonden aan het huidige huis. E-mail wordt dus alleen doorgestuurd naar de huurder.', {
          variant: 'error',
          autoHideDuration: 5000
        });
        setTimeout(function() {
          window.location.href = '/admin/aanvragen';
        }, 10000);
      }
    });
  };

  const handleSelectAllApplications = event => {
    setFiltersClass(event.target.checked ? 'space-between' : 'flex-end');
    setSelectedApplications(
      event.target.checked ? applications.map(client => client._id) : []
    );
  };

  const handleSelectOneApplication = (event, applicationId, applicantEmail, ownerId, houseId) => {

    setOpenModal(false);
    if (!selectedApplications.includes(applicationId)) {
      setFiltersClass('space-between');
      setSelectedApplications(prevSelected => [...prevSelected, applicationId]);
      setSelectedApplicantEmails(prevSelected => [...prevSelected, applicantEmail]);
      setSelectedApplicationOwnerIds(prevSelected => [...prevSelected, ownerId]);
      setSelectedApplicationHouseIds(prevSelected => [...prevSelected, houseId]);
      setEnableBulkOperations(1);
    } else {
      setFiltersClass('flex-end');
      setSelectedApplications(prevSelected =>
        prevSelected.filter(id => id !== applicationId)
      );
      
      setSelectedApplicantEmails(prevSelected =>
        prevSelected.filter(id => id !== applicantEmail)
      );
      
      setSelectedApplicationOwnerIds(prevSelected =>
        prevSelected.filter(id => id !== ownerId)
      );

      setSelectedApplicationHouseIds(prevSelected =>
        prevSelected.filter(id => id !== houseId)
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value));
  };

  const options = [
    { value: '7', label: 'Ingeschreven' },
    {
      value: '4',
      label: 'Voorgesteld Aan Verhuurder'
    },
    { value: '5', label: 'Geselecteerd' },
    { value: '6', label: 'Afgewezen' }
  ];

  let handleStatusUpdate = selectedStatus => {
    setSelectedOptions(selectedStatus);
    updateApplicationStatus(selectedStatus.value);
  };

  let rejectApplication = (e, applicationId, email, ownerId, objectId) => {
    e.stopPropagation();
    setOpenModal(false);
    updateApplicationStatus(6, [applicationId], email, ownerId, objectId);
  };

  let selectApplication = (e, applicationId, email, ownerId, objectId) => {
    e.stopPropagation();
    setOpenModal(false);
    updateApplicationStatus(5, [applicationId], email, ownerId, objectId);
  };

  const updateTabs = tabId => {
    setPage(0);
    setSelectedTab(tabId);
    applicationStatus=tabId;
    findAllApplications();

    switch (tabId) {
      case 7: // INGESCHIREVEN
        setVav(false);
        setRegistered(true);
        setGes(false);
        setAfg(false);
        break;

      case 4: // VOORGESTELD AAN VERHUURDER
        setVav(true);
        setRegistered(false);
        setGes(false);
        setAfg(false);
        break;

      case 5: // GESELECTEERED
        setVav(false);
        setRegistered(false);
        setGes(true);
        setAfg(false);
        break;

      case 6: // Afgewezen
        setVav(false);
        setRegistered(false);
        setGes(false);
        setAfg(true);
        break;
    }
    return true;
  };
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


  const EditApplicationHandler = application => {
    console.log("handleSelectOne Applications")
    setOpenModal(!openModal);
    setApplicationData(application);
  };

  const getHouseAddress = application => {
    let address = '';
    
    if (application?.houseDetails?.length > 0) {
      const houseDetails = application?.houseDetails[0];
      // Street
      address = capitalize(houseDetails?.address?.streetNo);
      address += houseDetails?.address?.streetNo?.length > 0 ? ', ' : '';
      
      // House Number
      address += application?.houseNumber;
      address += application?.houseNumber?.length > 0 ? ', ' : '';

      // City
      address += capitalize(houseDetails?.address?.city);
    }

    return address;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <br />
      <Grid container style={{ marginTop: '10px' }}>
        <Grid item md={3} xs={12} sm={6}>
          <Button
            onClick={() => updateTabs(7)}
            className={clsx(classes.inges, registered && classes.color)}
          >
            Ingeschreven (
            {applicationCounters?.Registered
              ? applicationCounters?.Registered
              : 0}
            )
          </Button>
          <div className={classes.divider}>
            <Divider
              style={{ backgroundColor: registered ? '#DF1683' : '#000000' }}
            />
          </div>
        </Grid>

        <Grid item md={3} xs={12} sm={6}>
          <Button
            onClick={() => updateTabs(4)}
            className={clsx(classes.inges, vav && classes.color)}
          >
            Voorgesteld Aan Verhuurder (
            {applicationCounters?.Introduced_to_Landlord
              ? applicationCounters?.Introduced_to_Landlord
              : 0}
            )
          </Button>
          <div className={classes.divider}>
            <Divider style={{ backgroundColor: vav ? '#DF1683' : '#000000' }} />
          </div>
        </Grid>

        <Grid item md={3} xs={12} sm={6}>
          <Button
            onClick={() => updateTabs(5)}
            className={clsx(classes.inges, ges && classes.color)}
          >
            Geselecteerd (
            {applicationCounters?.Selected ? applicationCounters?.Selected : 0})
          </Button>
          <div className={classes.divider}>
            <Divider style={{ backgroundColor: ges ? '#DF1683' : '#000000' }} />
          </div>
        </Grid>

        <Grid item md={3} xs={12} sm={6}>
          <Button
            onClick={() => updateTabs(6)}
            className={clsx(classes.inges, afg && classes.color)}
          >
            Afgewezen (
            {applicationCounters?.Rejected ? applicationCounters?.Rejected : 0})
          </Button>
          <div className={classes.divider}>
            <Divider style={{ backgroundColor: afg ? '#DF1683' : '#000000' }} />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ marginTop: '10px', marginLeft: '10px' }}
      >
        <Grid item md={3} xs={12} sm={12}>
          <div style={{ marginRight: '10px' }}>
            <TextField
              fullWidth
              size="small"
              className={classes.searchField}
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
              // onChange={handleQueryChange}
              placeholder="Zoeken"
              onKeyPress={handleSearch}
              onChange={handleSearchChange}
              value={search}
              variant="outlined"
            />
          </div>
        </Grid>

        <Grid item md={6} xs={12} sm={12} className={classes.right}>
          <div style={{ display: 'flex' }}>
            <Button
              className={classes.moveItem}
              variant="contained"
              startIcon={
                <SvgIcon fontSize="small">
                  {' '}
                  <ArrowForwardIcon />{' '}
                </SvgIcon>
              }
            >
              Verplaats naar
            </Button>

            <Select
              className={classes.native}
              placeholder="Geselecteerd Status"
              value={selectedStatus}
              onChange={handleStatusUpdate}
              options={options}
            />
          </div>
        </Grid>

        <Grid item md={3} xs={12} sm={12}>
        </Grid>
      </Grid>
      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                <TableCell>Naam</TableCell>
                <TableCell>Adres</TableCell>
                <TableCell>Leeftijd</TableCell>
                <TableCell>Beroep</TableCell>
                <TableCell>Actie</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications?.length > 0 &&
                applications?.map(application => {
                  const isApplicationSelected = selectedApplications.includes(
                    application?._id
                  );
                  return (
                    <TableRow
                      hover
                      className={classes.TableRow}
                      key={application?._id}
                      selected={isApplicationSelected}
                      onClick={() => EditApplicationHandler(application)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isApplicationSelected}
                          onChange={event =>
                            handleSelectOneApplication(event, application?._id, application?.email, application?.ownerId, application?.objectId)
                          }
                          value={isApplicationSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Image
                            className={classes.thumbnail}
                            src={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/${
                              application?.houseThumbnail
                                ? `${application?.houseThumbnail}?${localStorage.getItem('sasToken')}`
                                : `dummyImage.png?${localStorage.getItem('sasToken')}`
                            }`}
                          />{' '}
                          <div style={{ display: 'block' }}>
                            <Typography style={{ fontSize: '15px' }}>
                              {application?.applicantName}
                            </Typography>
                            <Typography
                              style={{ fontSize: '14px', color: 'grey' }}
                            >
                              {application?.email}
                            </Typography>
                          </div>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {getHouseAddress(application)}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {application?.applicantDetails?.length > 0 ?
                            (`${moment().diff(parseInt(application?.applicantDetails[0]?.dateOfBirth), 'years')} jaar`) : ''}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {capitalize(application?.profession)}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="start">
                          {selectedTab != 6 && (
                            <Button
                              disabled={applicationIsSubmitting}
                              onClick={e =>
                                rejectApplication(e, application?._id, application?.email, application?.ownerId, application?.objectId)
                              }
                              style={{
                                border: '2px solid #FF0000',
                                backgroundColor: '#f5a59d',
                                color: '#FF0000',
                                width: '106px',
                                height: '30px',
                                textTransform: 'none'
                              }}
                            >
                              Afwijzen
                            </Button>
                          )}

                          {selectedTab == 6 && (
                            <Button
                              disabled={applicationIsSubmitting}
                              onClick={e =>
                                selectApplication(e, application?._id, application?.email, application?.ownerId, application?.objectId)
                              }
                              style={{
                                border: '1px solid rgb(0, 163, 46)',
                                backgroundColor: 'rgb(195, 235, 199)',
                                color: 'rgb(0, 163, 46)',
                                width: '106px',
                                height: '30px',
                                textTransform: 'none'
                              }}
                            >
                              Uitnodigen
                            </Button>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}

              {applications.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Geen toepassingen gevonden.
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

      {openModal === true && (
        <Application
          openModal={openModal}
          setOpenModal={setOpenModal}
          application={application}
        />
      )}
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string
};

export default Results;
