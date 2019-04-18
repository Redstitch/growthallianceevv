import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import imageFixer from '../../js/imageFixer';
import PageBanners from '../organisms/PageBanners';

export const PageContext = React.createContext();

const Page = ({ data }) => (
  <PageContext.Provider value={{
    mainImage: data.wordpressPage.acf.main_image.url,
    pageColor: data.wordpressPage.acf.page_color,
  }}
  >
    <Layout>
      <Dochead
        title={data.wordpressPage.title !== 'Home' ? data.wordpressPage.title : null}
        siteName={data.wordpressSiteMetadata.name}
        pageImage={data.wordpressPage.acf.main_image && imageFixer(data.wordpressPage.acf.main_image.url)}
        description={data.wordpressPage.acf.description ? data.wordpressPage.acf.description : data.wordpressSiteMetadata.description}
      />
      <PageBanners content={data.wordpressPage.acf.banners_page} />
    </Layout>
  </PageContext.Provider>

);

export default Page;

export const query = graphql`
query PageQuery($slug: String!) {
  wordpressPage(slug: {eq: $slug}) {
    slug
    title
    acf {
      description
      page_color
      main_image {
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
