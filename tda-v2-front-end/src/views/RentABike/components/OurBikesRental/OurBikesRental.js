import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Image, IconText, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight800: {
    fontWeight: 800,
  },
  bikeName: {
    fontWeight: 400,
    paddingTop: '1rem',
    paddingBottom: '.4rem',
  },
  coverImage: {
    objectFit: 'cover',
  },
  normalImage: {
    objectFit: 'none',
  },
  description: {
    color: 'rgba(144, 143, 162, 1)',
  },
  price: {
    background: '#3BB0E5',
    color: 'white',
    fontWeight: 700,
    padding: '1rem',
    textAlign: 'center',
    borderTopLeftRadius: '2rem',
    borderBottomLeftRadius: '2rem',
  },
  priceParent: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    position: 'relative',
    left: '32px',
    top: '-35px',
  },
  activeBike: {
    border: '1px solid rgba(59, 176, 229)',
    boxShadow:
      '0 .25rem 1rem rgba(59, 176, 229, .5),0 .3rem 0.5rem -.50rem rgba(59, 176, 229) !important',
  },
}));

const OurBikesRental = ({ page, data, className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} md={4} data-aos={'fade-up'}>
            <CardProduct
              className={page === item.link ? classes.activeBike : ''}
              withShadow
              liftUp
              mediaContent={
                <div>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      align="center"
                      className={classes.bikeName}
                    >
                      {item.category}
                    </Typography>
                  </Grid>
                  <Image
                    className={classes.normalImage}
                    {...item.cover}
                    alt={item.title}
                    lazyProps={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              }
              cardContent={
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      align="left"
                      className={classes.fontWeight800}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <div
                      className={classes.description}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </Grid>
                  <Grid
                    item
                    container
                    className={classes.priceParent}
                    wrap="nowrap"
                    xs={6}
                  >
                    <Typography noWrap className={classes.price}>
                      {item.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <LearnMoreLink
                      href={item.link}
                      title={'Learn more'}
                      variant="body1"
                    />
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurBikesRental;
