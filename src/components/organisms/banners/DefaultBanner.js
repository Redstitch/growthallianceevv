import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { bannerContent } from '../../../styles/utilities/elements';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { above } from '../../../styles/utilities/mediaQueries';
import { colors } from '../../../styles/utilities/settings';

const DefaultBanner = ({ page }) => (
  <SDefaultBanner color={page.color}>
    <div className="image-background">
      <Img fixed={page.mainImage} />
    </div>
    <Wrapper>
      <div className="content">
        <h1>{page.title}</h1>
        <p dangerouslySetInnerHTML={{
          __html: page.description,
        }}
        />
      </div>
    </Wrapper>
  </SDefaultBanner>
);

export default DefaultBanner;

export const SDefaultBanner = styled.div`
  ${bannerContent};

  &:after {
    background-color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
  }

  .content {
    ${above.ipadLand`
      max-width: 50%;
      padding: 70px 0;
    `}
  }
`;
