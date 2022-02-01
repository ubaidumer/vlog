import React, { useState } from 'react';
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
import { GraphQLClient, gql } from 'graphql-request';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  root: {},
  cancelBtn: {
    color: '#AB3535',
    '&:hover': {}
  }
}));

const DeleteModal = props => {
  const classes = useStyles();
  const { selectedUsers, openDeleteModal, setOpenDeleteModal } = props;

  const { enqueueSnackbar } = useSnackbar();

  const handleModalClose = () => {
    setOpenDeleteModal(false);
  };

  const deleteUsers = () => {
    const query = gql`
      mutation {
        removeMultipleUsers(
          isDeleted: 1
          userIdList: ${JSON.stringify(selectedUsers)}
        ) {
          _id
        }
      }
    `;

    // Prepare Headers and Client
    const graphQLClient = new GraphQLClient(
      `${process.env.REACT_APP_USERS_URL}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          languages: 'eng'
        }
      }
    );

    setOpenDeleteModal(false);

    let callback = async () => {
      await graphQLClient
        .request(query)
        .then(data => {
          enqueueSnackbar('Record(s) are verwijderd gedeactiveerd.', {
            variant: 'error'
          });
          setTimeout(() => {
            window.location.href = '/admin/gebruikers';
          }, 3000);
        })
        .catch(e => {});
    };

    callback();
  };

  return (
    <div>
      <Dialog
        open={openDeleteModal}
        onClose={handleModalClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <strong>Weet je het zeker?</strong>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Weet u zeker dat u gebruikersrecord(s) wilt verwijderen?
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
          <Button onClick={deleteUsers} color="primary" autoFocus>
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
