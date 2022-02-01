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
  workShopDetails: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  tableCell: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  workShopRatesTitle: {
    marginTop: '2rem',
    marginBottom: '1.5rem',
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
      style={{ fontSize: 12, minWidth: 130 }}
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TableLayout(props) {
  const { classes, rows, ...other } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Workshop Rates">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              style={
                index % 2 ? { background: '#e4e6e8' } : { background: 'white' }
              }
              key={row.description}
            >
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                {row.description}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createTableData(description, price) {
  return { description, price };
}

const tableRows = [
  createTableData('Adjusting the gear (derailleur gear)', '€15'),
  createTableData('Align or replace derailleur hanger', '€10'),
  createTableData('Replace casette + chain', ' €30'),
  createTableData('Replace rear derailleur + inner cable', '€20'),
  createTableData('Derailleur front + inner cable replaced', '€20'),
  createTableData('Replace bottom bracket', '€25'),
  createTableData(
    'Derailleur cable completely replaced (Front or rear)',
    '€20',
  ),
];

const WorkShopRates = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  let [currentTab, serCurrentTab] = useState(0);

  const onTabChange = (event, newValue) => {
    serCurrentTab(newValue);
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.wrapper} {...rest}>
      <Section className={classes.workShopDetails}>
        {/* Bike Details Start */}
        <Grid container>
          <Grid item container xs={12}>
            <Typography
              className={classes.workShopRatesTitle}
              variant="h6"
              component="span"
            >
              *Our workshop rates do not include the new parts.
            </Typography>
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
              <LinkTab label="Drive" {...a11yProps(0)} />
              <LinkTab label="Tires" {...a11yProps(1)} />
              <LinkTab label="Wheels" {...a11yProps(2)} />
              <LinkTab label="Brakes" {...a11yProps(3)} />
              <LinkTab label="Accessories" {...a11yProps(4)} />
              <LinkTab
                label="Frames and headsets
"
                {...a11yProps(5)}
              />
              <LinkTab label="Send" {...a11yProps(6)} />
            </Tabs>
            <TableLayout classes={classes} rows={tableRows} />
          </Grid>
        </Grid>
        {/* Bike Details End */}
      </Section>
    </div>
  );
};

WorkShopRates.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default WorkShopRates;
