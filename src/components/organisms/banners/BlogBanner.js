import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { bannerContent } from '../../../styles/utilities/elements';
import { colors } from '../../../styles/utilities/settings';
import Wrapper from '../../../styles/utilities/Wrapper';

const BlogBanner = ({ page }) => (
  <section>
    <SBlogBanner>
      <div className="image-background">
        <Img fixed={page.mainImage} />
      </div>
      <Wrapper>
        <div className="content">
          <h1>{page.title}</h1>
        </div>
      </Wrapper>
    </SBlogBanner>
  </section>
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
    margin-bottom: 0;
  }
`;
