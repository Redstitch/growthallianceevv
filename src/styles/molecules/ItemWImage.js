import styled from 'styled-components';
import { above, below } from '../utilities/mediaQueries';
import { misc, colors } from '../utilities/settings';
import { absoluteCenter } from '../utilities/elements';
import { pageColor } from '../../js/autoColor';
import fonts from '../utilities/fonts';

const ItemWImage = styled.div`
  padding: 0 0 50px;
  position: relative;

  ${above.ipadLand`
    transition-duration: ${misc.widgetTransition};
    ${({ isVisible }) => (isVisible ? 'bottom: 0' : 'bottom: -20px')};
  `}

  ${above.ipadPort`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    padding: 0 0 100px;
    align-items: ${({ team }) => (team ? 'flex-start' : 'center')};
  `}

  .image {
    position: relative;
    width: 267px;
    margin: 20px;

    ${below.ipadPort`
      width: 200px;
      margin: 20px auto 40px;
    `}

    .gatsby-image-wrapper {
      position: relative;
      z-index: 2;

      ${above.ipadLand`
        transition-duration: ${misc.widgetTransition};
        ${({ isVisible }) => (isVisible ? 'bottom: 0' : 'bottom: -10px')};
      `}
    }

    svg {
      width: calc(100% + 60px);
      fill: ${({ color }) => (color ? pageColor(color) : colors.green)};
      ${absoluteCenter};

      ${above.ipadLand`
        transition-duration: ${misc.widgetTransition};
        ${({ isVisible }) => (isVisible ? 'transform: translate(-50%,-50%) scale(1) rotate(0)' : 'transform: translate(-50%,-50%) scale(.90) rotate(2deg)')};
      `}

      ${below.ipadPort`
        width: calc(100% + 50px);
      `}
    }
  }

  .content {
    position: relative;
    z-index: 3;
    transition-duration: ${misc.widgetTransition};

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
      ${fonts.HelveticaNeueLight};
    }

    .title {
      ${fonts.HelveticaNeueBold};
    }


    h4,
    p,
    a {
      color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
    }

    .copy {
      p {
        color: ${colors.darkerGray};
      }

      strong {
        color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
      }
    }
  }
`;

export default ItemWImage;
