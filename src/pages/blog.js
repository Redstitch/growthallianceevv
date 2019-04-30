import React, { Component } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { colors } from '../styles/utilities/settings';
import { button } from '../styles/utilities/elements';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import Wrapper from '../styles/utilities/Wrapper';
import { above, below } from '../styles/utilities/mediaQueries';

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
        <Dochead title="Blog" />
        <StaticQuery
          query={BLOG_QUERY}
          render={data => (
            <SBlog>
              <Wrapper>
                <div className="posts">
                  {data.allWordpressPost.edges.map(({ node }, index) => (
                    <React.Fragment key={node.id}>
                      {(countVisible >= index + 1)
                      && (
                      <Link to={`/blog/${node.slug}`}>
                        <SBlogPost>
                          <Img fluid={node.acf.main_image.localFile.childImageSharp.fluid} />
                          <h5>
                            {node.title}
                            <span>Read More</span>
                          </h5>
                        </SBlogPost>
                      </Link>
                      )
                      }
                    </React.Fragment>
                  ))}
                </div>
                {(countVisible < data.allWordpressPost.edges.length)
                && <a href={null} className="load-more" onClick={() => { this.LoadMore(countVisible); }}>Load More</a>}
              </Wrapper>
            </SBlog>
          )}
        />
      </Layout>
    );
  }
}

export default BlogRollPage;

const BLOG_QUERY = graphql`{
  allWordpressPost(sort: {fields: date}) {
    edges {
      node {
        id
        title
        slug
        content
        acf {
          main_image {
            localFile {
              childImageSharp {
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
        }
      }
    }
  }
}`;

const SBlog = styled.div`
text-align: center;
margin-bottom: 100px;

.posts {
  ${above.ipadPort`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -50px;
  `}
}

a {
  width: 100%;

  ${above.ipadPort`
    max-width: 33.33%;
    padding-right: 50px;
  `}

  &:nth-child(3n - 2) {
      h5 {
        clip-path: polygon(0 0, 100% 4%, 100% 95%, 0% 100%);
      }
    }

    &:nth-child(3n - 1) {
      h5 {
        clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);
      }
    }

    &:nth-child(3n) {
      h5 {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 91%);
      }
    }
  &.load-more {
    ${button};
  }
}
`;

const SBlogPost = styled.div`
position: relative;
overflow-x: hidden;
text-align: left;

h5 {
  color: ${colors.white};
  padding: 20px 30px;
  position: relative;
  top: -20px;
  left: 0;
  width: 102%;
  background-color: ${colors.navy};

  ${below.ipadPort`
    padding: 20px 30px;
  `}

  span {
    display: block;
    font-size: 12px;
  }
}
`;
