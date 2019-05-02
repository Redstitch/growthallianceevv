import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Card from './Card';
import Wrapper from '../../styles/utilities/Wrapper';
import { colors } from '../../styles/utilities/settings';
import { above, below } from '../../styles/utilities/mediaQueries';


class RelatedPosts extends Component {
  state = {
    cards: [],
  }

  arrPush(obj) {
    const { cards } = this.state;
    cards.push(obj);
  }

  render() {
    const { category } = this.props;
    const { cards } = this.state;
    return (
      <StaticQuery
        query={RELATEDPOSTS_QUERY}
        render={data => (
          <Wrapper>
            <SRelatedPosts>
              <h2>Related Posts</h2>
              <div className="posts">
                {data.allWordpressPost.edges.map(({ node }) => (node.categories[0].slug === category ? this.arrPush(node) : ''))}
                {Array.from(new Set(cards)).map((object, index) => (
                  <React.Fragment key={object.id}>
                    {index < 3 && <Card content={object} link={`/blog/${object.slug}`} color="navy" />}
                  </React.Fragment>
                ))}
              </div>
            </SRelatedPosts>
          </Wrapper>
        )}
      />
    );
  }
}


export default RelatedPosts;

const RELATEDPOSTS_QUERY = graphql`{
  allWordpressPost(sort: {fields: date, order: DESC}) {
    edges {
      node {
        id
        title
        slug
        path
        categories {
          slug
        }
        acf {
          main_image {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 400, maxHeight: 400) {
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
        categories {
          slug
        }
      }
    }
  }
}`;

const SRelatedPosts = styled.div`
  margin-top: 100px;

  h2 {
    text-align: center;
    color: ${colors.navy};
    margin-bottom: 50px;
  }

  .posts {
    ${above.ipadLand`
      display: flex;
      margin-right: -20px;
      justify-content: center;
    `}

    ${below.ipadLand`
      margin-bottom: 20px;
    `}

    > a {
      ${above.ipadLand`
        width: 33.3333%;
        padding-right: 20px;
        display: block;
      `}

      + a {
        ${below.ipadLand`
          margin-top: 20px;
        `}
      }
    }
  }
`;
