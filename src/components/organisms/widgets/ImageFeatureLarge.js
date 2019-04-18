import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import Image from '../../atoms/imgix/Image';
import urlFixer from '../../../js/urlFixer';
import { pageColor } from '../../../js/autoColor';
import { WideAngle } from '../../atoms/Shapes';
import { colors } from '../../../styles/utilities/settings';
import { absoluteCenter, button } from '../../../styles/utilities/elements';
import Globe, { SGlobe } from '../../atoms/Globe';
import { above, below } from '../../../styles/utilities/mediaQueries';
import SPicture from '../../../styles/atoms/SPicture';
import fonts from '../../../styles/utilities/fonts';

const ImageFeatureLarge = ({ widget, color }) => (
  <SImageFeatureLarge alignment={widget.content.image_alignment} color={color} backgroundColor={widget.content.background_color}>
    <div className="bar">
      <WideAngle />
      <WideAngle />
    </div>
    <Globe rotation="100deg" />
    <Wrapper wide>
      <div className="image">
        <Image
          src={widget.image.url}
          imgixProps={{
            imgixParams: {
              q: '100',
              h: 640,
              w: 1000,
            },
          }}
          maxWidth={1000}
          minWidth={1000}
        />
      </div>
      <div className="content">
        <h4>{widget.content.heading}</h4>
        <p>{widget.content.content}</p>
        {widget.content.button.copy
          && (
          <Link to={urlFixer(widget.content.button.link)}>
            {widget.content.button.copy}
          </Link>
          )
        }
      </div>

    </Wrapper>
  </SImageFeatureLarge>
);

export default ImageFeatureLarge;

const SImageFeatureLarge = styled.div`
  position: relative;
  padding: 50px 0;
  margin: 80px 0;
  overflow: hidden;

  ${below.ipadLand`
    padding-top: 0;
  `}

  ${SGlobe} {
    position: absolute;
    width: 900px;
    top: 50%;
    transform: translateY(-50%);
    ${({ alignment }) => (alignment === 'right' ? 'right: 90%;' : 'left: 90%;')};

    ${below.ipadLand`
      display: none;
    `}
  }

  .bar {
    background-color: ${({ color, backgroundColor }) => (color ? pageColor(color) : pageColor(backgroundColor))};
    height: 70%;
    width: 102%;
    position: relative;
    ${absoluteCenter};

    ${below.ipadLand`
      height: 100%;
    `}

    svg {
      fill: ${({ color, backgroundColor }) => (color ? pageColor(color) : pageColor(backgroundColor))};
      position: absolute;
      bottom: 100%;
      width: 102%;
      margin: -2px 0;
      ${({ alignment }) => (alignment === 'right' ? null : 'transform: rotateY(180deg);')};

      ${below.ipadLand`
        display: none;
      `}

      + svg {
        top: 100%;
        bottom: unset;
        transform: rotateX(180deg) ${({ alignment }) => (alignment === 'right' ? null : 'rotateY(180deg)')};
      }
    }
  }

  ${Wrapper} {
    position: relative;
    z-index: 2;

    ${above.ipadLand`
      display: flex;
      align-items: center;
      flex-direction: ${({ alignment }) => (alignment === 'right' ? 'row-reverse' : 'row')};
    `}
  }

  .image {
    width: 100%;

    ${above.ipadLand`
      max-width: calc(100% - 480px);
    `}

    ${SPicture} {
      ${below.ipadLand`
        margin: 0 -30px 30px;
      `}

      ${below.ipadPort`
        margin: 0 -15px 30px;
      `}
    }
  }

  .content {
    color: ${colors.white};

    h4 {
      font-size: 30px;
      ${fonts.HelveticaLight};
    }

    ${above.ipadLand`
      width: 480px;
      padding: ${({ alignment }) => (alignment === 'right' ? '0 50px 0 0' : '0 0 0 50px')};
    `}

    > a {
      ${button};
      ${({ color }) => ((color && color === 'orange') && `background-color: ${colors.navy}`)};
    }
  }
`;
