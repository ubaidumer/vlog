import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
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
  TableRow,
  Paper,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

import FeaturedPackages from '../FeaturedPackages';

const useStyles = makeStyles(theme => ({
  wrapper: {},
  reviewAuthor: {
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
  },
  bikeImage: {
    maxWidth: '100%',
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
    position: 'relative',
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
  learnMoreSection: {
    position: 'absolute',
    top: '1px',
  },
  learnMore: {
    background: '#3BB0E5',
    padding: '3rem',
    color: 'white',
    position: 'relative',
    top: '3rem',
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
      background: '#e9511c',
      color: 'white',
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
  sliderImage: {
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  featuredPackages: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  clinicDetails: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

function TabPanel(props) {
  const { page, children, value, index, ...other } = props;

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
      style={{ fontSize: '12px' }}
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
      <Table aria-label="Clinic Details">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              style={
                index % 2 ? { background: '#e4e6e8' } : { background: 'white' }
              }
              key={row.schedule}
            >
              <TableCell component="th" scope="row">
                {row.schedule}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createTableData(schedule, status) {
  return { schedule, status };
}

const tableRows = [
  createTableData("Wednesday, July 22 - women's training level 2", 'Full'),
  createTableData('Thursday July 23 mixed level 2', 'Full'),
  createTableData('Thursday, July 23 - mixed level 2', 'Full'),
  createTableData('Monday, August 31 - mixed beginner', 'Full'),
  createTableData('Thursday September 3 - mixed level 2', 'Full'),
];

const PackagesSlider = props => {
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
          packageTitle: subPageDetails.title,
          packageLearnMore: subPageDetails.learnMore,
        }
      : {
          packageTitle: data[0].title,
          packageLearnMore: data[0].learnMore,
        };

  let [clinicDetails, setClinicDetails] = useState(initialData);

  let [currentTab, serCurrentTab] = useState(0);

  const onTabChange = (event, newValue) => {
    serCurrentTab(newValue);
  };

  let { packageTitle, packageLearnMore } = clinicDetails;

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
      setClinicDetails({
        packageImage: data[this.realIndex].largeImage.src,
        packageTitle: data[this.realIndex].title,
        packageLearnMore: data[this.realIndex].learnMore,
      });
    });
  }, []);

  return (
    <div className={classes.wrapper} {...rest}>
      {/* Slider Starts */}
      <div
        className={clsx(classes.swiperContainer, 'swiper-container')}
        data-aos="fade-up"
      >
        <div className={clsx(classes.swiperWrapper, 'swiper-wrapper')}>
          {data.map((item, index) => (
            <div key={index} className="swiper-slide">
              {/* <Image
                className={clsx(classes.bikeImage)}
                src={item.largeImage.src}
              /> */}
              <div
                className={classes.sliderImage}
                style={{
                  backgroundImage:
                    "url('https://assets.it22.nl/tda/clinics/ladies-only.png')",
                }}
              >
                {/* Learn More Starts */}
                <Section>
                  <Grid container>
                    <Grid
                      className={classes.learnMoreSection}
                      item
                      container
                      xs={12}
                      sm={8}
                      md={4}
                    >
                      <Grid
                        item
                        xs={12}
                        className={clsx(
                          'section-header__title-wrapper',
                          classes.learnMore,
                        )}
                        data-aos="fade-up"
                      >
                        <Typography
                          align="left"
                          variant="h4"
                          gutterBottom
                          className={clsx(
                            'section-header__title',
                            classes.learnMoretitle,
                          )}
                        >
                          {packageTitle}
                        </Typography>
                        <div
                          className={classes.description}
                          className={clsx('section-header__subtitle')}
                          dangerouslySetInnerHTML={{ __html: packageLearnMore }}
                        ></div>
                        <List className={classes.learnMoreButtonsGroup}>
                          <ListItem className={clsx(classes.paddingZero)}>
                            <a href="/clinics-booking">
                              <Button
                                className={classes.bookNowBtn}
                                variant="contained"
                                size="large"
                              >
                                Book Now
                              </Button>
                            </a>
                          </ListItem>
                          <ListItem
                            className={clsx(
                              classes.paddingZero,
                              classes.flexEnd,
                            )}
                          >
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
                  </Grid>
                </Section>
                {/* Learn More Ends */}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.swiperNav}>
          <div className={clsx('swiper-button-prev')} />
          <div className={clsx('swiper-button-next')} />
        </div>
      </div>

      {/* Slider Ends */}

      <Section className={classes.featuredPackages}>
        <FeaturedPackages />
      </Section>

      <Section className={classes.clinicDetails}>
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
              <LinkTab label="Start Dates" {...a11yProps(0)} />
              <LinkTab label="Training Information" {...a11yProps(1)} />
            </Tabs>
            <TableLayout rows={tableRows} />
          </Grid>
        </Grid>
        {/* Bike Details End */}
      </Section>
    </div>
  );
};

PackagesSlider.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PackagesSlider;
