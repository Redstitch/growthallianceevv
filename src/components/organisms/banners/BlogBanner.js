import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { PostContext } from '../../templates/Post';
import { bannerContent } from '../../../styles/utilities/elements';
import { colors } from '../../../styles/utilities/settings';
import Wrapper from '../../../styles/utilities/Wrapper';

const BlogBanner = () => (
  <PostContext.Consumer>
    {value => (
      <section>
        <SBlogBanner>
          <div className="image-background">
            <Img fixed={value.mainImage} />
          </div>
          <Wrapper>
            <div className="content">
              <h1>{value.title}</h1>
            </div>
          </Wrapper>
        </SBlogBanner>
      </section>
    )}
  </PostContext.Consumer>
);

export default BlogBanner;

const SBlogBanner = styled.div`
  ${bannerContent};
  height: 60vh;
  display: flex;
  align-items: center;

  &:after {
    background-color: ${colors.navy};
  }

  h1 {
    text-align: center;
  }
`;
