import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  DialogActions,
  SvgIcon,
  CircularProgress
} from '@material-ui/core';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import validate from 'validate.js';

import { GraphQLClient, gql } from 'graphql-request';
import { useSnackbar } from 'notistack';

import Select from 'react-select';
import PicUpload from './profilePictures/picUpload';

import jwtDecode from 'jwt-decode';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormHelperText-marginDense': {
      position: 'relative',
      top: '-4px',
      right: 12
    },
    '& .css-2b097c-container': {
      marginBottom: 10
    },
    '& .css-yk16xz-control': {
      cursor: 'pointer'
    },
    '& .css-1pahgxg-control': {
      marginLeft: 9
    },
    '& .css-26l3qy-menu': {
      zIndex: 9999,
      cursor: 'pointer',
      marginLeft: 9
    },
    '& .css-g1d714-ValueContainer': {
      cursor: 'pointer'
    },
    '& .MuiOutlinedInput-root': {
      marginBottom: 10
    }
  },
  roleError: {
    fontSize: '0.75rem !important',
    right: '-20px !important',
    color: '#f44336 !important'
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
    flexDirection: 'row'
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
  attachOwnerToAHouse: {
    fontSize: 11,
    padding: 8,
    marginTop: 10,
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
  second: {
    marginLeft: '24px',
    paddingRight: '7px'
  },
  EditIcon: {},
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
  editAction: {
    background: '#6F6F6F',
    color: '#ffff',
    borderColor: '#ffff',
    height: 42,
    width: 160,
    '&:hover': {
      color: '#6F6F6F',
      background: '#fff',
      borderColor: '#6F6F6F'
    }
  },
  addNewHouse: {
    textTransform: 'capitalize',
    marginTop: 6,
    height: 40,
    width: 160,
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
  shortDescription: {
    marginTop: 20,
    marginBottom: 40
  },
  housesSelectWrapper: {
    position: 'relative',
    top: 10,
    right: 20
  },
  uploadDocument: {
    display: 'none'
  },
  uploadLabel: {
    cursor: 'pointer'
  }
}));

const Form = ({ className, handleModalClose, ...rest }) => {
  const classes = useStyles();

  var [opa, setOpa] = useState(true);
  let [isSubmitting, setIsSubmitting] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [houses, setHouses] = useState(null);
  const [selectedOption, setSelectedOptions] = useState(null);
  const [attachedHouses, setAttachedHouses] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [up, setUp] = useState(false);
  let [pic, setPic] = useState('');
  const [profilePicturePath, setProfilePicturePath] = useState();
  const [isProfilePictureUploaded, setIsProfilePictureUploaded] = useState(
    false
  );

  const [housesIsCalled, setHousesIsCalled] = useState(false);
  const [tempProfilePicturePath, setTempProfilePicturePath] = useState(null);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const roleOptions = [
    {
      value: '0',
      label: 'Eigenaar'
    },
    {
      value: '1',
      label: 'Makelaar'
    }
  ];

  const formatNewLineCharacter = text => {
    return text?.replaceAll(/\n|\n\r|\r\n|\r/g, '<br/>');
  };

  let handleRoleChange = selectedRole => {
    setSelectedRole(selectedRole);

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        ['role']: selectedRole.value
      },
      touched: {
        ...formState.touched,
        ['role']: true
      }
    }));
  };

  /**
   * Set unique name for profile image and send
   * triggers profile image upload to Azure BLOB
   */
  let handlePicture = e => {
    if (e?.target?.files?.length > 0) {
      const ext = e?.target?.files[0]?.name?.split('.')?.pop();
      const blobId = uuidv4() + '.' + ext;
      setProfilePicturePath(blobId);
      setTempProfilePicturePath(blobId);
      setIsProfilePictureUploaded(true);
      setPic(e.target.files[0]);
      setUp(true);
    }
  };

  let changeUp = e => {
    setUp(e);
  };

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));

    if (!housesIsCalled) {
      findHousesWithNoOwner();
    }

    if (!isProfilePictureUploaded && tempProfilePicturePath) {
      enqueueSnackbar('Profielfoto is geüpload.', {
        variant: 'success',
        autoHideDuration: 3000
      });

      setTempProfilePicturePath(null);

      createTempProfileImageBlob();
    }
  }, [formState.values, isProfilePictureUploaded]);

  const findHousesWithNoOwner = () => {
    (async () => {
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

      const query = gql`
        {
          findHousesWithNoOwner(sort: "desc", pageNum: 0, perPage: 300) {
            houseId
            title
          }
        }
      `;

      await graphQLClient.request(query).then(data => {
        let options = [];

        options = data?.findHousesWithNoOwner?.map(object => {
          return {
            value: object.houseId,
            label: object.title
          };
        });
        setHousesIsCalled(true);
        setHouses(options);
      });
    })().catch(err => {
      setHousesIsCalled(true);
      setHouses([]);
      //console.error(err);
    });
  };

  const createTempProfileImageBlob = () => {
    const accessToken = localStorage.getItem('accessToken');
    const decoded = jwtDecode(accessToken);

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

    (async () => {
      const query = gql`
        mutation {
          createTempBlob(
            createTempBlobInput: {
              blobId: "${profilePicturePath}"
              containerName: "${process.env.REACT_APP_USER_IMAGE_CONTAINER}"
              formId: "${uuidv4()}"
              adminId: "${decoded.sub}"
            }
          ) {
            _id
            userId
            blobId
            formId
            adminId
            containerName
          }
        }
      `;

      await graphQLClient.request(query).then(data => {});
    })().catch(err => {
      //console.error(err);
    });
  };

  let onHouseSelection = selectedOption => {
    setSelectedOptions(selectedOption);
  };

  let attachSelectedHouse = () => {
    if (selectedOption) {
      let selectedHouse = houses.filter(house => {
        return house.value === selectedOption.value;
      });

      selectedHouse = selectedHouse?.length ? selectedHouse[0] : {};
      attachedHouses.push(selectedHouse);
      setAttachedHouses(attachedHouses);

      setFormState(formState => ({
        ...formState,
        touched: {
          ...formState.touched,
          ...formState.errors
        }
      }));
      setIsSubmitting(false);
    }
  };

  const schema = {
    companyName: {
      presence: {
        allowEmpty: true,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    firstName: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    lastName: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    mobileNumber: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 15
      }
    },
    landlinePhone: {
      length: {
        maximum: 15
      }
    },
    email: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      email: true,
      length: {
        maximum: 120
      }
    },
    street: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    postCode: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    place: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    houseNumber: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    additionalHouseNumber: {
      length: {
        maximum: 120
      }
    },
    land: {
      presence: {
        allowEmpty: true,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    },
    role: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 120
      }
    }
  };

  const handleBlur = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const attachHousesToOwner = ownerId => {
    (async () => {
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

      const filteredAttachedHouses = attachedHouses?.map(function(house) {
        return house.value;
      });

      const query = gql`
          mutation {
            assignOwner(
              OwnerId: "${ownerId}"
              id: ${JSON.stringify(filteredAttachedHouses)}
            ) {
              _id
              title
            }
          }`;

      await graphQLClient.request(query).then(data => {
        enqueueSnackbar('Klant is succesvol aangemaakt!', {
          variant: 'success'
        });
        setIsSubmitting(false);

        setFormState(formState => ({
          isValid: false,
          values: {},
          touched: {},
          errors: {}
        }));

        setTimeout(() => {
          window.location.href = '/admin/klanten';
        }, 4000);
      });
    })().catch(err => {
      enqueueSnackbar('E-mail en mobiel nummer moeten uniek zijn', {
        variant: 'error',
        autoHideDuration: 5000
      });
      setIsSubmitting(false);
      //console.error(err);
    });
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

    if (formState.isValid) {
      (async () => {
        setIsSubmitting(true);
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
              companyName: "${formState.values.companyName}"
              firstName: "${formState.values.firstName}"
              lastName: "${formState.values.lastName}"
              password: "Aa$12345678"
              dateOfBirth: "${moment().format('MM/DD/YYYY')}"
              email: "${formState.values.email}"
              mobileNumber: "${formState.values.mobileNumber}"
              landlinePhone: "${formState.values.landlinePhone}"
              street: "${formState.values.street}"
              houseNumber: "${formState.values.houseNumber}"
              additionalHouseNumber: "${
                formState.values.additionalHouseNumber
              }",
              land: "${formState.values.land}"
              postCode: "${formState.values.postCode}"
              place: "${formState.values.place}"
              shortDescription: "${formatNewLineCharacter(formState.values.shortDescription)}"
              role: ${selectedRole.value}
              isDeleted: 1
              profilePicturePath: "${
                profilePicturePath !== undefined
                  ? profilePicturePath
                  : 'dummyImage.png'
              }"
            }, adminCreation: true KeycloakRole: "client"){
              _id
            }
          }`;

        await graphQLClient.request(query).then(data => {
          const ownerId = data.userCreate._id;
          if (attachedHouses?.length > 0) {
            attachHousesToOwner(ownerId);
          } else {
            setFormState(formState => ({
              isValid: false,
              values: {},
              touched: {},
              errors: {}
            }));

            enqueueSnackbar('Klant is succesvol aangemaakt!', {
              variant: 'success'
            });

            setTimeout(() => {
              window.location.href = '/admin/klanten';
            }, 3000);
          }
        });
      })().catch(err => {
        enqueueSnackbar('E-mail en mobiel nummer moeten uniek zijn', {
          variant: 'error',
          autoHideDuration: 5000
        });
        setIsSubmitting(false);
        //console.error(err);
      });
    } else {
      setIsSubmitting(false);
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
              <Typography> NAAM EN PROFIEL FOTO</Typography>
            </div>
          </Grid>
          <br />
          <Grid container className={classes.gridMargin}>
            {' '}
            {/* First section container including profile data */}
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={2}></Grid>
                <Grid item md={2} xs={4} className={classes.nameWrapper}>
                  <label>Naam: </label>
                </Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.firstTypography}
                    fullWidth
                    helperText={
                      hasError('companyName')
                        ? formState.errors.companyName[0]
                        : null
                    }
                    error={hasError('companyName')}
                    onBlur={handleBlur}
                    size="small"
                    variant="outlined"
                    label="Bedrijfsnaam"
                    name="companyName"
                  />
                </Grid>
                <Grid item md={2} xs={1}></Grid>

                <Grid item md={2}></Grid>

                <Grid item md={2} xs={4} className={classes.nameWrapper}>
                  <label>Contact:</label>
                </Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.firstTypography}
                    fullWidth
                    helperText={
                      hasError('firstName')
                        ? formState.errors.firstName[0]
                        : null
                    }
                    error={hasError('firstName')}
                    onBlur={handleBlur}
                    size="small"
                    variant="outlined"
                    label="Voornaam"
                    name="firstName"
                  />
                </Grid>
                <Grid item md={2}></Grid>

                <Grid item md={2}></Grid>
                <Grid item md={2} xs={2} className={classes.nameWrapper}></Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.firstTypography}
                    fullWidth
                    helperText={
                      hasError('lastName') ? formState.errors.lastName[0] : null
                    }
                    error={hasError('lastName')}
                    onBlur={handleBlur}
                    size="small"
                    variant="outlined"
                    label="Achternaam"
                    name="lastName"
                  />
                </Grid>
                <Grid item md={2} xs={2}></Grid>

                {/* Role */}
                <Grid item md={2}></Grid>
                <Grid item md={2} xs={2} className={classes.nameWrapper}>
                  <label>Role:</label>
                </Grid>
                <Grid item md={8} xs={12}>
                  <Select
                    style
                    className={classes.firstTypography}
                    value={selectedRole}
                    onChange={handleRoleChange}
                    options={roleOptions}
                    name="role"
                    helperText={
                      hasError('role') ? formState.errors.role[0] : null
                    }
                    error={hasError('role')}
                    onBlur={handleBlur}
                    placeholder="Role"
                  />

                  {hasError('role') && (
                    <p
                      className={clsx(
                        classes.roleError,
                        'MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-marginDense'
                      )}
                    >
                      Role is verplicht
                    </p>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={3} xs={12}>
                  <div
                    style={{
                      marginTop: '20px',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    Profiel foto:
                  </div>
                </Grid>

                <Grid item md={9} xs={12}>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    {isProfilePictureUploaded && (
                      <div
                        className={classes.loading}
                        style={{
                          marginTop: 20
                        }}
                      >
                        Uploading... &nbsp;&nbsp;
                        <CircularProgress className={classes.loadingCircle} />
                      </div>
                    )}

                    {!isProfilePictureUploaded && (
                      <div className={classes.buttonWrapper}>
                        <img
                          src={
                            profilePicturePath !== undefined
                              ? `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_USER_IMAGE_CONTAINER}/${profilePicturePath}?${localStorage.getItem('sasToken')}`
                              : `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/dummyImage.png?${localStorage.getItem('sasToken')}`
                          }
                          style={{
                            position: 'relative',
                            width: 145,
                            height: 170,
                            marginTop: 10
                          }}
                        />

                        <div className={classes.profileDiv}>
                          <div>
                            <Button className={classes.editButton}>
                              <label
                                className={classes.uploadLabel}
                                htmlFor="profilePicturePath"
                              >
                                <EditIcon />
                                <input
                                  accept="image/jpg,image/jpeg,image/png,.pdf,.doc,.docx"
                                  className={classes.uploadDocument}
                                  type="file"
                                  id="profilePicturePath"
                                  name="profilePicturePath"
                                  onChange={handlePicture}
                                />
                              </label>
                            </Button>
                            <Button
                              className={classes.deleteButton}
                              onClick={e =>
                                setProfilePicturePath('dummyImage.png')
                              }
                            >
                              <DeleteIcon />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{ display: 'none' }}>
                      <PicUpload
                        file={pic}
                        up={up}
                        meth={changeUp}
                        profilePicturePath={profilePicturePath}
                        setIsProfilePictureUploaded={
                          setIsProfilePictureUploaded
                        }
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography> CONTACT DETAILS</Typography>
            </div>
          </Grid>
          <Grid container className={classes.gridMargin}>
            <Grid item md={1}></Grid>
            <Grid item md={1} xs={4} className={classes.nameWrapper}>
              <label>Email: </label>
            </Grid>
            <Grid item md={5} xs={11}>
              <TextField
                className={classes.firstTypography}
                fullWidth
                helperText={
                  hasError('email') ? formState.errors.email[0] : null
                }
                error={hasError('email')}
                onBlur={handleBlur}
                size="small"
                variant="outlined"
                label="Email"
                name="email"
              />
            </Grid>
            <Grid item md={3}></Grid>

            <Grid item md={2}></Grid>

            <Grid item md={1}></Grid>
            <Grid item md={1} xs={4} className={classes.nameWrapper}>
              <label>Mobiel Tel:</label>
            </Grid>
            <Grid item md={5} xs={11}>
              <TextField
                className={classes.firstTypography}
                fullWidth
                helperText={
                  hasError('mobileNumber')
                    ? formState.errors.mobileNumber[0]
                    : null
                }
                error={hasError('mobileNumber')}
                onBlur={handleBlur}
                size="small"
                variant="outlined"
                label="Mobiel Tel"
                name="mobileNumber"
              />
            </Grid>
            <Grid item md={3}></Grid>

            <Grid item md={2}></Grid>

            <Grid item md={1}></Grid>
            <Grid item md={1} sm={3} xs={4} className={classes.nameWrapper}>
              <label>Vast Tel:</label>
            </Grid>

            <Grid item md={5} xs={11}>
              <TextField
                className={classes.firstTypography}
                fullWidth
                helperText={
                  hasError('landlinePhone')
                    ? formState.errors.landlinePhone[0]
                    : null
                }
                error={hasError('landlinePhone')}
                onBlur={handleBlur}
                size="small"
                variant="outlined"
                label="Vast Tel"
                name="landlinePhone"
              />
            </Grid>
            <Grid item md={3}></Grid>

            <Grid item md={2}></Grid>
          </Grid>
          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>ADRES</Typography>
            </div>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item md={7} xs={12}>
            <div>
              <Grid container spacing={1}>
                <Grid item md={12} xs={11}>
                  <div
                    style={{
                      marginTop: '20px'
                    }}
                  >
                    <TextField
                      className={classes.second}
                      fullWidth
                      helperText={
                        hasError('street') ? formState.errors.street[0] : null
                      }
                      error={hasError('street')}
                      onBlur={handleBlur}
                      label="Straat"
                      name="street"
                      variant="outlined"
                      size="small"
                    />
                  </div>
                </Grid>

                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    fullWidth
                    helperText={
                      hasError('houseNumber')
                        ? formState.errors.houseNumber[0]
                        : null
                    }
                    error={hasError('houseNumber')}
                    onBlur={handleBlur}
                    label="Huisnummer"
                    name="houseNumber"
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    fullWidth
                    helperText={
                      hasError('additionalHouseNumber')
                        ? formState.errors.additionalHouseNumber[0]
                        : null
                    }
                    error={hasError('additionalHouseNumber')}
                    onBlur={handleBlur}
                    label="Huisnummer Toevoeging"
                    name="additionalHouseNumber"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </div>

            <div
              style={{
                marginBottom: '5px'
              }}
            >
              <Grid container spacing={1}>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    fullWidth
                    helperText={
                      hasError('postCode') ? formState.errors.postCode[0] : null
                    }
                    error={hasError('postCode')}
                    onBlur={handleBlur}
                    label="Postcode"
                    name="postCode"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    fullWidth
                    helperText={
                      hasError('place') ? formState.errors.place[0] : null
                    }
                    error={hasError('place')}
                    onBlur={handleBlur}
                    label="Plaats"
                    name="place"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={12} xs={11}>
                  <div>
                    <TextField
                      className={classes.second}
                      fullWidth
                      helperText={
                        hasError('land') ? formState.errors.land[0] : null
                      }
                      error={hasError('land')}
                      onBlur={handleBlur}
                      label="Land"
                      name="land"
                      variant="outlined"
                      size="small"
                    />
                    <br />
                    <br />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item md={3}></Grid>

          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>EXTRA INFORMATIE</Typography>
            </div>
          </Grid>
          <Grid item md={1}></Grid>

          <Grid item md={10} xs={12}>
            <TextField
              className={classes.shortDescription}
              fullWidth
              helperText={
                hasError('shortDescription')
                  ? formState.errors.shortDescription[0]
                  : null
              }
              error={hasError('shortDescription')}
              name="shortDescription"
              label="Korte Beschrijving"
              multiline
              rows={6}
              onBlur={handleBlur}
              defaultValue={formState.values.shortDescription}
              variant="outlined"
            />
          </Grid>
          <Grid item md={1}></Grid>

          {selectedRole?.value == 0 && (
            <Grid item md={12} xs={12} className={classes.gridMargin}>
              <div
                style={{
                  paddingLeft: '20px',
                  backgroundColor: '#F2F2F2',
                  display: 'flex'
                }}
              >
                <Typography>Huizen GekoppeId Aan Klant</Typography>
              </div>
            </Grid>
          )}

          {selectedRole?.value == 0 && (
            <Grid container>
              <Grid item md={12}>
                <Grid container>
                  <Grid item md={2}></Grid>
                  <Grid item md={8} className={classes.housesSelectWrapper}>
                    <Select
                      style
                      placeholder="Selecteer huis om te koppelen"
                      value={selectedOption}
                      onChange={onHouseSelection}
                      options={houses}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Button
                      color="secondary"
                      variant="contained"
                      className={classes.attachOwnerToAHouse}
                      onClick={attachSelectedHouse}
                      startIcon={
                        <SvgIcon fontSize="small">
                          <PlusCircleIcon />
                        </SvgIcon>
                      }
                    >
                      Bevestig huis
                      {'  '}
                    </Button>
                  </Grid>
                </Grid>
                {attachedHouses?.length > 0 &&
                  attachedHouses?.map((attachedHouse, index) => (
                    <Grid container key={attachedHouse.value}>
                      <Grid item md={2}></Grid>
                      <Grid
                        item
                        md={1}
                        xs={4}
                        style={{
                          marginTop: 18
                        }}
                        className={classes.nameWrapper}
                      >
                        <label>Huis {index + 1}:</label>
                      </Grid>
                      <Grid item md={8} xs={12}>
                        <Button
                          color="secondary"
                          style={{
                            width: '100%',
                            textAlign: 'center',
                            border: '1px solid black',
                            marginTop: '10px'
                          }}
                        >
                          {' '}
                          {attachedHouse.label}
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          )}
          <Grid item md={1}></Grid>
        </Grid>

        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.editAction}
            onClick={handleModalClose}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            className={classes.addNewHouse}
            color="primary"
            variant="contained"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Saving' : 'Save'}{' '}
            {isSubmitting && (
              <CircularProgress className={classes.loadingCircle} />
            )}
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
