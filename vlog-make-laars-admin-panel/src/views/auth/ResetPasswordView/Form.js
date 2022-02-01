import React, { useState } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  TextField,
  makeStyles,
  CircularProgress
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import { GraphQLClient, gql } from 'graphql-request';

const useStyles = makeStyles((theme) => ({
  root: {},
  loadingCircle: {
    color: 'white',
    width: '25px !important',
    height: '25px !important',
    marginLeft: 10
  },
  forgotPassword: {
    color: theme.palette.secondary.main,
    textDecoration: 'none'
  }
}));

const JWTLogin = ({ className, ...rest }) => {
  const classes = useStyles();
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();

const [isSubmitting, setIsSubmitting] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  let q = {};
  window.location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v);

  const userId = q?.user_id;
  const currentTime = q?.c_t;

  const getAccessTokenWithOutCredentials = (password) => {
    setIsSubmitting(true);

    // IIFE(Immediately invoked functions Expression)
    (async () => {
      const query = gql`
        {
          getToken {
            access_token
          }
        }
      `;

      const graphQLClient = new GraphQLClient(
        process.env.REACT_APP_ADMIN_URL,
      );

      await graphQLClient.request(query).then(response => {
        getAdminUserById(response?.getToken?.access_token, password);
      });
    })().catch(error => {
      setIsSubmitting(false);
      //console.error('error', error);
    });
  };

  const getAdminUserById = (serviceAccountToken, password) => {

    const registerQuery = gql`
    {
      getAdminUserById(userId: "${userId}"){
        id
        username
        firstName
        email
      }
    }`;

    const graphQLClient = new GraphQLClient(
      process.env.REACT_APP_ADMIN_URL,
      {
        headers: {
          authorization: `Bearer ${serviceAccountToken}`,
        },
      },
    );

    // IIFE(Immediately invoked functions Expression)
    (async () => {
      await graphQLClient.request(registerQuery).then(response => {
        resetPassword(serviceAccountToken, password);
      });
    })().catch(error => {
      //console.error('error', error);
      setIsSubmitting(false);
      setError(true);
      setSuccess(false);
    });
  };

  const resetPassword = (serviceAccountToken, newPassword) => {

    const resetPasswordQuery = gql`
    mutation {
      resetPassword(newPassword: "${newPassword}" userID: "${userId}")
    }`;

    const graphQLClient = new GraphQLClient(
      process.env.REACT_APP_ADMIN_URL,
      {
        headers: {
          authorization: `Bearer ${serviceAccountToken}`,
        },
      },
    );

    // IIFE(Immediately invoked functions Expression)
    (async () => {
      await graphQLClient.request(resetPasswordQuery).then(response => {
        setSuccess(true);
        setIsSubmitting(false);

        setTimeout(function() {
          window.location.href = '/login';
        }, 5000);
      });
    })().catch(error => {
      //console.error('error', error);
      setIsSubmitting(false);
      setError(true);
      setSuccess(false);
    });
  };


  return (
    <Formik
      initialValues={{
        newPassword: '',
        confirmPassword: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        newPassword: Yup.string()
          .max(255)
          .required('Een wachtwoord is verplicht')
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            'must contain upper, lower and specal character',
          ),
        confirmPassword: Yup.string()
          .max(255)
          .required('Een wachtwoord is verplicht')
          .oneOf([Yup.ref('newPassword'), null], "Wachtwoorden komen niet overeen")
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        getAccessTokenWithOutCredentials(values?.newPassword);
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <TextField
            error={Boolean(touched.newPassword && errors.newPassword)}
            fullWidth
            helperText={touched.newPassword && errors.newPassword}
            label="Nieuw wachtwood"
            margin="normal"
            name="newPassword"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.newPassword}
            variant="outlined"
          />

          <TextField
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            fullWidth
            helperText={touched.confirmPassword && errors.confirmPassword}
            label="Bevestig wachtwoord"
            margin="normal"
            name="confirmPassword"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.confirmPassword}
            variant="outlined"
          />
          {error && (
            <Box mt={2}>
              <Alert severity="error">
                <div>
                  <strong>We kunnen uw account niet vinden. Probeer de e-mail met het wachtwoord vergeten opnieuw te verzenden vanaf <a href='/forgot-password'>hier</a>.</strong>
                </div>
              </Alert>
            </Box>
          )}
          {errors.submit && (
            <Box mt={2}>
              <Alert severity="error">
                <div>
                  <strong>{errors.submit}</strong>
                </div>
              </Alert>
            </Box>
          )}
          {success && (
            <Box mt={2}>
              <Alert severity="success">
                <div>
                  <strong>Uw wachtwoord is succesvol bijgewerkt. U kunt nu inloggen met uw inloggegevens.</strong>
                </div>
              </Alert>
            </Box>
          )}
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Wachtwoord opnieuw instellen {'  '}
              {isSubmitting && (
                <CircularProgress className={classes.loadingCircle} />
              )}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

JWTLogin.propTypes = {
  className: PropTypes.string
};

export default JWTLogin;
