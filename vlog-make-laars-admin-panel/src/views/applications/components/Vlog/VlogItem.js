import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Divider,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';

import { CardBase } from 'components/organisms';

import jwt_decode from 'jwt-decode';
import clsx from 'clsx';
import { Vlog } from 'views/Dashboard/components';
import { gql, GraphQLClient } from 'graphql-request';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    fontWeight: 400
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: '.5rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  divider: {
    width: '100%',
    margin: '1.25rem 0 1.75rem'
  },
  addressCell: {
    display: 'flex'
  },
  address: {
    marginTop: 5,
    marginLeft: '1rem'
  },
  readMoreButton: {
    textTransform: 'capitalize',
    background: theme.palette.primary.main,
    color: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
    fontWeight: 700,
    height: 54,
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.main
    }
  },
  uploadDocument: {
    display: 'none'
  },
  label: {
    position: 'relative',
    left: '-13px',
    [theme.breakpoints.down('md')]: {
      position: 'static'
    }
  },
  manageVlogGrid: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  uploadVideoButton2: {
    fontWeight: 500,
    border: 'none',
    color: '#2d3748',
    border: 'none !important',
    textTransform: 'capitalize',
    cursor: 'pointer',
    width: 135,
    marginBottom: '1.5rem',
    '&:hover': {
      background: 'initial',
      color: '#2d3748',
      border: 'none !important'
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      marginBottom: '1.5rem',
      margin: '0 auto',
      display: 'flex'
    }
  },
  video: {
    width: 270,
    height: 'auto',
    zIndex: '0',
    minWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  loadingCircle: {
    color: 'white',
    width: '25px !important',
    height: '25px !important',
    marginLeft: 10
  }
}));

const VlogComponent = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [vlogs, SetVlogs] = useState([]);
  const [errorState, setErrors] = useState({
    submit: ''
  });

  const uploadNewVlogRef = useRef(null);
  const editVlog1Ref = useRef(null);
  const editVlog2Ref = useRef(null);
  const editVlog3Ref = useRef(null);
  const editVlog4Ref = useRef(null);

  const [isSubmitting, setSubmit] = useState(false);

  const [addVlog, setAddVlog] = useState(false);

  const [editVlog, setEditVlog] = useState(false);

  useEffect(() => {
    getAllVlogs();
    setAddVlog(false);
    setEditVlog(false);
  }, [addVlog, editVlog]);

  const getRef = index => {
    let ref;
    switch (index) {
      case 1:
        ref = editVlog1Ref;
        break;
      case 2:
        ref = editVlog2Ref;
        break;
      case 3:
        ref = editVlog3Ref;
        break;
      case 4:
        ref = editVlog4Ref;
        break;
    }
    return ref;
  };

  const getAllVlogs = () => {
    let accessToken = localStorage.getItem('accessToken');
    const decodeToken = jwt_decode(accessToken);
    const query = gql`
      {
        findAllVlogs(sort:"asc", pageNum:0, perPage:12 userId:"${decodeToken?.sub}"){
          _id
          userId
          vlogTitle
          vlogDescription
          vlogVideo
    }
    }`;

    const graphQLClient = new GraphQLClient(
      process.env.REACT_APP_APP_USERS_URL,
      {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    );

    // IIFE(Immediately invoked functions Expression)
    (async () => {
      await graphQLClient.request(query).then(response => {
        SetVlogs(response.findAllVlogs);
      });
    })().catch(error => {
      //console.error('error', error);
      if (JSON.stringify(error).indexOf('Network request failed') !== -1) {
        setErrors({
          submit: 'Server is Down'
        });
      }
      handleErrors(error);
    });
  };

  const handleErrors = error => {
    const statusCode = error?.response?.errors[0].code;
    setSubmit(false);

    const name = error?.response?.errors[0].name;

    switch (statusCode) {
      case 400:
        error = name?.Wachtwoord;
        if (error !== undefined) {
          const err = error.length === 0 ? name.Password : name.Wachtwoord;
          setErrors({
            submit: err
          });
        } else {
          error = name?.Achternaam;
          if (error !== undefined) {
            setErrors({
              submit: error
            });
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

  return (
    <Box display="flex" component="div">
      <Grid item xs={12} data-aos="fade-up">
        <CardBase withShadow align="left">
          <Grid
            className={clsx(classes.manageVlogGrid, className)}
            container
            alignItems="center"
            spacing={3}
            {...rest}
          >
            <Grid item>
              {vlogs.length < 4 && (
                <label htmlFor="uploadVlog">
                  <Button
                    className={classes.readMoreButton}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    component="span"
                  >
                    {isSubmitting ? (
                      <>
                        Loading... &nbsp;&nbsp;
                        <CircularProgress className={classes.loadingCircle} />
                      </>
                    ) : (
                      <>
                        <i className="fas fa-plus"></i> &nbsp;&nbsp; Upload New
                        Video
                      </>
                    )}
                    <input
                      accept="video/mp4,video/x-m4v,video/*"
                      className={classes.uploadDocument}
                      type="file"
                      ref={uploadNewVlogRef}
                      id="uploadVlog"
                      onChange={addVlogHandler}
                    />
                  </Button>
                </label>
              )}
            </Grid>
          </Grid>

          <Divider className={classes.divider} />
          <Grid
            className={clsx(classes.root)}
            container
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            {vlogs.length > 0 ? (
              vlogs.map((vlog, index) => (
                <Grid item xs={12} md={6} key={vlog._id}>
                  <Typography
                    className={classes.subtitle}
                    variant="h3"
                    color="textPrimary"
                  >
                    {vlog.vlogTitle}
                  </Typography>

                  <video
                    controls
                    loop
                    preload="metadata"
                    className={classes.video}
                  >
                    <source
                      src={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_USER_VLOG_CONTAINER}/${vlog.vlogVideo}`}
                      type="video/mp4"
                    />
                  </video>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Box mt={2}>
                  <Alert severity="error">
                    <div>
                      <strong>Geen vlogs beschikbaar.</strong>
                    </div>
                  </Alert>
                </Box>
              </Grid>
            )}
          </Grid>
        </CardBase>
      </Grid>
    </Box>
  );
};

VlogComponent.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default VlogComponent;
