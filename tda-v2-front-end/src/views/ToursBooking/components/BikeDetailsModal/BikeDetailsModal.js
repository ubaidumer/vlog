import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import validate from 'validate.js';

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
  labelsWrapper: {
    padding: '1.5rem 12px .5rem !important',
  },
  shoeLabelsWrapper: {
    padding: '1rem 2px 1.5rem !important',
  },
  gpsLabelsWrapper: {
    padding: '.25rem 2px 1.5rem !important',
  },
  label: {
    color: '#546E7A',
    fontWeight: 600,
    padding: '1.5rem 2px .5rem !important',
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
  addBicycleWrapper: {
    border: '2px solid rgba(224, 224, 224, 1)',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: 15,
  },
  bikeCategoryWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 0,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      marginTop: '1rem',
    },
  },
  bikeCategoryButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  bikeCategoryButton: {
    border: '1px solid #E0E0E0',
    background: 'white',
    color: '#263238',
    fontSize: 12,
    textTransform: 'capitalize',
    '&:hover': {
      background: '#3BB0E5',
      color: 'white',
      border: '1px solid #3BB0E5',
    },
    '&.active': {
      background: '#3BB0E5',
      color: 'white',
      border: '1px solid #3BB0E5',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
  },
  addBicycleFrameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    border: '1px solid rgba(224, 224, 224, 1)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '15px !important',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  image: {
    height: 100,
    width: '14%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: '2px solid #D2D2D2',
    borderRadius: 4,
    padding: 15,
    position: 'relative',
    marginRight: '1rem',
    '&:hover': {
      cursor: 'pointer',
      border: '2px solid #3BB0E5',
      boxShadow: '0px 0px 4px #3546AB',
      '& span': {
        background: '#3BB0E5',
        color: 'white',
      },
    },
    '&:last-of-type': {
      marginRight: 0,
    },
    '&.active': {
      border: '2px solid #3BB0E5',
      boxShadow: '0px 0px 4px #3546AB',
      '& span': {
        background: '#3BB0E5',
        color: 'white',
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },
  imageLabel: {
    position: 'absolute',
    bottom: 0,
    margin: '0 auto',
    background: '#D2D2D2',
    borderRadius: '0px 0px 3px 3px',
    width: '100%',
    left: 0,
    textAlign: 'center',
  },
  addBikeButtonWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginBottom: '1rem',
    },
  },
  addBikeButton: {
    background: '#3BB0E5',
    color: 'white',
    border: '1px solid #3BB0E5',
    fontSize: 16,
    textTransform: 'capitalize',
    marginTop: '1rem',
    marginBottom: '1rem',
    '&:hover': {
      background: 'white',
      color: '#3BB0E5',
      border: '1px solid #3BB0E5',
    },
  },
  addPedalsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    border: '1px solid rgba(224, 224, 224, 1)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '15px !important',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  addAccessoriesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    border: '1px solid rgba(224, 224, 224, 1)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '15px !important',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  accessorieslabel: {
    color: '#546E7A',
    fontWeight: 600,
    padding: '1rem 2px 1.5rem !important',
  },
  accessoriesImage: {
    height: 100,
    width: '35%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: '2px solid #D2D2D2',
    borderRadius: 4,
    padding: 15,
    position: 'relative',
    marginRight: '1rem',
    '&:hover': {
      cursor: 'pointer',
      border: '2px solid #3BB0E5',
      boxShadow: '0px 0px 4px #3546AB',
      '& span': {
        background: '#3BB0E5',
        color: 'white',
      },
    },
    '&:last-of-type': {
      marginRight: 0,
    },
    '&.active': {
      border: '2px solid #3BB0E5',
      boxShadow: '0px 0px 4px #3546AB',
      '& span': {
        background: '#3BB0E5',
        color: 'white',
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },
  dialogTitle: {
    position: 'relative',
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    right: 20,
  },
}));

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  height: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
};

const Form = props => {
  const {
    openAddBikeModal,
    handleAddBikeClickClose,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setCategory({
      roadBikeCategory: true,
      ladiesBikeCategory: false,
      mountainBikeCategory: false,
      hybridBikeCategory: false,
    });

    setFrame({
      frame1: true,
      frame2: false,
      frame3: false,
      frame4: false,
    });

    setPedal({
      pedal1: true,
      pedal2: false,
      pedal3: false,
      pedal4: false,
    });

    setShoe({
      shoe1: true,
      shoe2: false,
      shoe3: false,
      shoe4: false,
    });

    setGps({
      gps1: true,
      gps2: false,
      gps3: false,
      gps4: false,
    });

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

  const [category, setCategory] = React.useState({});

  const toggleCategory = (event, newCategory) => {
    setCategory({
      roadBikeCategory: newCategory == 'roadBikeCategory' ? true : false,
      ladiesBikeCategory: newCategory == 'ladiesBikeCategory' ? true : false,
      mountainBikeCategory:
        newCategory == 'mountainBikeCategory' ? true : false,
      hybridBikeCategory: newCategory == 'hybridBikeCategory' ? true : false,
    });
  };

  const [frame, setFrame] = React.useState({});

  const toggleFrame = (event, newFrame) => {
    setFrame({
      frame1: newFrame == '1,80-1,8856ML' ? true : false,
      frame2: newFrame == '1,70-1,8856ML' ? true : false,
      frame3: newFrame == '1,60-1,8856ML' ? true : false,
      frame4: newFrame == '1,50-1,8856ML' ? true : false,
    });
  };

  const [pedal, setPedal] = React.useState({});

  const togglePedal = (event, newPedal) => {
    setPedal({
      pedal1: newPedal == 'SHIMANO' ? true : false,
      pedal2: newPedal == 'R-11' ? true : false,
      pedal3: newPedal == 'R-12' ? true : false,
      pedal4: newPedal == 'SHIMANO 3' ? true : false,
    });
  };

  const [shoe, setShoe] = React.useState({});

  const toggleShoe = (event, newShoe) => {
    setShoe({
      shoe1: newShoe == 'LAKE 1' ? true : false,
      shoe2: newShoe == 'Nike' ? true : false,
      shoe3: newShoe == 'Adidas' ? true : false,
      shoe4: newShoe == 'CAT' ? true : false,
    });
  };

  const [gps, setGps] = React.useState({});

  const toggleGps = (event, newGps) => {
    setGps({
      gps1: newGps == 'Type 1' ? true : false,
      gps2: newGps == 'Type 2' ? true : false,
      gps3: newGps == 'None' ? true : false,
    });
  };

  return (
    <div>
      <Dialog
        maxWidth="lg"
        fullWidth
        open={openAddBikeModal}
        onClose={handleAddBikeClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          Add Bicycle
          <img
            src="https://assets.it22.nl/tda/bike-renting/close-icon.png"
            alt="Close Icon"
            className={classes.closeIcon}
            onClick={handleAddBikeClickClose}
          />
        </DialogTitle>
        <DialogContent>
          <form name="login-form" method="post" onSubmit={handleSubmit}>
            <label className={classes.label}>Bicycle Type</label>

            {/* Bicycle Types */}

            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                className={classes.bikeCategoryButtonWrapper}
              >
                <Button
                  onClick={e => toggleCategory(e, 'roadBikeCategory')}
                  className={`${category.roadBikeCategory ? 'active' : ''}
                    ${classes.bikeCategoryButton}`}
                >
                  Road Bike
                </Button>
                <Button
                  onClick={e => toggleCategory(e, 'ladiesBikeCategory')}
                  className={`${category.ladiesBikeCategory ? 'active' : ''}
                    ${classes.bikeCategoryButton}`}
                >
                  Ladies Bike
                </Button>
                <Button
                  onClick={e => toggleCategory(e, 'mountainBikeCategory')}
                  className={`${category.mountainBikeCategory ? 'active' : ''}
                    ${classes.bikeCategoryButton}`}
                >
                  Mountain Bike
                </Button>
                <Button
                  onClick={e => toggleCategory(e, 'hybridBikeCategory')}
                  className={`${category.hybridBikeCategory ? 'active' : ''}
                    ${classes.bikeCategoryButton}`}
                >
                  Hybrid Bike
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <TextField
                  className={classes.textField}
                  placeholder="Name"
                  label="Name *"
                  variant="outlined"
                  size="medium"
                  name="text"
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
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <TextField
                  className={classes.textField}
                  placeholder="Height"
                  label="Height *"
                  variant="outlined"
                  size="medium"
                  name="text"
                  fullWidth
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  helperText={
                    hasError('height') ? formState.errors.height[0] : null
                  }
                  error={hasError('height')}
                  onChange={handleChange}
                  type="text"
                  value={formState.values.height || ''}
                />
              </Grid>
            </Grid>

            {/* Bicycle Frames */}

            <Grid container spacing={3}>
              <Grid className={classes.labelsWrapper} item xs={12}>
                <label className={classes.label}>Bicycle Frame</label>
              </Grid>

              <Grid item xs={12}>
                <Grid item xs={12} className={classes.addBicycleFrameWrapper}>
                  <div
                    onClick={e => toggleFrame(e, '1,80-1,8856ML')}
                    className={`${frame.frame1 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/mountain-bike.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>1,80-1,8856ML</span>
                  </div>
                  <div
                    onClick={e => toggleFrame(e, '1,70-1,8856ML')}
                    className={`${frame.frame2 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/road-bike.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>1,80-1,8856ML</span>
                  </div>
                  <div
                    onClick={e => toggleFrame(e, '1,60-1,8856ML')}
                    className={`${frame.frame3 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/road-bike.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>1,80-1,8856ML</span>
                  </div>
                  <div
                    onClick={e => toggleFrame(e, '1,50-1,8856ML')}
                    className={`${frame.frame4 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/road-bike.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>1,80-1,8856ML</span>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            {/* Bicycle Pedals */}

            <Grid container spacing={3}>
              <Grid className={classes.labelsWrapper} item xs={12}>
                <label className={classes.label}>Pedals</label>
              </Grid>

              <Grid item xs={12}>
                <Grid item xs={12} className={classes.addPedalsWrapper}>
                  <div
                    onClick={e => togglePedal(e, 'SHIMANO')}
                    className={`${pedal.pedal1 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/pedal-1.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>SHIMANO</span>
                  </div>
                  <div
                    onClick={e => togglePedal(e, 'R-11')}
                    className={`${pedal.pedal2 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/pedal-2.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>R-11</span>
                  </div>
                  <div
                    onClick={e => togglePedal(e, 'R-12')}
                    className={`${pedal.pedal3 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/pedal-2.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>R-12</span>
                  </div>
                  <div
                    onClick={e => togglePedal(e, 'SHIMANO 3')}
                    className={`${pedal.pedal4 ? 'active' : ''} ${
                      classes.image
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/pedal-1.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>SHIMANO 3</span>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            {/* Shoes and GPS */}

            <Grid container spacing={3}>
              <Grid item xs={12} md={12} md={7} lg={7}>
                {/* Shoes */}
                <Grid className={classes.shoeLabelsWrapper} item xs={12}>
                  <label className={classes.accessorieslabel}>Shoes</label>
                </Grid>

                <Grid item xs={12} className={classes.addAccessoriesWrapper}>
                  <div
                    onClick={e => toggleShoe(e, 'LAKE 1')}
                    className={`${shoe.shoe1 ? 'active' : ''} ${
                      classes.accessoriesImage
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/shoe.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>LAKE 1</span>
                  </div>
                  <div
                    onClick={e => toggleShoe(e, 'Nike')}
                    className={`${shoe.shoe2 ? 'active' : ''} ${
                      classes.accessoriesImage
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/shoe.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>Nike</span>
                  </div>
                  <div
                    onClick={e => toggleShoe(e, 'Adidas')}
                    className={`${shoe.shoe3 ? 'active' : ''} ${
                      classes.accessoriesImage
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/shoe.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>Adidas</span>
                  </div>
                  <div
                    onClick={e => toggleShoe(e, 'CAT')}
                    className={`${shoe.shoe4 ? 'active' : ''} ${
                      classes.accessoriesImage
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/shoe.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>CAT</span>
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} md={5} lg={5}>
                {/* GPS */}
                <Grid className={classes.gpsLabelsWrapper} item xs={12}>
                  <label className={classes.accessorieslabel}>GPS</label>
                </Grid>
                <Grid item xs={12} className={classes.addAccessoriesWrapper}>
                  <div
                    onClick={e => toggleGps(e, 'Type 1')}
                    className={`${gps.gps1 ? 'active' : ''} ${
                      classes.accessoriesImage
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/gps.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>Type 1</span>
                  </div>
                  <div
                    onClick={e => toggleGps(e, 'Type 2')}
                    className={`${gps.gps2 ? 'active' : ''} ${
                      classes.accessoriesImage
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/gps.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>Type 2</span>
                  </div>
                  <div
                    onClick={e => toggleGps(e, 'None')}
                    className={`${gps.gps3 ? 'active' : ''} ${
                      classes.accessoriesImage
                    }`}
                    style={{
                      backgroundImage: `url('https://assets.it22.nl/tda/bike-renting/no-gps.png')`,
                    }}
                  >
                    <span className={classes.imageLabel}>None</span>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.addBikeButtonWrapper}>
              <Button className={classes.addBikeButton}>Add Bike</Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Form;
