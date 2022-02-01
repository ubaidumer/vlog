import React, {
  useRef,
  useState,
  memo
} from 'react';
import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';

const useStyles = makeStyles(() => ({
  menu: {
    width: 256,
    maxWidth: '100%'
  }
}));

const GenericMoreButton = (props) => {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return ('');
};

export default memo(GenericMoreButton);
