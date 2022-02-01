import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: 550,
    margin: `0 auto`,
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const Form = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Get in touch"
        subtitle="Please send us your questions and ideas!"
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align="center"
      />
      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Your Email Address
            </Typography>
            <TextField
              placeholder="something@website.com"
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              type="text"
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Subject
            </Typography>
            <TextField
              placeholder="Question or idea"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Message
            </Typography>
            <TextField
              placeholder="Your question about our services"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={7}
            />
          </Grid>
          <Grid item container justify="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              fullWidth
            >
              submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Form.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Form;
