import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import urlFixer from '../../../js/urlFixer';
import { breakpoints } from '../../../styles/utilities/settings';
import Image from '../../atoms/imgix/Image';
import Wrapper from '../../../styles/utilities/Wrapper';
import { Shape5, Shape6 } from '../../atoms/Shapes';
import { absoluteCenter, button } from '../../../styles/utilities/elements';
import { below, above } from '../../../styles/utilities/mediaQueries';
import { pageColor } from '../../../js/autoColor';
import fonts from '../../../styles/utilities/fonts';

const ImageFeature = ({ widget, color }) => widget.features.map((feature, index) => (
  <SFeature key={feature.content.heading + index} color={color} selected={feature.content.color}>
    <Wrapper>
      <div className="image">
        {index % 2 === 0 ? <Shape5 /> : <Shape6 />}
        <Image
          src={feature.image.url}
          imgixProps={{
            imgixParams: {
              q: '100',
              h: 450,
              w: breakpoints.pageWidth / 2,
            },
          }}
          maxWidth={breakpoints.pageWidth / 2}
          minWidth={breakpoints.mobile}
        />
      </div>
      <div className="content">
        <h4>{feature.content.heading}</h4>
        <p>{feature.content.copy}</p>
        <Link to={urlFixer(feature.content.button.link)}>{feature.content.button.copy}</Link>
      </div>
    </Wrapper>
  </SFeature>
));

export default ImageFeature;

const SFeature = styled.div`

  ${below.ipadLand`
    padding: 0 30px;
  `}

  ${below.mobile`
    padding: 0 15px;
  `}

  + div {
    margin-top: 100px;
  }

  &:last-of-type {
    padding-bottom: 100px;

    ${below.ipadLand`
      padding-bottom: 50px;
    `}
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

    ${above.ipadLand`
      display: flex;
      align-items: center;
    `}

    > div {
      width: 100%;
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
  }

  .content {

    ${above.ipadLand`
      padding: 50px;
    `}

    ${below.ipadLand`
      padding-top: 30px;
    `}

    h4 {
      font-size: 30px;
      ${fonts.HelveticaLight};
      color: ${({ color, selected }) => (color ? pageColor(color) : pageColor(selected))};
    }

    > a {
      ${button};
    }
  }
`;
