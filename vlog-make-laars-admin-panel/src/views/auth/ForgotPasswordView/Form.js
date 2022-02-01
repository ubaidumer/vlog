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
import mail from 'src/utils/mail';

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
  },
  button: {
    textTransform: 'unset'
  },
}));

const Form = ({ className, ...rest }) => {
  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [noUserFound, setNoUserFound] = useState(false);

  const getUserIdByEmail = (serviceAccessToken, email) => {
    const loginQuery = gql`
    {
      getAdminUserByEmail(email: "${email}")
      {
        id
        username
        firstName
        email
      }
    }
    `;
    
    const graphQLClient = new GraphQLClient(
      process.env.REACT_APP_ADMIN_URL,
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${serviceAccessToken}`,
        },
      },
    );
    {
      (async () => {
        await graphQLClient.request(loginQuery).then(data => {

          const currentTime = Date.now() / 1000;

          const resetPasswordUrl = `${process?.env?.REACT_APP_BASE_URL}/reset-password?user_id=${data?.getAdminUserByEmail?.id}&c_t=${currentTime}`;

          
        const placeholders = {
            "reset_passsword_link": `<a href="${resetPasswordUrl}">Wachtwoord opnieuw instellen Link</a>`
          };

          mail('admin_reset_password', email, placeholders).then(response => {
            setIsSubmitting(false);
            setSuccess(true);
          })
        });
      })().catch(error => {
        //console.error('error', error);
        setIsSubmitting(false);
        setNoUserFound(true);
      });
    }
  };

    const getAccessTokenWithOutCredentials = (email) => {
    // IIFE(Immediately invoked functions Expression)
      setIsSubmitting(true);
      setNoUserFound(false);
      setSuccess(false);
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
        if (email?.length > 0) {
          getUserIdByEmail(
            response?.getToken?.access_token,
            email
          );
        }
      });
    })().catch(error => {
      setIsSubmitting(false);
      //console.error('error', error);
    });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .max(255)
          .required('Email adres is verplicht'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        getAccessTokenWithOutCredentials(values?.email);
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
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
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email adres"
            margin="normal"
            name="email"
            placeholder="Email adres"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          {errors.submit && (
            <Box mt={2}>
              <Alert severity="error">
                <div>
                  <strong>{errors.submit}</strong>
                </div>
              </Alert>
            </Box>
          )}
          {noUserFound && (
            <Box mt={2}>
              <Alert severity="error">
                <div>
                  <strong>Geen gebruiker gevonden</strong>
                </div>
              </Alert>
            </Box>
          )}

          {success && (
            <Box mt={2}>
              <Alert severity="success">
                <div>
                  <strong style={{ fontSize: 13 }}>
                    Controleer uw e-mailinbox. U ontvangt een wachtwoordherstellink.
                  </strong>
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
              className={classes.button}
            >
              Stuur wachtwoord reset link {'  '}
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

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
