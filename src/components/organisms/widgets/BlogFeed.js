import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import Wrapper from '../../../styles/utilities/Wrapper';
import { colors } from '../../../styles/utilities/settings';
import { pageColor } from '../../../js/autoColor';
import fonts from '../../../styles/utilities/fonts';
import { above, below } from '../../../styles/utilities/mediaQueries';
import Card from '../../molecules/Card';

const { GATSBY_CMS } = process.env;

class BlogFeed extends Component {
  state = {
    postList: null,
  }

  componentDidMount() {
    const { widget } = this.props;

    fetch(`${GATSBY_CMS}/wp-json/wp/v2/posts/?per_page=3&categories=${widget.category}`, {
      method: 'get',
    })
      .then(response => response.json())
      .then((data) => {
        this.setState({
          postList: data,
        });
      });
  }

  render() {
    const { widget, color } = this.props;
    const { postList } = this.state;
    return (
      <StaticQuery
        query={BLOGFEED_QUERY}
        render={({ posts }) => (
          <SBlogFeed count={posts.edges.length}>
            <Wrapper>
              <h3>{widget.heading_copy}</h3>
              <div className="posts">
                {postList && postList.map(listItem => posts.edges.map(({ node }) => node.wordpress_id === listItem.id
                  && <Card key={node.id} content={node} color={color} link={`/blog/${node.slug}`} />))}
              </div>
            </Wrapper>
          </SBlogFeed>
        )}
      />
    );
  }
}

export default BlogFeed;

const BLOGFEED_QUERY = graphql`{
  posts: allWordpressPost(sort: {fields: date}) {
    edges {
      node {
        id
        title
        slug
        content
        wordpress_id
        categories {
          wordpress_id
        }
        acf {
          main_image {
            localFile {
              childImageSharp {
                original {
                  src
                }
                fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                  tracedSVG
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

export const SBlogFeed = styled.div`
  text-align: center;
  margin-bottom: 100px;

  h3 {
    font-size: 45px;
    ${fonts.HelveticaNeueRegular};
    margin-bottom: 30px;
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};

    ${below.ipadPort`
      font-size: 30px;
    `}
  }

  .posts {

    ${below.smallPage`
    margin: 0 -50px;
  `}

    ${below.mobile`
    margin: 0 -60px;
    `}

    ${above.smallPage`
      display: flex;
      justify-content: ${({ count }) => (count <= 3 ? 'center' : 'flex-start')};
      margin-right: -20px;
      flex-wrap: wrap;
    `}

    ${above.ipadLand`
      margin-right: -50px;
    `}
  }

  h5 {
    ${fonts.HelveticaNeueBold};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${below.smallPage`
      max-width: none;
      padding: 20px 50px;
    `}
  }

  a {
    width: 100%;

    ${above.smallPage`
      max-width: 33.3333%;
      padding-right: 20px;
    `}

    ${above.ipadLand`
      padding-right: 50px;
    `}

    &:nth-child(3n - 2) {
      h5 {
        clip-path: polygon(0 0, 100% 4%, 100% 95%, 0% 100%);
        background-color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
      }
    }

    &:nth-child(3n - 1) {
      h5 {
        clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);
        background-color: ${({ color }) => (color ? pageColor(color) : colors.green)};
      }
    }

    &:nth-child(3n) {
      h5 {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 91%);
        background-color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
      }
    }
  }
`;
