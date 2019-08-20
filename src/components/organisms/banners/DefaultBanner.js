import React from 'react';
import styled from 'styled-components';
import { bannerContent } from '../../../styles/utilities/elements';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { above } from '../../../styles/utilities/mediaQueries';
import BackgroundImage from '../../atoms/BackgroundImage';

const DefaultBanner = ({ content, page }) => (
  <SDefaultBanner color={page.color ? page.color : null} backgroundColor={content.overlay_color} noMargin={page.noMargin}>
    <BackgroundImage src={page.mainImage}>
      <Wrapper>
        <div className="content">
          <h1>{page.title}</h1>
          {page.description
          && (
          <p dangerouslySetInnerHTML={{
            __html: page.description,
          }}
          />
          )}
        </div>
      </Wrapper>
    </BackgroundImage>
  </SDefaultBanner>
);

export default DefaultBanner;

export const SDefaultBanner = styled.div`
  ${bannerContent};
  ${({ noMargin }) => (noMargin ? 'margin-bottom: 0 !important;' : '')};

  &:after {
    background-color: ${({ color, backgroundColor }) => (color ? pageColor(color) : pageColor(backgroundColor))};
  }

  h1 {
    margin: 0 0 15px;
    padding-top: 10px;
    line-height: 1.2;
  }

  .content {
    max-width: 500px;

    ${above.ipadLand`
      max-width: 50%;
      padding: 40px 0;
    `}
  }
`;
