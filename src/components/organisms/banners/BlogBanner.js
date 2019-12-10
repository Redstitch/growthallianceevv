import React from 'react';
import styled from 'styled-components';
import { bannerContent } from '../../../styles/utilities/elements';
import { colors } from '../../../styles/utilities/settings';
import Wrapper from '../../../styles/utilities/Wrapper';
import BackgroundImage from '../../atoms/BackgroundImage';

const BlogBanner = ({ page }) => (
  <section>
    <BackgroundImage src={page.mainImage} size="xx_large_size">
      <SBlogBanner>
        <Wrapper>
          <div className="content">
            <h1
              dangerouslySetInnerHTML={{
                __html: page.title,
              }}
            />
          </div>
        </Wrapper>
      </SBlogBanner>
    </BackgroundImage>
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
