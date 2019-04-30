import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { imageBG, absoluteCenter } from '../../../styles/utilities/elements';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { above, below } from '../../../styles/utilities/mediaQueries';
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

const SDefaultBanner = styled.div`
  ${imageBG};
  margin-bottom: 100px;

  &:after {
    content: '';
    display: block;
    background-color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
    ${absoluteCenter};
    width: 101%;
    height: 101%;
    opacity: .6;
  }

  h1 {
    font-size: 50px;
    font-weight: 200;

    ${below.ipadLand`
      font-size: 35px;
    `}
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 50px 0;
    color: ${colors.white};

    ${above.ipadLand`
      max-width: 50%;
      padding: 70px 0;
    `}
  }
`;
