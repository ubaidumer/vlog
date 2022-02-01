import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  Divider,
  CircularProgress,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import mail from 'src/utils/mail';

import validate from 'validate.js';

import { GraphQLClient, gql } from 'graphql-request';

import { useSnackbar } from 'notistack';
import getDocumentsByRoleId from 'src/utils/getDocumentsByRoleId';

import Select from 'react-select';
import DocUpload from '../docs/fileUpload';
import PicUpload from './profilePictures/picUpload';

import DocumentFileName from '../DocumentFileName';
import InputMask from 'react-input-mask';
import jwtDecode from 'jwt-decode';
import { v4 as uuidv4 } from 'uuid';

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
      marginBottom: 10,
      [theme.breakpoints.down('sm')]: {
        width: '91.5%',
      },
    },
    '& .css-yk16xz-control': {
      cursor: 'pointer'
    },
    '& .css-1pahgxg-control': {
      marginLeft: 9
    },
    '& .css-26l3qy-menu': {
      zIndex: 9999,
      cursor: 'pointer',
      marginLeft: 9
    },
    '& .css-g1d714-ValueContainer': {
      cursor: 'pointer'
    },
    '& .MuiOutlinedInput-root': {
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
  attachOwnerToAHouse: {
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
    marginTop: '5px',
    marginLeft: '20px',
    marginRight: '10px'
  },
  status: {
    marginLeft: '20px !important'
  },
  second: {
    marginLeft: '24px',
    paddingRight: '7px'
  },
  EditIcon: {},
  loadingCircle: {
    color: '#DF1683',
    width: '25px !important',
    height: '25px !important',
    marginLeft: 10,
    marginRight: 10
  },
  loading: {
    display: 'flex',
    marginLeft: 5
  },
  editAction: {
    background: '#6F6F6F',
    color: '#ffff',
    borderColor: '#ffff',
    height: 42,
    width: 160,
    '&:hover': {
      color: '#6F6F6F',
      background: '#fff',
      borderColor: '#6F6F6F'
    }
  },
  addNewHouse: {
    textTransform: 'capitalize',
    marginTop: 6,
    height: 40,
    width: 160,
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
  shortDescription: {
    marginTop: 20,
    marginBottom: 40
  },
  statusError: {
    marginLeft: 34,
    color: '#f44336',
    fontSize: '0.75rem'
  },
  dobError: {
    marginLeft: 22,
    color: '#f44336',
    fontSize: '0.75rem'
  },
  uploadDocumentButton: {
    marginLeft: 10,
    justifyContent: 'end',
    marginTop: 5,
    cursor: 'pointer'
  },
  notAvailable: {
    marginLeft: 10,
    justifyContent: 'end',
    marginTop: 13,
    cursor: 'pointer',
    color: 'red !important',
  },
  uploadDocument: {
    display: 'none'
  },
  close: {
    cursor: 'pointer',
    color: '#2d3748',
    '&:hover': {
      color: '#2d3748',
      opacity: '0.5'
    }
  },
  deleteVlog: {
    color: '#b31717',
    cursor: 'pointer',
    '&:hover': {
      color: '#b32424',
      opacity: '0.5'
    }
  },
  deleteVlogWrapper: {
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0 !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 5,
      marginLeft: 5,
      position: 'relative',
      right: 22
    },
  },
  uploadButtonWrapper: {
    position: 'absolute',
    right: 10,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      right: 8,
      marginBottom: 5,
      marginTop: '-15px',
    },
  },
  uploadLabel: {
    cursor: 'pointer'
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
  blobIdLink: {
    color: '#2d3748'
  },
  inputDateOfBirth: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 10,
    width: '100%',
    padding: '10.5px',
    border: '0.3px solid #B3B3B3',
    borderRadius: 4,
    '&:hover': {
      background: 'white',
      border: '0.3px solid #2d3748'
    },
    '&:focus': {
      border: '2px solid #f44336',
      outline: 'none'
    },
    '&::placeholder': {
      color: '#6F757A'
    }
  },
  inputDateOfBirthErrorCheck: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 10,
    width: '100%',
    padding: '10.5px',
    border: '0.3px solid #f44336',
    borderRadius: 4,
    '&:hover': {
      background: 'white',
      border: '0.3px solid #2d3748'
    },
    '&:focus': {
      border: '2px solid #f44336',
      outline: 'none'
    },
    '&::placeholder': {
      color: '#6F757A'
    }
  }
}));


const Form = props => {
  const { selectedUserId, handleModalClose } = props;
  const classes = useStyles();

const options = [
  { value: '0', label: 'Student' },
  { value: '1', label: 'In Loondienst' },
  { value: '2', label: 'Ondernemer' },
];

  let [isSubmitting, setIsSubmitting] = useState(false);
  let [emailIsSubmitting, setEmailIsSubmitting] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [selectedOption, setSelectedOptions] = useState(null);

  const [studentDocs, setStudentDocs] = useState([]);
  const [employeeDocs, setEmployeeDocs] = useState([]);
  const [ownerDocs, setOwnerDocs] = useState([]);
  const [docs, setDocs] = useState([]);

  const [prevSelectedUserId, setPrevSelectedUserId] = useState();
  const [documents, setDocuments] = useState([]);
  const [tempDocuments, setTempDocuments] = useState([]);
  const [currentDocument, setCurrentDocument] = useState([]);
  const [documentIds, setDocumentIds] = useState([]);
  const [send, setSend] = useState('');
  const [up, setUp] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState(false);
  const [pic, setPic] = useState('');
  const [profilePicturePath, setProfilePicturePath] = useState(null);
  const [tempProfilePicturePath, setTempProfilePicturePath] = useState(null);

  const [isProfilePictureUploaded, setIsProfilePictureUploaded] = useState(
    false
  );
  const [deleteVlog, setDeleteVlog] = useState(false);
  const [tempVlogId, setTempVlogId] = useState('');
  let [activeDocumentIndex, setActiveDocumentIndex] = useState();
  let [sendTempDocumentMutation, setSendTempDocumentMutation] = useState();
  let [isDocumentSubmitting, setIsDocumentSubmitting] = useState({
    doc1: false,
    doc2: false,
    doc3: false,
    doc4: false,
    doc5: false,
    doc6: false,
    doc7: false,
    doc8: false,
    doc9: false,
    doc10: false,
    doc11: false,
    doc12: false,
    doc13: false
  });

  const [vlogs, setVlogs] = useState([]);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  let handleRoleChange = selectedOption => {
    setSelectedOptions(selectedOption);

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        ['status']: selectedOption.value
      },
      touched: {
        ...formState.touched,
        ['status']: true
      }
    }));

    if (selectedOption.value === '0') {
      setDocs(studentDocs);
    } else if (selectedOption.value === '1') {
      setDocs(employeeDocs);
    } else if (selectedOption.value === '2') {
      setDocs(ownerDocs);
    }
  };

  let changeUp = e => {
    setUp(e);
  };

  /**
   * Set unique name for profile image and send
   * triggers profile image upload to Azure BLOB
   */
  const handlePicture = e => {
    if (e?.target?.files?.length > 0) {
      const ext = e?.target?.files[0]?.name?.split('.')?.pop();
      const blobId = uuidv4() + '.' + ext;
      setProfilePicturePath(blobId);
      setTempProfilePicturePath(blobId);
      setFormState(formState => ({
        ...formState,
        values: {
          ...formState.values,
          ['profilePicturePath']: blobId
        },
        touched: {
          ...formState.touched,
          ['profilePicturePath']: true
        }
      }));
      setIsProfilePictureUploaded(true);
      setPic(e.target.files[0]);
      setUp(true);
    }
  };

  const schema = {
    firstName: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    lastName: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    profession: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    status: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    mobileNumber: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 15
      }
    },
    dateOfBirth: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 10
      }
    },
    landlinePhone: {
      length: {
        maximum: 15
      }
    },
    email: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      email: true,
      length: {
        maximum: 120
      }
    },
    street: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    postCode: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    place: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    houseNumber: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    additionalHouseNumber: {
      length: {
        maximum: 120
      }
    },
    land: {
      presence: { allowEmpty: true, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    }
  };

  const getUserDocuments = userid => {
    (async () => {
      setDocumentIds([]);
      setDocuments([]);

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

      // Query
      const query = gql`
      {
        getAllDocumentByUserId(
          userid: "${userid}"
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
            isDeleted
          }
        }
      }
    `;

      await graphQLUser.request(query).then(data => {
        setDocuments(data?.getAllDocumentByUserId?.data);

        const filteredDocTypes = data?.getAllDocumentByUserId?.data?.map(
          function(doc) {
            return doc.documentType;
          }
        );

        setDocumentIds(filteredDocTypes);

        setFormState(formState => ({
          ...formState,
          touched: {
            ...formState.touched,
            ...formState.errors
          }
        }));
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));

    if (selectedUserId !== prevSelectedUserId) {
      setPrevSelectedUserId(selectedUserId);

      if (!isProfilePictureUploaded && tempProfilePicturePath) {
        enqueueSnackbar('Profielfoto is geüpload.', {
          variant: 'success',
          autoHideDuration: 3000
        });

        setTempProfilePicturePath(null);

        createTempBlob();
      }

      findUserById();
    }
  }, [formState.values, selectedUserId, isProfilePictureUploaded]);

  const getUserVlogs = userId => {
    const query = gql`
      {
        findAllVlogs (
          sort: "desc"
          pageNum: 0
          perPage: 12
          userId: "${userId}"
          )
        {
          _id
          userId
          vlogTitle
          vlogDescription
          vlogVideo
        }
      }`;

    const graphQLClient = new GraphQLClient(process.env.REACT_APP_USERS_URL, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    (async () => {
      await graphQLClient.request(query).then(response => {
        setVlogs(response.findAllVlogs);
      });
    })().catch(error => {
      //console.error('error', error);
      setVlogs([]);
    });
  };

  const findUserById = () => {
    if (selectedUserId) {
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

      // Query
      const query = gql`
        {
          findUserByID(id: "${selectedUserId}")
          {
            _id
            firstName
            lastName
            mobileNumber
            email
            dateOfBirth
            shortDescription
            houseNumber
            companyName
            landlinePhone
            status
            profession
            role
            profilePicturePath
            isDeActivated
            deActiveDate
            isDeleted
            address {
              street
              houseNumber
              postCode
              place
              additionalHouseNumber
              land
            }
          }
        }`;

      (async () => {
        await graphQLUser.request(query).then(data => {
          getUserDocuments(selectedUserId);
          getUserVlogs(selectedUserId);

          const {
            street,
            houseNumber,
            postCode,
            place,
            additionalHouseNumber,
            land
          } = data?.findUserByID?.address;

          const values = {
            companyName: data?.findUserByID?.companyName,
            firstName: data?.findUserByID?.firstName,
            lastName: data?.findUserByID?.lastName,
            mobileNumber: data?.findUserByID?.mobileNumber,
            dateOfBirth: data?.findUserByID?.dateOfBirth
              ? moment(data?.findUserByID?.dateOfBirth)?.format('MM/DD/YYYY')
              : '',
            email: data?.findUserByID?.email,
            landlinePhone:
              data?.findUserByID?.landlinePhone !== 'undefined'
                ? data?.findUserByID?.landlinePhone
                : '',
            street: street,
            houseNumber: houseNumber,
            postCode: postCode,
            place: place,
            additionalHouseNumber:
              additionalHouseNumber !== 'undefined'
                ? additionalHouseNumber
                : '',
            land: land,
            status: data?.findUserByID?.status?.toString(),
            role: data?.findUserByID?.role,
            profession: data?.findUserByID?.profession
              ? data?.findUserByID?.profession
              : '',
            shortDescription: data?.findUserByID?.shortDescription
              ? data?.findUserByID?.shortDescription
              : '',
            profilePicturePath: data?.findUserByID?.profilePicturePath
              ? data?.findUserByID?.profilePicturePath
              : undefined,
            isDeActivated: data?.findUserByID?.isDeActivated
              ? data?.findUserByID?.isDeActivated
              : false
          };

          const student = getDocumentsByRoleId(0);
          const employee = getDocumentsByRoleId(1);
          const owner = getDocumentsByRoleId(2);
          setStudentDocs(student);
          setEmployeeDocs(employee);
          setOwnerDocs(owner);

          if (values.status === '0') {
            setDocs(student);
          } else if (values.status === '1') {
            setDocs(employee);
          } else if (values.status === '2') {
            setDocs(owner);
          }

          setFormState(formState => ({
            ...formState,
            values: values,
            touched: {}
          }));
        });
      })().catch(err => {
        //console.error(err);
      });
    }
  };

  const createTempBlob = () => {
    const accessToken = localStorage.getItem('accessToken');
    const decoded = jwtDecode(accessToken);

    // Prepare Headers and Client
    const graphQLClient = new GraphQLClient(
      `${process.env.REACT_APP_OBJECT_URL}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          languages: 'eng'
        }
      }
    );

    (async () => {
      const query = gql`
        mutation {
          createTempBlob(
            createTempBlobInput: {
              blobId: "${profilePicturePath}"
              containerName: "${process.env.REACT_APP_USER_IMAGE_CONTAINER}"
              formId: "${uuidv4()}"
              adminId: "${decoded.sub}"
            }
          ) {
            _id
            userId
            blobId
            formId
            adminId
            containerName
          }
        }
      `;

      await graphQLClient.request(query).then(data => {
        setProfilePicturePath(null);
      });
    })().catch(err => {
      //console.error(err);
    });

    setTempDocuments([]);
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

  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmitting(true);

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));

    if (formState.isValid) {
      setIsSubmitting(true);

      (async () => {
        // Prepare Headers and User
        const graphQLClient = new GraphQLClient(
          `${process.env.REACT_APP_USERS_URL}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              languages: 'eng'
            }
          }
        );

        // Query
        const query = gql`
          mutation {
            updateUser(updateUser: {
              _id: "${selectedUserId}"
              companyName: "${formState.values.companyName}"
              firstName: "${formState.values.firstName}"
              lastName: "${formState.values.lastName}"
              dateOfBirth: "${formState.values.dateOfBirth}"
              email: "${formState.values.email}"
              mobileNumber: "${formState.values.mobileNumber}"
              landlinePhone: "${formState.values.landlinePhone}"
              street: "${formState.values.street}"
              houseNumber: "${formState.values.houseNumber}"
              additionalHouseNumber: "${formState.values.additionalHouseNumber}"
              land: "${formState.values.land}"
              postCode: "${formState.values.postCode}"
              place: "${formState.values.place}"
              shortDescription: "${formState.values.shortDescription}"
              status: ${formState.values.status}
              role: 2
              profession: "${formState.values.profession}"
              profilePicturePath:"${
                formState?.values?.profilePicturePath !== undefined
                  ? formState?.values?.profilePicturePath
                  : 'dummyImage.png'
              }" 
            }){
              _id
            }
          }`;

        await graphQLClient.request(query).then(data => {
          enqueueSnackbar('Gebruiker is succesvol bijgewerkt.', {
            variant: 'success',
            autoHideDuration: 3000
          });

          setFormState(formState => ({
            isValid: false,
            values: {},
            touched: {},
            errors: {}
          }));

          setIsSubmitting(false);

          setTimeout(() => {
            window.location.href = '/admin/gebruikers';
          }, 3000);
        });
      })().catch(err => {
        //console.error(err);
        enqueueSnackbar('E-mail en mobiel nummer moeten uniek zijn', {
          variant: 'error',
          autoHideDuration: 3000
        });
        setIsSubmitting(false);
      });
    } else {
      setIsSubmitting(false);
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleDocumentChange = (e, documentId, index) => {
    if (e.target.files.length > 0) {
      startLoader(index);
      setActiveDocumentIndex(index);

      const ext = e?.target?.files[0]?.name?.split('.')?.pop();
      const blobId = uuidv4() + '.' + ext;

      documents.push({
        blobId: blobId,
        blobTitle: e.target.files[0].name,
        documentType: documentId
      });

      addDocument({
        blobId: blobId,
        blobTitle: e.target.files[0].name,
        documentType: documentId,
        userId: selectedUserId,
        isDeleted: false
      });

      setCurrentDocument(blobId);

      setSend(e.target.files[0]);
      setUp(true);

      documentIds.push(documentId);

      setDocumentIds(documentIds);

      setDocuments(documents);

      setFormState(formState => ({
        ...formState,
        touched: {
          ...formState.touched,
          ...formState.errors
        }
      }));
    }
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
    mutation{
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
        enqueueSnackbar('Document is succesvol toegevoegd.', {
          variant: 'success',
          autoHideDuration: 3000
        });

        getUserDocuments(selectedUserId);
      });
    })().catch(error => {
      //console.error('error', error);
    });
  };

  const startLoader = index => {
    switch (index) {
      case 1:
        setIsDocumentSubmitting({
          doc1: true
        });
        break;
      case 2:
        setIsDocumentSubmitting({
          doc2: true
        });
        break;
      case 3:
        setIsDocumentSubmitting({
          doc3: true
        });
        break;
      case 4:
        setIsDocumentSubmitting({
          doc4: true
        });
        break;
      case 5:
        setIsDocumentSubmitting({
          doc5: true
        });
        break;
      case 6:
        setIsDocumentSubmitting({
          doc6: true
        });
        break;
      case 7:
        setIsDocumentSubmitting({
          doc7: true
        });
        break;
      case 8:
        setIsDocumentSubmitting({
          doc8: true
        });
        break;
      case 9:
        setIsDocumentSubmitting({
          doc9: true
        });
        break;
      case 10:
        setIsDocumentSubmitting({
          doc10: true
        });
        break;
      case 11:
        setIsDocumentSubmitting({
          doc11: true
        });
        break;
      case 12:
        setIsDocumentSubmitting({
          doc12: true
        });
        break;
      case 13:
        setIsDocumentSubmitting({
          doc13: true
        });
        break;
    }
  };

  const handleCancelDocumentDeletion = () => {
    handleDeleteClose(false);
  };

  const removeDocument = () => {
    (async () => {
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
        mutation{
          removeDocument(
            Docid: "${documentToDelete}"
            Userid: "${selectedUserId}"
          ){
            _id
          }
        }`;

      await graphQLClient.request(query).then(data => {
        enqueueSnackbar('Document is succesvol verwijderd.', {
          variant: 'success',
          autoHideDuration: 3000
        });
        getUserDocuments(selectedUserId);
      });
    })().catch(error => {
      //console.error('error', error);
    });
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

  const handleDeleteModal = documentId => {
    setDocumentToDelete(documentId);
    setDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setDocumentToDelete(null);
    setDeleteModal(false);
  };

  let deleteVlogFlag = vlogId => {
    setDeleteVlog(true);
    setTempVlogId(vlogId);
  };

  let handleDeleteVlog = () => {
    (async () => {
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
      mutation{
        removeVlog(id:"${tempVlogId}"){
          _id
          userId
        }
        }`;

      await graphQLClient.request(query).then(data => {
        enqueueSnackbar('Vlog is succesvol verwijderd.', {
          variant: 'success',
          autoHideDuration: 3000
        });
        getUserVlogs(selectedUserId);
      });
    })().catch(error => {
      //console.error('error', error);
    });

    setDeleteVlog(false);
  };

  const sendResetPasswordEmail = () => {
    const currentTime = Date.now() / 1000;

    const resetPasswordUrl = `${process?.env?.REACT_APP_END_USER_PORTAL_BASE_URL}/reset-password?user_id=${selectedUserId}&c_t=${currentTime}`;

    
    const placeholders = {
      "reset_passsword_link": `<a href="${resetPasswordUrl}">Wachtwoord opnieuw instellen Link</a>`
    };
    setEmailIsSubmitting(true);
    mail('tenant_reset_password', formState.values.email, placeholders).then(response => {
      setEmailIsSubmitting(false);
      enqueueSnackbar(`Een e-mail voor het opnieuw instellen van het wachtwoord wordt doorgestuurd naar ${formState.values.email}`, {
        variant: 'success',
        autoHideDuration: 5000
      });
    })
  };

  return (
    <PerfectScrollbar>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Grid container>
          <Grid item md={12} xs={12}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography> NAAM EN PROFIEL FOTO</Typography>
            </div>
          </Grid>
          <br />

          <Grid container className={classes.gridMargin}>
            {' '}
            {/* First section container including profile data */}
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={2}></Grid>
                <Grid item md={2} xs={4} className={classes.nameWrapper}>
                  <label>Contact:</label>
                </Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.firstTypography}
                    size="small"
                    variant="outlined"
                    label="Voornaam"
                    name="firstName"
                    helperText={
                      hasError('firstName')
                        ? formState.errors.firstName[0]
                        : null
                    }
                    error={hasError('firstName')}
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    fullWidth
                    value={formState.values.firstName || ''}
                  />
                </Grid>
                <Grid item md={2} xs={1}></Grid>

                <Grid item md={2}></Grid>

                <Grid item md={2} xs={4} className={classes.nameWrapper}></Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.firstTypography}
                    size="small"
                    variant="outlined"
                    label="Achternaam"
                    name="lastName"
                    helperText={
                      hasError('lastName') ? formState.errors.lastName[0] : null
                    }
                    error={hasError('lastName')}
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    fullWidth
                    value={formState.values.lastName || ''}
                  />
                </Grid>
                <Grid item md={2}></Grid>

                <Grid item md={4} xs={4} className={classes.nameWrapper}>
                  <label>Geboorte Datum:</label>
                </Grid>
                <Grid item md={6} xs={11}>
                  <InputMask
                    variant="outlined"
                    label="Geboorte Datum"
                    className={clsx(classes.firstTypography, {
                      [classes.inputDateOfBirthErrorCheck]: hasError(
                        'dateOfBirth'
                      ),
                      [classes.inputDateOfBirth]: 1
                    })}
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="MM/DD/YYYY"
                    name="dateOfBirth"
                    type="text"
                    onChange={handleBlur}
                    fullWidth
                    value={formState.values.dateOfBirth || ''}
                  />
                  {hasError('dateOfBirth') ? (
                    <div className={classes.dobError}>
                      {formState.errors.dateOfBirth[0]}
                    </div>
                  ) : null}
                </Grid>

                <Grid item md={2}></Grid>

                <Grid item md={2}></Grid>

                <Grid item md={2} xs={2} className={classes.nameWrapper}>
                  <label>Status:</label>
                </Grid>
                <Grid item md={8} xs={12}>
                  <Select
                    style
                    className={clsx(classes.firstTypography, classes.status)}
                    value={options.filter(option => {
                      return option.value == formState.values.status;
                    })}
                    onChange={handleRoleChange}
                    options={options}
                    name="status"
                    helperText={
                      hasError('status') ? formState.errors.status[0] : null
                    }
                    error={hasError('status')}
                    onBlur={handleBlur}
                    placeholder="Status"
                  />

                  {hasError('status') && (
                    <p
                      style={{
                        right: '0px !Important'
                      }}
                      className={clsx(
                        classes.statusError,
                        'MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-marginDense'
                      )}
                    >
                      Status is verplicht
                    </p>
                  )}
                </Grid>

                <Grid item md={2}></Grid>

                <Grid item md={2} xs={2} className={classes.nameWrapper}>
                  <label>Beroep:</label>
                </Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.firstTypography}
                    size="small"
                    variant="outlined"
                    label="Vul Uw Beroep In"
                    name="profession"
                    helperText={
                      hasError('profession')
                        ? formState.errors.profession[0]
                        : null
                    }
                    error={hasError('profession')}
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    fullWidth
                    value={formState.values.profession || ''}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={3} xs={12}>
                  <div
                    style={{
                      marginTop: '20px',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    Profiel foto:
                  </div>
                </Grid>

                <Grid item md={9} xs={12}>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    {isProfilePictureUploaded && (
                      <div
                        className={classes.loading}
                        style={{
                          marginTop: 20
                        }}
                      >
                        Uploading... &nbsp;&nbsp;
                        <CircularProgress className={classes.loadingCircle} />
                      </div>
                    )}

                    {!isProfilePictureUploaded && (
                      <div className={classes.buttonWrapper}>
                        <img
                          src={
                            formState?.values?.profilePicturePath !== undefined
                              ? `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_USER_IMAGE_CONTAINER}/${formState?.values?.profilePicturePath}?${localStorage.getItem('sasToken')}`
                              : `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/dummyImage.png?${localStorage.getItem('sasToken')}`
                          }
                          style={{
                            position: 'relative',
                            width: 145,
                            height: 170,
                            marginTop: 10
                          }}
                        />

                        <div className={classes.profileDiv}>
                          <div>
                            <Button className={classes.editButton}>
                              <label
                                className={classes.uploadLabel}
                                htmlFor="editProfilePicturePath"
                              >
                                <EditIcon />
                                <input
                                  accept="image/jpg,image/jpeg,image/png,.pdf,.doc,.docx"
                                  className={classes.uploadDocument}
                                  type="file"
                                  id="editProfilePicturePath"
                                  name="editProfilePicturePath"
                                  onChange={handlePicture}
                                />
                              </label>
                            </Button>
                            <Button className={classes.deleteButton}>
                              <DeleteIcon
                                onClick={e =>
                                  setFormState(formState => ({
                                    ...formState,
                                    values: {
                                      ...formState.values,
                                      ['profilePicturePath']: 'dummyImage.png'
                                    },
                                    touched: {
                                      ...formState.touched,
                                      ['profilePicturePath']: true
                                    }
                                  }))
                                }
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{ display: 'none' }}>
                      <PicUpload
                        file={pic}
                        up={up}
                        meth={changeUp}
                        profilePicturePath={profilePicturePath}
                        setIsProfilePictureUploaded={
                          setIsProfilePictureUploaded
                        }
                      />
                    </div>
                  </div>
                
                </Grid>

                <Grid item md={5}></Grid>
                <Grid
                  item
                  md={5}
                  sm={12}
                  xs={12}
                  style={{
                    marginTop: '20px',
                    marginLeft: '5px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Button
                    onClick={sendResetPasswordEmail}
                    className={classes.addNew}
                    variant="contained"
                    color="primary"
                    disabled={emailIsSubmitting}
                  >
                      {emailIsSubmitting ? (
                      <>
                        Resetting { ' ' }
                        <CircularProgress className={classes.loadingCircle} />
                      </>
                  ) : 'Reset Password'}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>

          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography> CONTACT DETAILS</Typography>
            </div>
          </Grid>
          <Grid container className={classes.gridMargin}>
            <Grid item md={1}></Grid>
            <Grid item md={1} xs={4} className={classes.nameWrapper}>
              <label>Email: </label>
            </Grid>
            <Grid item md={5} xs={11}>
              <TextField
                inputProps={
					        { readOnly: true, }
				        }
                className={classes.firstTypography}
                helperText={
                  hasError('email') ? formState.errors.email[0] : null
                }
                error={hasError('email')}
                onBlur={handleBlur}
                onChange={handleBlur}
                fullWidth
                size="small"
                variant="outlined"
                label="Email"
                name="email"
                value={formState.values.email || ''}
              />
            </Grid>
            <Grid item md={3}></Grid>

            <Grid item md={2}></Grid>

            <Grid item md={1}></Grid>
            <Grid item md={1} xs={4} className={classes.nameWrapper}>
              <label>Mobiel Tel:</label>
            </Grid>
            <Grid item md={5} xs={11}>
              <TextField
                className={classes.firstTypography}
                helperText={
                  hasError('mobileNumber')
                    ? formState.errors.mobileNumber[0]
                    : null
                }
                error={hasError('mobileNumber')}
                onBlur={handleBlur}
                onChange={handleBlur}
                fullWidth
                size="small"
                variant="outlined"
                label="Mobiel Tel"
                name="mobileNumber"
                value={formState.values.mobileNumber || ''}
              />
            </Grid>
            <Grid item md={3}></Grid>

            <Grid item md={2}></Grid>

            <Grid item md={1}></Grid>
            <Grid item md={1} sm={3} xs={4} className={classes.nameWrapper}>
              <label>Vast Tel:</label>
            </Grid>

            <Grid item md={5} xs={11}>
              <TextField
                className={classes.firstTypography}
                helperText={
                  hasError('landlinePhone')
                    ? formState.errors.landlinePhone[0]
                    : null
                }
                error={hasError('landlinePhone')}
                onBlur={handleBlur}
                onChange={handleBlur}
                fullWidth
                size="small"
                variant="outlined"
                label="Vast Tel"
                name="landlinePhone"
                value={formState.values.landlinePhone || ''}
              />
            </Grid>
            <Grid item md={3}></Grid>

            <Grid item md={2}></Grid>
          </Grid>
          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>ADRES</Typography>
            </div>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item md={7} xs={12}>
            <div>
              <Grid container spacing={1}>
                <Grid item md={12} xs={11}>
                  <div
                    style={{
                      marginTop: '20px'
                    }}
                  >
                    <TextField
                      className={classes.second}
                      helperText={
                        hasError('street') ? formState.errors.street[0] : null
                      }
                      error={hasError('street')}
                      onBlur={handleBlur}
                      onChange={handleBlur}
                      fullWidth
                      label="Straat"
                      name="street"
                      variant="outlined"
                      size="small"
                      value={formState.values.street || ''}
                    />
                  </div>
                </Grid>

                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    helperText={
                      hasError('houseNumber')
                        ? formState.errors.houseNumber[0]
                        : null
                    }
                    error={hasError('houseNumber')}
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    fullWidth
                    label="Huisnummer"
                    name="houseNumber"
                    variant="outlined"
                    size="small"
                    value={formState.values.houseNumber || ''}
                  />
                </Grid>

                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    helperText={
                      hasError('additionalHouseNumber')
                        ? formState.errors.additionalHouseNumber[0]
                        : null
                    }
                    error={hasError('additionalHouseNumber')}
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    fullWidth
                    label="Huisnummer Toevoeging"
                    name="additionalHouseNumber"
                    variant="outlined"
                    size="small"
                    value={formState.values.additionalHouseNumber || ''}
                  />
                </Grid>
              </Grid>
            </div>

            <div
              style={{
                marginBottom: '5px'
              }}
            >
              <Grid container spacing={1}>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    helperText={
                      hasError('postCode') ? formState.errors.postCode[0] : null
                    }
                    error={hasError('postCode')}
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    fullWidth
                    label="Postcode"
                    name="postCode"
                    variant="outlined"
                    size="small"
                    value={formState.values.postCode || ''}
                  />
                </Grid>
                <Grid item md={6} xs={11}>
                  <TextField
                    className={classes.second}
                    helperText={
                      hasError('place') ? formState.errors.place[0] : null
                    }
                    error={hasError('place')}
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    fullWidth
                    label="Plaats"
                    name="place"
                    variant="outlined"
                    size="small"
                    value={formState.values.place || ''}
                  />
                </Grid>
                <Grid item md={12} xs={11}>
                  <div>
                    <TextField
                      className={classes.second}
                      helperText={
                        hasError('land') ? formState.errors.land[0] : null
                      }
                      error={hasError('land')}
                      onBlur={handleBlur}
                      onChange={handleBlur}
                      fullWidth
                      label="Land"
                      name="land"
                      variant="outlined"
                      size="small"
                      value={formState.values.land || ''}
                    />
                    <br />
                    <br />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <Grid container spacing={1}>
              {vlogs?.length > 0 && (
                <Grid item md={12} xs={12} className={classes.gridMargin}>
                  <div
                    style={{
                      paddingLeft: '20px',
                      backgroundColor: '#F2F2F2',
                      display: 'flex'
                    }}
                  >
                    <Typography>Vlogs gekoppeld aan Gebruiker</Typography>
                  </div>
                </Grid>
              )}

              {vlogs?.length > 0 && (
                <Grid container className={classes.second}>
                  <Grid item md={12} xs={12}>
                    {vlogs?.map((vlog, index) => (
                      <Grid container key={vlog.value}>
                        <Grid item md={2}></Grid>
                        <Grid
                          item
                          md={1}
                          xs={4}
                          className={classes.nameWrapper}
                          style={{
                            marginTop: 18
                          }}
                        >
                          <label>Vlog {index + 1}:</label>
                        </Grid>
                        <Grid item md={9} xs={12}>
                          <a
                            style={{
                              textDecoration: 'none'
                            }}
                            href={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_USER_VLOG_CONTAINER}/${vlog.vlogVideo}`}
                            target="_blank"
                          >
                            <Button
                              color="secondary"
                              style={{
                                width: '90%',
                                textAlign: 'center',
                                border: '1px solid black',
                                marginTop: '10px'
                              }}
                            >
                              {' '}
                              {vlog.vlogTitle}
                            </Button>
                          </a>
                          <Button
                            className={classes.deleteVlogWrapper}
                          >
                            <DeleteIcon
                              className={classes.deleteVlog}
                              onClick={() => deleteVlogFlag(vlog._id)}
                            />
                          </Button>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              )}

              <Grid item md={1}></Grid>
            </Grid>
          </Grid>

          <Grid item md={12} xs={12} className={classes.gridMargin}>
            <div
              style={{
                paddingLeft: '20px',
                backgroundColor: '#F2F2F2',
                display: 'flex'
              }}
            >
              <Typography>Documenten</Typography>
              <div
                style={{
                  display: 'none'
                }}
              >
                <DocUpload
                  file={send}
                  up={up}
                  meth={changeUp}
                  currentDocument={currentDocument}
                  index={activeDocumentIndex}
                  setIsDocumentSubmitting={setIsDocumentSubmitting}
                  setSendTempDocumentMutation={setSendTempDocumentMutation}
                />
              </div>
            </div>
          </Grid>

          {docs.map((doc, index) => (
            <Grid item md={12} xs={12} key={doc.key} className={classes.second}>
              <Grid item md={1}></Grid>

              <Grid item md={11} xs={12}>
                <div
                  style={{
                    marginTop: '10px',
                    display: 'flex',
                    flexWrap: 'wrap'
                  }}
                >
                  <div className={classes.documentText}>
                    <Typography
                      color="textSecondary"
                      className={classes.documentTypo}
                    >
                      {doc.title}
                    </Typography>
                  </div>

                  {documents
                    .filter(document => document.documentType == doc.key)
                    .map(document => (
                      <div
                        key={doc.key}
                        className={classes.documentLabel}
                      >
                        {index + 1 === 1 && isDocumentSubmitting.doc1 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 1 && !isDocumentSubmitting.doc1 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 2 && isDocumentSubmitting.doc2 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 2 && !isDocumentSubmitting.doc2 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 3 && isDocumentSubmitting.doc3 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 3 && !isDocumentSubmitting.doc3 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 4 && isDocumentSubmitting.doc4 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 4 && !isDocumentSubmitting.doc4 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 5 && isDocumentSubmitting.doc5 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 5 && !isDocumentSubmitting.doc5 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 6 && isDocumentSubmitting.doc6 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 6 && !isDocumentSubmitting.doc6 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 7 && isDocumentSubmitting.doc7 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 7 && !isDocumentSubmitting.doc7 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 8 && isDocumentSubmitting.doc8 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 8 && !isDocumentSubmitting.doc8 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 9 && isDocumentSubmitting.doc9 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 9 && !isDocumentSubmitting.doc9 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 10 && isDocumentSubmitting.doc10 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 10 && !isDocumentSubmitting.doc10 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 11 && isDocumentSubmitting.doc11 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 11 && !isDocumentSubmitting.doc11 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 12 && isDocumentSubmitting.doc12 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 12 && !isDocumentSubmitting.doc12 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                        {index + 1 === 13 && isDocumentSubmitting.doc13 && (
                          <div className={classes.loading}>
                            Uploading... &nbsp;&nbsp;
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                          </div>
                        )}

                        {index + 1 === 13 && !isDocumentSubmitting.doc13 && (
                         <DocumentFileName
                            doc={doc}
                            isDeActivated={formState?.values?.isDeActivated}
                            document={document}
                            handleDeleteModal={handleDeleteModal}
                          />
                        )}
                      </div>
                    ))}

                  {documentIds.indexOf(parseInt(doc.key)) == -1 && (
                    <div
                      key={doc.key}
                      className={classes.uploadButtonWrapper}
                    >
                      {!formState?.values?.isDeActivated ? (
                        <Button
                          color="primary"
                          className={classes.uploadDocumentButton}
                        >
                          <label
                            className={classes.uploadLabel}
                            htmlFor={`upload_document_${doc.key}`}
                          >
                            Upload
                            <input
                              accept="image/jpg,image/jpeg,image/png,.pdf,.doc,.docx"
                              className={classes.uploadDocument}
                              type="file"
                              name={`uploadDocument[${doc.key}]`}
                              id={`upload_document_${doc.key}`}
                              onChange={e =>
                                handleDocumentChange(e, doc.key, index + 1)
                              }
                            />
                          </label>
                        </Button>
                      ) : (
                          <div className={classes.notAvailable}>
                            Niet beschikbaar
                          </div>
                      )}
                    </div>
                  )}
                </div>
                <Divider />
              </Grid>
            </Grid>
          ))}
        </Grid>

        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.editAction}
            onClick={handleModalClose}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>

          {!formState?.values?.isDeActivated && (
            <Button
              className={classes.addNewHouse}
              color="primary"
              variant="contained"
              disabled={isSubmitting}
              type="submit"
            >
              Opslaan{' '}
              {isSubmitting && (
                <CircularProgress className={classes.loadingCircle} />
              )}
            </Button>
          )}
        </DialogActions>

        <Dialog
          open={deleteModal}
          onClose={handleDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Weet je het zeker?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Wilt u dit document echt verwijderen?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteDocument} color="primary">
              Ja
            </Button>
            <Button
              onClick={handleCancelDocumentDeletion}
              color="primary"
              autoFocus
            >
              Nee
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={deleteVlog}
          onClose={() => setDeleteVlog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Weet je het zeker?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Weet je zeker dat je deze gebruikersvlog wilt verwijderen?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteVlog} color="primary">
              Ja
            </Button>
            <Button
              onClick={() => setDeleteVlog(false)}
              color="primary"
              autoFocus
            >
              Nee
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </PerfectScrollbar>
  );
};

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
