import React, { Component } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../styles/utilities/settings';
import { button } from '../styles/utilities/elements';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import Wrapper from '../styles/utilities/Wrapper';
import { above, below } from '../styles/utilities/mediaQueries';
import DefaultBanner from '../components/organisms/banners/DefaultBanner';
import fonts from '../styles/utilities/fonts';
import BackgroundImage, { SBackgroundImage } from '../components/atoms/BackgroundImage';


class BlogRollPage extends Component {
  state = {
    countVisible: 6,
  }

  LoadMore(crntCount) {
    const updatedCountVis = crntCount + 6;
    this.setState(() => ({
      countVisible: updatedCountVis,
    }));
  }

  render() {
    const { countVisible } = this.state;
    return (
      <Layout>
        <StaticQuery
          query={BLOG_QUERY}
          render={data => (
            <div className="blog-layout">
              <Dochead
                title="Blog"
                siteName={data.wordpressSiteMetadata.name}
                pageImage={data.wordpressAcfOptions.options.blog_banner_image && data.wordpressAcfOptions.options.blog_banner_image.url}
                description={data.wordpressSiteMetadata.description}
              />
              <DefaultBanner
                page={{
                  title: data.wordpressAcfOptions.options.blog_banner_copy.heading,
                  mainImage: data.wordpressAcfOptions.options.blog_banner_image,
                  color: 'navy',
                  description: data.wordpressAcfOptions.options.blog_banner_copy.copy,
                }}
                content={{
                  overlay_color: 'navy',
                }}
              />
              <SBlog>
                <Wrapper>
                  <div className="posts">
                    {data.allWordpressPost.edges.map(({ node }, index) => (
                      <React.Fragment key={node.id}>
                        {(countVisible >= index + 1)
                        && (
                          <div className="single-post">
                            <Link to={`/blog/${node.slug}`}>
                              <SBlogPost>
                                <BackgroundImage src={node.acf.main_image} />
                                <div className="content">
                                  <div className="blog-name">
                                    <h5>
                                      {node.title}
                                    </h5>
                                    <span>Read More</span>
                                  </div>

                                </div>

                              </SBlogPost>
                            </Link>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  {(countVisible < data.allWordpressPost.edges.length)
                  && <a href={null} className="load-more" onClick={() => { this.LoadMore(countVisible); }}>Load More</a>}
                </Wrapper>
              </SBlog>
            </div>
          )}
        />
      </Layout>
    );
  }
}

export default BlogRollPage;

const BLOG_QUERY = graphql`{
  wordpressAcfOptions {
    options {
      blog_banner_copy {
        heading
        copy
      }
      blog_banner_image {
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
  allWordpressPost(sort: {fields: date, order: DESC}) {
    edges {
      node {
        id
        title
        slug
        content
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
        }
      }
    }
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;

const SBlog = styled.div`
  text-align: center;
  margin-bottom: 100px;

  .posts {

    ${above.smallPage`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: -50px;
    `}

    ${below.smallPage`
      margin: 0 -15px;
    `}
  }

  .load-more {
    ${button};
    width: auto;
    ${fonts.HelveticaNeueBold};
  }

  .single-post {
    width: 100%;

    ${below.ipadPort`
      max-width: 50%;
      padding: 0 50px 75px 0;
      margin-bottom: -25px;
    `}

    ${below.smallPage`
      max-width: 100%;
      padding: 0;
      margin-bottom: 50px;
    `}

    ${above.ipadPort`
      max-width: 33.33%;
      padding: 0 50px 75px 0;
      margin-bottom: -25px;
    `}

    &:nth-child(3n - 2) {

      .blog-name {
        clip-path: polygon(0 0, 100% 4%, 100% 95%, 0% 100%);
      }
    }

    &:nth-child(3n - 1) {

      .blog-name {
        clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);
      }
    }

    &:nth-child(3n) {

      .blog-name {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 91%);
      }
    }

    ${SBackgroundImage} {
      width: 100%;
      height: 300px;
    }

    a {
      display: block;
    }
  }
`;

const SBlogPost = styled.div`
  position: relative;
  overflow-x: hidden;
  text-align: left;

  .blog-name {
    padding: 20px 40px 22px;
    position: relative;
    margin-top: -75px;
    left: 0;
    width: 102%;
    background-color: ${colors.navy};
    margin-bottom: 0;

    ${below.ipadPort`
      padding: 21px 30px 20px;
    `}

    ${below.smallPage`
      padding: 21px 50px 20px;
    `}

    span {
      font-size: 12px;
      color: ${colors.white};
      ${fonts.HelveticaNeueBold};
    }
  }

  h5 {
    color: ${colors.white};
    ${fonts.HelveticaNeueBold};
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 275px;
  }
`;
