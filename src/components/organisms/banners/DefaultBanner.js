import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { bannerContent } from '../../../styles/utilities/elements';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { above } from '../../../styles/utilities/mediaQueries';
import { colors } from '../../../styles/utilities/settings';

const DefaultBanner = ({ content, mainColor, mainImage }) => (
  <SDefaultBanner color={mainColor}>
    <div className="image-background">
      <Img fixed={mainImage} />
    </div>
    <Wrapper>
      <div className="content">
        <h1>{content.heading}</h1>
        <p dangerouslySetInnerHTML={{
          __html: content.copy,
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
