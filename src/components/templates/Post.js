import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import BlogBanner from '../organisms/banners/BlogBanner';
import PostWidgets from '../organisms/PostWidgets';

export const PostContext = React.createContext();

const Post = ({ data }) => (

  <Layout>
    <Dochead
      title={data.wordpressPost.title}
      siteName={data.wordpressSiteMetadata.name}
      pageImage={data.wordpressPost.acf.main_image && data.wordpressPost.acf.main_image.localFile.childImageSharp.original.src}
      description={data.wordpressPost.acf.description ? data.wordpressPost.acf.description : data.wordpressSiteMetadata.description}
    />
    <BlogBanner page={{
      title: data.wordpressPost.title,
      mainImage: data.wordpressPost.acf.main_image.localFile.childImageSharp.fixed,
      color: 'navy',
      description: null,
    }}
    />
    <PostWidgets content={data.wordpressPost.acf.post_content_post} color="navy" />
  </Layout>

);

export default Post;

export const query = graphql`
query PostQuery($slug: String!) {
  wordpressPost(slug: {eq: $slug}) {
    slug
    title
    content
    acf {
      main_image {
        localFile {
          childImageSharp {
            original {
              src
            }
            fixed(width: 1200, height: 700, quality: 100) {
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
      post_content_post {
        __typename
        ... on WordPressAcf_rich_text {
          copy
        }
        ... on WordPressAcf_gallery {
          images {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 500, maxHeight: 500) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
                fixed(quality: 100, width: 800) {
                  base64
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
        ... on WordPressAcf_image_block {
          image {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 708) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
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
