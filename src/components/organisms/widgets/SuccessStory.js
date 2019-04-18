import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import Image from '../../atoms/imgix/Image';
import { Shape1 } from '../../atoms/Shapes';
import SPicture from '../../../styles/atoms/SPicture';
import { colors } from '../../../styles/utilities/settings';
import { absoluteCenter } from '../../../styles/utilities/elements';
import fonts from '../../../styles/utilities/fonts';
import { pageColor } from '../../../js/autoColor';
import { above, below } from '../../../styles/utilities/mediaQueries';

const SuccessStory = ({ widget, color }) => (
  <Wrapper>
    <SSuccessStory color={color}>
      <div className="image">
        <Image
          src={widget.image.url}
          imgixProps={{
            imgixParams: {
              q: '100',
              h: 276,
              w: 276,
            },
          }}
          maxWidth={276}
          minWidth={276}
        />
        <Shape1 />
      </div>
      <div className="content">
        <blockquote>
          {widget.content.quote}
        </blockquote>
        <p dangerouslySetInnerHTML={{
          __html: `<strong>${widget.content.name}</strong><br/>${widget.content.title}`,
        }}
        />
      </div>

    </SSuccessStory>
  </Wrapper>
);

export default SuccessStory;

const SSuccessStory = styled.div`
  padding: 50px 0;

  ${above.ipadPort`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    padding: 70px 0;
    align-items: center;
  `}

  .image {
    position: relative;
    width: 267px;
    margin: 20px;

    ${below.ipadPort`
      width: 200px;
      margin: 20px auto 40px;
    `}

    ${SPicture} {
      position: relative;
      z-index: 2;
    }

    svg {
      width: calc(100% + 60px);
      fill: ${({ color }) => (color ? pageColor(color) : colors.green)};
      ${absoluteCenter};

      ${below.ipadPort`
        width: calc(100% + 50px);
      `}
    }
  }

  .content {
    position: relative;
    z-index: 3;

    ${above.ipadPort`
      width: calc(100% - 267px);
      padding-left: 50px;
    `}

    ${above.ipadLand`
      padding-left: 100px;
    `}

    blockquote {
      background: none;
      border: none;
      padding: 0;
      font-size: 20px;
      ${fonts.HelveticaLight};
    }

    p {
      color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
    }
  }
`;
