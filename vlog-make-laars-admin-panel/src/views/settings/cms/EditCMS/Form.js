import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  DialogActions,
  SvgIcon,
  CircularProgress
} from '@material-ui/core';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import validate from 'validate.js';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Select from 'react-select';
import QuillEditor from 'src/components/QuillEditor';

const useStyles = makeStyles(theme => ({
  root: {
    '& .css-1wa3eu0-placeholder': {
      color: '#263238',
    },
    '& input[readonly]': {
      background: 'rgba(169, 169, 169, 0.3)',
      cursor: 'not-allowed',
      color: 'black'
    },
    '& .MuiFormHelperText-marginDense': {
      position: 'relative',
      top: '-4px',
      right: 12
    },
    '& .css-2b097c-container': {
      marginBottom: 10
    },
    '& .css-yk16xz-control': {
      cursor: 'pointer'
    },
    '& .css-1pahgxg-control': {
      marginLeft: 9
    },
    '& .css-26l3qy-menu': {
      zIndex: 9999,
      cursor: 'pointer',
      marginLeft: 9
    },
    '& .css-g1d714-ValueContainer': {
      cursor: 'pointer'
    },
    '& .MuiOutlinedInput-root': {
      marginBottom: 10
    }
  },
  roleError: {
    fontSize: '0.75rem !important',
    right: '-20px !important',
    color: '#f44336 !important'
  },
  editor: {
    marginTop: '0.5rem',
    border: '1px solid rgba(224, 224, 224, 1)',
    '& .ql-editor': {
      height: 200
    }
  },
  gridMargin: {
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '20px',
    '& .css-1wa3eu0-placeholder': {
      paddingLeft: 5
    },
    '& .css-1pahdxg-control': {
      boxShadow: `0 0 0 1px ${theme.palette.secondary.main} !important`,
      borderColor: theme.palette.secondary.main,
      '&:hover': {
        borderColor: theme.palette.secondary.main,
        zIndex: 100,
        backgroundColor: 'white'
      }
    }
  },
  profileDiv: {
    position: 'absolute'
  },
  nameWrapper: {
    marginTop: '15px',
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row'
  },
  buttonWrapper: {
    backgroundColor: 'white',
    '&:hover': {
      '& $editButton': {
        color: 'white',
        bottom: '40px',
        width: '72px',
        height: '35px',
        backgroundColor: 'rgba(103, 114, 120, .5)',
        display: 'initial'
      },
      '&:hover': {
        '& $deleteButton': {
          marginLeft: '2px',
          color: 'red',
          width: '70px',
          bottom: '40px',
          height: '35px',
          backgroundColor: 'rgba(103, 114, 120, .5)',
          display: 'initial'
        }
      }
    }
  },
  editButton: {
    display: 'none'
  },
  deleteButton: {
    display: 'none'
  },
  DeleteIcon: {},
  attachOwnerToAHouse: {
    fontSize: 11,
    padding: 8,
    marginTop: 10,
    border: `1px solid ${theme.palette.secondary.main}`,
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.background.default
    }
  },
  firstTypography: {
    marginTop: '5px',
    marginRight: '10px',

  },
  second: {
    marginLeft: '24px',
    paddingRight: '7px'
  },
  EditIcon: {},
  loadingCircle: {
    color: '#DF1683',
    width: '25px !important',
    height: '25px !important',
    marginLeft: 10,
    marginRight: 10
  },
  loading: {
    display: 'flex',
    marginLeft: 5
  },
  editAction: {
    background: '#6F6F6F',
    color: '#ffff',
    borderColor: '#ffff',
    height: 42,
    width: 160,
    '&:hover': {
      color: '#6F6F6F',
      background: '#fff',
      borderColor: '#6F6F6F'
    }
  },
  addNewHouse: {
    textTransform: 'capitalize',
    marginTop: 6,
    height: 40,
    width: 160,
    border: `1px solid ${theme.palette.secondary.main}`,
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.background.default
    }
  },
  dialogActions: {
    paddingRight: 0,
    marginTop: 20
  },
  shortDescription: {
    marginTop: 20,
    height: 160,
    marginBottom: 30,
    paddingBottom: 30
  },
  housesSelectWrapper: {
    position: 'relative',
    top: 10,
    right: 20
  },
  uploadDocument: {
    display: 'none'
  },
  uploadLabel: {
    cursor: 'pointer'
  },
  editorGrid: {

  }
}));

const Form = ({ selectedCMSId, bool, setBool, className, handleModalClose, ...rest }) => {
  const classes = useStyles();



  var [opa, setOpa] = useState(true);
  let [isSubmitting, setIsSubmitting] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [houses, setHouses] = useState(null);
  const [value, setValue] = useState('');
  const [valError, setValError] = useState();
  const [selectedOption, setSelectedOptions] = useState(null);
  const [attachedHouses, setAttachedHouses] = useState([]);
  const [dutch, setDutch] = useState('');
  const [english, setEnglish] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);
  const [dutchError, setDutchError] = useState('');
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  let token = localStorage.getItem('accessToken');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const data = {
    "perPage": 0,
    "pageNum": 1,
    "sort": "asc"
  }

  let setCMSObject = () => {

    setFormState(formState => ({
      ...formState,
      values: selectedCMSId,
    }));
    setBool(false);

    setDutch(selectedCMSId.valueNL)
    setValue(selectedCMSId.page);
    setEnglish(selectedCMSId.valueEN)


  }

  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmitting(true);

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));
    let body = {
      "key": formState.values.key,
      "valueNL": dutch ? dutch : formState.values.valueNL,
      "valueEN": english ? english : formState.values.valueEN,
      "page": value,
    }
    if (formState.isValid && dutchError && value != '' || value != undefined || value != null) {
      (async () => {
        setIsSubmitting(true);
        // Prepare Headers and Client
        axios.put(`${process.env.REACT_APP_CMS_URL}/${selectedCMSId._id}`, body, { 'headers': { 'authorization': `bearer ${token}` } }).
          then((response) => {
            enqueueSnackbar('Record is succesvol bijgewerkt.', {
              variant: 'success'
            });

            setTimeout(() => {
              window.location.href = '/admin/CMS';
            }, 3000);
          })
      })().catch(err => {
        enqueueSnackbar('Er is iets misgegaan met de API', {
          variant: 'error',
          autoHideDuration: 5000
        });
        setIsSubmitting(false);
        //console.error(err);
      });
    } else {
      setIsSubmitting(false);
    }
  };




  let onHouseSelection = selectedOption => {
    setSelectedOptions(selectedOption);
  };

  let attachSelectedHouse = () => {
    if (selectedOption) {
      let selectedHouse = houses.filter(house => {
        return house.value === selectedOption.value;
      });

      selectedHouse = selectedHouse?.length ? selectedHouse[0] : {};
      attachedHouses.push(selectedHouse);
      setAttachedHouses(attachedHouses);

      setFormState(formState => ({
        ...formState,
        touched: {
          ...formState.touched,
          ...formState.errors
        }
      }));
      setIsSubmitting(false);
    }
  };

  const schema = {
    key: {
      presence: {
        allowEmpty: false,
        message: 'is verplicht'
      },
      length: {
        maximum: 200
      }
    },


  };

  const handleBlur = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };




  useEffect(() => {
    const errors = validate(formState.values, schema);


    if (dutch?.length > 10) {
      setDutchError(true);
    }
    else {
      setDutchError(false)
    }


    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));


    if (selectedCMSId?._id && bool === true) {
      setCMSObject();
    }
  }, [formState.values, selectedCMSId, english, dutch]);

  const options = [
    { value: 1, label: 'Gemeenschappelijke secties' },
    { value: 2, label: 'Startpagina' },
    { value: 3, label: 'Alle woning vlogs' },
    { value: 4, label: 'Woningdetails' },
    { value: 5, label: 'Registreren pagina' },
    { value: 6, label: 'Login pagina' },
    { value: 7, label: 'Wachtwood vergeten' },
    { value: 8, label: 'Wachtwood resetten' },
    { value: 9, label: 'Dashboard' },
    { value: 10, label: 'Mijn Gegevens' },
    { value: 11, label: 'Mijn Documenten' },
    { value: 12, label: 'Mijn Vlogs' },
    { value: 13, label: 'Mijn Huizen' },
    { value: 14, label: 'Mijn Aanvragen' },
    { value: 15, label: 'Facturen' },
  ];

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  let handleDutch = (e) => {
    setDutch(e);
  }
  let handleEnglish = (e) => {
    setEnglish(e);
  }

  let handleOption = val => {
    setValue(val.value);
    if (val.value) {
      setValError(false);
    }
    else {
      setValError(true);
    }

  };


  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid container>
        <Grid container className={classes.gridMargin}>
          <Grid item md={1}></Grid>
          <Grid item md={2} xs={4} className={classes.nameWrapper}>
            <label>Toets: </label>
          </Grid>
          <Grid item md={9} xs={11}>
            <TextField
              className={classes.firstTypography}
              fullWidth
              helperText={
                hasError('key') ? formState.errors.key[0] : null
              }
              inputProps={
                { readOnly: true, }
              }
              error={hasError('key')}
              onBlur={handleBlur}
              size="small"
              defaultValue={formState.values?.key}
              variant="outlined"
              label={formState?.values?.key == '' || null || undefined ? 'Toets' : ''}
              key={`${Math.floor(Math.random() * 1000)}-min`}
              name="key"
            />
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={2} xs={4} className={classes.nameWrapper}>
            <label>Bladzijde: </label>
          </Grid>
          <Grid item md={9} xs={11}>
            <Select
              style={{
                color: 'grey !important',
                width: '100% !important'
              }}
              placeholder={`${value === '' || value === undefined || value === null ? '' : options[value - 1]?.label}`}
              onChange={handleOption}
              value={value?.value}
              options={options}
            />

            {valError ? <div style={{ color: '#ff3535', fontSize: '13px', marginTop: 10, marginBottom: 10 }}>Selecteer een waarde a.u.b.</div> : <div></div>}

          </Grid>

        </Grid>

        <Grid item md={1}></Grid>
        <Grid item md={2} xs={4} className={classes.nameWrapper}>
          <label>En Inhoud: </label>
        </Grid>
        <Grid item md={9} xs={12} className={classes.editorGrid}>
          <QuillEditor
            className={classes.shortDescription}
            fullWidth
            onChange={handleEnglish}
            value={english ? english : formState.values?.valueEN || ''}
            variant="outlined"
          />

        </Grid>

        <Grid item md={1}></Grid>
        <Grid item md={2} xs={4} className={classes.nameWrapper}>
          <label>Nl Inhoud: </label>
        </Grid>
        <Grid item md={9} xs={12} className={classes.editorGrid}>
          <QuillEditor
            className={classes.shortDescription}
            fullWidth
            value={dutch}
            onChange={handleDutch}
            value={dutch ? dutch : formState.values?.valueNL || ''}
            variant="outlined"
          />
          {dutchError ? <div></div> : <div style={{ color: '#ff3535', fontSize: 13 }}>Lengte is te kort.</div>}
        </Grid>
        <Grid item md={1}></Grid>

        {selectedRole?.value == 0 && (
          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>Huizen GekoppeId Aan Klant</Typography>
            </div>
          </Grid>
        )}

        {selectedRole?.value == 0 && (
          <Grid container>
            <Grid item md={12}>
              <Grid container>
                <Grid item md={2}></Grid>
                <Grid item md={8} className={classes.housesSelectWrapper}>
                  <Select
                    style
                    placeholder="Selecteer huis om te koppelen"
                    value={selectedOption}
                    onChange={onHouseSelection}
                    options={houses}
                  />
                </Grid>
                <Grid item md={2}>
                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.attachOwnerToAHouse}
                    onClick={attachSelectedHouse}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <PlusCircleIcon />
                      </SvgIcon>
                    }
                  >
                    Bevestig huis
                    {'  '}
                  </Button>
                </Grid>
              </Grid>
              {attachedHouses?.length > 0 &&
                attachedHouses?.map((attachedHouse, index) => (
                  <Grid container key={attachedHouse.value}>
                    <Grid item md={2}></Grid>
                    <Grid
                      item
                      md={1}
                      xs={4}
                      style={{
                        marginTop: 18
                      }}
                      className={classes.nameWrapper}
                    >
                      <label>Huis {index + 1}:</label>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <Button
                        color="secondary"
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          border: '1px solid black',
                          marginTop: '10px'
                        }}
                      >
                        {' '}
                        {attachedHouse.label}
                      </Button>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        )}
        <Grid item md={1}></Grid>
      </Grid>

      <DialogActions className={classes.dialogActions}>
        <Button
          className={classes.editAction}
          onClick={handleModalClose}
          color="primary"
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          className={classes.addNewHouse}
          color="primary"
          variant="contained"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Saving' : 'Save'}{' '}
          {isSubmitting && (
            <CircularProgress className={classes.loadingCircle} />
          )}
        </Button>
      </DialogActions>
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
