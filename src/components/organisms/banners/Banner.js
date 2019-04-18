import React from 'react';
import styled from 'styled-components';
import { PageContext } from '../../templates/Page';
import Image from '../../atoms/imgix/Image';
import { imageBG } from '../../../styles/utilities/elements';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { breakpoints, colors } from '../../../styles/utilities/settings';
import { above, below } from '../../../styles/utilities/mediaQueries';

const Banner = ({ content }) => (
  <PageContext.Consumer>
    {value => (
      <SBanner>
        <Image
          src={value.mainImage}
          imgixProps={{
            imgixParams: {
              q: '100',
              blend: pageColor(value.pageColor),
              balph: 70,
              bm: 'normal',
            },
          }}
          maxWidth={breakpoints.pageWidth}
          minWidth={breakpoints.ipadPort}
        />
        <Wrapper>
          <div className="content">
            <h1>{content.heading}</h1>
            <p>{content.copy}</p>
          </div>
        </Wrapper>
      </SBanner>
    )}
  </PageContext.Consumer>
);

export default Banner;

const SBanner = styled.div`
  ${imageBG};

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
