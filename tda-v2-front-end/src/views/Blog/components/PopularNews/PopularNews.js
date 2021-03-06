import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Button, Typography, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      flex: '1 1 50%',
    },
    '& .card-product__media': {
      minHeight: 300,
      height: '100%',
      flex: '1 1 50%',
      paddingRight: 20,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      '& .card-product__content': {
        flex: '1 1 100%',
      },
      '& .card-product__media': {
        paddingRight: 0,
        flex: '1 1 100%',
        width: '100%',
      },
    },
  },
  cardProductReverse: {
    flexDirection: 'row-reverse',
  },
  image: {
    objectFit: 'cover',
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    border: '1px solid #3BB0E5',
    width: 176,
    height: 42,
    color: '#3BB0E5',
    '&:hover': {
      color: 'white',
      background: '#3BB0E5',
    },
    marginTop: theme.spacing(2),
    alignSelf: 'flex-start',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3),
    },
  },
  blogTitle: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    color: 'inherit',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.primary.main,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0),
    },
  },
}));

const PopularNews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => (
    <div className={classes.blogContent}>
      <div className={classes.tags}>
        {props.tags.map((item, index) => (
          <Typography variant="caption" className={classes.tag} key={index + 1}>
            {item}
          </Typography>
        ))}
      </div>
      <Typography
        variant="h6"
        color="textPrimary"
        className={classes.blogTitle}
      >
        <a className={classes.link} href="/blog-article">
          {props.title}
        </a>
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.author}
      >
        <i>
          {props.author.name} - {props.date}
        </i>
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        {props.subtitle}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
      >
        <a className={classes.link} href="/blog-article">
          Read more
        </a>
      </Button>
    </div>
  );

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="The Most Popular News"
        subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions."
        subtitleProps={{
          color: 'textPrimary',
        }}
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index} data-aos="fade-up">
            <CardProduct
              className={clsx(
                classes.cardProduct,
                index % 2 === 1 ? classes.cardProductReverse : {},
              )}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title} />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  date={item.date}
                  tags={item.tags}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

PopularNews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PopularNews;
