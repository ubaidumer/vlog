/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Blog from 'views/Blog';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const BlogPage = () => {
  return <WithLayout component={Blog} layout={Main} />;
};

export default BlogPage;
