import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { colors } from '../../../styles/utilities/settings';
import { pageColor } from '../../../js/autoColor';
import fonts from '../../../styles/utilities/fonts';
import { above, below } from '../../../styles/utilities/mediaQueries';
import Card from '../../molecules/Card';

const LatestNews = ({ widget, color }) => (
  <StaticQuery
    query={LATESTNEWS_QUERY}
    render={data => (
      <SLatestNews count={data.allWordpressPost.edges.length}>
        <Wrapper>
          <h3>{widget.heading_copy}</h3>
          <div className="posts">
            {data.allWordpressPost.edges.map(({ node }) => (
              <Card key={node.id} content={node} color={color} link={`/blog/${node.slug}`} />
            ))}
          </div>
        </Wrapper>
      </SLatestNews>
    )}
  />
);

export default LatestNews;

const LATESTNEWS_QUERY = graphql`{
  allWordpressPost(limit: 3, sort: {fields: date}) {
    edges {
      node {
        id
        title
        slug
        content
        acf {
          main_image {
            url
          }
          news
        }
      }
    }
  }
}`;

export const SLatestNews = styled.div`
  text-align: center;
  margin-bottom: 100px;

  h3 {
    font-size: 45px;
    ${fonts.Helvetica};
    margin-bottom: 30px;
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};

    ${below.ipadPort`
      font-size: 30px;
    `}
  }

  .posts {

    ${above.ipadPort`
      display: flex;
      justify-content: ${({ count }) => (count <= 3 ? 'center' : 'flex-start')};
      margin-right: -20px;
      flex-wrap: wrap;
    `}

    ${above.ipadLand`
      margin-right: -50px;
    `}
  }

  a {
    width: 100%;

    ${above.ipadPort`
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
