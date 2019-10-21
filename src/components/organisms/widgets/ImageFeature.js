import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { Shape5, Shape6 } from '../../atoms/Shapes';
import { absoluteCenter, button } from '../../../styles/utilities/elements';
import { below, above } from '../../../styles/utilities/mediaQueries';
import { pageColor } from '../../../js/autoColor';
import fonts from '../../../styles/utilities/fonts';
import PageLink from '../../atoms/PageLink';
import Image from '../../atoms/Image';
import { colors } from '../../../styles/utilities/settings';


const ImageFeature = ({ widget, color }) => widget.features.map((feature, index) => (
  <SFeature key={feature.content.heading + index} color={color} selected={feature.content.color}>
    <Wrapper>
      <div className="image">
        {index % 2 === 0 ? <Shape5 /> : <Shape6 />}
        <Image src={feature.image} size="middle_size" alt={feature.content.heading} />
      </div>
      <div className="content">
        <h4>{feature.content.heading}</h4>
        <div dangerouslySetInnerHTML={{
          __html: feature.content.copy,
        }}
        />
        {feature.content.button.copy && <PageLink content={feature.content.button} /> }
      </div>
    </Wrapper>
  </SFeature>
));

export default ImageFeature;

const SFeature = styled.div`
  margin: 120px 0 100px;
  ${below.pageWidth`
  margin: 110px 0 100px;
  `}

  + div {
    margin-top: 100px;
  }

  &:nth-of-type(2n) {
    ${Wrapper} {
      flex-direction: row-reverse;
    }

    .image {
      svg {
        margin-left: -22px;
        height: 130%;
        width: calc(100% + 10px);

        ${below.ipadLand`
          margin-left: -15px;
        `}
      }
    }
  }

  ${Wrapper} {

    ${below.ipadLand`
    max-width: 600px;
    `}

    ${above.ipadLand`
      display: flex;
      align-items: center;
    `}

    > div {
      width: 100%;
      margin: 0 60px;
      ${below.ipadLand`
        margin: 0;
      `}
      &.image {
        width: 95%;
        margin: auto;
      }
    }
  }

  .image {
    position: relative;
    z-index: 2;

    ${above.ipadLand`
      margin: 20px;
      `}

    svg {
      fill: ${({ color, selected }) => (color ? pageColor(color) : pageColor(selected))};
      ${absoluteCenter};
      z-index: -1;
      width: calc(100% + 30px);
      margin-left: 0px;
    }

    .gatsby-image-wrapper {
      max-height: 400px;
      overflow: hidden;
    }
  }

  .content {

    h4 {
      font-size: 46px;
      line-height: 1;
      margin-bottom: 25px;
      ${fonts.HelveticaNeueRegular};
      color: ${({ color, selected }) => (color ? pageColor(color) : pageColor(selected))};
      ${below.pageWidth`
        font-size: 35px;
        margin-top: 15px;
      `}
      ${below.ipadLand`
        margin-top: 45px;
      `}
    }

    p {
      font-size: 15px;
      line-height: 1.75;
      color: ${colors.darkerGray};
    }

    ul {
      list-style: disc;
    }

    ol {
      list-style: decimal;
    }

    ul, ol {
      margin-left: 15px;
    }

    > a {
      ${button};
      ${fonts.HelveticaNeueBold};
      margin-top: 13px;
    }
  }
`;
