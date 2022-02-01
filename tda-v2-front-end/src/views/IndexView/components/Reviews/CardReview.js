import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import CardBase from './CardBase';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    background: 'transparent',
    color: 'white',
  },
}));

/**
 * Component to display the review card
 *
 * @param {Object} props
 */
const CardReview = ({
  icon,
  text,
  authorPhoto,
  authorName,
  authorTitle,
  align = 'center',
  textVariant = 'h6',
  className,
  textProps = {},
  listItemPrimaryTypographyProps = {},
  listItemSecondaryTypographyProps = {},
  ...rest
}) => {
  const classes = useStyles();

  let justifyGrid = 'center';
  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return (
    <CardBase
      className={clsx('card-review', classes.root, className)}
      {...rest}
    >
      <Grid container spacing={2} className="card-review__wrapper">
        <Grid
          item
          container
          justify={justifyGrid}
          xs={12}
          className="card-review__icon-wrapper"
        >
          {icon}
        </Grid>
        <Grid item xs={12} className="card-review__text-wrapper">
          <Typography
            variant={textVariant}
            align={align}
            component="p"
            {...textProps}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12} className="card-review__lits-container">
          <Grid
            container
            justify={justifyGrid}
            className="card-review__list-wrapper"
          >
            <List disablePadding className="card-review__list">
              <ListItem className="card-review__list-item">
                <ListItemAvatar className="card-review__list-item-avatar">
                  <>
                    <Avatar
                      {...authorPhoto}
                      alt={authorName}
                      className="card-review__avatar"
                    />
                    <ListItemText
                      className="card-review__list-item-text"
                      primary={authorName}
                      primaryTypographyProps={{
                        ...listItemPrimaryTypographyProps,
                      }}
                      secondaryTypographyProps={{
                        ...listItemSecondaryTypographyProps,
                      }}
                    />
                  </>
                </ListItemAvatar>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </CardBase>
  );
};

export default CardReview;
