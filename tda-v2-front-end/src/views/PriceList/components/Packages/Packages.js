import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { QuantityInput } from 'components/atoms';
import { Section } from 'components/organisms';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#1A2A49',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: '5px 15px 7px',
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  wrapper: {},
  packagesSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
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
  viewGalleryLink: {
    color: '#1A2A49',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  bookNowBtn: {
    background: '#3BB0E5',
    padding: '0.5rem 1rem',
    color: 'white',
    textTransform: 'capitalize',
    border: '1px solid #3BB0E5',
    '&:hover': {
      background: 'white',
      color: '#3BB0E5',
    },
  },
  paddingZero: {
    padding: 0,
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  tableLayout: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  featuredPackages: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    color: '#1A2A49',
    background: '#C4C4C4',
    width: 25,
    height: 25,
    borderRadius: '50%',
    textAlign: 'center',
    float: 'left',
    position: 'relative',
    '&::before': {
      position: 'relative',
      top: 5,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  reservationDays: {
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
    float: 'left',
  },
}));

const Packages = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.wrapper} {...rest}>
      <Section className={classes.packagesSection}>
        {/* Bike Details Start */}
        <Grid container>
          <Grid data-aos="fade-up" item container xs={12}>
            {data.map((item, index) => (
              <>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  align="left"
                  fontWeight="bold"
                  className={classes.title}
                >
                  {item.title}
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label={`${item.title} Price Details`}>
                    <TableHead>
                      <TableRow>
                        {item.head.map((tHead, tHeadIndex) => (
                          <StyledTableCell key={tHead.name} align={tHead.align}>
                            {tHead.name}
                          </StyledTableCell>
                        ))}
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item.rows.map((tRow, tRowIndex) => (
                        <StyledTableRow key={tRow.description}>
                          <StyledTableCell
                            dangerouslySetInnerHTML={{
                              __html: tRow.description,
                            }}
                            align="left"
                            scope="row"
                          ></StyledTableCell>
                          <StyledTableCell scope="row">
                            {tRow.reversationPeriod && <QuantityInput />}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {tRow.price}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Button
                              className={classes.bookNowBtn}
                              variant="contained"
                              size="small"
                            >
                              Book Now
                            </Button>
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <a
                              className={classes.viewGalleryLink}
                              href="/"
                              title="Tour de Amsterdam"
                            >
                              Learn More
                            </a>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ))}
          </Grid>
        </Grid>
        {/* Bike Details End */}
      </Section>
    </div>
  );
};

Packages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Packages;
