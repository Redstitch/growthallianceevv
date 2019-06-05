import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { bannerContent } from '../../../styles/utilities/elements';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { above } from '../../../styles/utilities/mediaQueries';
import { colors } from '../../../styles/utilities/settings';

const DefaultBanner = ({ preview, page }) => (
  <SDefaultBanner color={page.color ? page.color : null} noMargin={page.noMargin}>
    <div className="image-background">
      {preview ? <div className="gatsby-image-wrapper"><img src={page.mainImage} alt="..." /></div> : <Img fixed={page.mainImage} />}
    </div>
    <Wrapper>
      <div className="content">
        <h1>{page.title}</h1>
        {page.description
        && (
        <p dangerouslySetInnerHTML={{
          __html: page.description,
        }}
        />
        )
        }
      </div>
    </Wrapper>
  </SDefaultBanner>
);

export default DefaultBanner;

export const SDefaultBanner = styled.div`
  ${bannerContent};
  ${({ noMargin }) => (noMargin ? 'margin-bottom: 0 !important;' : '')};

  &:after {
    background-color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
  }

  h1 {
    margin: 0;
    padding-top: 10px;
  }

  p {
    margin-left: 4px;
  }

  .content {
    ${above.ipadLand`
      max-width: 50%;
      padding: 40px 0;
    `}
  }
`;
