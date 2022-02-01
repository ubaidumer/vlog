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

import { CardBase } from '../../../../components/organisms';

import jwt_decode from 'jwt-decode';
import clsx from 'clsx';
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
    width: 140,
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
    width: '15px !important',
    height: '15px !important',
    marginLeft: 10
  }
}));

const VlogComponent = ({ application, ...props }) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [vlogs, SetVlogs] = useState(
    application?.applicationAttachment?.vlog[0]
  );
  const [errorState, setErrors] = useState({
    submit: ''
  });

  const theme = useTheme();
  return (
    <Box display="flex" component="div">
      <Grid item xs={12} data-aos="fade-up">
        <CardBase withShadow align="left">
          <Grid
            className={clsx(classes.root)}
            container
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            {vlogs ? (
              <Grid item xs={12} md={12} key={vlogs._id}>
                <Typography
                  className={classes.subtitle}
                  variant="h3"
                  color="textPrimary"
                >
                  {vlogs.title}
                </Typography>
                <video
                  controls
                  loop
                  preload="metadata"
                  className={classes.video}
                >
                  <source
                    src={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_USER_VLOG_CONTAINER}/${vlogs?.attachmentId}?${localStorage.getItem('sasToken')}`}
                    type="video/mp4"
                  />
                </video>
              </Grid>
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
