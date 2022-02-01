import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import PerfectScrollbar from 'react-perfect-scrollbar';
import QuillEditor from 'src/components/QuillEditor';
import clsx from 'clsx';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  TextareaAutosize,
  Input
} from '@material-ui/core';
import axios from 'axios';
const { forwardRef, useRef, useImperativeHandle } = React;

const useStyles = makeStyles(theme => ({
  root: {
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
    }
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
  notAllowed: {
    marginTop: '10px',
    marginRight: '10px',
    background: 'rgba(169, 169, 169, 0.3)',
    '& .MuiOutlinedInput-inputMarginDense': {
      cursor: 'not-allowed !important'
    }
  },
  EditIcon: {},
  mention: {
    fontWeight: 'inherit',
    backgroundColor: '#e39fc4'
  },
  mentionsInput: {
    height: '200px !important',

    '& textarea': {
      top: '-9px !important',
      left: '-14px !important',
      border: '2px solid silver',
      padding: '6px 14px',
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
  firstTypography: {
    marginTop: '10px'
  },
  shortDescription: {
    marginTop: '10px',
    height: 300
  },
  mentionParent: {
    marginTop: '20px'
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
      counter,
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

    let [suggest, setSuggest] = useState();
    let [emailTemplate, setEmailTemplate] = useState('');
    let [isSubmitting, setIsSubmitting] = useState(true);
    let [information, setInformation] = useState('');
    const [subError, setSubError] = useState(false);
    const [detailError, setDetailError] = useState(false);
    let [id, setId] = useState();

    const initialState = {
      content: '',
      content_type: '',
      created_at: '',
      description: '',
      id: '',
      name: '',
      placeholder: [],
      subject: '',
      updated_at: ''
    };

    let [template, setTemplate] = useState(initialState);
    const { enqueueSnackbar } = useSnackbar();

    const getEmail = id => {
      axios
        .get(`${process.env.REACT_APP_TEMPLATE_URL}/${id}`)
        .then(response => {
          setTemplate(response.data);
          setInformation(response.data.content);
        })
        .catch(e => {
          //console.error(e);
        });
    };

    let changeCounterState = () => {
      changeCounter(false, false);
    };

    useEffect(() => {
      if (information == '' && detailError == false && emailData?.id !== undefined) {
        getEmail(emailData?.id);
      }

      if (!subError && !detailError) {
        if (counter && isSubmitting) {
          EditEmailTemplate();
        }
      } else {
        changeCounterState();
      }
    }, [emailData?.id, counter]);

    /*
       setSubject(emailData?.subject);
       setTemplateSubject(emailData?.name);
       setInformation(emailData?.content?.replaceAll(/<br>|<br >/g, '\n\r'));
      */

    let handleChange = ev => {
      setInformation(ev);
      if (ev.replace(/<[^>]+>/g, '').length > 4) {
        setDetailError(false);
      } else {
        setDetailError(true);
      }
    };

    function EditEmailTemplate() {
      const formatContent = information => {
        let info = information.replaceAll('@[', ' ')?.replaceAll(']', ' ');
        return info?.replaceAll(/\n/g, '<br>');
      };
      let content = formatContent(information);

      let temp = {
        name: template.name,
        description: template.subject,
        content: information,
        content_type: 'html',
        subject: template.subject
      };
      axios
        .patch(`${process.env.REACT_APP_TEMPLATE_URL}/${emailData?.id}`, temp)
        .then(data => {
          enqueueSnackbar('E-mailsjabloon is succesvol bijgewerkt.', {
            variant: 'success'
          });

          setTimeout(function() {
            window.location.href = 'email';
          }, 2000);
        })
        .catch(error => {
          enqueueSnackbar('Error.', {
            variant: 'error'
          });
        });
      setIsSubmitting(false);
    }

    const handleInputChange = event => {
      const { name, value } = event.target;
      setTemplate({ ...template, [name]: value });
      if (value.length > 2) {
        setSubError(false);
      } else {
        setSubError(true);
      }
    };

 
    return (
      // <Paper
      //   className={clsx(classes.root, className)}
      //   {...rest}
      // >
      <>
        <Grid container>
          <Grid item md={1}>
            {' '}
          </Grid>

          <Grid item md={2} xs={4} className={classes.nameWrapper}>
            <label>E-mail Template: </label>
          </Grid>
          <Grid item md={8}>
            <TextField
              inputProps={{ readOnly: true }}
              className={clsx(classes.notAllowed, classes.readOnly)}
              fullWidth
              size="small"
              variant="outlined"
              label={`${emailTemplate ? '' : 'Email Subject...'}`}
              name="name"
              value={template?.name}
            />
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={2} xs={4} className={classes.nameWrapper}>
            <label>E-mail Onderwerp: </label>
          </Grid>
          <Grid item md={8}>
            <TextField
              className={classes.firstTypography}
              fullWidth
              type="text"
              name="subject"
              size="small"
              variant="outlined"
              value={template.subject}
              onChange={handleInputChange}
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
      </>
      // </Paper>
    );
  }
);

InvoicePreview.propTypes = {
  className: PropTypes.string,
  invoice: PropTypes.object.isRequired
};

export default InvoicePreview;
