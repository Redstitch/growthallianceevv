import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { breakpoints, colors } from '../../../styles/utilities/settings';
import Image from '../../atoms/imgix/Image';
import { pageColor } from '../../../js/autoColor';
import fonts from '../../../styles/utilities/fonts';
import { above, below } from '../../../styles/utilities/mediaQueries';

const LatestNews = ({ widget, color }) => (
  <StaticQuery
    query={LATESTNEWS_QUERY}
    render={data => (
      <SLatestNews>
        <Wrapper>
          <h3>{widget.heading_copy}</h3>
          <div className="posts">
            {data.allWordpressPost.edges.map(({ node }) => (
              <Link key={node.id} to={`/blog/${node.slug}`}>
                <SNewsItems color={color}>
                  <Image
                    src={node.acf.main_image.url}
                    imgixProps={{
                      imgixParams: {
                        q: '100',
                        w: breakpoints.mobile,
                        h: breakpoints.mobile,
                      },
                    }}
                    maxWidth={breakpoints.mobile}
                    minWidth={breakpoints.mobile}
                  />
                  <h5>
                    {node.title}
                    <span>Read More</span>
                  </h5>
                </SNewsItems>
              </Link>
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

const SLatestNews = styled.div`
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
      justify-content: center;
      margin-right: -50px;
    `}
  }

  a {
    width: 100%;

    ${above.ipadPort`
      max-width: ${breakpoints.mobile}px;
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

const SNewsItems = styled.div`
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

    ${below.ipadPort`
      padding: 20px 30px;
    `}

    span {
      display: block;
      font-size: 12px;
    }
  }
`;
