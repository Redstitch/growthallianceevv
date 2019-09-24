import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import BlogBanner from '../organisms/banners/BlogBanner';
import PostWidgets from '../organisms/PostWidgets';
import RelatedPosts from '../molecules/RelatedPosts';

export const PostContext = React.createContext();

const Post = ({ data }) => (

  <Layout>
    <Dochead
      title={data.wordpressPost.title.replace('&#038;', '&')}
      siteName={data.wordpressSiteMetadata.name}
      pageImage={data.wordpressPost.acf.main_image && data.wordpressPost.acf.main_image.url}
      description={data.wordpressPost.acf.description ? data.wordpressPost.acf.description : data.wordpressSiteMetadata.description}
    />
    <BlogBanner page={{
      title: data.wordpressPost.title,
      mainImage: data.wordpressPost.acf.main_image,
      color: 'navy',
      description: null,
    }}
    />
    <PostWidgets content={data.wordpressPost.acf.post_content_post} color="navy" />
    <RelatedPosts currentPost={data.wordpressPost.slug} category={data.wordpressPost.acf.primary_category.slug} />
  </Layout>

);

export default Post;

export const query = graphql`
query PostQuery($slug: String!) {
  wordpressPost(slug: {eq: $slug}) {
    slug
    title
    content
    categories {
      slug
    }
    acf {
      main_image {
        width
        height
        url
        name
        sizes {
          large_size
          lqph_size
          middle_size
          small_size
          x_large_size
          x_small_size
          xx_large_size
          xx_small_size
        }
      }
      primary_category {
        slug
      }
      post_content_post {
        __typename
        ... on WordPressAcf_rich_text {
          copy
        }
        # ... on WordPressAcf_gallery {
        #   images {
        #     width
        #     height
        #     url
        #     name
        #     sizes {
        #       large_size
        #       lqph_size
        #       middle_size
        #       small_size
        #       x_large_size
        #       x_small_size
        #       xx_large_size
        #       xx_small_size
        #     }
        #   }
        # }
        ... on WordPressAcf_image_block {
          image {
            width
            height
            url
            name
            sizes {
              large_size
              lqph_size
              middle_size
              small_size
              x_large_size
              x_small_size
              xx_large_size
              xx_small_size
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
