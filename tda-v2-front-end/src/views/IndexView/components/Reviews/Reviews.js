import React, { useState } from 'react';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Typography, Grid } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import CardReview from './CardReview';

const useStyles = makeStyles(theme => ({
  root: {
    '&.swiper-pagination-bullet-active': {
      background: 'orange',
    },
  },
  swiperContainer: {
    width: '100%',
  },
  title: {
    color: 'white',
    marginBottom: '3rem',
  },
  subtitle: {
    color: 'white',
    marginBottom: '3rem',
  },
}));

const Reviews = ({ data, className, ...rest }) => {
  const classes = useStyles();

  const [reviewDesc, setReviewDesc] = useState('');

  let reviews = [];

  data.forEach((item, index) => {
    reviews.push(item.feedback);
  });

  React.useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 200000,
      },
    });

    swiper.slideTo(1, false, false);

    swiper.on('slideChange', function() {
      setReviewDesc(reviews[this.realIndex]);
    });

    setReviewDesc(reviews[1]);
  }, []);

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <Grid
        item
        xs={12}
        className={clsx('section-header__title-wrapper')}
        data-aos="fade-up"
      >
        <Typography
          align="center"
          variant="h4"
          gutterBottom
          className={clsx('section-header__title', classes.title)}
        >
          Here’s what they say about u
        </Typography>

        <Typography
          variant="h6"
          align="center"
          className={clsx('section-header__subtitle', classes.subtitle)}
        >
          {reviewDesc}
        </Typography>
      </Grid>
      <div
        className={clsx(
          'swiper-container index__reviews',
          classes.swiperContainer,
        )}
      >
        <div className="swiper-wrapper">
          {data.map((item, index) => (
            <CardReview
              key={index}
              className={'swiper-slide'}
              noBorder
              noShadow
              authorName={item.authorName}
              authorTitle={item.authorOccupation}
              authorPhoto={item.authorPhoto}
            />
          ))}
        </div>
        <div className={clsx('swiper-pagination', classes.root)} />
      </div>
    </div>
  );
};

export default Reviews;
