import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import imageFixer from '../../js/imageFixer';
import PageBanners from '../organisms/PageBanners';

const Page = ({ data }) => (
  <Layout>
    <Dochead
      title={data.wordpressPage.title !== 'Home' ? data.wordpressPage.title : null}
      siteName={data.wordpressSiteMetadata.name}
      pageImage={data.wordpressPage.acf.featured_image && imageFixer(data.wordpressPage.acf.featured_image.url)}
      description={data.wordpressPage.acf.description ? data.wordpressPage.acf.description : data.wordpressSiteMetadata.description}
    />
    <PageBanners content={data.wordpressPage.acf.banners_page} />
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
      }
      banners_page {
        __typename
        ... on WordPressAcf_pannel_banner {
          panels {
            heading
            copy
            link
            image {
              url
            }
          }
        }
        ... on WordPressAcf_banner {
          heading
          copy
        }
      }
    }
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;
