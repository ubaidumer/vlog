import React, { useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  cancelIcon: {
    marginLeft: 5,
    cursor: 'pointer',
    color: '#2d3748',
    '&:hover': {
      color: '#2d3748',
      opacity: '0.5'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      marginLeft: 0,
      marginRight: 5,
    }
  },
  blobTitle: {
    marginLeft: 5,
    marginBottom: 15,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      textDecoration: 'underline'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
      marginLeft: 0,
      marginBottom: 10,
    }
  },
}));

const DocumentFileName = ({ doc, document, handleDeleteModal, isDeActivated }) => {
  const classes = useStyles();
  const container = isDeActivated ? process.env.REACT_APP_ARCHIVED_USER_DOCS_CONTAINER : process.env.REACT_APP_USER_DOCS_CONTAINER;
  return (
    <div
      style={{
        display: 'flex',
        width: '90%'
      }}
    >
      {!isDeActivated && (
        <CancelIcon
          onClick={() => handleDeleteModal(document._id ? document._id : document.documentType)}
          className={classes.cancelIcon}
        />
      )}
      
      <Typography
        className={classes.blobTitle}
        title={document?.blobTitle}
      >
        <a
          target="_blank"
          style={{ color: '#2d3748' }}
          href={`https://vlogmakelaarsstorage.blob.core.windows.net/${container}/${document.blobId}?${localStorage.getItem('sasToken')}`}
        >
          {document?.blobTitle?.substr(0, 20)}
        </a>
      </Typography>
    </div>
  );
};

DocumentFileName.propTypes = {
  className: PropTypes.string
};

export default DocumentFileName;
