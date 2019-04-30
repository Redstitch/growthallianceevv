import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import Wrapper from '../../styles/utilities/Wrapper';

export const PostContext = React.createContext();

const Post = ({ data }) => (
  <PostContext.Provider value={{
    mainImage: data.wordpressPost.acf.main_image.url,
  }}
  >
    <Layout>
      <Dochead
        title={data.wordpressPost.title}
        siteName={data.wordpressSiteMetadata.name}
        pageImage={data.wordpressPost.acf.main_image && data.wordpressPost.acf.main_image.localFile.childImageSharp.original.src}
        description={data.wordpressPost.acf.description ? data.wordpressPost.acf.description : data.wordpressSiteMetadata.description}
      />
      <Wrapper>
        {data.wordpressPost.title}
      </Wrapper>
    </Layout>
  </PostContext.Provider>

);

export default Post;

export const query = graphql`
query PostQuery($slug: String!) {
  wordpressPost(slug: {eq: $slug}) {
    slug
    title
    acf {
      main_image {
        localFile {
          childImageSharp {
            original {
              src
            }
            fixed(width: 1200, quality: 100) {
              tracedSVG
              aspectRatio
              width
              height
              srcSet
              src
            }
          }
        }
      }
    }
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;
