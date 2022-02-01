import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Document from '../components/Document';
import Vlog from '../components/Vlog';

import { useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  DialogActions,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

import { GraphQLClient, gql } from 'graphql-request';
import { useSnackbar } from 'notistack';

import capitalize from 'src/utils/capitalize';

const useStyles = makeStyles(theme => ({
  paymentDetail: {
    padding: '20px 30px'
  },
  tableCell: {
    borderBottom: 0,
    paddingBottom: 5,
    '& .aanvraagAfmaken': {
      '& .MuiLinearProgress-bar': {
        background: '#5181FC'
      }
    },
    '& .bezichtiging': {
      '& .MuiLinearProgress-bar': {
        background: '#4AAF05'
      }
    },
    '& .inBehandeling': {
      '& .MuiLinearProgress-bar': {
        background: '#FB8832'
      }
    },
    '& .verhuurd': {
      '& .MuiLinearProgress-bar': {
        background: '#FF5756'
      }
    }
  },
  tableHead: {
    textTransform: 'unset',
    fontWeight: 600,
    borderBottom: 0,
    paddingBottom: 5,
  },
  addressCell: {
    display: 'flex',
    alignItems: 'center',
  },
  houseImage: {
    width: 30,
    height: 30,
    objectFit: 'cover'
  },
  root: {
    '& .css-26l3qy-menu': {
      zIndex: 9999
    }
  },
  editor: {
    marginTop: '0.5rem',
    border: '1px solid rgba(224, 224, 224, 1)',
    '& .ql-editor': {
      height: 200
    }
  },
  gridMargin: {
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '20px'
  },
  profileDiv: {
    position: 'absolute'
  },
  nameWrapper: {
    marginTop: '15px',
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row',
    textAlign: 'start'
  },
  buttonWrapper: {
    backgroundColor: 'white',
    '&:hover': {
      '& $editButton': {
        color: 'white',
        bottom: '40px',
        width: '72px',
        height: '35px',
        backgroundColor: 'rgba(103, 114, 120, .5)',
        display: 'initial'
      },
      '&:hover': {
        '& $deleteButton': {
          marginLeft: '2px',
          color: 'red',
          width: '70px',
          bottom: '40px',
          height: '35px',
          backgroundColor: 'rgba(103, 114, 120, .5)',
          display: 'initial'
        }
      }
    }
  },
  editButton: {
    display: 'none'
  },
  deleteButton: {
    display: 'none'
  },
  DeleteIcon: {},
  addNew: {
    border: `1px solid ${theme.palette.secondary.main}`,
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.background.default
    }
  },
  addNewHouse: {
    textTransform: 'capitalize',
    marginTop: '10px',
    border: `1px solid ${theme.palette.secondary.main}`,
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.background.default
    }
  },
  firstTypography: {
    marginTop: '5px',
    marginLeft: '20px',
    marginRight: '10px'
  },
  EditIcon: {},
  second: {
    marginLeft: '24px',
    paddingRight: '7px'
  },
  documentText: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px'
  },
  documentTypo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
    }
  },
  loadingCircle: {
    color: 'white',
    width: '25px !important',
    height: '25px !important',
    marginLeft: 10
  },
  editAction: {
    background: '#6F6F6F',
    color: '#ffff',
    borderColor: '#ffff',
    '&:hover': {
      color: '#6F6F6F',
      background: '#fff',
      borderColor: '#6F6F6F'
    }
  },
  addNewHouse: {
    textTransform: 'capitalize',
    marginTop: '6px',
    height: '34px',
    width: '105px',
    border: `1px solid ${theme.palette.secondary.main}`,
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.background.default
    }
  },
  dialogActions: {
    paddingRight: 0,
    marginTop: 20
  },
  roleError: {
    marginLeft: 30
  },
  address:{
    paddingLeft: 10,
    fontSize: 14,
  }
}));
let accessToken;
const Form = ({ className, handleModalClose, application, ...rest }) => {
  console.log("objectId", application)
  const classes = useStyles();

  const theme = useTheme();

  const { enqueueSnackbar } = useSnackbar();
  let [isSubmitting, setIsSubmitting] = useState(false);

  const [errorState, setErrors] = useState({
    submit: ''
  });
  const [houses, setHouses] = useState([]);
  const [owner, setOwner] = useState([]);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    accessToken = window.localStorage.getItem('accessToken');
    getAllHouseByOwnerId();
  }, []);

  console.log(application);

  const getAllHouseByOwnerId = () => {
  
    const query = gql`
    {
      findManyHousesByHouseId(id:"${application.objectId}") {
        _id
        title
        houseId
        ownerId
        address{
          city
          area
          streetNo
          houseNo
        }
        mediaImage{
          blobIdImage
        }
      }
    }
  `;

    const graphQLClient = new GraphQLClient(process.env.REACT_APP_OBJECT_URL, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    // IIFE(Immediately invoked functions Expression)
    (async () => {
      await graphQLClient.request(query).then(response => {
        setHouses(response?.findManyHousesByHouseId);
        getOwner(response?.findManyHousesByHouseId?.length > 0 ? response?.findManyHousesByHouseId[0]?.ownerId : '');
      });
    })().catch(error => {
      //console.error(error);
      setHouses([]);
      setOwner('Niet beschikbaar');
    });
  };

  const getOwner = (ownerId) => {

    const query = gql`
        {
          findUserByID(id: "${ownerId}")
          {
            _id
            firstName
            lastName
          }
        }`;


    const graphQLClient = new GraphQLClient(process.env.REACT_APP_USERS_URL, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    // IIFE(Immediately invoked functions Expression)
    (async () => {
      await graphQLClient.request(query).then(response => {
        setOwner(`${response.findUserByID?.firstName} ${response.findUserByID?.lastName}`);
      });
    })().catch(error => {
      //console.error(error);
      setOwner('Niet beschikbaar');
    });
  };

  const handleErrors = error => {
    const statusCode = error?.response?.errors[0].code;
    // setSubmit(false);

    const name = error?.response?.errors[0].name;

    switch (statusCode) {
      case 400:
        error = name?.Wachtwoord;
        if (error !== undefined) {
          const err = error.length === 0 ? name.Password : name.Wachtwoord;
          // setErrors({
          //   submit: err,
          // });
        } else {
          error = name?.Achternaam;
          if (error !== undefined) {
            // setErrors({
            //   submit: error,
            // });
          }
        }

        break;
      case 401:
        setErrors({
          submit: 'Geef geldige referenties op'
        });
        break;
      case 409:
        if (typeof name === 'string') {
          setErrors({
            submit: name.replace('username', 'email')
          });
        }
        break;
      case 403:
        setErrors({
          submit: 'Mobiel nummer bestaat al'
        });
        break;
      case 'SERVER_ERROR':
        setErrors({
          submit: error?.response?.errors[0].name?.response
        });
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmitting(true);

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));

    try {
      if (formState.isValid) {
        setIsSubmitting(true);
        // const profilePicturePath = profilePicture?.name === undefined ? '' : profilePicture?.name;

        // Prepare Headers and Client
        const graphQLClient = new GraphQLClient(
          `${process.env.REACT_APP_USERS_URL}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              languages: 'eng'
            }
          }
        );

        // Query
        const query = gql`
          mutation {
            userCreate(createUser: {
              companyName: "Company Name"
              firstName: "${formState.values.firstName}"
              lastName: "${formState.values.lastName}"
              password: "Aa$12345678"
              dateOfBirth: "${moment(formState.values.dateOfBirth).format(
                'MM/DD/YYYY'
              )}"
              email: "${formState.values.email}"
              mobileNumber: "${formState.values.mobileNumber}"
              landlinePhone: "${formState.values.landlinePhone}"
              street: "${formState.values.street}"
              houseNumber: "${formState.values.houseNumber}"
              additionalHouseNumber: "${formState.values.additionalHouseNumber}"
              land: "${formState.values.land}"
              postCode: "${formState.values.postCode}"
              place: "${formState.values.place}"
              shortDescription: "shortDescription"
              status: 1
              role: 2
              profession: "${formState.values.profession}"
              profileCompletion: "10"
              profilePicturePath: "dummyImage.png"
              isDeleted: 1
              } 
            adminCreation: true){
              _id
            }
          }`;

        let submitRequest = async () => {
          const data = await graphQLClient
            .request(query)
            .then(data => {
              const ownerId = data.userCreate._id;

              // attachHousesToOwner(ownerId);
              enqueueSnackbar('Klant is succesvol aangemaakt!', {
                variant: 'success'
              });

              window.location.href = '/admin/gebruikers';
            })
            .catch((e, msg) => {
              enqueueSnackbar('E-mail en mobiel nummer moeten uniek zijn', {
                variant: 'error',
                autoHideDuration: 5000
              });
              setIsSubmitting(false);
            });
        };

        submitRequest();
      } else {
        setIsSubmitting(false);
      }
    } catch (err) {
      setIsSubmitting(false);
      //console.error(err);
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <PerfectScrollbar>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Grid container>
          <Grid item md={12} xs={12}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>
                {' '}
                <strong style={{ textTransform: 'unset' }}>Huis Details</strong>
              </Typography>
            </div>
          </Grid>
          <br />
          <PerfectScrollbar>
            <Box minWidth={800}>
              <Table style={{ tableLayout: 'fixed' }}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHead}>Adres</TableCell>
                    <TableCell className={classes.tableHead}>Titel</TableCell>
                    <TableCell className={classes.tableHead}>
                      Eigenaar ID
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {houses.length > 0 &&
                    houses.map(house => (
                      <TableRow hover key={house?._id}>
                        <TableCell
                          className={clsx(
                            classes.tableCell,
                            classes.addressCell
                          )}
                        >
                          <img
                            className={classes.houseImage}
                            src={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/${
                              house?.mediaImage?.length > 0
                                ? `${house?.mediaImage[0]?.blobIdImage}?${localStorage.getItem('sasToken')}`
                                : `dummyImage.png?${localStorage.getItem('sasToken')}`
                            }`}
                          />
                          <Typography
                            variant="subtitle1"
                            color="textPrimary"
                            className={clsx(
                              'icon-text__typography',
                              classes.address
                            )}
                          >
                            {capitalize(
                              house?.address?.streetNo
                            )}, {house?.address?.houseNo}, {capitalize(
                              house?.address?.city
                            )}
                          </Typography>
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {capitalize(house?.title)}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {owner}
                        </TableCell>
                      </TableRow>
                    ))}

                  {houses.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} align="center">
                        Geen Huizen Gevonden.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>
                <strong style={{ textTransform: 'unset' }}>
                  Betalingsdetails
                </strong>
              </Typography>
            </div>
          </Grid>

          <Grid container className={classes.paymentDetail}>
            <div>Klant heeft €5,00 betaald {application?.invoiceNumber}</div>
          </Grid>
          <Grid item md={2}></Grid>

          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>
                <strong style={{ textTransform: 'unset' }}>Documenten</strong>
              </Typography>
            </div>
          </Grid>
          <Document application={application} />

          {application?.applicationAttachment?.vlog[0] && (
            <Grid item md={12} xs={12} className={classes.gridMargin}>
              <div
                style={{
                  paddingLeft: '20px',
                  backgroundColor: '#F2F2F2',
                  display: 'flex'
                }}
              >
                <Typography>
                  <strong style={{ textTransform: 'unset' }}>Vlogdetails</strong>
                </Typography>
              </div>
            </Grid>
          )}
        </Grid>
        {application?.applicationAttachment?.vlog[0] && (
          <Vlog application={application} />
        )}
        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.editAction}
            onClick={handleModalClose}
            color="primary"
            variant="outlined"
          >
            Close
          </Button>
        </DialogActions>
      </form>
    </PerfectScrollbar>
  );
};

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
