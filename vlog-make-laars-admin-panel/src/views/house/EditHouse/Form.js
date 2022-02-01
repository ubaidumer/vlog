import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import FormHeader from 'src/components/FormHeader';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Popover from '@material-ui/core/Popover';
import { v4 as uuidv4 } from 'uuid';
import jwtDecode from 'jwt-decode';
import FileUpload from '../AddHouse/picture/fileUpload';
import Select from 'react-select';
import FilesDropzoneN from 'src/components/FilesDropzoneN';
import currencyFormatter from 'currency-formatter';
import { GraphQLClient, gql } from 'graphql-request';

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Typography
} from '@material-ui/core';
import FilesDropzone from 'src/components/FilesDropzone';
import VideoUpload from '../AddHouse/video/fileUpload';
import VlogUpload from '../AddHouse/vlog/fileUpload';
import TeaserUpload from '../AddHouse/teaser/fileUpload';
import validate from 'validate.js';
import NeighFileUpload from '../AddHouse/neighbourFolder/imageUpload';
import VNeighFileVUpload from '../AddHouse/neighbourFolder/videoUpload';
import FilesDropzoneImage from 'src/components/FilesDropZoneImage';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiCheckbox-root': {
      paddingTop: 0
    },
    '& .css-2b097c-container': {
      width: '100% !important'
    },
    '& .css-yk16xz-control': {
      padding: '9px !important'
    },
    '& .css-tlfecz-indicatorContainer svg': {
      display: 'inline-block',
      fill: theme.palette.secondary.main,
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    },
    '& .css-26l3qy-menu': {
      zIndex: 9999
    },

    '& .css-1pahdxg-control': {
      padding: '9px !important',
      boxShadow: `0 0 0 1px ${theme.palette.secondary.main} !important`,
      borderColor: theme.palette.secondary.main,
      '&:hover': {
        borderColor: theme.palette.secondary.main,
        zIndex: 100,
        backgroundColor: 'white'
      }
    }
  },
  mb2: {
    marginBottom: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1px'
    }
  },
  pr3: {},
  nameWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row'
  },
  label: {
    paddingRight: '2rem'
  },
  labelGrid: {
    marginTop: '10px'
  },
  cardContent: {
    padding: '0 !important'
  },
  submitButton: {
    textTransform: 'capitalize',
    width: 140,
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
    width: 140,
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
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  EditIcon: {
    color: 'white'
  },
  addBtn: {
    textTransform: 'capitalize',
    width: 140,
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.background.default,
      border: `1px solid ${theme.palette.secondary.main}`
    }
  },
  hoverEdit: {
    '&:hover': {
      '& $EditIcon': {
        color: '#DF1683',
        cursor: 'pointer'
      }
    }
  },
  submitLoadingCircle: {
    width: '15px !important',
    height: '15px !important',
    position: 'relative',
    left: 5
  },
  customError: {
    color: 'red',
    marginTop: 10,
    fontSize: 14
  },
  loadingCircle: {
    color: theme.palette.primary.main,
    width: '15px !important',
    height: '15px !important',
    marginLeft: 10,
    marginTop: 15
  }
}));

const Form = ({ className, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  var [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  let [neighbourhood, setNeighbourhood] = useState('');
  let [newNeighbourhood, setNewNeighbourhood] = useState([
    {
      title: 'Bassisschool',
      description: '',
      status: false,
      latitude: 0,
      longitude: 0,
      imageBlobId: '',
      videoBlobId: ''
    },
    {
      title: 'Supermarkt',
      description: '',
      status: false,
      latitude: 0,
      longitude: 0,
      imageBlobId: '',
      videoBlobId: ''
    },
    {
      title: 'Restaurant',
      description: '',
      status: false,
      latitude: 0,
      longitude: 0,
      imageBlobId: '',
      videoBlobId: ''
    },
    {
      title: 'Bushalte',
      description: '',
      status: false,
      latitude: 0,
      longitude: 0,
      imageBlobId: '',
      videoBlobId: ''
    }
  ]);

  // Store original location in loc like: http://test.com/one/ (ending slash)
  var loc = window.location.href;
  // If the last char is a slash trim it, otherwise return the original loc
  loc =
    loc.lastIndexOf('/') == loc.length - 1
      ? loc.substr(0, loc.length - 1)
      : loc.substr(0, loc.lastIndexOf('/'));
  var targetValue = loc.substr(loc.lastIndexOf('/') + 1);

  let [keyV, setKeyV] = useState();
  const [key, setKey] = useState(0);
  let [vlog, setVlog] = useState([]);
  let [vid, setVid] = useState();
  let [vlogv, setVlogv] = useState('');
  let [tea, setVlogT] = useState('');
  let [image, setImage] = useState(false);
  let [vlid, setVlid] = useState(false);
  let [vlo, setVlo] = useState(false);
  let [t, setT] = useState(false);
  let [neighbour, setNeighbour] = useState();
  let [neigh, setNeigh] = useState(false);
  let [neighbourv, setNeighbourv] = useState();
  let [neighv, setNeighv] = useState(false);
  let [neighImages, setNeighImages] = useState([newNeighbourhood.length]);
  let [neighVideos, setNeighVideos] = useState([]);
  let [isFeatured, setIsFeatured] = useState(false);
  let [counter, setCounter] = useState(false);  
  let [vlogCounter, setVlogCounter] = useState(false);
  let [videoCounter, setVideoCounter] = useState(false);
  let [advCounter, setAdvCounter] = useState(false);
  let [neighCounter, setNeighCounter] = useState(false);
  let [neighCounterV, setNeighCounterV] = useState(false);
  let [count, setCount] = useState(0);
  const [pictureError, setPictureError] = useState(false);
  const [teaserError, setTeaserError] = useState(false);
  const [vlogError, setVlogError] = useState();
  const [videoError, setVideoError] = useState(true);

  let success = e => {
    setCounter(e);
    if (!counter && e === false) {
      createTempImagesBlob();
      {
        enqueueSnackbar('Bestand is succesvol geüpload!', {
          variant: 'success',
          autoHideDuration: 2000
        });
      }
    }
  };

  let successVlog = e => {
    setVlogCounter(e);
    if (!vlogCounter && e === false) {
      createTempVlogBlob();
      {
        enqueueSnackbar('Bestand is succesvol geüpload!', {
          variant: 'success',
          autoHideDuration: 2000
        });
      }
    }
  };

  let successVideo = e => {
    setVideoCounter(e);
    if (!videoCounter && e === false) {
      createTempAdditionalVideoBlob();
      {
        enqueueSnackbar('Bestand is succesvol geüpload!', {
          variant: 'success',
          autoHideDuration: 2000
        });
      }
    }
  };

  let successAdv = e => {
    setAdvCounter(e);
    if (!advCounter && e === false) {
      createTempTeaserBlob();
      {
        enqueueSnackbar('Bestand is succesvol geüpload!', {
          variant: 'success',
          autoHideDuration: 2000
        });
      }
    }
  };

  let successNeigh = (e, temp) => {
    setNeighCounter(e);
    setCount(temp);
    if (!neighCounter && e === false) {
      createTempNeighBlob();
      {
        enqueueSnackbar('Bestand is succesvol geüpload!', {
          variant: 'success',
          autoHideDuration: 2000
        });
      }
    }
  };

  let successNeighV = (e, temp) => {
    setNeighCounterV(e);
    setCount(temp);
    if (!neighCounterV && e === false) {
      createTempNeighVBlob();
      {
        enqueueSnackbar('Bestand is succesvol geüpload!', {
          variant: 'success',
          autoHideDuration: 2000
        });
      }
    }
  };

  const findOneObject = () => {
    const edit_form = gql`
      query {
      findOneObject(id: "${targetValue}"){
        title
        houseId
        address{ 
          city
          area
          streetNo
          houseNo
          additionalHouseNo
          postCode
          latitude
          longitude
        }
        shortDescription
        longDescription
        isFeatured
        availability
        areaSize
        ownerId
        isReviewed
        isPublished
        createdAt
        updatedAt
        createdById
        updatedById
        createdBy
        updatedBy
        mediaVideo{             
          blobIdTeaser
          blobIdVideo
          videoTitle
          teaserTitle
        }
        mediaImage{
          blobIdImage
          title
        }
        mediaAdditionalVideo{             
          blobIdTeaser
          blobIdVideo
          videoTitle
          teaserTitle
        }
          details{
            neighbourhoodDescription
            propertyType
            minNumberResidents
            maxNumberResidents
            constructionYear
            totalFloors
            houseFloorNumber
            totalRooms
            totalBedrooms
            livingSpace
            totalToilets
            isFurnished
            energyLabel
            rentPerMonth
            heating
            hasWarmWater
            amenities
            neighbourhood{
              title
              imageBlobId
              videoBlobId
              description
              latitude
              longitude
              status
            }
            garage{
              garageKind
              garageSurface
              garageSpace
            }
          }
      }
    }`;

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
      await graphQLClient.request(edit_form).then(data => {

        let {
          city,
          streetNo,
          houseNo,
          additionalHouseNo,
          postCode,
          latitude,
          longitude,
        } = data?.findOneObject?.address;

        let values = data?.findOneObject;
        values.city = city;
        values.streetNo = streetNo;
        values.houseNo = houseNo;
        values.additionalHouseNo = additionalHouseNo;
        values.postCode = postCode;
        values.latitude = latitude?.toString();
        values.longitude = longitude?.toString();

        setFormState({
          isValid: false,
          values: values ? values : {},
          touched: {},
          errors: {}
        });

        setIsFeatured(data?.findOneObject?.isFeatured);
        setSelectedFurnishedOptions(data?.findOneObject?.details?.isFurnished);
        setSelectedWarmWaterOptions(data?.findOneObject?.details?.hasWarmWater);
        setSelectedGarageOptions(
          data?.findOneObject?.details?.garage?.garageKind
        );

        setSelectedEnergyOptions(data?.findOneObject?.details?.energyLabel);

        setSelectedHeating(data?.findOneObject?.details?.heating);
        setSelectedParking(data?.findOneObject?.details?.garage?.garageSpace);
        setSelectedPropertyType(data?.findOneObject?.details?.propertyType);

        setSelectedAvailabilityOptions(data?.findOneObject?.availability);
        setNewNeighbourhood(data?.findOneObject?.details?.neighbourhood);
        setVlog(data?.findOneObject?.mediaImage);
        setVlogv(data?.findOneObject?.mediaVideo?.blobIdVideo);
        setVlogT(data?.findOneObject?.mediaVideo?.blobIdTeaser);

        if (
          (data?.findOneObject?.mediaImage.length > 0 &&
            data?.findOneObject?.mediaVideo?.blobIdVideo != undefined) ||
          data?.findOneObject?.mediaVideo?.blobIdVideo != null ||
          (data?.findOneObject?.mediaVideo?.blobIdVideo != 'null' &&
            data?.findOneObject?.mediaVideo?.blobIdTeaser != undefined) ||
          data?.findOneObject?.mediaVideo?.blobIdTeaser != null
        ) {
          setVideoError(false);
        }
      });
    })().catch(err => {
      //console.error(err);
    });
  };

  let handleNeighbourhood = e => {
    setNeighbourhood(e.target.value);
  };

  let addNeighbourhoodSection = () => {
    setNewNeighbourhood(val => {
      return [
        ...val,
        {
          title: neighbourhood,
          description: '',
          status: false,
          latitude: 0,
          longitude: 0,
          imageBlobId: '',
          videoBlobId: ''
        }
      ];
    });
    setNeighbourhood('');
  };

  let editNeighbourhood = (event, id, burt, v, p) => {
    const index = [
      ...newNeighbourhood.filter((arrE, index) => {
        if (index == id) {
          let newArr = [...newNeighbourhood];
          if (newArr[id].description === null) {
            newArr[id].description =
              formState?.values?.details?.neighbourhood[id]?.description;
          }
          if (event.target.name === 'latitude') {
            newArr[id].latitude = event.target.value;
          }

          if (event.target.name === 'longitude') {
            newArr[id].longitude = event.target.value;
          }

          if (event.target.name === 'description') {
            newArr[id].description = event.target.value;
          }

          const lat = parseFloat(newArr[id].latitude);
          const lot = parseFloat(newArr[id].longitude);

          newArr[id].latitude = isNaN(lat) ? 0 : lat;
          newArr[id].longitude = isNaN(lot) ? 0 : lot;
          newArr[id].imageBlobId =
            v === null || v === undefined
              ? newArr[id]?.imageBlobId ||
                newNeighbourhood[id]?.imageBlobId ||
                ''
              : v || formState?.values?.details?.neighbourhood[id]?.imageBlobId || '';
          newArr[id].videoBlobId = 
          p === null || p === undefined
          ? newArr[id]?.videoBlobId ||
            newNeighbourhood[id]?.videoBlobId ||
            ''
          : p || formState?.values?.details?.neighbourhood[id]?.videoBlobId || '';

          if (newArr[id].description === null) {
            newArr[id].description =
              formState?.values?.details?.neighbourhood[id]?.description;
          }

          newArr.filter(checkNull);
          function checkNull(check) {
            return check.key !== '';
          }
          setNewNeighbourhood(newArr);
        }
      })
    ];
  };

  let editNeighbourhoodKey = (i, v, event) => {
    const index = [
      ...newNeighbourhood.filter((arrE, index) => {
        if (index == i) {
          let newArr = [...newNeighbourhood];
          newArr[i].status = !newArr[i].status;

          setNewNeighbourhood(newArr);
        }
      })
    ];
  };

  const formatPrice = price => {
    return currencyFormatter.format(price?.replace(',', '.'), {
      locale: 'de-DE',
      decimal: ',',
      thousand: '',
      precision: 2,
      format: '%v'
    });
  };

  let deleteNeighbourhood = id => {
    setNewNeighbourhood(val => {
      return [
        ...val.filter((arrE, index) => {
          return index !== id;
        })
      ];
    });
  };

  let [firstItem, setFirstItem] = useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  let undoTitle = () => {
    setFirstItem('Bassisschool');
    handleClose();
  };

  const createTempNeighVBlob = () => {
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
              blobId: "${tempNeighV}"
              containerName: "${process.env.REACT_APP_NEIGHBOURHOOD_CONTAINER}"
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

      await graphQLClient.request(query).then(data => {});
    })().catch(err => {
      //console.error(err);
    });
  };

  const createTempNeighBlob = () => {
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
              blobId: "${tempNeigh}"
              containerName: "${process.env.REACT_APP_TEASER_CONTAINER}"
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

      await graphQLClient.request(query).then(data => {});
    })().catch(err => {
      //console.error(err);
    });
  };

  let uploadVlog = e => {
    for (let i = 0; i < e.target.files.length; ++i) {
      if (e.target.files.length === 1) {
        const ext = e?.target?.files[0]?.name?.split('.')?.pop();
        const blobId = uuidv4() + '.' + ext;

        const temp = {
          blobIdImage: blobId,
          title: e.target.files[i].name
        };
        if(vlog.length === 4)
        {
          vlog.pop();
          enqueueSnackbar('Er kunnen maximaal 4 afbeeldingen worden geüpload!', {
            variant: 'error'
          });
          setVlog([temp,...vlog]);
        }
        else
        {
          setVlog([temp,...vlog]);
        }
        setTempImage(e.target.files);
      }

      if (e.target.files.length > 1) {
        let tem = Array.from(e.target.files).map(({ name }) => name);
        const temp = tem.slice(0,4)
        var arr = [];
        temp.map(value => {
          const ext = e?.target?.files[0]?.name?.split('.')?.pop();
          const blobId = uuidv4() + '.' + ext;
          const arr2 = {
            blobIdImage: blobId,
            title: value
          };
          arr.push(arr2);
        });

        if(vlog.length + arr.length > 4)
        {
          for(let i=0 ; i < e.target.files.length-1 ; ++i)
          {
            vlog.pop();
          }
          setVlog([...arr,...vlog]);
        }
        else
        {
          setVlog([...arr,...vlog]);
        }

        setTempImage(e.target.files);
      }

      if (
        e.target.files.length > 4 &&
        e.target.files.length + vlog.length > 4
      ) {
        enqueueSnackbar('Er kunnen maximaal 4 afbeeldingen worden geüpload!', {
          variant: 'error'
        });
        break;
      }
    }
    uploadState(true);
    setPictureError(false);
    setVideoError(false);
  };


  let uploadVlogNeigh = (i, e, burt) => {
    if (e.target.files.length > 0) {
      const ext = e?.target?.files[0]?.name?.split('.')?.pop();
      const blobId = uuidv4() + '.' + ext;

      const temp = blobId;
      let k = null;
      setNeighbour(temp);
      let arr = [...neighImages];
      arr[i] = e.target.files[0];

      setNeighImages(arr);

      editNeighbourhood(e, i, burt, temp);
    }
    setNeigh(true);
    setKey(i);
  };

  let uploadVlogNeighv = (i, e, burt) => {
    if (e.target.files.length > 0) {
      let v = null;
      const ext = e?.target?.files[0]?.name?.split('.')?.pop();
      const blobId = uuidv4() + '.' + ext;

      const temp = blobId;
      setNeighbourv(temp);
      let arr = [...neighVideos];
      arr[i] = e.target.files[0];
      setNeighVideos(arr);

      editNeighbourhood(e, i, burt, v, temp);
    }
    setKeyV(i);
    setNeighv(true);
  };

  let uploadVlogVideo = e => {
    setVid(e.target.files[0]);
    const ext = e?.target?.files[0]?.name?.split('.')?.pop();
    const blobId = uuidv4() + '.' + ext;
    setTempVideo(blobId);
    setVlid(true);
  };

  let uploadVlogVlog = e => {
    setVlogv(e.target.files[0]);
    const ext = e?.target?.files[0]?.name?.split('.')?.pop();
    const blobId = uuidv4() + '.' + ext;
    setTempVlog(blobId);
    setVlo(true);
    setVlogError(false);
    setVideoError(tea ? false : true);
  };

  let uploadVlogTeaser = e => {
    setVlogT(e.target.files[0]);
    const ext = e?.target?.files[0]?.name?.split('.')?.pop();
    const blobId = uuidv4() + '.' + ext;
    setTempTeaser(blobId);
    setT(true);
    setTeaserError(false);
    setVideoError(vlogv ? false : true);
  };

  let uploadState = e => {
    setImage(e);
  };

  let uploadStateVideo = e => {
    setVlid(e);
  };

  let uploadStateVlog = e => {
    setVlo(e);
  };

  let uploadStateTeaser = e => {
    setT(e);
  };

  let uploadNeighState = (i, e) => {
    setKey(i);
  };
  let uploadNeighStatev = (i, e) => {
    setKeyV(i);
  };

  let [isSubmitting, setIsSubmitting] = useState(false);

  let [tempVlog, setTempVlog] = useState('');
  let [tempTeaser, setTempTeaser] = useState(false);
  let [tempVideo, setTempVideo] = useState(false);
  let [tempImage, setTempImage] = useState(false);
  let [tempNeigh, setTempNeigh] = useState(false);
  let [tempNeighV, setTempNeighV] = useState(false);

  const createTempAdditionalVideoBlob = () => {
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
              blobId: "${tempVideo}"
              containerName: "vlogvideos"
              userId: "${targetValue}"
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

      await graphQLClient.request(query).then(data => {});
    })().catch(err => {
      //console.error(err);
    });
  };

  const createTempImagesBlob = () => {
    const accessToken = localStorage.getItem('accessToken');
    const decoded = jwtDecode(accessToken);

    // Prepare Headers and Client

    {
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
        for (let i = 0; i < vlog.length; ++i) {
          const query = gql`
        mutation {
          createTempBlob(
            createTempBlobInput: {
              blobId: "${vlog[i].blobIdImage}"
              containerName: "${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}"
              formId: "${uuidv4()}"
              userId: "${targetValue}"
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

          await graphQLClient.request(query).then(data => {});
        }
      })().catch(err => {
        //console.error(err);
      });
    }
  };

  const createTempTeaserBlob = () => {
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
              blobId: "${tempTeaser}"
              containerName: "${process.env.REACT_APP_TEASER_CONTAINER}"
              userId: "${targetValue}"
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

      await graphQLClient.request(query).then(data => {});
    })().catch(err => {
      //console.error(err);
    });
  };

  const createTempVlogBlob = () => {
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
              blobId: "${tempVlog}"
              containerName: "${process.env.REACT_APP_VLOG_CONTAINER}"
              userId: "${targetValue}"
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

      await graphQLClient.request(query).then(data => {});
    })().catch(err => {
      //console.error(err);
    });
  };

  const schema = {
    name: {
      presence: false,
      length: {
        maximum: 120,
        minimum: 5
      }
    },
    houseId: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    city: {
      presence:{ allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    streetNo: {
      presence:{ allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    houseNo: { 
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    city: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    latitude: {
      format: {
        // Must be numbers
        pattern: '^[0-9.-]*$',
        message: '^Latitude numeriek zijn'
      }
    },
    longitude: {
      format: {
        // Must be numbers
        pattern: '^[0-9.-]*$',
        message: '^Longitude numeriek zijn'
      }
    },
    postCode: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      length: {
        maximum: 120
      }
    },
    neighbourhoodDescription: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    propertyType: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    minNumberResidents: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    maxNumberResidents: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    areaSize: {
      presence: { allowEmpty: false, message: 'is verplicht' },
      numericality: true
    },
    constructionYear: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    totalFloors: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    totalRooms: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    totalBedrooms: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    houseFloorNumber: {
      format: {
        // Must be numbers
        pattern: '^[0-9.-]*$',
        message: '^Op Verdieping numeriek zijn'
      }
    },
    livingSpace: {
      format: {
        // Must be numbers
        pattern: '^[0-9.-]*$',
        message: '^Woonoppervlak numeriek zijn'
      }
    },
    totalToilets: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    isFurnished: {
      presence: false
    },
    adaptedHouse: {
      presence: false
    },
    energyLabel: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    rentPerMonth: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    heating: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    hasWarmWater: {
      presence: false
    },
    availability: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    garageKind: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    garageSurface: {
      presence: false,
      length: {
        maximum: 120
      }
    },
    garageSpace: {
      // Parking Field
      presence: false,
      length: {
        maximum: 120
      }
    }
  };

  const [selectedFurnished, setSelectedFurnishedOptions] = useState('');
  const [selectedGarage, setSelectedGarageOptions] = useState('');
  const [selectedEnergy, setSelectedEnergyOptions] = useState('');
  const [selectedAvailability, setSelectedAvailabilityOptions] = useState('');
  const [selectedWarmWater, setSelectedWarmWaterOptions] = useState('');
  const [selectedHeating, setSelectedHeating] = useState('');
  const [selectedParking, setSelectedParking] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  let resultsDiv = React.createRef();


  function someFunction(){
    resultsDiv.current.scrollIntoView({behavior: 'smooth'});

    // alternative:
    // this.resultsDiv.current.scrollTop = 0;
 }


  const warmWaterOptions = [
    { value: 'CV', label: 'CV' },
    { value: 'Geiser', label: 'Geiser' },
    { value: 'Boiler', label: 'Boiler' },
    { value: 'Elektrische Boiler', label: 'Elektrische Boiler' }
  ];

  let handleWarmWaterUpdate = selectedWarmWater => {
    setSelectedWarmWaterOptions(selectedWarmWater.value);
  };

  const availabilityOptions = [
    { value: 'Per direct', label: 'Per direct' },
    { value: 'In overleg', label: 'In overleg' }
  ];

  let handleAvailabilityUpdate = selectedAvailability => {
    setSelectedAvailabilityOptions(selectedAvailability.value);
  };

  const energyOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
    { value: 'F', label: 'F' }
  ];

  let handleEnergyUpdate = selectedEnergy => {
    setSelectedEnergyOptions(selectedEnergy.value);
  };

  const garageOptions = [
    { value: 'Geen Garage', label: 'Geen Garage' },
    { value: 'Garage Box', label: 'Garage Box' },
    { value: 'Op Straat', label: 'Op Straat' },
    { value: 'Parkeerkelder', label: 'Parkeerkelder' },
    { value: 'Inpandig', label: 'Inpandig' }
  ];

  let handleGarageUpdate = selectedGarage => {
    setSelectedGarageOptions(selectedGarage.value);
  };

  const furnitureOptions = [
    { value: 'Gemeubileerd', label: 'Gemeubileerd' },
    { value: 'Gestoffeerd', label: 'Gestoffeerd' },
    { value: 'Kaal', label: 'Kaal' }
  ];

  let handleFurnishedUpdate = selectedFurnished => {
    setSelectedFurnishedOptions(selectedFurnished.value);
  };

  const heatingOptions = [
    { value: 'Stadsverwarming', label: 'Stadsverwarming' },
    { value: 'CV', label: 'CV' },
    { value: 'Gas kachel', label: 'Gas kachel' },
    { value: 'CV + Openhaard', label: 'CV + Openhaard' },
    { value: 'Vloerverwarming', label: 'Vloerverwarming' }
  ];

  let handleHeatingUpdate = item => {
    setSelectedHeating(item?.value);
  };

  const parkingOptions = [
    { value: 'Betaald', label: 'Betaald' },
    // { value: 'Vergunning', label: 'Vergunning' },
    { value: 'Vrij', label: 'Vrij' },
    { value: 'Eigen terrein', label: 'Eigen terrein' }
  ];
  
  let handleParkingUpdate = item => {
    setSelectedParking(item?.value);
  };

  const propertyTypeOptions = [
    { value: 'Appartement', label: 'Appartement' },
    { value: 'Kamer', label: 'Kamer' },
    { value: 'Studio', label: 'Studio' },
    { value: 'Benedenwoning', label: 'Benedenwoning' },
    { value: 'Tussenwoning', label: 'Tussenwoning' },
    { value: 'Twee onder een kap', label: 'Twee onder een kap' },
    { value: 'een gezins woning', label: 'een gezins woning' }
  ];

  let handlePropertyTypeUpdate = item => {
    setSelectedPropertyType(item?.value);
  };

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' }
  ];

  const [selectedRoom, setSelectedRoomOptions] = useState();
  const [selectedBedroom, setSelectedBedroomOptions] = useState(0);
  const [selectedMinResidents, setSelectedMinResidentsOptions] = useState(0);
  const [selectedMaxResidents, setSelectedMaxResidentsOptions] = useState(0);
  const [selectedToilet, setSelectedToiletOptions] = useState(0);
  const [selectedFloor, setSelectedFloorOptions] = useState(0);

  let handleRoomUpdate = selectedRoom => {
    setSelectedRoomOptions(selectedRoom.value);
  };

  let handleBedroomUpdate = selectedBedroom => {
    setSelectedBedroomOptions(selectedBedroom.value);
  };

  let handleMinResidentsUpdate = selectedMinResidents => {
    setSelectedMinResidentsOptions(selectedMinResidents.value);
  };

  let handleMaxResidentsUpdate = selectedMaxResidents => {
    setSelectedMaxResidentsOptions(selectedMaxResidents.value);
  };

  let handleToiletUpdate = selectedToilet => {
    setSelectedToiletOptions(selectedToilet.value);
  };

  let handleFloorUpdate = selectedFloor => {
    setSelectedFloorOptions(selectedFloor.value);
  };

  useMemo(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));

    if (
      Boolean(formState?.values && typeof formState?.values === 'object') &&
      !Object.keys(formState?.values).length
    ) {
      findOneObject();
    }
    vlog.length === 0 ? setPictureError(true) : setPictureError(false);
    vlogv === '' ? setVlogError(true) : setVlogError(false);
    tea === '' ? setTeaserError(true) : setTeaserError(false);

  }, [formState.values,vlog,vlogv,tea]);

  const handleBlur = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState?.values,
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
    if (vlog.length === 0 && formState?.values?.mediaImage?.blobIdImage) {
      setPictureError(true);
    }
    if (tea == null || tea == 'null' || tea == undefined || tea == '') {
      setTeaserError(true);
    }
    if (vlogv === null || vlogv === 'null') {
      setVlogError(true);
    }

    event.preventDefault();

    setIsSubmitting(true);

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));

    if (
      formState.isValid &&
      !vlogError &&
      !pictureError &&
      !teaserError &&
      !videoError && !counter && !vlogCounter && !videoCounter && !advCounter && !neighCounter && !neighCounterV
    ) {
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

      let shortDesc = formatNewLineCharacter(
        formState?.values?.shortDescription
      );

      let longDesc = formatNewLineCharacter(formState?.values?.longDescription);

      // mediaAdditionalVideo: {
      //   blobIdVideo: "${
      //     vid?.name
      //       ? tempVideo
      //       : formState?.values?.mediaAdditionalVideo[0]?.blobIdVideo
      //   }"
      //   videoTitle: "${
      //     vid?.name
      //       ? vid?.name
      //       : formState.values?.mediaAdditionalVideo[0]?.videoTitle
      //   }"        
      // }

      // Query
      let obj = `{title: "${formState.values.name || formState?.values?.title}"
          address:{
            city: "${formState.values.city || formState?.values?.address?.city}"
            streetNo: "${formState.values.streetNo ||
              formState?.values?.address?.streetNo}"
            houseNo: "${formState.values.houseNo ||
              formState?.values?.address?.houseNo}"
            additionalHouseNo: "${formState.values.additionalHouseNo ||
              formState?.values?.address?.additionalHouseNo}"
            postCode: "${formState.values.postCode ||
              formState?.values?.address?.postCode}" 
            latitude: ${formState.values.latitude == 0 || formState.values.latitude ? formState.values.latitude || 0 : formState?.values?.address?.latitude || 0}
            longitude: ${formState.values.longitude == 0  || formState.values.longitude ? formState.values.longitude || 0 :formState?.values?.address?.longitude ||
              0}
          }
          availability: "${
            selectedAvailability
              ? selectedAvailability
              : formState?.values?.availability || 0
          }"
          shortDescription: "${shortDesc || ''}"
          longDescription: "${longDesc || ''}"
          isFeatured: ${isFeatured ? isFeatured : false}
          mediaImage:
          ${
            vlog.length > 0
              ? JSON.stringify(vlog).replace(/"([^"]+)":/g, '$1:')
              : JSON.stringify(formState?.values?.mediaImage).replace(
                  /"([^"]+)":/g,
                  '$1:'
                )
          }
          mediaVideo: {
            blobIdTeaser: "${
              tea?.name
                ? tempTeaser
                : formState?.values?.mediaVideo?.blobIdTeaser || ''
            }"
            teaserTitle: "${
              tea?.name ? tea?.name : formState?.values?.mediaVideo?.teaserTitle
            }"
            videoTitle: "${
              vlogv?.name
                ? vlogv?.name
                : formState?.values?.mediaVideo?.videoTitle
            }"        
            blobIdVideo: "${
              tempVlog ? tempVlog : formState?.values?.mediaVideo?.blobIdVideo
            }"

          }
          areaSize: ${
            formState?.values?.areaSize?.length > 0
              ? formState.values.areaSize
              : 0
          }
          details:{
            neighbourhoodDescription: "${formState.values
              .neighbourhoodDescription =='' || formState.values
              .neighbourhoodDescription ? formState.values
              .neighbourhoodDescription :
              formState?.values?.details?.neighbourhoodDescription}"
            propertyType: "${
              selectedPropertyType
                ? selectedPropertyType
                : formState?.values?.details?.propertyType
            }"
            minNumberResidents:${
              selectedMinResidents
                ? selectedMinResidents
                : formState?.values?.details?.minNumberResidents
            }
            maxNumberResidents:${
              selectedMaxResidents
                ? selectedMaxResidents
                : formState?.values?.details?.maxNumberResidents
            }
            constructionYear: "${formState.values.constructionYear=='' || formState.values.constructionYear ? formState.values.constructionYear : formState?.values?.details?.constructionYear}"
            totalFloors:${
              selectedFloor
                ? selectedFloor
                : formState?.values?.details?.totalFloors
            }
            houseFloorNumber: ${formState.values.houseFloorNumber =='' || formState.values.houseFloorNumber ? formState.values.houseFloorNumber|| 0:formState?.values?.details?.houseFloorNumber}
            totalRooms:${
              selectedRoom
                ? selectedRoom
                : formState?.values?.details?.totalRooms
            }
            totalToilets: ${
              selectedToilet
                ? selectedToilet
                : formState?.values?.details?.totalToilets
            }
            totalBedrooms: ${
              selectedBedroom
                ? selectedBedroom
                : formState?.values?.details?.totalBedrooms
            }
            livingSpace:${formState.values.livingSpace == '' || formState.values.livingSpace ? formState.values.livingSpace || 0 : formState?.values?.details?.livingSpace }
            energyLabel: "${
              selectedEnergy
                ? selectedEnergy
                : formState?.values?.details?.energyLabel
            }"
            rentPerMonth: ${
              formState.values.rentPerMonth == 0 ||  formState.values.rentPerMonth ? formState?.values?.rentPerMonth?.replace(',', '.') || 0 : formState?.values?.details?.rentPerMonth
            }
            heating: "${
              selectedHeating
                ? selectedHeating
                : formState.values?.details?.heating
            }"
            hasWarmWater: "${
              selectedWarmWater
                ? selectedWarmWater
                : formState.values?.details?.hasWarmWater || ''
            }"
            isFurnished: "${
              selectedFurnished
                ? selectedFurnished
                : formState.values?.details?.isFurnished || ''
            }"
            garage: {
              garageKind: "${
                selectedGarage
                  ? selectedGarage
                  : formState?.values?.details?.garage?.garageKind || ''
              }",
              garageSurface: "${
                formState.values.garageSurface =='' ||  formState.values.garageSurface ? formState.values.garageSurface : formState?.values?.details?.garage?.garageSurface || ''
             }"
              garageSpace: "${
                selectedParking
                  ? selectedParking
                  : formState?.values?.details?.garage?.garageSpace || ''
              }"
            }  
            neighbourhood:${JSON.stringify(newNeighbourhood).replace(
              /"([^"]+)":/g,
              '$1:'
            ) ||
              JSON.stringify(formState?.values?.mediaImage).replace(
                /"([^"]+)":/g,
                '$1:'
              )}            
            }
          }`;

      const query = gql`
              
      mutation{
        updateObject(id: "${targetValue}",
        updateObject:${obj}
          ){
          title
          houseId
          address{
            streetNo
            city
          }
        }
      }`;

      let submitRequest = async () => {
        const data = await graphQLClient
          .request(query)
          .then(data => {
            enqueueSnackbar('Huis is succesvol bijgewerkt.', {
              variant: 'success'
            });
            setTimeout(function() {
              window.location.href = '/admin/huizen';
            }, 2000);
          })
          .catch(e => {
            //console.error(e);
            setIsSubmitting(false);
            if (
              e.response.errors[0].message ==
              'Featured Houses limit has been reached'
            ) {
              enqueueSnackbar('De limiet voor het aanbevolen huis is bereikt', {
                variant: 'error',
                autoHideDuration: 5000
              });
            } 
           
            else {
              setIsSubmitting(false);
              enqueueSnackbar('Gelieve alle verplichte velden in te vullen.', {
                variant: 'error',
                autoHideDuration: 5000
              });
            }
          });
      };

      submitRequest();
    } else {
   
      someFunction();
      handleError();
      setIsSubmitting(false);
    }
  };

  const handleError = () => {
    setIsSubmitting(false);
    if (counter === true || vlogCounter === true || videoCounter === true || advCounter === true || neighCounter === true || neighCounterV === true)
    {
     enqueueSnackbar('Een ogenblik geduld, het uploaden van bestanden is bezig.', {
       variant: 'error',
       autoHideDuration: 5000
     });
   } 
   else
   {
    enqueueSnackbar('Gelieve alle verplichte velden in te vullen.', {
      variant: 'error',
      autoHideDuration: 5000
    });
   }
 
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  let deleteImage = (img) =>{
    let tempArr = vlog.filter(key => key != img)
    setVlog(tempArr)
  }

  const formatNewLineCharacter = text => {
    return text?.replaceAll(/\n|\n\r|\r\n|\r/g, '<br/>');

  };


  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} ref={resultsDiv}>
        <Grid item md={12} xs={12}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <Divider />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={12} xs={12}>
                  <FormHeader lessPad text="NAAM HUIS" />
                </Grid>

                <Grid item md={2} xs={12} className={classes.nameWrapper}>
                  <label className={classes.label} >Naam: </label>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    helperText={
                      hasError('name') ? formState.errors.name[0] : null
                    }
                    error={hasError('name')}
                    label="Naam"
                    name="name"
                    id="name"
                    onBlur={handleBlur}
                    key={`${Math.floor(Math.random() * 1000)}-min`}
                    defaultValue={
                      formState.values.name == '' ||  formState.values.name
                        ? formState.values.name
                        : formState?.values?.title ||
                          formState.values.name ||
                          ''
                    }
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <label className={classes.label}>Top advertentie:</label>
                </Grid>
                <Grid item md={2} xs={12} className={classes.nameWrapper}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isFeatured}
                        onClick={() => setIsFeatured(!isFeatured)}
                        name="isFeatured"
                      />
                    }
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <FormHeader lessPad text="UPLOAD VLOG’S VAN HET HUIS" />
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <Card elevation={0}>
                      <CardContent className={classes.cardContent}>
                        <FilesDropzone
                          type="video"
                          multiple={false}
                          counter = {vlogCounter}
                          title="Upload Vlog"
                          logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-video-icon.svg"
                          uploadMsg={`<Typography color="textPrimary" variant="body1">
                            Sleep video hier of browse
                          </Typography>`}
                          onChange={uploadVlogVlog}
                          defaultValue={vlogv}
                          uploadState={uploadStateVlog}
                        />
                        <div style={{ display: 'none' }}>
                          <VlogUpload
                            file={vlogv}
                            temp={tempVlog}
                            up={vlo}
                            setUp={setVlo}
                            success={successVlog}
                          />
                        </div>
                        {vlogError ? (
                          <div className={classes.customError}>
                            Vlog is verplicht
                          </div>
                        ) : (
                          <div></div>
                        )}
                        {vlogCounter && (
                          <div style={{ width: '100%', display: 'flex' }}>
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                            <Typography
                              style={{ marginLeft: '20px', marginTop: '10px' }}
                            >
                              Uploading...
                            </Typography>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <Card elevation={0}>
                      <CardContent className={classes.cardContent}>
                        <FilesDropzone
                          type="video"
                          multiple={false}
                          counter = {advCounter}
                          title="Upload Teaser"
                          logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-video-icon.svg"
                          uploadMsg={`<Typography color="textPrimary" variant="body1">
                            Sleep video hier of browse
                          </Typography>`}
                          onChange={uploadVlogTeaser}
                          defaultValue={tea}
                          uploadState={uploadStateTeaser}
                        />
                        <div style={{ display: 'none' }}>
                          <TeaserUpload
                            file={tea}
                            temp={tempTeaser}
                            up={t}
                            success={successAdv}
                            setUp={setT}
                          />
                        </div>
                        {teaserError ? (
                          <div className={classes.customError}>
                            Teaser is verplicht
                          </div>
                        ) : (
                          <div></div>
                        )}
                        {advCounter && (
                          <div style={{ width: '100%', display: 'flex' }}>
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                            <Typography
                              style={{ marginLeft: '20px', marginTop: '10px' }}
                            >
                              Uploading...
                            </Typography>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                {formState?.values?.mediaVideo?.blobIdVideo ? (
                  <Grid item md={6} xs={12}>
                    <Box>
                      <Card elevation={0}>
                        <CardContent className={classes.cardContent}>
                          Bestandsnaam:{' '}
                          <a
                            style={{ color: 'black' }}
                            target="_blank"
                            href={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_VLOG_CONTAINER}/${formState?.values?.mediaVideo?.blobIdVideo}?${localStorage.getItem('sasToken')}`}
                          >
                            {formState?.values?.mediaVideo?.videoTitle}{' '}
                          </a>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ) : (
                  <div></div>
                )}
                {formState?.values?.mediaVideo?.blobIdTeaser ? (
                  <Grid item md={6} xs={12}>
                    <Box>
                      <Card elevation={0}>
                        <CardContent className={classes.cardContent}>
                          Bestandsnaam:{' '}
                          <a
                            style={{ color: 'black' }}
                            target="_blank"
                            href={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_TEASER_CONTAINER}/${formState?.values?.mediaVideo?.blobIdTeaser}?${localStorage.getItem('sasToken')}`}
                          >
                            {formState?.values?.mediaVideo?.teaserTitle}
                          </a>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ) : (
                  <div></div>
                )}

                <Grid item md={12} xs={12}>
                  <FormHeader text="UPLOAD FOTO’S VAN HET HUIS" />

                  <Box>
                    <Card elevation={0}>
                      <CardContent className={classes.cardContent}>
                        <FilesDropzoneImage
                          type="image"
                          multiple={true}
                          counter={counter}
                          title="Upload Foto’s"
                          logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-image-icon.svg"
                          uploadMsg={`<Typography color="textPrimary" variant="body1">
                            Sleep foto hier of browse
                          </Typography>`}
                          onChange={uploadVlog}
                          setVlog = {setVlog}
                          pictures = {vlog}
                          defaultValue={vlog}
                          uploadState={uploadState}
                        />
                        <div style={{ display: 'none' }}>
                          <FileUpload
                            file={tempImage}
                            up={image}
                            setUp={setImage}
                            temp={vlog}
                            success={success}
                          />
                        </div>
                        {pictureError ? (
                          <div className={classes.customError}>
                            Image is verplicht
                          </div>
                        ) : (
                          <div></div>
                        )}
                        {counter && (
                          <div style={{ width: '100%', display: 'flex' }}>
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                            <Typography
                              style={{ marginLeft: '20px', marginTop: '10px' }}
                            >
                              Uploading...
                            </Typography>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                {vlog?.map(img => (
                  <Grid item md={12} xs={12}>
                    <Box>
                      <Card elevation={0}>
                        <CardContent className={classes.cardContent}>
                          Bestandsnaam:{' '}
                          <a
                            style={{ color: 'black' }}
                            target="_blank"
                            href={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/${img.blobIdImage}?${localStorage.getItem('sasToken')}`}
                          >
                            {img?.title}{' '} 
                          </a>
                          <Button style={{marginLeft:10}} onClick={()=>deleteImage(img)}>X</Button>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ))}

                {/* <Grid item md={12} xs={12}>
                  <FormHeader text="UPLOAD MEDIA VAN OMGEVING" />

                  <Box>
                    <Card elevation={0}>
                      <CardContent className={classes.cardContent}>
                        <FilesDropzone
                          type="video"
                          multiple={false}
                          title="Upload Video’s"
                          logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-video-icon.svg"
                          uploadMsg={`<Typography color="textPrimary" variant="body1">
                            Sleep video hier of browse
                          </Typography>`}
                          onChange={uploadVlogVideo}
                          defaultValue={vid}
                          uploadState={uploadStateVideo}
                        />
                        <div style={{ display: 'none' }}>
                          <VideoUpload
                            file={vid}
                            up={vlid}
                            temp={tempVideo}
                            success={successVideo}
                          />
                        </div>
                        {videoCounter && (
                          <div style={{ width: '100%', display: 'flex' }}>
                            <CircularProgress
                              className={classes.loadingCircle}
                            />
                            <Typography
                              style={{ marginLeft: '20px', marginTop: '10px' }}
                            >
                              Uploading...
                            </Typography>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                {formState?.values?.mediaAdditionalVideo ? (
                  <Grid item md={12} xs={12}>
                    <Box>
                      <Card elevation={0}>
                        <CardContent className={classes.cardContent}>
                          Bestandsnaam:{' '}
                          <a
                            style={{ color: 'black' }}
                            target="_blank"
                            href={`https://vlogmakelaarsstorage.blob.core.windows.net/vlogvideos/${formState?.values?.mediaAdditionalVideo[0]?.blobIdVideo}?${localStorage.getItem('sasToken')}`}
                          >
                            {
                              formState?.values?.mediaAdditionalVideo[0]
                                ?.videoTitle
                            }{' '}
                          </a>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ) : (
                  <div></div>
                )} */}

                <Grid item md={12} xs={12}>
                  <FormHeader lessPad text="BESCHRIJVING VAN HET HUIS" />
                </Grid>

                <Grid item md={2} xs={12} className={classes.nameWrapper}>
                  <label className={classes.label}>Korte Beschrijving:</label>
                </Grid>
                <Grid item md={10} xs={12}>
                  <TextField
                    className={classes.shortDescription}
                    fullWidth
                    key={`${Math.floor(Math.random() * 1000)}-min`}
                    helperText={
                      hasError('shortDescription')
                        ? formState.errors.shortDescription[0]
                        : null
                    }
                    error={hasError('shortDescription')}
                    name="shortDescription"
                    label="Korte Beschrijving"
                    multiline
                    rows={6}
                    onBlur={handleBlur}
                    defaultValue={
                      formState?.values?.shortDescription?.replaceAll(
                        '<br/>',
                        '\n'
                      ) || ''
                    }
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={2} xs={12} className={classes.nameWrapper}>
                  <label className={classes.label}>
                    Uitgebreide Beschrijving:
                  </label>
                </Grid>
                <Grid item md={10} xs={12}>
                  <TextField
                    className={classes.shortDescription}
                    fullWidth
                    key={`${Math.floor(Math.random() * 1000)}-min`}
                    helperText={
                      hasError('longDescription')
                        ? formState.errors.shortDescription[0]
                        : null
                    }
                    error={hasError('longDescription')}
                    name="longDescription"
                    label="Uitgebreide Beschrijving"
                    multiline
                    rows={6}
                    onBlur={handleBlur}
                    defaultValue={
                      formState?.values?.longDescription?.replaceAll(
                        '<br/>',
                        '\n'
                      ) || ''
                    }
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <FormHeader text="ADRES" />
                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2}></Grid>
                    <Grid item md={10} xs={12} className={classes.nameWrapper}>
                      <TextField
                        fullWidth
                        helperText={
                          hasError('streetNo')
                            ? formState.errors.streetNo[0]
                            : null
                        }
                        error={hasError('streetNo')}
                        label="Straat"
                        name="streetNo"
                        onBlur={handleBlur}
                        variant="outlined"
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.streetNo=='' || formState.values.streetNo
                            ? formState.values.streetNo
                            : formState?.values?.address?.streetNo || ''
                        }
                      />
                    </Grid>

                    <Grid item md={2}></Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className={clsx(classes.pr2, classes.nameWrapper)}
                    >
                      <TextField
                        fullWidth
                        helperText={
                          hasError('houseNo')
                            ? formState.errors.houseNo[0]
                            : null
                        }
                        error={hasError('houseNo')}
                        label="Huisnummer"
                        name="houseNo"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.houseNo=='' ||  formState.values.houseNo
                            ? formState.values.houseNo
                            : formState?.values?.address?.houseNo || ''
                        }
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item md={5} xs={12} className={classes.nameWrapper}>
                      <TextField
                        fullWidth
                        helperText={
                          hasError('additionalHouseNo')
                            ? formState.errors.additionalHouseNo[0]
                            : null
                        }
                        error={hasError('additionalHouseNo')}
                        label="Huisnummer Toevoeging"
                        name="additionalHouseNo"
                        onBlur={handleBlur}
                        defaultValue={
                          formState.values.additionalHouseNo=='' || formState.values.additionalHouseNo
                            ? formState.values.additionalHouseNo
                            : formState.values.address?.additionalHouseNo || ''
                        }
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item md={2}></Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className={clsx(classes.pr2, classes.nameWrapper)}
                    >
                      <TextField
                        fullWidth
                        helperText={
                          hasError('postCode')
                            ? formState.errors.postCode[0]
                            : null
                        }
                        error={hasError('postCode')}
                        label="Postcode"
                        name="postCode"
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.postCode=='' || formState.values.postCode
                            ? formState.values.postCode
                            : formState?.values?.address?.postCode || ''
                        }
                        onBlur={handleBlur}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={5} xs={12} className={classes.nameWrapper}>
                      <TextField
                        fullWidth
                        helperText={
                          hasError('city') ? formState.errors.city[0] : null
                        }
                        error={hasError('city')}
                        label="Plaats"
                        name="city"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.city=='' ||  formState.values.city
                            ? formState.values.city
                            : formState?.values?.address?.city || ''
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className={clsx(classes.pr2, classes.nameWrapper)}
                    >
                      <TextField
                        fullWidth
                        helperText={
                          hasError('latitude')
                            ? formState.errors.latitude[0]
                            : null
                        }
                        error={hasError('latitude')}
                        label="Latitude"
                        name="latitude"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.latitude == '' || formState.values.latitude
                            ? formState.values.latitude
                            : formState?.values?.address?.latitude || ''
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={5}
                      xs={12}
                      className={clsx(classes.pr2, classes.nameWrapper)}
                    >
                      <TextField
                        fullWidth
                        helperText={
                          hasError('longitude')
                            ? formState.errors.longitude[0]
                            : null
                        }
                        error={hasError('longitude')}
                        label="Longitude"
                        name="longitude"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.longitude =='' || formState.values.longitude
                            ? formState.values.longitude
                            : formState?.values?.address?.longitude || ''
                        }
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item md={12} xs={12}>
                  <FormHeader text="DETAILS" />
                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={6} className={classes.labelGrid}>
                      <label className={classes.label}>Wijk: </label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <TextField
                        fullWidth
                        helperText={
                          hasError('neighbourhoodDescription')
                            ? formState.errors.neighbourhoodDescription[0]
                            : null
                        }
                        error={hasError('neighbourhoodDescription')}
                        label="Wijk"
                        name="neighbourhoodDescription"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.neighbourhoodDescription == '' ||  formState.values.neighbourhoodDescription
                            ? formState.values.neighbourhoodDescription
                            : formState?.values?.details
                                ?.neighbourhoodDescription || ''
                        }
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item md={2} xs={6} className={classes.labelGrid}>
                      <label className={classes.label}>
                        Minimaal Aantal Bewoners:
                      </label>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.nameWrapper}>
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.minNumberResidents ||
                          'Minimaal Aantal Bewoners'
                        }
                        value={selectedMinResidents?.value}
                        onChange={handleMinResidentsUpdate}
                        options={options}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>Woningtype: </label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          selectedPropertyType
                            ? selectedPropertyType
                            : 'Woningtype'
                        }
                        value={selectedPropertyType?.value}
                        onChange={handlePropertyTypeUpdate}
                        options={propertyTypeOptions}
                      />
                    </Grid>

                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>
                        Maximaal Aantal Bewoners:
                      </label>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.nameWrapper}>
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.maxNumberResidents ||
                          'Maximaal Aantal Bewoners'
                        }
                        value={selectedMaxResidents?.value}
                        onChange={handleMaxResidentsUpdate}
                        options={options}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>Bouwjaar: </label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <TextField
                        fullWidth
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        helperText={
                          hasError('constructionYear')
                            ? formState.errors.constructionYear[0]
                            : null
                        }
                        error={hasError('constructionYear')}
                        label="Bouwjaar"
                        name="constructionYear"
                        onBlur={handleBlur}
                        defaultValue={
                          formState.values.constructionYear =='' || formState.values.constructionYear
                            ? formState.values.constructionYear
                            : formState?.values?.details?.constructionYear || ''
                        }
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>Verdiepingen:</label>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.nameWrapper}>
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.totalFloors ||
                          'Verdiepingen'
                        }
                        value={selectedFloor?.value}
                        onChange={handleFloorUpdate}
                        options={options}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>Aantal Kamers:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.totalRooms ||
                          'Aantal Kamers'
                        }
                        onChange={handleRoomUpdate}
                        value={selectedRoom?.value}
                        options={options}
                      />
                    </Grid>

                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>Op Verdieping</label>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.nameWrapper}>
                      <TextField
                        fullWidth
                        helperText={
                          hasError('houseFloorNumber')
                            ? formState.errors.houseFloorNumber[0]
                            : null
                        }
                        error={hasError('houseFloorNumber')}
                        label="Op Verdieping:"
                        name="houseFloorNumber"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.houseFloorNumber== 0 || formState.values.houseFloorNumber
                            ? formState.values.houseFloorNumber
                            : formState?.values?.details?.houseFloorNumber || ''
                        }
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>
                        Aantal Slaapkamers:
                      </label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.totalBedrooms ||
                          'Aantal Slaapkamers'
                        }
                        value={selectedBedroom?.value}
                        onChange={handleBedroomUpdate}
                        options={options}
                      />
                    </Grid>

                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>Woonoppervlak:</label>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.nameWrapper}>
                      <TextField
                        fullWidth
                        helperText={
                          hasError('livingSpace')
                            ? formState.errors.livingSpace[0]
                            : null
                        }
                        error={hasError('livingSpace')}
                        label="Woonoppervlak"
                        name="livingSpace"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.livingSpace=='' ||  formState.values.livingSpace
                            ? formState.values.livingSpace
                            : formState?.values?.details?.livingSpace || ''
                        }
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12} className={classes.labelGrid}>
                      <label className={classes.label}>Aantal Toiletten:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.totalToilets ||
                          'Aantal Toiletten'
                        }
                        value={selectedToilet?.value}
                        onChange={handleToiletUpdate}
                        options={options}
                      />
                    </Grid>

                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Prijs:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <TextField
                        fullWidth
                        helperText={
                          hasError('rentPerMonth')
                            ? formState.errors.rentPerMonth[0]
                            : null
                        }
                        error={hasError('rentPerMonth')}
                        label="Prijs"
                        name="rentPerMonth"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState?.values?.rentPerMonth == 0 ||   formState?.values?.rentPerMonth
                            ? formatPrice(formState?.values?.rentPerMonth)
                            : formatPrice(
                                formState?.values?.details?.rentPerMonth.toString()
                              )
                        }
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>
                        Parkeergelegenheid:
                      </label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          selectedParking
                            ? selectedParking
                            : 'Parkeergelegenheid'
                        }
                        value={selectedParking?.value}
                        onChange={handleParkingUpdate}
                        options={parkingOptions}
                      />
                    </Grid>

                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Beschikbaarheid:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.availability
                            ? formState?.values?.availability
                            : 'Beschikbaarheid'
                        }
                        value={selectedAvailability?.value}
                        onChange={handleAvailabilityUpdate}
                        options={availabilityOptions}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Gemeubileerd:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          selectedFurnished ? selectedFurnished : 'Gemeubileerd'
                        }
                        onChange={handleFurnishedUpdate}
                        value={selectedFurnished?.value}
                        options={furnitureOptions}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Soort Garage:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          selectedGarage ? selectedGarage : 'Soort Garage'
                        }
                        onChange={handleGarageUpdate}
                        value={selectedGarage?.value}
                        options={garageOptions}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Garage Oppervlak:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <TextField
                        fullWidth
                        helperText={
                          hasError('garageSurface')
                            ? formState.errors.garageSurface[0]
                            : null
                        }
                        error={hasError('garageSurface')}
                        label="Garage Oppervlak"
                        name="garageSurface"
                        onBlur={handleBlur}
                        key={`${Math.floor(Math.random() * 1000)}-min`}
                        defaultValue={
                          formState.values.garageSurface == '' ||    formState.values.garageSurface
                            ? formState.values.garageSurface
                            : formState?.values?.details?.garage
                                ?.garageSurface || ''
                        }
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Energie Label:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.energyLabel
                            ? formState?.values?.details?.energyLabel
                            : 'Energie Label'
                        }
                        value={selectedEnergy?.value}
                        onChange={handleEnergyUpdate}
                        options={energyOptions}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Verwarming:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          selectedHeating ? selectedHeating : 'Verwarming'
                        }
                        value={selectedHeating?.value}
                        onChange={handleHeatingUpdate}
                        options={heatingOptions}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    className={clsx(classes.pr3, classes.mb2)}
                  >
                    <Grid item md={2} xs={12}>
                      <label className={classes.label}>Warm Water:</label>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      className={clsx(classes.nameWrapper, classes.pr2)}
                    >
                      <Select
                        style={{
                          color: 'grey !important',
                          width: '100% !important'
                        }}
                        placeholder={
                          formState?.values?.details?.hasWarmWater ||
                          'Warm Water'
                        }
                        value={selectedWarmWater?.value}
                        onChange={handleWarmWaterUpdate}
                        options={warmWaterOptions}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item md={12} xs={12}>
                  <FormHeader text="Buurt" />
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12} sm={6}></Grid>{' '}
                    {/*parent container */}
                    <Grid item md={6}></Grid> {/*parent container */}
                  </Grid>{' '}
                  {/*/grand parent*/}
                  <Grid container spacing={3}>
                    {newNeighbourhood.map((burt, i) => (
                      <Grid item md={6} key={i}>
                        <Grid container spacing={3}>
                          <Grid
                            item
                            md={6}
                            sm={6}
                            xs={12}
                            className={classes.hoverEdit}
                          >
                            <label className={classes.label}>
                              {burt.neighbourhood || burt.title}:
                              <span
                                style={{
                                  display: 'inline-block',
                                  marginLeft: '10px'
                                }}
                              >
                                <div>
                                  <Popover
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
                                    <div style={{ padding: '10px' }}>
                                      <Typography
                                        className={classes.typography}
                                      >
                                        Rename the title.
                                      </Typography>
                                      <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Enter text..."
                                        name="title"
                                        onChange={e =>
                                          editNeighbourhood(e, i, burt)
                                        }
                                        value={burt.neighbourhood}
                                      />
                                      <div
                                        style={{
                                          display: 'flex',
                                          width: '100%',
                                          justifyContent: 'flex-end'
                                        }}
                                      >
                                        <DoneIcon onClick={handleClose} />{' '}
                                        <ClearIcon onClick={undoTitle} />
                                      </div>
                                    </div>
                                  </Popover>
                                </div>

                                {i < 4 ? (
                                  <div></div>
                                ) : (
                                  <div className={classes.EditIcon}>
                                    {' '}
                                    <EditIcon
                                      aria-describedby={id}
                                      variant="contained"
                                      onClick={handleClick}
                                    />{' '}
                                    <ClearIcon
                                      onClick={e =>
                                        deleteNeighbourhood(i, burt, e)
                                      }
                                      style={{ marginLeft: '10px' }}
                                    />
                                  </div>
                                )}
                              </span>
                            </label>
                          </Grid>
                          <Grid
                            item
                            md={6}
                            sm={6}
                            xs={12}
                            className={classes.nameWrapper}
                          >
                            <div>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={newNeighbourhood[i].status}
                                    onClick={e => editNeighbourhoodKey(i, e)}
                                    name={newNeighbourhood[i].neighbourhood}
                                  />
                                }
                              />
                            </div>
                          </Grid>
                        </Grid>
                        {newNeighbourhood[i].status ? (
                          <div>
                            <Grid container spacing={3}>
                              <Grid item md={2} xs={12}>
                                <label className={classes.label}>
                                  Omschrijving:
                                </label>
                              </Grid>
                              <Grid
                                item
                                md={10}
                                xs={12}
                                className={clsx(
                                  classes.nameWrapper,
                                  classes.pr2
                                )}
                              >
                                <TextField
                                  fullWidth
                                  label="Omschrijving"
                                  name="description"
                                  onChange={e => editNeighbourhood(e, i, burt)}
                                  value={newNeighbourhood[i].description}
                                  variant="outlined"
                                />
                              </Grid>

                              <Grid item md={2} xs={12}>
                                <label className={classes.label}>
                                  Latitude:
                                </label>
                              </Grid>
                              <Grid
                                item
                                md={4}
                                xs={12}
                                className={clsx(
                                  classes.nameWrapper,
                                  classes.pr2
                                )}
                              >
                                <TextField
                                  fullWidth
                                  label="Latitude"
                                  name="latitude"
                                  onChange={e => editNeighbourhood(e, i, burt)}
                                  value={newNeighbourhood[i].latitude}
                                  // onChange={handleNeighbourhoodLat}
                                  variant="outlined"
                                />
                              </Grid>

                              <Grid item md={2} xs={12}>
                                <label className={classes.label}>
                                  Longitude:
                                </label>
                              </Grid>
                              <Grid
                                item
                                md={4}
                                xs={12}
                                className={clsx(
                                  classes.nameWrapper,
                                  classes.pr2
                                )}
                              >
                                <TextField
                                  fullWidth
                                  label="Longitude"
                                  name="longitude"
                                  onChange={e => editNeighbourhood(e, i, burt)}
                                  value={newNeighbourhood[i].longitude}
                                  variant="outlined"
                                />
                              </Grid>
                            </Grid>

                            <Grid item md={12} xs={12}>
                              <br />

                              <Box>
                                <Card elevation={0}>
                                  <CardContent className={classes.cardContent}>
                                    <FilesDropzoneN
                                      type="image"
                                      counter={neighCounter}
                                      multiple={true}
                                      title="Upload Foto’s"
                                      logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-image-icon.svg"
                                      uploadMsg={`<Typography color="textPrimary" variant="body1">
                                        Drop image file here or browse
                                      </Typography>`}
                                      onChange={e =>
                                        uploadVlogNeigh(i, e, burt)
                                      }
                                      value={
                                        newNeighbourhood[i].imageBlobId
                                      }
                                      uploadState={uploadNeighState}
                                      uploadStateKey={i}
                                    />
                                    <div style={{ display: 'none' }}>
                                      <NeighFileUpload
                                        file={neighImages[i]}
                                        temp={newNeighbourhood[i]?.imageBlobId}
                                        up={key === i && neigh ? neigh : false}
                                        setUp={setNeigh}
                                        success={successNeigh}
                                        checkKey={i}
                                      />
                                    </div>
                                    {neighCounter && count === i && (
                                      <div
                                        style={{
                                          width: '100%',
                                          display: 'flex'
                                        }}
                                      >
                                        <CircularProgress
                                          className={classes.loadingCircle}
                                        />
                                        <Typography
                                          style={{
                                            marginLeft: '20px',
                                            marginTop: '10px'
                                          }}
                                        >
                                          Uploading...
                                        </Typography>
                                      </div>
                                    )}
                                  </CardContent>
                                </Card>
                              </Box>
                            </Grid>

                            <Box style={{ marginTop: '10px' }}>
                              <Card elevation={0}>
                                <CardContent className={classes.cardContent}>
                                  <FilesDropzoneN
                                    type="video"
                                    multiple={false}
                                    counter={neighCounterV}
                                    title="Upload Video"
                                    logoPath="http://assets.it22.nl/vlog-make-laars/admin/house/dropzone-video-icon.svg"
                                    uploadMsg={`<Typography color="textPrimary" variant="body1">
                                      Sleep video hier of browse
                                    </Typography>`}
                                    onChange={e => uploadVlogNeighv(i, e, burt)}
                                    defaultValue={
                                      newNeighbourhood[i].videoBlobId
                                    }
                                    uploadState={uploadNeighStatev}
                                    uploadStateKey={i}
                                  />
                                  <div style={{ display: 'none' }}>
                                    <VNeighFileVUpload
                                      file={neighVideos[i]}
                                      temp={newNeighbourhood[i]?.videoBlobId}
                                      up={keyV === i && neighv ? neighv : false}
                                      success={successNeighV}
                                      setUp={setNeighv}
                                      checkKey={i}
                                    />
                                  </div>
                                  {neighCounterV && count === i && (
                                    <div
                                      style={{ width: '100%', display: 'flex' }}
                                    >
                                      <CircularProgress
                                        className={classes.loadingCircle}
                                      />
                                      <Typography
                                        style={{
                                          marginLeft: '20px',
                                          marginTop: '10px'
                                        }}
                                      >
                                        Uploading...
                                      </Typography>
                                    </div>
                                  )}
                                </CardContent>
                              </Card>
                            </Box>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </Grid>
                    ))}
                    {/*parent container */}
                    {formState?.values?.details?.neighbourhood?.map(img => (
                      <Grid item md={12} xs={12}>
                        <Box>
                          {img.status === true ? (
                            <div>
                              <Card elevation={0}>
                                <CardContent className={classes.cardContent}>
                                  {img.imageBlobId ? (
                                    <div>
                                      {img.title} : Image:{' '}
                                      <a
                                        style={{ color: 'black' }}
                                        target="_blank"
                                        href={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_NEIGHBOURHOOD_CONTAINER}/${img.imageBlobId}?${localStorage.getItem('sasToken')}`}
                                      >
                                        {img?.imageBlobId}{' '}
                                      </a>
                                    </div>
                                  ) : (
                                    <div></div>
                                  )}
                                  <br />
                                  {img.videoBlobId ? (
                                    <div>
                                      {img.title} : Video:{' '}
                                      <a
                                        style={{ color: 'black' }}
                                        target="_blank"
                                        href={`https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_NEIGHBOURHOOD_CONTAINER}/${img.videoBlobId}?${localStorage.getItem('sasToken')}`}
                                      >
                                        {img?.videoBlobId}{' '}
                                      </a>
                                    </div>
                                  ) : (
                                    <div></div>
                                  )}
                                </CardContent>
                              </Card>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>{' '}
                  {/*/grand parent*/}
                  <Grid item md={12} xs={12}>
                    <ol>
                      <div style={{ marginTop: '50px' }}>
                        <Grid container>
                          <Grid item md={2} style={{paddingTop: 20}}>
                            <label className={classes.label}>
                              Buurt object Toevoegen:
                            </label>
                          </Grid>
                          <Grid item md={6} xs={8}>
                            <li
                              style={{
                                paddingLeft: '10px',
                                marginTop: '5px',
                                listStyle: 'none'
                              }}
                            >
                              <TextField
                                fullWidth
                                variant="outlined"
                                value={neighbourhood}
                                onChange={handleNeighbourhood}
                              />
                            </li>
                          </Grid>
                          <Grid item md={2} xs={4}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                width: '100%'
                              }}
                            >
                              <Button className={classes.cross}></Button>
                            </div>
                            <div
                              style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end'
                              }}
                            >
                              <Button
                                variant="contained"
                                color="secondary"
                                className={classes.addBtn}
                                onClick={addNeighbourhoodSection}
                              >
                                {' '}
                                Toevoegen{' '}
                              </Button>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </ol>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box p={2} display="flex" justifyContent="flex-end">
              <Button
                className={classes.cancelButton}
                color="secondary"
                type="submit"
                variant="contained"
              >
                Cancel
              </Button>

              <Button
                className={classes.submitButton}
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                type="submit"
              >
                Opslaan{' '}
                {isSubmitting && (
                  <CircularProgress className={classes.submitLoadingCircle} />
                )}
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
