import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import imageFixer from '../../js/imageFixer';
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
        pageImage={data.wordpressPost.acf.main_image && imageFixer(data.wordpressPost.acf.main_image.url)}
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
        url
      }
    }
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;
