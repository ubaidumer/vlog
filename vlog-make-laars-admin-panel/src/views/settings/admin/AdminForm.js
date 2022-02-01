import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';
import { GraphQLClient, gql } from 'graphql-request';
import PictUpload from '../Picture/pictureUpload'
import { useSnackbar } from 'notistack';
import { v4 as uuidv4 } from 'uuid';
import validate from 'validate.js';
import jwtDecode from 'jwt-decode';

const useStyles = makeStyles(theme => ({
  root: {
    '& input[readonly]': {
      background: 'rgba(169, 169, 169, 0.3)',
      cursor: 'not-allowed',
      color: 'black'
    },
    '& .MuiFormHelperText-root': {
      color: '#ff0000',
      opacity: 0.75
    }
  },
  parent: {
    marginBottom: 15
  },
  gridMargin: {
    marginTop: 10,
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 10
    }
  },
  loadingCircle: {
    color: '#DF1683',
    width: '10px !important',
    height: '10px !important',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  loading: {
    display: 'flex',
    marginLeft: 5
  }
}));

const AdminForm = props => {
  const classes = useStyles();

  const { admin, i } = props;

  const [currentAdminId, setCurrentAdminId] = useState(admin?.id);
  const { enqueueSnackbar } = useSnackbar();
  const [up, setUp] = useState(false);
  let [tempPic, setTempPic] = useState();
  let [pic, setPic] = useState('');
  const [profilePicturePath, setProfilePicturePath] = useState(null);
  const [isProfilePictureUploaded, setIsProfilePictureUploaded] = useState(
    false
  );
  const [isProfilePictureUpdated, setIsProfilePictureUpdated] = useState(false);

  let [tempAdmin, setTempAdmin] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  let [img, setImg] = useState('');
  let changeUps = e => {
    setUp(e);
  };

  /**
   * Set unique name for profile image and send
   * triggers profile image upload to Azure BLOB
   */
  const handlePicture = e => {
    if (e?.target?.files?.length > 0) {
      const ext = e?.target?.files[0]?.name?.split('.')?.pop();
      const blobId = uuidv4() + '.' + ext;
      setProfilePicturePath(blobId);
      setIsProfilePictureUploaded(true);
      setTempPic(window.URL.createObjectURL(e.target.files[0]));
      setPic(e.target.files[0]);
      setIsProfilePictureUpdated(false);
      setUp(true);
    }
  };

  const graphQLClient = new GraphQLClient(
    `${process.env.REACT_APP_ADMIN_URL}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        languages: 'eng'
      }
    }
  );

  let name = admin?.firstName?.length > 0 ? admin?.firstName : '';
  name += admin?.lastName ? admin?.lastName : '';

  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      name: name,
      email: admin?.email
    },
    touched: {},
    errors: {}
  });

  const schema = {
    name: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        minimum: 8,
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
    password: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        minimum: 8
      },
      format: {
        pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: 'must contain upper, lower and specal character'
      }
    },
    confirmPassword: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        minimum: 8,
        maximum: 15
      },
      equality: 'password'
    }
  };

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));

    if (
      !isProfilePictureUploaded &&
      profilePicturePath &&
      !isProfilePictureUpdated
    ) {
      enqueueSnackbar('Profielfoto is geüpload.', {
        variant: 'success',
        autoHideDuration: 3000
      });

      setIsProfilePictureUpdated(true);
      
      createTempProfileImageBlob();
    }
  }, [formState.values, isProfilePictureUploaded, profilePicturePath]);

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
              containerName: "adminimages"
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

  const submitRequestUpdate = (event, id) => {
    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));
    if (formState.isValid) {
      setIsSubmitting(true);
      updateAdminUser();
    } else {
      setIsSubmitting(false);
    }
  };

  const updateAdminUser = () => {
    if (formState?.values?.name !== undefined) {
      var email = formState.values.email;
      const name = formState.values.name;
      var firstName = name;
      var lastName = '';
      const spaceIndex = name.indexOf(' ');
      if (spaceIndex !== -1) {
        firstName = name.substr(0, spaceIndex);
        lastName = name.substr(spaceIndex);
      }

      const query = gql`
          mutation {
            updateAdminUser(userId:"${currentAdminId}"
              update: {
                firstName: "${firstName}"
                lastName: "${lastName}"
                email: "${
                  formState.values.email ? formState?.values?.email : email
                }"
                attributes:{
                profileImage: "${
                  profilePicturePath ? profilePicturePath : 'dummyImage.png'
                }"
              } 
              credentials: {
              type: "password"
              value: "${formState.values.password}"
              temporary: false
              }
            }
          )
        }`;

      (async () => {
        await graphQLClient.request(query).then(data => {
          enqueueSnackbar('Beheerder succesvol geüpdatet.', {
            variant: 'success'
          });

          setTimeout(function() {
            window.location.href = '/admin/instellingen';
          }, 2000);
        });
      })().catch(err => {
        //console.error(err);
        enqueueSnackbar('Kan admins niet geüpdatet.', {
          variant: 'error',
          autoHideDuration: 5000
        });
        setIsSubmitting(false);
      });
    }
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));

    setTempAdmin(admin?.firstName);
    setImg(admin?.attributes.profileImage);
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Grid
      container
      spacing={2}
      key={i}
      onClick={() => setCurrentAdminId(admin.id)}
    >
      <Grid item md={4} xs={12} sm={12} style={{ marginBottom: 10 }}>
        <Paper elevation={3}>
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 20
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Avatar
                title={
                  'De profielafbeelding wordt bijgewerkt zodra het formulier is opgeslagen.'
                }
                style={{
                  width: 60,
                  height: 60
                }}
                src={
                  tempPic
                    ? tempPic
                    : `https://vlogmakelaarsstorage.blob.core.windows.net/adminimages/${admin
                        ?.attributes?.profileImage || 'dummyImage.png'}?${localStorage.getItem('sasToken')}`
                }
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10
              }}
            >
              <Typography
                variant="h4"
                style={{
                  fontWeight: 'bold',
                  marginTop: 10
                }}
              >
                {admin.firstName} {admin.lastName}
              </Typography>
            </div>
            <Divider />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
              }}
            >
              <Button
                disabled={isSubmitting}
                variant="contained"
                color="default"
              >
                <label htmlFor={`upload+${admin.id}`}>
                  {isProfilePictureUploaded && admin.id === currentAdminId ? (
                    <div
                      className={classes.loading}
                      style={{
                        marginTop: 3
                      }}
                    >
                      Uploading... &nbsp;&nbsp;
                      <CircularProgress className={classes.loadingCircle} />
                    </div>
                  ) : (
                    'Upload Foto'
                  )}
                  <input
                    accept="image/jpg,image/jpeg,image/png,.pdf,.doc,.docx"
                    hidden="hidden"
                    type="file"
                    name={`upload+${admin.id}`}
                    id={`upload+${admin.id}`}
                    onChange={handlePicture}
                  />
                </label>
              </Button>
              <div style={{ display: 'none' }}>
                <PictUpload
                  file={pic}
                  up={up}
                  meth={changeUps}
                  profilePicturePath={profilePicturePath}
                  setIsProfilePictureUploaded={setIsProfilePictureUploaded}
                />
              </div>
            </div>
          </div>
        </Paper>
        {/*.... */}
      </Grid>

      <Grid item md={8} sm={12} style={{ marginBottom: 10 }}>
        <Paper elevation={3} className={classes.root}>
          <form>
            <div
              style={{
                marginLeft: 20,
                paddingTop: 20,
                marginBottom: 10
              }}
            >
              <Typography>Admin</Typography>
            </div>
            <Divider />
            <div
              style={{
                marginLeft: 20,
                marginRight: 20
              }}
            >
              <Grid container spacing={3} style={{ marginTop: 10 }}>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="large"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      classes: { input: classes.input }
                    }}
                    helperText={hasError('name') ? formState.errors.name : null}
                    key={`${Math.floor(Math.random() * 1000)}-min`}
                    label="Naam"
                    name="name"
                    onBlur={handleChange}
                    defaultValue={
                      formState.values.name && admin.id === currentAdminId
                        ? formState.values.name
                        : admin?.firstName + admin?.lastName || ''
                    }
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    size="large"
                    fullWidth
                    variant="outlined"
                    label="Email adres"
                    type="email"
                    name="email"
                    inputProps={
                      { readOnly: true, }
                    }
                    helperText={
                      hasError('email') ? formState.errors.email : null
                    }
                    onBlur={handleChange}
                    defaultValue={
                      formState.values.email && admin.id === currentAdminId
                        ? formState.values.email
                        : admin?.email || ''
                    }
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="large"
                    fullWidth
                    variant="outlined"
                    helperText={
                      hasError('password') ? formState.errors.password : null
                    }
                    name="password"
                    label="Wachtwoord"
                    type="password"
                    onBlur={handleChange}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    size="large"
                    fullWidth
                    variant="outlined"
                    label="Bevestig Wachtwoord"
                    helperText={
                      hasError('confirmPassword')
                        ? formState.errors.confirmPassword
                        : null
                    }
                    type="password"
                    name="confirmPassword"
                    onBlur={handleChange}
                  />
                </Grid>
              </Grid>
            </div>
            <Divider
              style={{
                marginTop: 10,
                marginBottom: 10
              }}
            />
            <Button
              onClick={e => submitRequestUpdate(e, admin?.id)}
              color="secondary"
              style={{
                margin: '10px 20px 19px',
                width: 120,
                textTransform: 'none',
                height: 40
              }}
              variant="contained"
              disabled={isSubmitting || isProfilePictureUploaded && admin.id === currentAdminId }
            >
              {' '}
              Opslaan{' '}
              {isSubmitting && (
                <CircularProgress className={classes.loadingCircle} />
              )}
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminForm;
