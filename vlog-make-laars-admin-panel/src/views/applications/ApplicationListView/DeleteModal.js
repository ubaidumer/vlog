import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {},
  cancelBtn: {
    color: '#AB3535',
    '&:hover': {}
  }
}));

const DeleteModal = props => {
  const classes = useStyles();
  const { openDeleteModal, setOpenDeleteModal } = props;
  const handleModalClose = () => {
    setOpenDeleteModal(false);
  };
  return (
    <div>
      <Dialog
        open={openDeleteModal}
        onClose={handleModalClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <h3>Weet je het zeker?</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You really want to delete bicycle type record(s)?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleModalClose}
            className={classes.cancelBtn}
          >
            Cancel
          </Button>
          <Button onClick={handleModalClose} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DeleteModal.propTypes = {
  className: PropTypes.string
};

export default DeleteModal;
