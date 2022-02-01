import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { GraphQLClient, gql } from 'graphql-request';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import GenericMoreButton from 'src/components/GenericMoreButton';

import capitalize from 'src/utils/capitalize';

const useStyles = makeStyles(theme => ({
  root: {},
  technology: {
    height: 30,
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  seeAll: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    display: 'flex',
    textDecoration: 'none',
    textTransform: 'unset',
  }
}));

const TopHouses = ({ className, ...rest }) => {
  const classes = useStyles();
  const [topHouses, setTopHouses] = useState([]);

  const query = gql`
    query {
      findAllObjectWithViews(sort: "desc", pageNum: 0, perPage: 5) {
        data {
          _id
          vlogView
          vlogPurchase
          houseId
          address {
            city
            area
            streetNo
            houseNo
            additionalHouseNo
            postCode
          }
          createdAt
          ownerId
          isReviewed
          isPublished
        }
      }
    }
  `;

  const graphQLClient = new GraphQLClient(
    `${process.env.REACT_APP_OBJECT_URL}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        languages: 'eng'
      }
    }
  );

  const getTopHouses = () => {
    {
      (async () => {
        await graphQLClient.request(query).then(data => {
          const result = data?.findAllObjectWithViews?.data
            ? data?.findAllObjectWithViews?.data
            : [];
          setTopHouses(result);
        });
      })().catch(err => {
        //console.error(err);
      });
    }
  };

  useEffect(() => {
    getTopHouses();
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Top Huizen" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={900}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Adres</TableCell>
                <TableCell>Stad</TableCell>
                <TableCell>Publicatie Datum</TableCell>
                <TableCell align="right">Vlog Views</TableCell>
                <TableCell align="right">Vlog Aankopen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topHouses?.map(topHouse => (
                <TableRow hover key={topHouse?.houseId}>
                  <TableCell>
                    {topHouse?.address?.streetNo} {topHouse?.address?.houseNo}
                  </TableCell>
                  <TableCell>{capitalize(topHouse?.address?.city)}</TableCell>
                  <TableCell>
                    {moment(topHouse?.updatedDate).format('DD MMM, YYYY')}
                  </TableCell>
                  <TableCell align="right">{topHouse?.vlogView}</TableCell>
                  <TableCell align="right">{topHouse?.vlogPurchase}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button
          className={classes.seeAll}
          component={RouterLink}
          size="small"
          to="/admin/huizen"
          endIcon={<NavigateNextIcon />}
        >
          Toon all
        </Button>
      </Box>
    </Card>
  );
};

TopHouses.propTypes = {
  className: PropTypes.string
};

export default TopHouses;
