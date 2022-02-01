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
  const { selectedHouses, openDeleteModal, setOpenDeleteModal } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleModalClose = () => {
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    (async () => {
      const graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_OBJECT_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );
      const query = gql`

      mutation {
        bulkDelete(id: ${JSON.stringify(selectedHouses)}){
          title
          houseId
        }
      }`;

      await graphQLClient.request(query).then(data => {
        enqueueSnackbar('Records zijn succesvol verwijderd.', {
          variant: 'error'
        });

        setTimeout(function() {
          window.location.href = '/admin/huizen';
        }, 2000);
      });
    })().catch(err => {
      //console.error(err);
    });
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
            Wil je echt huisrecord(s) verwijderen?
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
          <Button onClick={handleDelete} color="primary" autoFocus>
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
