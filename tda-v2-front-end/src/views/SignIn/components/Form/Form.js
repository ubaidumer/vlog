import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
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
  signInButton: {
    background: 'white',
    border: '1px solid white',
    textTransform: 'capitalize',
    color: '#404040',
    '&:hover': {
      background: '#404040',
      color: 'white',
    },
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
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
          Please login into your account
        </Typography>

        {/* Form */}

        <div className={classes.root}>
          <form name="login-form" method="post" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <Button
                  className={classes.signInButton}
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12} className={classes.linksWrapper}>
                <Typography
                  className={classes.label}
                  variant="subtitle1"
                  color="textSecondary"
                  align="left"
                >
                  Don’t have an account?{' '}
                  <a className={classes.link} href="/signup">
                    Signup
                  </a>
                </Typography>
                <a className={classes.link} href="/forgot-password">
                  Forgot Password?
                </a>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Form;
