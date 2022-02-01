import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Archive,
  FeaturedArticles,
  FooterNewsletter,
  Hero,
  LatestStories,
  MostViewedArticles,
  PopularNews,
  SidebarArticles,
  SidebarNewsletter,
  Tags,
} from './components';

import {
  popularNews,
  featuredArticles,
  latestStories,
  sidebarArticles,
  mostViewedArticles,
  archive,
  tags,
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  section: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: 75,
    },
  },
  lastSection: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: 30,
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
}));

const BlogNewsroom = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Hero />
      <Section className={classes.section}>
        <PopularNews data={popularNews} />
      </Section>
      <Section className={classes.section}>
        <FeaturedArticles data={featuredArticles} />
      </Section>
      <Section className={classes.section}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <LatestStories data={latestStories} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles} />
          </Grid>
        </Grid>
      </Section>
      <Section className={classes.section}>
        <Grid
          style={{ padding: 50, background: '#F5F7FF' }}
          container
          spacing={isMd ? 4 : 0}
        >
          <Grid item xs={12} md={8}>
            <MostViewedArticles data={mostViewedArticles} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarNewsletter className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
      <Section className={classes.lastSection}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Archive data={archive} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Tags data={tags} />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default BlogNewsroom;
