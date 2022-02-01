import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core';
import validate from 'validate.js';
import clsx from 'clsx';
import { Section } from 'components/organisms';
import { Image } from 'components/atoms';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false },
);

import BikeDetailsModal from '../BikeDetailsModal';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#263238',
    width: '100%',
    '& .MuiFormLabel-root': {
      color: '#263238',
    },
    '& .MuiOutlinedInput-root': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
      color: '#263238',
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
    },
    '& .Mui-focused': {
      color: '#263238',
      '& fieldset': {
        color: '#263238',
      },
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: '#263238',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      color: '#263238',
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxWidth: 1250,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 30,
    },
  },
  title: {
    color: '#263238',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign: 'center',
  },
  subTitle: {
    color: '#263238',
    marginBottom: '1rem',
    fontSize: '1.25rem',
  },
  textField: {
    borderColor: 'white',
  },
  label: {
    color: '#263238',
  },
  link: {
    fontSize: 16,
    color: '#3BB0E5',
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  termsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column !important',
      alignItems: 'flex-start !important',
    },
  },
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  activeDateRange: {
    display: 'block',
    position: 'absolute',
    boxShadow:
      '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 0px 4px rgba(63, 63, 68, 0.2)',
    zIndex: 1,
  },
  deActiveDateRange: {
    display: 'none',
  },
  dateRangeSelection: {
    position: 'relative',
    top: '-8rem',
    border: '1px solid #eee',
    paddingTop: 35,
    background: 'white',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow:
      '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 0px 4px rgba(63, 63, 68, 0.2)',
    [theme.breakpoints.down('sm')]: {
      position: 'initial',
      border: 'none',
      margin: 'unset',
      boxShadow: 'none',
      position: 'relative',
    },
  },
  termsLeftWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  termsRightWrapper: {
    position: 'relative',
    top: '-40px',
    [theme.breakpoints.down('sm')]: {
      top: 0,
    },
  },
  totalAmountRow: {
    background: '#ededed',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  addToCartButton: {
    background: '#E9511C',
    color: 'white',
    fontSize: 12,
    border: '1px solid #E9511C',
    '&:hover': {
      background: 'white',
      color: '#E9511C',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
  },
  addToCartButtonWrapper: {
    marginRight: 5,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  proceedToPaymentButton: {
    background: '#3BB0E5',
    border: '1px solid #3BB0E5',
    color: 'white',
    fontSize: 12,
    '&:hover': {
      background: 'white',
      color: '#3BB0E5',
    },
  },
  addBicycleWrapper: {
    border: '1px solid rgba(224, 224, 224, 1)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: 15,
    marginTop: '1rem',
  },
  addBicycleIcon: {
    border: '1px dashed #D2D2D2',
    padding: 15,
    '&:hover': {
      cursor: 'pointer',
      background: '#eee',
    },
  },
  label: {
    marginBottom: '1rem',
  },
  editor: {
    marginTop: '1rem',
  },
  checkbox: {
    position: 'relative',
    top: '-9px',
    display: 'flex',
    alignSelf: 'flex-start',
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

  const [rentingDateRange, setRentingDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [isDateRangeActive, setIsDateRangeActive] = useState(false);

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

  const handleChange = event => {
    event.persist();
    console.log(event.target.name);
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

  const toggleDatePicker = (event, status) => {
    setIsDateRangeActive(status === undefined ? true : false);
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const [editorState, setEditorState] = React.useState('');

  const [
    termsAndConditionsChecked,
    setTermsAndConditionsChecked,
  ] = React.useState(true);

  const handleTermsAndConditionsChange = event => {
    setTermsAndConditionsChecked(event.target.checked);
  };

  const [openAddBikeModal, setOpenAddBikeModal] = React.useState(false);

  const handleAddBikeClickOpen = () => {
    setIsDateRangeActive(false);
    setOpenAddBikeModal(true);
  };

  const handleAddBikeClickClose = () => {
    setOpenAddBikeModal(false);
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
          Add Tour Booking
        </Typography>

        {/* Form */}

        <div className={classes.root}>
          <form name="login-form" method="post" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  className={classes.textField}
                  placeholder="Customer Email"
                  label="Customer Email *"
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
                  onFocus={e => toggleDatePicker(e, false)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-pickup-location-native-simple">
                    Pickup Location
                  </InputLabel>
                  <Select
                    onFocus={e => toggleDatePicker(e, false)}
                    native
                    onChange={handleChange}
                    value={formState.values.pickup_location || ''}
                    label="Pickup Location"
                    inputProps={{
                      name: 'pickup_location',
                      id: 'outlined-pickup-location-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Amsterdam Lindenstraat 90</option>
                    <option value={2}>
                      Burgemeester Huydercoperweg 26 Westbroek
                    </option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-payment-method-native-simple">
                    Event
                  </InputLabel>
                  <Select
                    onFocus={e => toggleDatePicker(e, false)}
                    native
                    onChange={handleChange}
                    value={formState.values.event || ''}
                    label="Events"
                    inputProps={{
                      name: 'paymentMethod',
                      id: 'outlined-payment-method-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Tour De Omloop</option>
                    <option value={2}>Tailor-made Tour</option>
                    <option value={3}>Tulip Tour</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  className={classes.textField}
                  placeholder="Renting Duration"
                  label="Renting Duration *"
                  variant="outlined"
                  size="medium"
                  name="rentingDuration"
                  fullWidth
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  helperText={
                    hasError('rentingDuration')
                      ? formState.errors.rentingDuration[0]
                      : null
                  }
                  error={hasError('rentingDuration')}
                  onFocus={toggleDatePicker}
                  type="text"
                  value={formState.values.rentingDuration || ''}
                />
                <DateRange
                  name="rentingDurationRange"
                  ranges={[selectionRange]}
                  onChange={item => setRentingDateRange([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  showMonthAndYearPickers={false}
                  ranges={rentingDateRange}
                  showDateDisplay={false}
                  renderStaticRangeLabel={false}
                  rangeColors={['#3BB0E5']}
                  className={
                    isDateRangeActive
                      ? classes.activeDateRange
                      : classes.deActiveDateRange
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-pickup-time-native-simple">
                    Pickup Time
                  </InputLabel>
                  <Select
                    onFocus={e => toggleDatePicker(e, false)}
                    native
                    onChange={handleChange}
                    value={formState.values.pickup_time || ''}
                    label="Pickup Time"
                    inputProps={{
                      name: 'pickup_time',
                      id: 'outlined-pickup-time-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value="07:00">07:00</option>
                    <option value="07:30">07:30</option>
                    <option value="08:00">08:00</option>
                    <option value="08:30">08:30</option>
                    <option value="09:00">09:00</option>
                    <option value="09:30">09:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-return-time-native-simple">
                    Return Time
                  </InputLabel>
                  <Select
                    onFocus={e => toggleDatePicker(e, false)}
                    native
                    onChange={handleChange}
                    value={formState.values.pickup_time || ''}
                    label="Return Time"
                    inputProps={{
                      name: 'return_time',
                      id: 'outlined-pickup-time-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value="07:00">07:00</option>
                    <option value="07:30">07:30</option>
                    <option value="08:00">08:00</option>
                    <option value="08:30">08:30</option>
                    <option value="09:00">09:00</option>
                    <option value="09:30">09:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-payment-method-native-simple">
                    Payment Method
                  </InputLabel>
                  <Select
                    onFocus={e => toggleDatePicker(e, false)}
                    native
                    onChange={handleChange}
                    value={formState.values.paymentMethod || ''}
                    label="Payment Method"
                    inputProps={{
                      name: 'paymentMethod',
                      id: 'outlined-payment-method-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Cash on Delivery</option>
                    <option value={2}>Online Payment</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <label className={classes.label}>Add Bicycle(s): </label>
                <Grid item xs={12} className={classes.addBicycleWrapper}>
                  <Image
                    onClick={handleAddBikeClickOpen}
                    className={classes.addBicycleIcon}
                    src="https://assets.it22.nl/tda/bike-renting/plus-icon.svg"
                    alt="Add Bicycle Icon"
                    lazy={true}
                  />
                  <BikeDetailsModal
                    handleAddBikeClickClose={handleAddBikeClickClose}
                    openAddBikeModal={openAddBikeModal}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <label className={classes.label}>Description: </label>
                <div className={classes.editor}>
                  <Editor
                    onFocus={e => toggleDatePicker(e, false)}
                    placeholder="Write your order description here..."
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
                  />
                </div>
              </Grid>

              <Grid item xs={12} className={classes.termsWrapper}>
                <Typography
                  className={classes.label}
                  variant="h5"
                  color="textSecondary"
                  align="left"
                >
                  Terms and Conditions
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                className={classes.termsLeftWrapper}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onFocus={e => toggleDatePicker(e, false)}
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
                      When booking a bike with you agree with the
                      <a className={classes.link} href="/terms-and-conditions">
                        {' '}
                        terms and conditions{' '}
                      </a>
                      of Tour de Amsterdam.
                    </Typography>
                  }
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                className={classes.termsRightWrapper}
              >
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      <TableRow key="price">
                        <TableCell align="left">Price:</TableCell>
                        <TableCell align="right">€ 40</TableCell>
                      </TableRow>
                      <TableRow key="delivery">
                        <TableCell align="left">Delivery:</TableCell>
                        <TableCell align="right">€ 20</TableCell>
                      </TableRow>
                      <TableRow key="tax">
                        <TableCell align="left">Tax:</TableCell>
                        <TableCell align="right">€ 40</TableCell>
                      </TableRow>
                      <TableRow
                        key="total_amount"
                        className={classes.totalAmountRow}
                      >
                        <TableCell
                          align="left"
                          className={classes.fontWeightBold}
                        >
                          Total Amount:
                        </TableCell>
                        <TableCell
                          align="right"
                          className={classes.fontWeightBold}
                        >
                          € 100
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Grid item xs={12} className={classes.buttonsWrapper}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.addToCartButtonWrapper}
                  >
                    <Button
                      className={classes.addToCartButton}
                      size="large"
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Button
                      className={classes.proceedToPaymentButton}
                      size="large"
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Prodeed To Payment
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Form;
