import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FluidYouTube from '../components/FluidYouTube';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Something went terribly wrong</h1>
    <p>I couldn't find the page you're looking for. Maybe this will make up for it?</p>
    <FluidYouTube id="t3otBjVZzT0" title="YouTube video: Something went terribly wrong" />
  </Layout>
);

export default NotFoundPage;
