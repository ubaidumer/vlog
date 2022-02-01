import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { GraphQLClient, gql } from 'graphql-request';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

import GenericMoreButton from 'src/components/GenericMoreButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import House from './House';

const useStyles = makeStyles(theme => ({
  root: {},
  seeAll: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    display: 'flex',
    textDecoration: 'none',
    textTransform: 'unset',
  },
  navigateNextIcon: {
    fontSize: 15,
    marginLeft: 8
  },
  noPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
  noRecord: {
    paddingTop: 15,
    paddingBottom: 0,
  }
}));

const NewHousesReview = ({ className, ...rest }) => {
  const classes = useStyles();
  const [housesToReview, setHousesToReview] = useState([]);

  const getHouseToReview = () => {
    {
      const query = gql`
        query {
          objectSearchFilter(
            sort: "desc" 
            pageNum: 0 
            perPage: 5 
            isPublished: false
            ) {
            data {
              _id
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
              mediaImage {
                blobIdImage
                title
              }
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

      (async () => {
        await graphQLClient.request(query).then(data => {
          const result = data?.objectSearchFilter?.data
            ? data?.objectSearchFilter?.data
            : [];
          setHousesToReview(result);
        });
      })().catch(err => {
        //console.error(err);
        setHousesToReview([]);
      });
    }
  };

  useEffect(() => {
    getHouseToReview();
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={<GenericMoreButton />}
        title="Nieuwe Huizen ter Review"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={400}>
          <List className={
            clsx({
              [classes.noPadding]: housesToReview?.length === 0
            })
          }>
            {housesToReview?.length > 0 ? (
              housesToReview?.map((houseToReview, index) => (
                <House
                  divider={index < housesToReview.length - 1}
                  key={houseToReview._id}
                  house={houseToReview}
                />
              ))
            ) : (
            <ListItem className={clsx({
              [classes.noRecord]: housesToReview?.length === 0
            })}>
              <ListItemText
                primary={'Geen Huizen Gevonden'}
                primaryTypographyProps={{ variant: 'h6', noWrap: true }}
                  />
              </ListItem>
            )}
          </List>
        </Box>
        <Box p={2} display="flex" justifyContent="flex-end" className={
            clsx({
              [classes.noPaddingTop]: housesToReview?.length === 0
            })
          }>
          <Button
            className={classes.seeAll}
            component={RouterLink}
            size="small"
            to="/admin/huizen"
          >
            Toon all
            <NavigateNextIcon className={classes.navigateNextIcon} />
          </Button>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

NewHousesReview.propTypes = {
  className: PropTypes.string
};

export default NewHousesReview;
