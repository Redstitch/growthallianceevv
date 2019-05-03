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
      title={data.wordpressPage.title !== 'Home' ? data.wordpressPage.title : null}
      siteName={data.wordpressSiteMetadata.name}
      pageImage={data.wordpressPage.acf.main_image && data.wordpressPage.acf.main_image.localFile.childImageSharp.original.src}
      description={data.wordpressPage.acf.description ? data.wordpressPage.acf.description : data.wordpressSiteMetadata.description}
    />
    <PageBanners
      content={data.wordpressPage.acf.banners_page}
      page={{
        title: data.wordpressPage.title,
        mainImage: data.wordpressPage.acf.main_image.localFile.childImageSharp.fixed,
        color: data.wordpressPage.acf.page_color,
        description: data.wordpressPage.acf.description ? data.wordpressPage.acf.description : null,
      }}
    />
    <PageWidgets content={data.wordpressPage.acf.widgets_page} color={data.wordpressPage.acf.page_color} />
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
      page_color
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
      banners_page {
        __typename
        ... on WordPressAcf_pannel_banner {
          panels {
            heading
            copy
            link
            image {
              localFile {
                childImageSharp {
                  original {
                    src
                  }
                  fixed(width: 1000, quality: 100) {
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
      }
      widgets_page {
        __typename
        ... on WordPressAcf_blog_feed {
          heading_copy
        }
        ... on WordPressAcf_upcoming_event {
          heading_copy
          copy
          button {
            copy
            url
          }
        }
        ... on WordPressAcf_success_story {
          image {
            localFile {
              childImageSharp {
                original {
                  src
                }
                fluid(maxWidth: 276, maxHeight: 276, quality: 100) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          content {
            quote
            name
            title
          }
        }
        ... on WordPressAcf_image_feature_large {
          image {
            localFile {
              childImageSharp {
                original {
                  src
                }
                fluid(maxWidth: 888, maxHeight: 600, quality: 100) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          content {
            image_alignment
            background_color
            heading
            content
            button {
              copy
              link
            }
          }
        }
        ... on WordPressAcf_image_feature {
          features {
            image {
              localFile {
                childImageSharp {
                  original {
                    src
                  }
                  fluid(quality: 100, maxHeight: 550, maxWidth: 768) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            content {
              heading
              copy
              color
              button {
                copy
                link
              }
            }
          }
        }
        ... on WordPressAcf_number_ticker {
          number_alignment
          heading {
            title
            copy
            link {
              copy
              page
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
              link
              new_tab
            }
          }
        }
        ... on WordPressAcf_full_width_image {
          image {
            localFile {
              childImageSharp {
                original {
                  src
                }
                fluid(quality: 100, maxWidth: 1200) {
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
        ... on WordPressAcf_content_columns {
          background_color
          no_color
          heading_copy
          column_alignment
          footer_button {
            copy
            page
            url
            new_tab
          }
          columns {
            heading
            copy
            button {
              copy
              url
            }
          }
        }
        ... on WordPressAcf_image_wdescription {
          description
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 670, quality: 100) {
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
        ... on  WordPressAcf_rich_text {
          copy
        }
        ... on WordPressAcf_card_links {
          heading {
            title
            copy
            link {
              copy
              page
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
            link {
              copy
              page
            }
          }
          cards {
            image {
              localFile {
                childImageSharp {
                  original {
                    src
                  }
                  fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
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
              localFile {
                childImageSharp {
                  fluid(quality: 100) {
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
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;
