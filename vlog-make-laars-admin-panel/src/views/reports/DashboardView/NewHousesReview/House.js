import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  IconButton,
  ListItem,
  ListItemText,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Image from 'src/components/Image';

import capitalize from 'src/utils/capitalize';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    marginRight: 20,
    width: 40,
    height: 40
  },
  viewButton: {
    marginLeft: theme.spacing(2)
  }
}));

const House = ({ className, house, ...rest }) => {
  const classes = useStyles();

  return (
    <ListItem className={clsx(classes.root, className)} {...rest}>
      <Image
        className={classes.image}
        src={
          house?.mediaImage?.length > 0
            ? `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/${house?.mediaImage[0]?.blobIdImage}?${localStorage.getItem('sasToken')}`
            : `https://vlogmakelaarsstorage.blob.core.windows.net/${process.env.REACT_APP_OBJECT_IMAGE_CONTAINER}/dummyImage.png?${localStorage.getItem('sasToken')}`
        }
      />

      <ListItemText
        primary={`${house?.address?.streetNo ? house?.address?.streetNo : ''} ${
          house?.address?.houseNo ? house?.address?.houseNo : ''
        }`}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
      />

      <ListItemText
        style={{ maxWidth: '80px' }}
        primary={capitalize(house?.address?.city)}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
      />
      <Tooltip title="View House">
        <a target="_blank" href={`/admin/huizen/edit/${house?._id}`}>
          <IconButton className={classes.viewButton} edge="end">
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </a>
      </Tooltip>
    </ListItem>
  );
};

House.propTypes = {
  className: PropTypes.string,
  house: PropTypes.object.isRequired
};

export default House;
