import React from 'react';
import styled from 'styled-components';
import { PageContext } from '../../templates/Page';
import Banner from '../../atoms/imgix/Banner';
import { imageBG } from '../../../styles/utilities/elements';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { above, below } from '../../../styles/utilities/mediaQueries';
import { colors } from '../../../styles/utilities/settings';

const DefaultBanner = ({ content }) => (
  <PageContext.Consumer>
    {value => (
      <SDefaultBanner>
        <Banner
          src={value.mainImage}
          imgixProps={{
            imgixParams: {
              q: '100',
              blend: pageColor(value.pageColor),
              balph: 70,
              bm: 'normal',
            },
          }}
        />
        <Wrapper>
          <div className="content">
            <h1>{content.heading}</h1>
            <p>{content.copy}</p>
          </div>
        </Wrapper>
      </SDefaultBanner>
    )}
  </PageContext.Consumer>
);

export default DefaultBanner;

const SDefaultBanner = styled.div`
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
