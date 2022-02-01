import React, { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Radio,
  SvgIcon,
  Tooltip,
  Typography,
  makeStyles,
  RadioGroup
} from '@material-ui/core';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  Bell as BellIcon,
  Package as PackageIcon,
  MessageCircle as MessageIcon,
  Truck as TruckIcon
} from 'react-feather';
import { useDispatch, useSelector } from 'src/store';
import { getNotifications } from 'src/slices/notification';

const iconsMap = {
  order_placed: PackageIcon,
  new_message: MessageIcon,
  item_shipped: TruckIcon
};

const useStyles = makeStyles(theme => ({
  popover: {
    width: 320
  },
  svgIcon: {
    color: '#303030'
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

const Notifications = () => {
  const classes = useStyles();
  const { notifications } = useSelector(state => state.notifications);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);
  

  let [lang,setLang]=useState("en");

  let setLanguage=event=>{
    let newLang = event.target.value
    setLang(newLang);
    localStorage.setItem('lang',newLang)
    window.location.reload();
  }

  return (
    <>
    
      <Tooltip title="Notifications">
        <IconButton color="inherit" ref={ref} onClick={handleOpen}>
          <SvgIcon className={classes.svgIcon}>
            <BellIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <Box p={2}>
          <Typography variant="h5" color="textPrimary">
            Notifications
          </Typography>
        </Box>
    
          <>
            <List disablePadding>
                  <ListItem

                  >
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>
                        <SvgIcon fontSize="small">
                         { /*<Icon />*/}
                        </SvgIcon>
                      </Avatar>
                    </ListItemAvatar>
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      value={lang}
                      onChange={setLanguage}
                    >
                     <FormControlLabel
                        value="en"
                        control={<Radio />}
                        label="English"
                      />

                       <FormControlLabel
                        value="nl"
                        control={<Radio />}
                        label="dutch"
                      />
                        <FormControlLabel
                        value="jap"
                        control={<Radio />}
                        label="japnese"
                      />
                      </RadioGroup>
                      

                  </ListItem>
             
              
            </List>
            <Box p={1} display="flex" justifyContent="center">
        
            </Box>
          </>
        
            </Popover> 
    </>
  );
};

export default Notifications;
