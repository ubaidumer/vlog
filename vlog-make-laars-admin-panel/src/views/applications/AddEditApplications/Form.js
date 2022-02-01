import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import FormHeader from 'src/components/FormHeader';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Link
} from '@material-ui/core';
import QuillEditor from 'src/components/QuillEditor';
import FilesDropzone from 'src/components/FilesDropzone';
import axios from 'src/utils/axios';
import getInitials from 'src/utils/getInitials';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import wait from 'src/utils/wait';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiCheckbox-root': {
      paddingTop: 0
    }
  },
  mb2: {
    marginBottom: '2rem'
  },
  pr2: {
    paddingRight: '2rem'
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row'
  },
  label: {
    paddingRight: '2rem'
  },
  cardContent: {
    padding: '0 !important'
  },
  editor: {
    marginTop: '0.5rem',
    border: '1px solid rgba(224, 224, 224, 1)',
    '& .ql-editor': {
      height: 200
    }
  },
  submitButton: {
    width: 110,
    height: 40,
    margin: '1rem',
    background: theme.palette.secondary.main,
    color: 'white',
    fontSize: 12,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      background: 'white',
      color: theme.palette.secondary.main
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem'
    }
  },
  cancelButton: {
    width: 110,
    height: 40,
    margin: '1rem',
    background: '#F3F3F3',
    color: '#000000',
    fontSize: 12,
    border: `1px solid #C2C2C2`,
    '&:hover': {
      background: '#000000',
      color: '#F3F3F3'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem'
    }
  },
  saveNewButton: {
    width: 110,
    height: 40,
    margin: '1rem',
    background: '#F3F3F3',
    color: '#000000',
    fontSize: 12,
    border: `1px solid #C2C2C2`,
    cursor: 'not-allowed',
    '&:hover': {
      background: '#000000',
      color: '#F3F3F3'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem'
    }
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  }
}));

const Form = ({ className, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const isMountedRef = useIsMountedRef();

  const [topHouses, setTopHouses] = useState([]);

  const getTopHouses = useCallback(async () => {
    try {
      const response = await axios.get('/api/reports/top-houses');

      if (isMountedRef.current) {
        setTopHouses(response.data.topHouses);
      }
    } catch (err) {
      //console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getTopHouses();
  }, [getTopHouses]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        adapted_home: false,
        adapted_for_the_disabled: false,
        adapted_for_elderly: false,
        shared_lift: false,
        furnished: false
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          // NOTE: Make API request
          await wait(200);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Profiel geüpdatet', {
            variant: 'success'
          });
        } catch (err) {
          //console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
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
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Card className={clsx(classes.root, className)} {...rest}>
                <Divider />
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid item md={12} xs={12}>
                      <FormHeader lessPad text="NAAM HUIS" />
                    </Grid>

                    <Grid item md={2} xs={2} className={classes.nameWrapper}>
                      <label className={classes.label}>Naam: </label>
                    </Grid>
                    <Grid item md={10} xs={10}>
                      <TextField
                        fullWidth
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                        label="Naam"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <FormHeader lessPad text="UPLOAD VLOG’S VAN HET HUIS" />
                    </Grid>

                    <Grid item md={6} xs={6}>
                      <Box>
                        <Card elevation={0}>
                          <CardContent className={classes.cardContent}>
                            <FilesDropzone
                              type="video"
                              multiple={false}
                              title="Upload Vlog"
                              logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-video-icon.svg"
                              uploadMsg={`<Typography color="textPrimary" variant="body1">
                                Sleep video hier of browse
                              </Typography>`}
                            />
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>

                    <Grid item md={6} xs={6}>
                      <Box>
                        <Card elevation={0}>
                          <CardContent className={classes.cardContent}>
                            <FilesDropzone
                              type="video"
                              multiple={false}
                              title="Upload Teaser"
                              logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-video-icon.svg"
                              uploadMsg={`<Typography color="textPrimary" variant="body1">
                                Sleep video hier of browse
                              </Typography>`}
                            />
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <FormHeader text="UPLOAD FOTO’S VAN HET HUIS" />
                      <Box>
                        <Card elevation={0}>
                          <CardContent className={classes.cardContent}>
                            <FilesDropzone
                              type="image"
                              multiple={true}
                              title="Upload Foto’s"
                              logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-image-icon.svg"
                              uploadMsg={`<Typography color="textPrimary" variant="body1">
                                Sleep foto hier of browse
                              </Typography>`}
                            />
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <FormHeader text="UPLOAD MEDIA VAN OMGEVING" />
                      <Box>
                        <Card elevation={0}>
                          <CardContent className={classes.cardContent}>
                            <FilesDropzone
                              type="video"
                              multiple={false}
                              title="Upload Video’s"
                              logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-video-icon.svg"
                              uploadMsg={`<Typography color="textPrimary" variant="body1">
                                Sleep video hier of browse
                              </Typography>`}
                            />
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <FormHeader lessPad text="BESCHRIJVING VAN HET HUIS" />
                    </Grid>

                    <Grid item md={2} xs={2} className={classes.nameWrapper}>
                      <label className={classes.label}>
                        Korte Beschrijving:
                      </label>
                    </Grid>
                    <Grid item md={10} xs={10}>
                      <div>
                        <QuillEditor
                          fullWidth
                          className={classes.editor}
                          placeholder="Korte Beschrijving"
                        />
                      </div>
                    </Grid>

                    <Grid item md={2} xs={2} className={classes.nameWrapper}>
                      <label className={classes.label}>
                        Uitgebreide Beschrijving:
                      </label>
                    </Grid>
                    <Grid item md={10} xs={10}>
                      <div>
                        <QuillEditor
                          fullWidth
                          className={classes.editor}
                          placeholder="Uitgebreide Beschrijving"
                        />
                      </div>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <FormHeader text="ADRES" />
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}></Grid>
                        <Grid
                          item
                          md={10}
                          xs={10}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(touched.street && errors.street)}
                            helperText={touched.street && errors.street}
                            label="Straat"
                            name="street"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.street}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}></Grid>
                        <Grid
                          item
                          md={5}
                          xs={5}
                          className={clsx(classes.pr2, classes.nameWrapper)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.house_number && errors.house_number
                            )}
                            helperText={
                              touched.house_number && errors.house_number
                            }
                            label="Huisnummer"
                            name="house_number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.house_number}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          item
                          md={5}
                          xs={5}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.additional_house_number &&
                                errors.additional_house_number
                            )}
                            helperText={
                              touched.additional_house_number &&
                              errors.additional_house_number
                            }
                            label="Huisnummer Toevoeging"
                            name="additional_house_number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.additional_house_number}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}></Grid>
                        <Grid
                          item
                          md={5}
                          xs={5}
                          className={clsx(classes.pr2, classes.nameWrapper)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(touched.postcode && errors.postcode)}
                            helperText={touched.postcode && errors.postcode}
                            label="Postcode"
                            name="postcode"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.postcode}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          item
                          md={5}
                          xs={5}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(touched.place && errors.place)}
                            helperText={touched.place && errors.place}
                            label="Plaats"
                            name="place"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.place}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <FormHeader text="DETAILS" />
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Wijk: </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.neighbourhood && errors.neighbourhood
                            )}
                            helperText={
                              touched.neighbourhood && errors.neighbourhood
                            }
                            label="Wijk"
                            name="neighbourhood"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.neighbourhood}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Minimaal Aantal Bewoners:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.minimaal_aantal_bewoners &&
                                errors.minimaal_aantal_bewoners
                            )}
                            helperText={
                              touched.minimaal_aantal_bewoners &&
                              errors.minimaal_aantal_bewoners
                            }
                            label="Minimaal Aantal Bewoners"
                            name="minimaal_aantal_bewoners"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.minimaal_aantal_bewoners}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Woningtype: </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.property_type && errors.property_type
                            )}
                            helperText={
                              touched.property_type && errors.property_type
                            }
                            label="Woningtype"
                            name="property_type"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.property_type}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Maximaal Aantal Bewoners:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.maximaal_aantal_bewoners &&
                                errors.maximaal_aantal_bewoners
                            )}
                            helperText={
                              touched.maximaal_aantal_bewoners &&
                              errors.maximaal_aantal_bewoners
                            }
                            label="Maximaal Aantal Bewoners"
                            name="maximaal_aantal_bewoners"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.maximaal_aantal_bewoners}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Bouwjaar: </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(touched.bouwjaar && errors.bouwjaar)}
                            helperText={touched.bouwjaar && errors.bouwjaar}
                            label="Bouwjaar"
                            name="property_type"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.bouwjaar}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Verdiepingen:</label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.verdiepingen && errors.verdiepingen
                            )}
                            helperText={
                              touched.verdiepingen && errors.verdiepingen
                            }
                            label="Verdiepingen"
                            name="verdiepingen"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.verdiepingen}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Aantal Kamers:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.number_of_rooms && errors.number_of_rooms
                            )}
                            helperText={
                              touched.number_of_rooms && errors.number_of_rooms
                            }
                            label="Aantal Kamers"
                            name="number_of_rooms"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.number_of_rooms}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Op Verdieping</label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.floor_number && errors.floor_number
                            )}
                            helperText={
                              touched.floor_number && errors.floor_number
                            }
                            label="Op Verdieping:"
                            name="floor_number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.floor_number}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Aantal Slaapkamers:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.number_of_bed_rooms &&
                                errors.number_of_bed_rooms
                            )}
                            helperText={
                              touched.number_of_bed_rooms &&
                              errors.number_of_bed_rooms
                            }
                            label="Aantal Slaapkamers"
                            name="number_of_bed_rooms"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.number_of_bed_rooms}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Woonoppervlak:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.living_space && errors.living_space
                            )}
                            helperText={
                              touched.living_space && errors.living_space
                            }
                            label="Woonoppervlak"
                            name="living_space"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.living_space}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Aantal Voorzieningen:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.number_of_facilities &&
                                errors.number_of_facilities
                            )}
                            helperText={
                              touched.number_of_facilities &&
                              errors.number_of_facilities
                            }
                            label="Aantal Voorzieningen"
                            name="number_of_facilities"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.number_of_facilities}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Oppervlak Buiten:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.surface_outside && errors.surface_outside
                            )}
                            helperText={
                              touched.surface_outside && errors.surface_outside
                            }
                            label="Oppervlak Buiten"
                            name="surface_outside"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.surface_outside}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Aantal Toiletten:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.number_of_toilets &&
                                errors.number_of_toilets
                            )}
                            helperText={
                              touched.number_of_toilets &&
                              errors.number_of_toilets
                            }
                            label="Aantal Toiletten"
                            name="number_of_toilets"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.number_of_toilets}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Woning Inhoud:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.property_content &&
                                errors.property_content
                            )}
                            helperText={
                              touched.property_content &&
                              errors.property_content
                            }
                            label="Woning Inhoud"
                            name="property_content"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.property_content}
                            variant="outlined"
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Parkeergelegenheid:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(touched.parking && errors.parking)}
                            helperText={touched.parking && errors.parking}
                            label="Parkeergelegenheid"
                            name="parking"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.parking}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Aangepaste Woning:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values.adapted_home}
                                onChange={handleChange}
                                name="adapted_home"
                              />
                            }
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Gemeubileerd:</label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values.furnished}
                                onChange={handleChange}
                                name="furnished"
                              />
                            }
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Aangepast Voor Gehandicapten:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values.adapted_for_the_disabled}
                                onChange={handleChange}
                                name="adapted_for_the_disabled"
                              />
                            }
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Soort Garage:</label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.kind_of_garage && errors.kind_of_garage
                            )}
                            helperText={
                              touched.kind_of_garage && errors.kind_of_garage
                            }
                            label="Soort Garage"
                            name="kind_of_garage"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.kind_of_garage}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Aangepast Voor Ouderen:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values.adapted_for_elderly}
                                onChange={handleChange}
                                name="adapted_for_elderly"
                              />
                            }
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Garage Oppervlak:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.garage_surface && errors.garage_surface
                            )}
                            helperText={
                              touched.garage_surface && errors.garage_surface
                            }
                            label="Garage Oppervlak"
                            name="garage_surface"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.garage_surface}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Gedeelde Lift:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={classes.nameWrapper}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values.shared_lift}
                                onChange={handleChange}
                                name="shared_lift"
                              />
                            }
                          />
                        </Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>
                            Energie Label:
                          </label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.energy_label && errors.energy_label
                            )}
                            helperText={
                              touched.energy_label && errors.energy_label
                            }
                            label="Energie Label"
                            name="energy_label"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.energy_label}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={6} xs={6}></Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Verwarming:</label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(touched.heating && errors.heating)}
                            helperText={touched.heating && errors.heating}
                            label="Verwarming"
                            name="heating"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.heating}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={6} xs={6}></Grid>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.mb2}
                      >
                        <Grid item md={2} xs={2}>
                          <label className={classes.label}>Warm Water:</label>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                          className={clsx(classes.nameWrapper, classes.pr2)}
                        >
                          <TextField
                            fullWidth
                            error={Boolean(
                              touched.warm_water && errors.warm_water
                            )}
                            helperText={touched.warm_water && errors.warm_water}
                            label="Warm Water"
                            name="warm_water"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.warm_water}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={6} xs={6}></Grid>
                      </Box>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <FormHeader lessPad text="HUURDERS" />

                      <PerfectScrollbar>
                        <Box minWidth={900}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>Naam</TableCell>
                                <TableCell>Datum</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {topHouses.map(topHouse => (
                                <TableRow hover key={topHouse.id}>
                                  <TableCell>
                                    <Box display="flex" alignItems="center">
                                      <Avatar
                                        className={classes.avatar}
                                        src={topHouse.customer.avatar}
                                      >
                                        {getInitials(topHouse.customer.name)}
                                      </Avatar>
                                      <div>
                                        <Link
                                          color="inherit"
                                          component={RouterLink}
                                          to="/app/management/topHouse.customers/1"
                                          variant="h6"
                                        >
                                          {topHouse.customer.name}
                                        </Link>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {topHouse.customer.email}
                                        </Typography>
                                      </div>
                                    </Box>
                                  </TableCell>
                                  <TableCell>
                                    {moment(topHouse.publicationDate).format(
                                      'DD MMM, YYYY'
                                    )}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </PerfectScrollbar>
                    </Grid>
                  </Grid>
                  {errors.submit && (
                    <Box mt={3}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )}
                </CardContent>
                <Divider />
                <Box p={2} display="flex" justifyContent="flex-end">
                  <Button
                    className={classes.cancelButton}
                    color="secondary"
                    type="submit"
                    variant="contained"
                  >
                    Cancel
                  </Button>

                  <Button
                    className={classes.saveNewButton}
                    color="secondary"
                    type="submit"
                    disabled
                    variant="contained"
                  >
                    Save & New
                  </Button>

                  <Button
                    className={classes.submitButton}
                    color="secondary"
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
