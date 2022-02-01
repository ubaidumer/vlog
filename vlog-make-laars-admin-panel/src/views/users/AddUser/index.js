import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Form from './Form';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ChevronRight as ChevronRightIcon } from 'react-feather';

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
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const BicycleRentingDetailsView = (props, modClose) => {
  const { openModal, setOpenModal } = props;
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMountedRef = useIsMountedRef();

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <PerfectScrollbar>
      <Dialog
        classes={{
          paper: classes.dialog
        }}
        fullScreen={fullScreen}
        open={openModal}
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
            <Header openModal={openModal} handleModalClose={handleModalClose} />
            <Box my={2}>
              <Divider />
            </Box>
            <Form handleModalClose={handleModalClose} />
          </Container>
        </DialogContent>
      </Dialog>
    </PerfectScrollbar>
  );
};

export default BicycleRentingDetailsView;
