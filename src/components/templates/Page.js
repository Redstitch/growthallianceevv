import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Banner from '../atoms/imgix/Banner';
import Dochead from '../Dochead';
import imageFixer from '../../js/imageFixer';

const Page = ({ data }) => (
  <Layout>
    <Dochead
      title={data.wordpressPage.title !== 'Home' ? data.wordpressPage.title : null}
      siteName={data.wordpressSiteMetadata.name}
      pageImage={data.wordpressPage.acf.featured_image && imageFixer(data.wordpressPage.acf.featured_image.url)}
      description={data.wordpressPage.acf.description ? data.wordpressPage.acf.description : data.wordpressSiteMetadata.description}
    />
    {data.wordpressPage.acf.featured_image
    && <Banner src={data.wordpressPage.acf.featured_image.url} />
    }
  </Layout>

);

export default Page;

export const query = graphql`
query PageQuery($slug: String!) {
  wordpressPage(slug: {eq: $slug}) {
    slug
    title
    acf {
      description
      featured_image {
        url
        name
      }
    }
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;
