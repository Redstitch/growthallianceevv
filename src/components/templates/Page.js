import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import PageBanners from '../organisms/PageBanners';
import PageWidgets from '../organisms/PageWidgets';

export const PageContext = React.createContext();

const Page = ({ data }) => (
  <Layout>
    <Dochead
      title={
        data.wordpressPage.title !== 'Home'
          ? data.wordpressPage.title.replace('&#038;', '&')
          : null
      }
      siteName={data.wordpressSiteMetadata.name}
      pageImage={
        data.wordpressPage.acf.main_image &&
        data.wordpressPage.acf.main_image.url
      }
      description={
        data.wordpressPage.acf.description
          ? data.wordpressPage.acf.description
          : data.wordpressSiteMetadata.description
      }
    />
    <PageBanners
      content={data.wordpressPage.acf.banners_page}
      page={{
        title: data.wordpressPage.title,
        mainImage: data.wordpressPage.acf.main_image,
        color: data.wordpressPage.acf.page_color,
        description: data.wordpressPage.acf.description
          ? data.wordpressPage.acf.description
          : null,
      }}
    />
    {'<!-- test -->'}
    <PageWidgets
      content={data.wordpressPage.acf.widgets_page}
      color={data.wordpressPage.acf.page_color}
    />
  </Layout>
);

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      slug
      title
      acf {
        description
        page_color
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
        banners_page {
          __typename
          ... on WordPressAcf_banner {
            overlay_color
          }
          ... on WordPressAcf_pannel_banner {
            panels {
              heading
              copy
              button {
                copy
                page
                url
                new_tab
              }
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
        widgets_page {
          __typename
          ... on WordPressAcf_blog_feed {
            heading_copy
            category
          }
          ... on WordPressAcf_upcoming_event {
            heading_copy
            copy
            button {
              copy
              page
              url
              new_tab
            }
          }
          ... on WordPressAcf_success_story {
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
            content {
              quote
              name
              title
            }
            button {
              copy
              page
              url
              new_tab
            }
          }
          ... on WordPressAcf_image_feature_large {
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
            content {
              image_alignment
              background_color
              heading
              content
              button {
                copy
                page
                url
                new_tab
              }
            }
          }
          ... on WordPressAcf_image_feature {
            features {
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
              content {
                heading
                copy
                color
                button {
                  copy
                  page
                  url
                  new_tab
                }
              }
            }
          }
          ... on WordPressAcf_number_ticker {
            number_alignment
            heading {
              title
              copy
              button {
                copy
                page
                url
                new_tab
              }
            }
            rows {
              row_heading
              row_color
              numbers {
                prefix__suffix
                label
                number
                sub_copy
              }
            }
            footer {
              copy
              button {
                copy
                page
                url
                new_tab
              }
            }
          }
          ... on WordPressAcf_full_width_image {
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
          ... on WordPressAcf_content_columns {
            background_color
            no_color
            heading_copy
            footer_button {
              copy
              page
              url
              new_tab
            }
            columns {
              heading
              large_subhead
              copy
              button {
                copy
                page
                url
                new_tab
              }
            }
          }
          ... on WordPressAcf_image_wdescription {
            description
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
          ... on WordPressAcf_rich_text {
            wide
            copy
          }
          ... on WordPressAcf_javascript_link {
            source
          }
          ... on WordPressAcf_card_links {
            heading {
              title
              copy
              button {
                copy
                page
                url
                new_tab
              }
            }
            cards_rel {
              wordpress_id
            }
          }
          ... on WordPressAcf_card_links_manual {
            heading {
              title
              copy
              button {
                copy
                page
                url
                new_tab
              }
            }
            cards {
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
              copy {
                title
                url
              }
            }
          }
          ... on WordPressAcf_tabbed_content {
            tabs {
              button_text
              title
              copy
            }
          }
          ... on WordPressAcf_copy_wimage {
            heading_copy
            blocks {
              copy
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
          ... on WordPressAcf_image_wtext {
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
            content {
              copy
              heading
              button {
                copy
                page
                url
                new_tab
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
  }
`;
