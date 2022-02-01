import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import QuillEditor from 'src/components/QuillEditor';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  TextareaAutosize
} from '@material-ui/core';
import axios from 'axios';
const { forwardRef, useRef, useImperativeHandle } = React;

const useStyles = makeStyles(theme => ({
  root: {},
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
    marginTop: '20px'
  },
  profileDiv: {
    position: 'absolute'
  },
  nameWrapper: {
    marginTop: '15px',
    marginLeft: '10px',

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
  addNewHouse: {
    textTransform: 'capitalize',
    marginTop: '10px',
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
    marginTop: '10px',
    marginRight: '10px'
  },
  shortDescription: {
    marginTop: '10px',
    height: 300
  },
  EditIcon: {},
  mention: {
    fontWeight: 'inherit',
    backgroundColor: '#e39fc4'
  },
  mentionsInput: {
    '& textarea': {
      left: '-14px !important',

      border: '2px solid silver',
      padding: '0px 14px',
      minHeight: '200px !important',

      overflowY: 'scroll !important',
      marginBottom: '20px !important',
      '&:focus': {
        outline: 'none !important',
        border: `2px solid ${theme.palette.primary.main}`
      }
    },

    '& ul': {
      height: '250px',
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 14,
      overflow: 'auto'
    },
    '& li': {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
      },
      '&[class*="--focused"]': {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
      }
    }
  },
  focused: {
    background: 'blue'
  },
  mentionParent: {
    marginTop: '20px',
    height: '210px'
  },
  form: {
    marginBottom: 20,
    position: 'relative'
  },
  textArea: {
    width: '100%',
    minHeight: '100px',
    marginRight: '20px',
    marginTop: '20px',
    fontSize: '18px',
    padding: '10px 10px 10px 16px',

    '&:focus': {
      outline: 'none !important',
      border: `2px solid ${theme.palette.primary.main}`
    }
  }
}));

const InvoicePreview = forwardRef(
  (
    {
      saveCounter,
      changeCounter,
      className,
      userArray,
      userData,
      invoiceArray,
      houseArray,
      invoice,
      emailData,
      ...rest
    },
    ref
  ) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    var [opa, setOpa] = useState(true);
    let [suggest, setSuggest] = useState();
    let [emailTemplate, setEmailTemplate] = useState();
    let [isSubmitting, setIsSubmitting] = useState(true);
    let [subject, setSubject] = useState();
    let [information, setInformation] = useState('');
    const [tempError, setTempError] = useState(false);
    const [subError, setSubError] = useState(false);
    const [detailError, setDetailError] = useState(false);

    let handleChange = ev => {
      setInformation(ev);
      if (ev.replace(/<[^>]+>/g, '').length > 5) {
        setDetailError(false);
      } else {
        setDetailError(true);
      }
    };



    let handleSubject = e => {
      setSubject(e.target.value);
    };

    let changeCounterState = () => {
      changeCounter(false, false);
    };

    let handleTemplate = e => {
      setEmailTemplate(e.target.value);
    };
    let handleSubjectBlur = () => {
      if (subject?.length > 2) {
        setSubError(false);
      } else {
        setSubError(true);
      }
    };

    let handleTempBlur = () => {
      if (emailTemplate?.length > 4) {
        setTempError(false);
      } else {
        setTempError(true);
      }
    };

    const formatContent = information => {
      let info = information.replaceAll('@[', ' ')?.replaceAll(']', ' ');
      return info?.replaceAll(/\n|\n\r|\r\n|\r/g, '<br>');
    };

    let uploadEmailTemplate = () => {
      let content = formatContent(information);

      let temp = {
        name: emailTemplate,
        description: subject,
        content: content,
        content_type: 'html',
        subject: subject
      };
      axios
        .post(`${process.env.REACT_APP_TEMPLATE_URL}`, temp)
        .then(data => {
          enqueueSnackbar('E-mailsjabloon is succesvol aangemaakt.', {
            variant: 'success'
          });

          setTimeout(function() {
            window.location.href = 'email';
          }, 2000);
        })
        .catch(error => {
          enqueueSnackbar('Er is iets fout gegaan', {
            variant: 'error'
          });
        });
      setIsSubmitting(false);
    };

    useEffect(() => {
      if (saveCounter && isSubmitting) {
        if (
          subject?.length > 2 &&
          emailTemplate?.length > 4 &&
          information?.length > 4
        ) {
          uploadEmailTemplate();
        } else {
          changeCounterState();
          if (subject?.length > 2) {
            setSubError(false);
          } else {
            setSubError(true);
          }
          if (emailTemplate?.length > 4) {
            setTempError(false);
          } else {
            setTempError(true);
          }
          if (information?.length > 4) {
            setDetailError(false);
          } else {
            setDetailError(true);
          }
        }
      }
    }, [saveCounter]);

    return (
      <Grid container className={classes.form}>

        <Grid item md={1}>
          {' '}
        </Grid>

        <Grid item md={2} xs={4} className={classes.nameWrapper}>
          <label>E-mail Template: </label>
        </Grid>
        <Grid item md={8}>
          <TextField
            className={classes.firstTypography}
            fullWidth
            size="small"
            variant="outlined"
            label={`${emailTemplate ? '' : 'Email Template...'}`}
            onChange={handleTemplate}
            onBlur={handleTempBlur}
            name="name"
            value={emailTemplate}
          />
          {tempError ? (
            <div style={{ color: 'red', paddingTop: 10, paddingBottom: 10 }}>
              De lengte moet groter zijn dan 4 tekens
            </div>
          ) : (
            <div></div>
          )}
        </Grid>
        <Grid item md={1}></Grid>

        <Grid item md={2} xs={4} className={classes.nameWrapper}>
          <label>E-mail Onderwerp: </label>
        </Grid>
        <Grid item md={8}>
          <TextField
            className={classes.firstTypography}
            fullWidth
            size="small"
            variant="outlined"
            label={`${subject ? '' : 'Email Subject...'}`}
            onChange={handleSubject}
            onBlur={handleSubjectBlur}
            name="name"
            value={subject}
          />
          {subError ? (
            <div style={{ color: 'red', paddingTop: 10 }}>
              De lengte moet groter zijn dan 2 tekens
            </div>
          ) : (
            <div></div>
          )}
        </Grid>
        <Grid item md={1}></Grid>

        <Grid item md={2} xs={4} className={classes.nameWrapper}>
          <label>E-mailtekst: </label>
        </Grid>

        <Grid item md={8} xs={12}>
          <QuillEditor
            className={classes.shortDescription}
            fullWidth
            value={information}
            onChange={handleChange}
            variant="outlined"
          />
          <br />
          <br />
          {detailError ? (
            <div style={{ color: 'red', paddingTop: 10 }}>
              De lengte moet groter zijn dan 4 tekens
            </div>
          ) : (
            <div></div>
          )}
        </Grid>

        <Grid item md={1}></Grid>
      </Grid>
    );
  }
);

InvoicePreview.propTypes = {
  className: PropTypes.string,
  invoice: PropTypes.object.isRequired
};

export default InvoicePreview;
