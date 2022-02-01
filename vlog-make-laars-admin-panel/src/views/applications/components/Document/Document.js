import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Box,
  Typography,
  Divider,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@material-ui/core';

import { GraphQLClient, gql } from 'graphql-request';
import { CardBase } from '../../../../components/organisms';
import getDocumentsByRoleId from './getDocumentsByRoleId';
import jwtDecode from 'jwt-decode';

import { Alert } from '@material-ui/lab';
import CancelIcon from '@material-ui/icons/Cancel';

import DocUpload from './DocUpload';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
  space: {
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  uploadDocument: {
    display: 'none'
  },
  uploadBtn: {
    textDecoration: 'underline'
  },
  documentText: {
    width: '70%',
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  documentTypo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
      marginBottom: 5
    }
  },
  documentLabel: {
    position: 'absolute',
    right: '10px',
    marginTop: '10px',
    display: 'flex',
    width: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
      position: 'initial',
      marginTop: 0,
      display: 'initial',
      width: '100%',
    }
  },
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
  uploadLabel: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  uploadButtonWrapper: {
    position: 'absolute',
    right: 10,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      right: 18,
      marginBottom: 5,
      marginTop: '-15px',
    },
  },
}));

const Document = ({ application, ...props }) => {
  const { applicantId } = application;

  const { className, ...rest } = props;
  const classes = useStyles();

  let [title, setTitle] = useState('');
  let [userStatus, setUserStatus] = useState(false);
  let [secondReload, setSecondReload] = useState(false);
  let [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOptions] = useState(null);
  const [studentDocs, setStudentDocs] = useState([]);
  const [employeeDocs, setEmployeeDocs] = useState([]);
  const [ownerDocs, setOwnerDocs] = useState([]);
  const [docs, setDocs] = useState([]);
  const [up, setUp] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState();
  const [documentIds, setDocumentIds] = useState([]);
  const [documentToDelete, setDocumentToDelete] = useState(false);
  let [pic, setPic] = useState('');
  const [send, setSend] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {}
  });

  const handleDeleteModal = documentId => {
    setDocumentToDelete(documentId);
    setDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setDocumentToDelete(null);
    setDeleteModal(false);
  };

  let changeUp = e => {
    setUp(e);
  };

  useEffect(() => {
    if (!secondReload) {
      const student = getDocumentsByRoleId(0);
      const employee = getDocumentsByRoleId(1);
      const owner = getDocumentsByRoleId(2);
      setStudentDocs(student);
      setEmployeeDocs(employee);
      setOwnerDocs(owner);
      findUserById();
    }

    getUserDocuments();

    setFormState(formState => ({
      ...formState
    }));
  }, [docs]);

  const findUserById = userId => {
    // IIFE(Immediately invoked functions Expression)

    const accessToken = localStorage.getItem('accessToken');
    const decoded = jwtDecode(accessToken);

    (async () => {
      const query = gql`
        {
          findUserByID (
            id: "${application.applicantId}"
          ) {
            status
          }
        }`;
      const graphQLClient = new GraphQLClient(process.env.REACT_APP_USERS_URL, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      await graphQLClient.request(query).then(data => {
        getDocsByStatus(data?.findUserByID?.status);
        setSecondReload(true);
      });
    })().catch(error => {
      //console.error('error', error);
    });
  };

  let getDocsByStatus = userStatus => {
    switch (userStatus) {
      case 0: {
        setTitle('Je bent student, deze documenten hebben wij nodig:');
        setDocs(studentDocs);
        setUserStatus(false);
        break;
      }
      case 1: {
        setTitle('Je bent in loondienst, deze documenten hebben wij nodig:');
        setDocs(employeeDocs);
        setUserStatus(false);
        break;
      }
      case 2: {
        setTitle(
          'Je bent zelfstandig ondernemer, deze documenten hebben wij nodig:'
        );
        setDocs(ownerDocs);
        setUserStatus(false);
        break;
      }
      default: {
        setUserStatus(true);
      }
    }
  };

  const getUserDocuments = () => {
    (async () => {
      // Prepare Headers and User
      const graphQLUser = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );

      const accessToken = localStorage.getItem('accessToken');

      const decoded = jwtDecode(accessToken);

      const query = gql`
      {
        getAllDocumentByUserId(
          userid: "${application.applicantId}"
          sort: "desc"
          pageNum: 0
          perPage: 20
        ) {
            data {
              _id
              userId
              blobId
              blobTitle
              documentType
            }
        }
      }
    `;

      setDocumentIds([]);
      setDocuments([]);

      await graphQLUser.request(query).then(data => {
        setDocuments(data?.getAllDocumentByUserId?.data);

        const filteredDocTypes = data?.getAllDocumentByUserId?.data?.map(
          function(doc) {
            return doc?.documentType;
          }
        );

        setDocumentIds(filteredDocTypes);

        setFormState(formState => ({
          ...formState,
          touched: {
            ...formState.touched
          }
        }));
      });
    })().catch(error => {
      setFormState(formState => ({
        ...formState,
        touched: {
          ...formState.touched
        }
      }));
      //console.error('error', error);
    });
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

  const addDocument = newDoc => {
    (async () => {
      // Prepare Headers and Client
      var graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );

      newDoc = JSON.stringify(newDoc);
      newDoc = newDoc
        .replaceAll('"blobId"', 'blobId')
        .replaceAll('"blobTitle"', 'blobTitle')
        .replaceAll('"documentType":"', 'documentType:')
        .replaceAll('","userId"', ',userId')
        .replaceAll('"isDeleted"', 'isDeleted')
        .replaceAll('[', '')
        .replaceAll(']', '');

      const query = gql`
    mutation {
      createDocument(create:
        ${newDoc}
      ){
        _id
        userId
        blobId
        documentType
      }
      }`;

      await graphQLClient.request(query).then(data => {
        getUserDocuments();
      });
    })().catch(error => {
      updateDocument(newDoc);
      //console.error('error', error);
    });
  };

  const updateDocument = newDoc => {
    (async () => {
      // Prepare Headers and Client
      var graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );

      newDoc = JSON.stringify(newDoc);
      newDoc = newDoc
        .replaceAll('"blobId"', 'blobId')
        .replaceAll('"blobTitle"', 'blobTitle')
        .replaceAll('"documentType":"', 'documentType:')
        .replaceAll('","userId"', ',userId')
        .replaceAll('"isDeleted"', 'isDeleted')
        .replaceAll('[', '')
        .replaceAll(']', '');
      const query = gql`
        mutation {
          updateDocument(updateDocumentInput:
            ${newDoc}
          ) {
              data {
                _id
                userId
                blobId
                blobTitle
                documentType
              }
            }
          }`;

      await graphQLClient.request(query).then(data => {
        getUserDocuments();
      });
    })().catch(error => {
      //console.error('error', error);
    });
  };

  const removeDocument = () => {
    (async () => {
      const accessToken = localStorage.getItem('accessToken');
      const decoded = jwtDecode(accessToken);

      // Prepare Headers and Client
      let graphQLClient = new GraphQLClient(
        `${process.env.REACT_APP_USERS_URL}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            languages: 'eng'
          }
        }
      );

      const query = gql`
        mutation {
          removeDocument(
            Docid: "${documentToDelete}"
            Userid: "${application.applicantId}"
          ){
            _id
          }
        }`;

      await graphQLClient.request(query).then(data => {
        getUserDocuments();
      });
    })().catch(error => {
      //console.error('error', error);
    });
  };

  const handleDocumentChange = (e, documentId) => {
    if (e.target.files.length > 0) {
      const accessToken = localStorage.getItem('accessToken');
      const decoded = jwtDecode(accessToken);

      setSend(e.target.files[0]);
      setUp(true);

      documents.push({
        blobId: e.target.files[0].name,
        blobTitle: e.target.files[0].name,
        documentType: documentId
      });

      documentIds.push(documentId);

      setDocumentIds(documentIds);

      var newDoc = {
        blobId: e.target.files[0].name,
        blobTitle: e.target.files[0].name,
        documentType: documentId,
        userId: decoded.sub,
        isDeleted: false
      };

      e.target.value = null;

      addDocument(newDoc);

      setNewDocument(newDoc);

      setFormState(formState => ({
        ...formState,
        touched: {
          ...formState.touched
        }
      }));
    }
  };

  const handleCancelDocumentDeletion = () => {
    handleDeleteClose(false);
  };

  const handleDeleteDocument = () => {
    removeDocument();

    const filteredDocuments = documents.filter(
      document => document.documentType !== documentToDelete
    );
    setDocuments([]);

    setDocuments(filteredDocuments);

    const indexToRemove = documentIds.indexOf(documentToDelete);
    if (indexToRemove !== -1) {
      documentIds.splice(indexToRemove, 1);
    }

    setDocumentIds(documentIds);

    handleDeleteClose(false);
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  return (
    <Box display="flex" component="div">
      <Grid item justify="flex-start" xs={12} className="">
        <CardBase withShadow align="left">
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary">
                {title}
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>

            <Grid container className={classes.space}>
              <Grid item md={12}>
                <div style={{ display: 'none' }}>
                  {<DocUpload file={send} up={up} meth={changeUp} />}
                </div>

                {docs.map(doc => (
                  <Grid item md={12} xs={12} key={doc?.key}>
                    <Grid item md={1}></Grid>
                    <Grid item md={11} xs={12}>
                      <div
                        style={{
                          marginTop: '10px',
                          marginBottom: '10px',
                          display: 'flex',
                          flexWrap: 'wrap'
                        }}
                      >
                        <div className={classes.documentText}>
                          <Typography
                            color="textSecondary"
                            className={classes.documentTypo}
                          >
                            {doc?.title}
                          </Typography>
                        </div>

                        {documents
                          .filter(document => document.documentType == doc?.key)
                          .map(document => (
                            <div
                              key={doc?.key}
                              className={classes.documentLabel}
                            >
                              <div style={{display: 'flex', width: '90%'}}>
                              <CancelIcon
                                onClick={() => handleDeleteModal(document?._id)}
                                className={classes.cancelIcon}
                              />
                              <Typography
                                  style={{
                                    marginLeft: '5px',
                                    marginBottom: '15px'
                                  }}
                                  className={classes.blobTitle}
                                  title={document?.blobTitle}
                              >
                                <a
                                  target="_blank"
                                  style={{ color: '#2d3748' }}
                                  href={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_USER_DOCS_CONTAINER}/${document.blobId}?${localStorage.getItem('sasToken')}`}
                                >
                                  {document?.blobTitle?.substr(0, 20)}
                                </a>
                              </Typography>
                            </div>
                            </div>
                          ))}

                        {documentIds.indexOf(parseInt(doc?.key)) == -1 && (
                          <div
                            key={doc?.key}
                            className={classes.uploadButtonWrapper}
                          >
                            <Button
                              color="primary"
                              className={classes.uploadDocumentButton}
                            >
                              <label
                                className={classes.uploadLabel}
                                htmlFor={`upload_document_${doc?.key}`}
                              >
                                Upload
                                <input
                                  accept="image/jpg,image/jpeg,image/png,.pdf,.doc,.docx"
                                  className={classes.uploadDocument}
                                  type="file"
                                  name={`uploadDocument[${doc?.key}]`}
                                  id={`upload_document_${doc?.key}`}
                                  onChange={e =>
                                    handleDocumentChange(e, doc?.key)
                                  }
                                />
                              </label>
                            </Button>
                          </div>
                        )}
                      </div>
                      <Divider />
                    </Grid>
                  </Grid>
                ))}
                {userStatus && (
                  <Grid item xs={12} sm={12}>
                    <Box mt={2}>
                      <Alert severity="error">
                        <div>
                          <strong>
                            Vul uw <a href="/profile">profiel</a> in. Zo kunt u
                            de documenten inzien.
                          </strong>
                        </div>
                      </Alert>
                    </Box>
                  </Grid>
                )}

                <div style={{ marginTop: 30 }}></div>
                <Dialog
                  open={deleteModal}
                  onClose={handleDeleteClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {'Are you Sure?'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You really want to remove this document?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleDeleteDocument} color="primary">
                      Delete
                    </Button>
                    <Button
                      onClick={handleCancelDocumentDeletion}
                      color="primary"
                      autoFocus
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
        </CardBase>
      </Grid>
    </Box>
  );
};

Document.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Document;
