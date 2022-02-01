import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Typography, colors } from '@material-ui/core';
import { Image, LearnMoreLink } from 'components/atoms';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  bookNowBtn: {
    background: 'white',
    padding: '1rem 2rem',
    color: '#3BB0E5',
    border: '1px solid #3BB0E5',
    '&:hover': {
      background: '#3BB0E5',
      color: 'white',
    },
  },
  cardProduct: {
    backgroundColor: 'transparent',
  },
  packagesWrapper: {
    justifyContent: 'center',
  },
  packageTitleSection: {
    position: 'absolute',
  },
  packageName: {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '25px 0 10px 17px',
  },
  packageRequirement: {
    color: 'white',
    fontSize: '.825rem',
    textAlign: 'left',
    paddingLeft: 17,
  },
  coverImage: {
    objectFit: 'cover',
  },
  normalImage: {
    objectFit: 'cover',
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
    textTransform: 'uppercase',
  },
  priceParent: {
    justifyContent: 'flex-end',
    position: 'relative',
    top: '-35px',
  },
  learnMoreLink: {
    padding: '10px 0 22px 4px',
  },
}));

const Packages = ({ data, className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <Grid className={classes.packagesWrapper} container spacing={2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardProduct
              withShadow
              liftUp
              className={clsx('tours__card__product', classes.cardProduct)}
              mediaContent={
                <div>
                  <Grid className={classes.packageTitleSection} item xs={12}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      align="center"
                      className={classes.packageName}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      align="center"
                      className={classes.packageRequirement}
                      dangerouslySetInnerHTML={{ __html: item.subTitle }}
                    ></Typography>
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
                  <Grid
                    item
                    container
                    className={classes.priceParent}
                    wrap="nowrap"
                    xs={12}
                  >
                    <Grid item xs={6}>
                      <Typography noWrap className={classes.price}>
                        {item.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              }
              cardContent={
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <div
                      className={classes.description}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </Grid>
                  <Grid item xs={12}>
                    <LearnMoreLink
                      className={classes.learnMoreLink}
                      title={'Learn more'}
                      variant="body1"
                    />
                  </Grid>
                  <div style={{ flexGrow: 1 }} />
                  <a href="/tours-booking">
                    <Button
                      className={classes.bookNowBtn}
                      variant="contained"
                      size="small"
                      fullWidth
                    >
                      Book Now
                    </Button>
                  </a>
                </Grid>
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Packages;
