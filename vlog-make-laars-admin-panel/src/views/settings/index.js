import React, { useState, useMemo, useEffect } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import moment from 'moment';
import AdminResults from './admin/AdminResults';
import { v4 as uuidv4 } from 'uuid';
import {
  Avatar,
  Button,
  Divider,
  Paper,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';
import { GraphQLClient, gql } from 'graphql-request';
import { useSnackbar } from 'notistack';
import validate from 'validate.js';
import PictUpload from './Picture/pictureUpload';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormHelperText-root': {
      color: '#ff0000',
      opacity: 0.75
    }
  },
  gridMargin: {
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10px'
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

const emails = [
  {
    id: 1,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'Collins',
    body:
      'Ametasdasdas Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  },
  {
    id: 2,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'DReset Wactwoord',
    body:
      'Amet Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  },
  {
    id: 3,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'De Jong',
    body:
      'Amet Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  },
  {
    id: 4,
    updatedDate: moment()
      .subtract(135, 'days')
      .toDate(),
    name: 'Ketler',
    body:
      'Amet Mnim molkit non deserut  ullamco est sit aluqua dolor do amet sint. velit officia consequat duis enim velit mollit . Execcitation veniam consequat sunt nostrud amet.',
    action: true
  }
];

const HouseListView = (props, admi) => {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModel, setOpenModel] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [template, setTemplate] = useState();

  let [tempPic, setTempPic] = useState();
  let [swt, setSwitch] = React.useState(false);
  let [id, setId] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const [test, setTest] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: ''
  });

  useEffect(() => {
    // axios
    //   .get(`${process.env.REACT_APP_TEMPLATE_URL}?page_size=10&page_num=2`)
    //   .then(response => setTemplate(response?.data));
  }, []);

  let sendId = i => {
    setId(i);
  };

  const graphQLClient = new GraphQLClient(
    `${process.env.REACT_APP_USERS_URL}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        languages: 'eng'
      }
    }
  );

  const [admin, setAdmin] = useState([
    {
      id: 1
    }
  ]);

  const [up, setUp] = useState(false);
  let [pic, setPic] = useState('');
  const [profilePicturePath, setProfilePicturePath] = useState(null);
  const [isProfilePictureUploaded, setIsProfilePictureUploaded] = useState(
    false
  );
  const [isProfilePictureUpdated, setIsProfilePictureUpdated] = useState(false);

  let changeUps = e => {
    setUp(e);
  };

  // let handlePic = e => {
  //   setPic(e.target.files[0]);
  //   setUp(true);
  //   setTempPic(window.URL.createObjectURL(e.target.files[0]));
  // };

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

  let hello = () => {
    setSwitch(true);
    setAdmin(state => [...admin, { id: 2 }]);
  };

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  const schema = {
    name: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        minimum: 8,
        maximum: 20
      }
    },
    email: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        minimum: 8,
        maximum: 25
      },
      email: {
        message: "doesn't look like a valid email"
      }
    },
    password: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        minimum: 8
      },
      format: {
        pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: 'must contain upper, lower and specal character'
      }
    },
    confirmPassword: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        minimum: 8
      },
      equality: 'password'
    }
  };

  useMemo(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);




  const registerAdmin = event => {
    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));

    if (formState.isValid) {
      setIsSubmitting(true);
      if (formState?.values?.name !== undefined) {
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
              Registration(role: "admin" 
              register: {
                enabled: true
                firstName: "${firstName}"
                lastName: "${lastName}"
                emailVerified: false
                email: "${formState.values.email}"
                username: "${formState.values.email}"
                attributes: {
                profileImage: "${
                  profilePicturePath ? profilePicturePath : 'dummyImage.png'
                }"
              }  
              credentials: {
                type: "password"
                value: "${formState.values.password}"
                temporary: false
              }
            })
          }`;

        (async () => {
          await graphQLClient.request(query).then(data => {
            enqueueSnackbar('Admin is succesvol aangemaakt.', {
              variant: 'success'
            });

            setTimeout(function() {
              window.location.href = '/admin/instellingen';
            }, 2000);
          });
        })().catch(err => {
          //console.error(err);
          enqueueSnackbar('Kan admin niet maken.', {
            variant: 'error',
            autoHideDuration: 5000
          });
          setIsSubmitting(false);
        });
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

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  console.log(formState);
  let duplicate = props => {
    return (
      <Grid container spacing={2} style={{ marginTop: '12px' }}>
        <Grid item md={4} xs={12} sm={12}>
          <Paper elevation={3}>
            <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Avatar
                  style={{ width: '60px', height: '60px' }}
                  src={
                    pic
                      ? tempPic
                      : `https://vlogmakelaarsstorage.blob.core.windows.net/adminimages/profile_picture.png}`
                  }
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}
              >
                <Typography
                  variant="h4"
                  helperText={hasError('name') ? formState.errors.name : null}
                  style={{ fontWeight: 'bold', marginTop: '10px' }}
                >
                  {formState.values.name ? formState.values.name : 'Ongetiteld'}{' '}
                </Typography>
              </div>
              <Divider />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '20px'
                }}
              >
                <Button variant="contained" color="default">
                  <label htmlFor="admin_foto">
                    {isProfilePictureUploaded ? (
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
                      name="admin_foto"
                      id="admin_foto"
                      onChange={handlePicture}
                    />
                  </label>
                </Button>
              </div>
            </div>
            <div style={{ display: 'none' }}>
              <PictUpload
                file={pic}
                up={up}
                meth={changeUps}
                profilePicturePath={profilePicturePath}
                setIsProfilePictureUploaded={setIsProfilePictureUploaded}
              />
            </div>
          </Paper>
          {/*.... */}
        </Grid>

        <Grid item md={8} sm={12}>
          <Paper elevation={3} className={classes.root}>
            <div
              style={{
                marginLeft: '20px',
                paddingTop: '20px',
                marginBottom: '10px'
              }}
            >
              <Typography>Admin {}</Typography>
            </div>
            <Divider />
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
              <form onSubmit={registerAdmin}>
                <Grid container spacing={3} style={{ marginTop: '10px' }}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      size="large"
                      fullWidth
                      helperText={
                        hasError('name') ? formState.errors.name : null
                      }
                      variant="outlined"
                      label="Naam"
                      name="name"
                      onBlur={handleBlur}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      size="large"
                      fullWidth
                      helperText={
                        hasError('email') ? formState.errors.email : null
                      }
                      variant="outlined"
                      label="Email adres"
                      type="email"
                      name="email"
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      size="large"
                      fullWidth
                      helperText={
                        hasError('password') ? formState.errors.password : null
                      }
                      variant="outlined"
                      label="Wachtwoord"
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      size="large"
                      fullWidth
                      helperText={
                        hasError('confirmPassword')
                          ? formState.errors.confirmPassword
                          : null
                      }
                      variant="outlined"
                      label="Bevestig Wachtwoord"
                      type="password"
                      name="confirmPassword"
                      onBlur={handleBlur}
                    />
                  </Grid>
                </Grid>
              </form>
            </div>
            <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
            <Button
              onClick={registerAdmin}
              color="secondary"
              style={{
                margin: '10px 20px 19px',
                width: 120,
                textTransform: 'none',
                height: 40
              }}
              variant="contained"
              disabled={isSubmitting || isProfilePictureUploaded }
              type="submit"
            >
              Opslaan{' '}
              {isSubmitting && (
                <CircularProgress className={classes.loadingCircle} />
              )}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  };
  let [state, setState] = useState('admin');
  let checkState = e => {
    setState(e);
  };

  let handleModalOpen = () => {};

  return (
    <Page title="Manage Instellingen">
      <Container maxWidth={false}>
        <Header hello={hello} />

        <Box mt={3}>
          <Results
            openDeleteModal={openDeleteModal}
            setOpenDeleteModal={setOpenDeleteModal}
            openModal={openModal}
            setOpenModal={setOpenModal}
            openModel={openModel}
            setOpenModel={setOpenModel}
            admin={admin}
            checkState={checkState}
            emails={emails}
            swt={swt}
            setAdmin={setAdmin}
            duplicate={duplicate()}
            sendId={sendId}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default HouseListView;
