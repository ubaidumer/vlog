import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: '5rem',
  },
  reviewAuthor: {
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
  },
  bikeImage: {
    width: 955,
    height: 615,
    maxWidth: '100%',
    marginLeft: 75,
    [theme.breakpoints.down('md')]: {
      maxWidth: 955,
      maxHeight: 615,
      marginLeft: 0,
      marginBottom: '-22px',
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(3),
  },
  swiperContainer: {
    position: 'relative',
  },
  swiperWrapper: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(7),
    },
  },
  swiperNav: {
    '& .swiper-button-prev, & .swiper-button-next': {
      width: theme.spacing(6),
      height: theme.spacing(6),
      padding: theme.spacing(3),
      background: theme.palette.primary.main,
      borderRadius: '100%',
      boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      '&:after': {
        fontSize: 'initial',
        color: theme.palette.background.paper,
      },
    },
  },
  learnMore: {
    background: '#3BB0E5',
    padding: '3rem',
    color: 'white',
    position: 'relative',
    top: '-5rem',
    zIndex: 1,
  },
  learnMoretitle: {
    fontWeight: 'bold',
  },
  learnMoreImage: {
    maxWidth: 665,
    maxHeight: 450,
  },
  learnMoreButtonsGroup: {
    display: 'flex',
  },
  viewGalleryLink: {
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  bookNowBtn: {
    color: '#3BB0E5',
    padding: '1rem 2rem',
    background: 'white',
    '&:hover': {
      color: 'white',
      background: '#e9511c !important',
    },
  },
  paddingZero: {
    padding: 0,
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  tabpanel: {
    width: '100%',
  },
  tableLayout: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TableLayout(props) {
  const { rows, ...other } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Bike Details">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              style={
                index % 2 ? { background: '#e4e6e8' } : { background: 'white' }
              }
              key={row.details}
            >
              <TableCell component="th" scope="row">
                {row.details}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createTableData(details, price) {
  return { details, price };
}

const tableRows = [
  createTableData('Adjusting the gear (derailleur gear)', '€15'),
  createTableData('Align or replace derailleur hanger', '€10'),
  createTableData('Replace casette + chain', '€30'),
  createTableData('Replace rear derailleur + inner cable', '€20'),
  createTableData('Derailleur front + inner cable replaced', '€20'),
  createTableData('Replace bottom bracket', '€25'),
  createTableData(
    'Derailleur cable completely replaced (Front or rear)',
    '€20',
  ),
];

const BikesSlider = props => {
  const { page, data, className, ...rest } = props;
  const classes = useStyles();

  const getCurrentPageDetails = (data, page) => {
    return data.find(element => {
      return element.link === page;
    });
  };

  let subPageDetails = getCurrentPageDetails(data, page);

  let initialData =
    subPageDetails !== undefined
      ? {
          bikeCategory: subPageDetails.category,
          bikeTitle: subPageDetails.title,
          bikeLearnMore: subPageDetails.learnMore,
        }
      : {
          bikeCategory: data[0].category,
          bikeTitle: data[0].title,
          bikeLearnMore: data[0].learnMore,
        };

  let [bikeDetails, setBikeDetails] = useState(initialData);

  let [currentTab, serCurrentTab] = useState(0);

  const onTabChange = (event, newValue) => {
    serCurrentTab(newValue);
  };

  let { bikeCategory, bikeTitle, bikeLearnMore } = bikeDetails;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  /**
   * Slider is prepared here
   */
  React.useEffect(() => {
    let swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
      },
    });

    if (subPageDetails !== undefined) {
      swiper.slideTo(subPageDetails.id, false, false);
    }

    swiper.on('slideChange', function() {
      setBikeDetails({
        bikeCategory: data[this.realIndex].category,
        bikeTitle: data[this.realIndex].title,
        bikeLearnMore: data[this.realIndex].learnMore,
      });
    });
  }, []);

  return (
    <div className={classes.wrapper} {...rest}>
      {/* Slider Starts */}
      <SectionHeader
        title={
          <span className={(classes.textWhite, classes.marginTop5)}>
            {bikeTitle}
          </span>
        }
        subtitle={bikeCategory}
        align="center"
        data-aos="fade-up"
      />
      <div
        className={clsx('swiper-container', classes.swiperContainer)}
        data-aos="fade-up"
      >
        <div className={clsx(classes.swiperWrapper, 'swiper-wrapper')}>
          {data.map((item, index) => (
            <div key={index} className="swiper-slide">
              <Image
                className={clsx(classes.bikeImage)}
                src={item.largeImage.src}
              />
            </div>
          ))}
        </div>
        <div className={classes.swiperNav}>
          <div className={clsx('swiper-button-prev')} />
          <div className={clsx('swiper-button-next')} />
        </div>
      </div>

      {/* Slider Ends */}

      {/* Learn More Starts */}
      <Grid container>
        <Grid item container xs={12} md={6}>
          <Grid
            item
            xs={12}
            className={clsx('section-header__title-wrapper', classes.learnMore)}
            data-aos="fade-up"
          >
            <Typography
              align="left"
              variant="h4"
              gutterBottom
              className={clsx('section-header__title', classes.learnMoretitle)}
            >
              Learn More
            </Typography>

            <Typography
              variant="h6"
              align="left"
              className={clsx('section-header__subtitle')}
            >
              {bikeLearnMore}
            </Typography>
            <List className={classes.learnMoreButtonsGroup}>
              <ListItem className={clsx(classes.paddingZero)}>
                <a href="/bike-renting">
                  <Button
                    className={classes.bookNowBtn}
                    variant="contained"
                    size="small"
                  >
                    Book Now
                  </Button>
                </a>
              </ListItem>
              <ListItem className={clsx(classes.paddingZero, classes.flexEnd)}>
                <a
                  className={classes.viewGalleryLink}
                  href="/gallery"
                  title="Tour de Amsterdam"
                >
                  View Gallery
                </a>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid item container justify="flex-end" xs={12} md={6}>
          <Image
            src="http://assets.it22.nl/rental/slider_sub_image.png"
            srcSet="http://assets.it22.nl/rental/slider_sub_image.png"
            className={classes.learnMoreImage}
          />
        </Grid>
      </Grid>
      {/* Learn More Ends */}

      {/* Bike Details Start */}
      <Grid container>
        <Grid item container xs={12}>
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: '#3BB0E5',
              },
            }}
            variant="scrollable"
            value={currentTab}
            onChange={onTabChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Price" {...a11yProps(0)} />
            <LinkTab label="Specification" {...a11yProps(1)} />
            <LinkTab label="Pedal" {...a11yProps(2)} />
            <LinkTab label="Sizing" {...a11yProps(3)} />
            <LinkTab label="FAQ" {...a11yProps(4)} />
          </Tabs>
          <TableLayout rows={tableRows} />
        </Grid>
      </Grid>
      {/* Bike Details End */}
    </div>
  );
};

BikesSlider.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default BikesSlider;
