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
} from '@material-ui/core';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';

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
    paddingTop: 20,
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
      background: '#e9511c',
    },
  },
  makeAnAppointmentBtn: {
    marginTop: '1rem',
    marginBottom: '2rem',
    color: 'white',
    padding: '1rem 2rem',
    background: '#3BB0E5',
    '&:hover': {
      color: '#3BB0E5',
      background: 'white',
    },
    [theme.breakpoints.down('sm')]: {
      width: 170,
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
  tourDetails: {
    paddingTop: 50,
    paddingBottom: 0,
    height: '22rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      height: '35rem',
    },
  },
  tourDetailsTitle: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 50,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
    },
  },
  dateRangeSelection: {
    position: 'relative',
    top: '-8rem',
    zIndex: 1,
    border: '1px solid #eee',
    paddingTop: 35,
    background: 'white',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow:
      '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 0px 4px rgba(63, 63, 68, 0.2)',
    [theme.breakpoints.down('sm')]: {
      position: 'initial',
      border: 'none',
      margin: 'unset',
      boxShadow: 'none',
    },
  },
}));

const PackagesSlider = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

  let [packageDetails, setPackageDetails] = useState({
    packageImage: data[0].largeImage.src,
    packageTitle: data[0].learnMoreTitle,
    packageLearnMore: data[0].learnMoreDescription,
    packageTourDetails: data[0].tourDetails,
  });

  let [currentTab, serCurrentTab] = useState(0);

  const [tourDateRange, setTourDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  let {
    packageImage,
    packageTitle,
    packageLearnMore,
    packageTourDetails,
  } = packageDetails;

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

    swiper.on('slideChange', function() {
      setPackageDetails({
        packageImage: data[this.realIndex].largeImage.src,
        packageTitle: data[this.realIndex].learnMoreTitle,
        packageLearnMore: data[this.realIndex].learnMoreDescription,
        packageTourDetails: data[this.realIndex].tourDetails,
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
              <div
                className={classes.sliderImage}
                style={{
                  backgroundImage: `url(${packageImage})`,
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
                          dangerouslySetInnerHTML={{
                            __html: packageLearnMore,
                          }}
                        ></div>
                        <List className={classes.learnMoreButtonsGroup}>
                          <ListItem className={clsx(classes.paddingZero)}>
                            <a href="/tours-booking">
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

      <Section className={classes.tourDetails}>
        {/* Tour Details Start */}
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography
              align="left"
              variant="h4"
              gutterBottom
              className={clsx(
                'section-header__title',
                classes.tourDetailsTitle,
              )}
            >
              Tour Details
            </Typography>
            <div
              dangerouslySetInnerHTML={{
                __html: packageTourDetails,
              }}
            ></div>
          </Grid>
          <Grid
            className={classes.dateRangeSelection}
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
          >
            <DateRange
              ranges={[selectionRange]}
              onChange={item => setTourDateRange([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              showMonthAndYearPickers={false}
              ranges={tourDateRange}
              showDateDisplay={false}
              renderStaticRangeLabel={false}
              rangeColors={['#3BB0E5']}
            />
            <a href="/tours-booking">
              <Button
                className={classes.makeAnAppointmentBtn}
                variant="contained"
                size="small"
              >
                Make An Appointment
              </Button>
            </a>
          </Grid>
        </Grid>
        {/* Tour Details End */}
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
