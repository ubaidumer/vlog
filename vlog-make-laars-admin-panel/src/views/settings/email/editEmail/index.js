import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  makeStyles,
  useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import InvoicePreview from './EmailPreview';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%'
  },
  dialog: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100vh',
    margin: 0,
    maxHeight: '100vh',
    overflow: 'inherit'
  },
  dialogContent: {
    padding: 0
  },
  editAction: {
    background: '#6F6F6F',
    color: '#ffff',
    borderColor: '#ffff',
    '&:hover': {
      color: '#6F6F6F',
      background: '#fff',
      borderColor: '#6F6F6F'
    }
  },
  addNewHouse: {
    textTransform: 'capitalize',
    marginTop: '6px',
    height: '34px',
    width: '105px',
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
  submitButton: {
    width: 170,
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
    textTransform: 'capitalize',
    width: 170,
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
    textTransform: 'capitalize',
    width: 170,
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
  loadingCircle: {
    color: theme.palette.primary.main,
    width: '15px !important',
    height: '15px !important',
    marginLeft: 10,
    marginTop: 15
  },
  submitLoadingCircle: {
    width: '15px !important',
    height: '15px !important',
    position: 'relative',
    left: 5
  },
  closeModalBtn: {
    minWidth: 50,
    height: 85,
    position: 'absolute',
    background: 'white',
    color: '#263238',
    left: '-50px',
    borderRadius: 0,
    top: 65,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
      background: 'white',
      color: '#263238'
    }
  },
  svgIcon: {
    fontSize: '50px !important',
    color: '#263238'
  },
  help: {
    display: 'flex',
    width: '100%',
    justifyContent: 'end',
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    '&:hover': {
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  },
  popoever: {
    padding: '10px',
    marginBottom: '20px'
  },
  wrapper: {
    marginTop: '5px',
    position: 'absolute',
    bottom: 0,
    right: 25
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const BicycleRentingDetailsView = (props, modClose) => {
  const { openModel, setOpenModel, openModal, setOpenModal } = props;
  const classes = useStyles();
  const theme = useTheme();
  const emailData = props.emailData;
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [counter, setCounter] = useState(false);
  const isMountedRef = useIsMountedRef();
  const [invoice, setInvoice] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const childRef = useRef();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setOpenModel(false);
    window.location.href = '/admin/email';
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const getInvoice = useCallback(async () => {
    try {
      const response = await axios.get('/api/invoices/1');

      if (isMountedRef.current) {
        setInvoice(response.data.invoice);
      }
    } catch (err) {
      //console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }

  let changeCounter = (e,v) => {
    setCounter(e);
    setIsSubmitting(v);
  };

  let saveBtn = () => {
    setIsSubmitting(true);
    setCounter(true);
  };
  return (
    <PerfectScrollbar>
      <Dialog
        classes={{
          paper: classes.dialog
        }}
        fullScreen={fullScreen}
        open={openModel}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={classes.dialogContent}>
          <Container>
            <Header
              invoice={invoice}
              openModal={openModel}
              handleModalClose={handleModalClose}
            />
            <Box my={2}>
              <Divider />
            </Box>
            <InvoicePreview
              invoice={invoice}
              houseArray={props.houseArray}
              invoiceArray={props.invoiceArray}
              emailData={emailData}
              changeCounter={changeCounter}
              userArray={props.userArray}
              userData={props.userData}
              counter={counter}
            />
              <div className={classes.wrapper}>
            <Grid container>
              <Grid item md={8}></Grid>
              {/* <Grid item md={3}>
                <div onClick={handleClick} className={classes.help}>
                  Need help?
                </div>
                <Popover
                  className={classes.popoever}
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                  }}
                >
                  <div style={{ margin: 10 }}>
                    <Typography
                      style={{ fontSize: '16px', fontWeight: 'bolder' }}
                    >
                      Placeholders:
                    </Typography>
                    <Typography className={classes.typography}>
                      Use the '@' to search for House, User, Invoice
                      Placeholders.
                    </Typography>
                    <div
                      style={{ marginTop: '5px', marginBottom: '5px' }}
                    ></div>
                    <div>
                      <ul style={{ paddingLeft: '20px' }}>
                        <li style={{ padding: '2px 5px', listStyle: '' }}>
                          @Object for House Fields
                        </li>
                        <li style={{ padding: '2px 5px' }}>
                          @User for User Fields
                        </li>
                        <li style={{ padding: '2px 5px', marginBottom: '5px' }}>
                          @Invoice for Invoice Fields
                        </li>
                      </ul>
                    </div>
                  </div>
                </Popover>
              </Grid> */}
              <Grid item md={1}></Grid>
            </Grid>
          
            <DialogActions className={classes.dialogActions}>
              <Button
                className={classes.cancelButton}
                color="secondary"
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                onClick={handleModalClose}
              >
                Cancel
              </Button>

            

              <Button
                className={classes.submitButton}
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                type="submit"
                onClick={()=>saveBtn()}
              >
                Opslaan{' '}
                {isSubmitting && (
                  <CircularProgress className={classes.submitLoadingCircle} />
                )}
              </Button>
            </DialogActions>
            </div>
          </Container>
        </DialogContent>
      </Dialog>
    </PerfectScrollbar>
  );
};

export default BicycleRentingDetailsView;
