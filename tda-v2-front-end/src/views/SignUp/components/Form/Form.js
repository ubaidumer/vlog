import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import validate from 'validate.js';
import clsx from 'clsx';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
    width: '100%',
    '& .MuiFormLabel-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      borderColor: 'white',
      color: 'white',
      '& fieldset': {
        borderColor: 'white',
      },
    },
    '& .Mui-focused': {
      color: 'white',
      '& fieldset': {
        color: 'white',
      },
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      color: 'white',
      borderColor: 'white',
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2.85rem',
  },
  subTitle: {
    color: 'white',
    marginBottom: '1rem',
    fontSize: '1.25rem',
  },
  textField: {
    borderColor: 'white',
  },
  label: {
    color: 'white',
  },
  link: {
    fontSize: 16,
    color: 'white',
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  linksWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column !important',
      alignItems: 'flex-start !important',
    },
  },
  signUpButton: {
    background: 'white',
    border: '1px solid white',
    textTransform: 'capitalize',
    color: '#404040',
    '&:hover': {
      background: '#404040',
      color: 'white',
    },
  },
  checkbox: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-start',
      paddingTop: 5,
    },
  },
}));

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  phoneNumber: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: 'is required' },
    equality: 'password',
    length: {
      minimum: 8,
    },
  },
  address: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 300,
    },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formState.isValid) {
      window.location.replace('/');
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const [
    termsAndConditionsChecked,
    setTermsAndConditionsChecked,
  ] = React.useState(true);

  const handleTermsAndConditionsChange = event => {
    setTermsAndConditionsChecked(!termsAndConditionsChecked);
  };

  return (
    <Section className={classes.section}>
      <div className={classes.formContainer}>
        <Typography
          align="left"
          variant="h4"
          gutterBottom
          className={clsx('section-header__title', classes.title)}
        >
          Welcome
        </Typography>

        <Typography
          variant="h6"
          align="left"
          className={clsx('section-header__subtitle', classes.subTitle)}
        >
          Please create your account here
        </Typography>

        {/* Form */}

        <div className={classes.root}>
          <form name="login-form" method="post" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={6}>
                <TextField
                  className={classes.textField}
                  placeholder="Name"
                  label="Name *"
                  variant="outlined"
                  size="medium"
                  name="name"
                  fullWidth
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  helperText={
                    hasError('name') ? formState.errors.name[0] : null
                  }
                  error={hasError('name')}
                  onChange={handleChange}
                  type="text"
                  value={formState.values.name || ''}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <TextField
                  className={classes.textField}
                  placeholder="Phone Number"
                  label="Phone Number *"
                  variant="outlined"
                  size="medium"
                  name="phoneNumber"
                  fullWidth
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  helperText={
                    hasError('phoneNumber')
                      ? formState.errors.phoneNumber[0]
                      : null
                  }
                  error={hasError('phoneNumber')}
                  onChange={handleChange}
                  type="text"
                  value={formState.values.phoneNumber || ''}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  className={classes.textField}
                  placeholder="E-mail"
                  label="E-mail *"
                  variant="outlined"
                  size="medium"
                  name="email"
                  fullWidth
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  error={hasError('email')}
                  onChange={handleChange}
                  type="email"
                  value={formState.values.email || ''}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <TextField
                  className={classes.textField}
                  placeholder="Password"
                  label="Password *"
                  variant="outlined"
                  size="medium"
                  name="password"
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  error={hasError('password')}
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <TextField
                  className={classes.textField}
                  placeholder="Confirm Password"
                  label="Confirm Password *"
                  variant="outlined"
                  size="medium"
                  name="confirmPassword"
                  fullWidth
                  helperText={
                    hasError('confirmPassword')
                      ? formState.errors.confirmPassword[0]
                      : null
                  }
                  error={hasError('confirmPassword')}
                  onChange={handleChange}
                  type="password"
                  value={formState.values.confirmPassword || ''}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  className={classes.textField}
                  placeholder="Address"
                  label="Address *"
                  variant="outlined"
                  size="medium"
                  multiline
                  rows={4}
                  name="address"
                  fullWidth
                  helperText={
                    hasError('address') ? formState.errors.address[0] : null
                  }
                  error={hasError('address')}
                  onChange={handleChange}
                  type="text"
                  value={formState.values.address || ''}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsAndConditionsChecked}
                      onChange={handleTermsAndConditionsChange}
                      name="terms_and_conditions"
                      color="primary"
                      className={classes.checkbox}
                    />
                  }
                  label={
                    <Typography
                      className={classes.label}
                      variant="subtitle1"
                      color="textSecondary"
                      align="left"
                    >
                      I have read and agree to the
                      <a className={classes.link} href="/terms-and-conditions">
                        {' '}
                        terms and conditions{' '}
                      </a>
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.signUpButton}
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} className={classes.linksWrapper}>
                <Typography
                  className={classes.label}
                  variant="subtitle1"
                  color="textSecondary"
                  align="left"
                >
                  Already have an account?{' '}
                  <a className={classes.link} href="/signin">
                    Sign In
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Form;
