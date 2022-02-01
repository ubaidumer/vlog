import React from 'react';
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

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .max(255)
          .required('Email adres is verplicht'),
        password: Yup.string()
          .max(255)
          .required('Een wachtwoord is verplicht')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await login(values.email, values.password);
          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
            window.location.href = '/admin/dashboard';
          }
        } catch (err) {
          //console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
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
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Wachtwoord"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
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
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In {'  '}
              {isSubmitting && (
                <CircularProgress className={classes.loadingCircle} />
              )}
            </Button>
          </Box>
          <Box mt={2} textAlign="right">
            <a className={classes.forgotPassword} href="/forgot-password">Wachtwoord vergeten?</a>
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
