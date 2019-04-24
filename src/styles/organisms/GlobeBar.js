import styled from 'styled-components';
import { above, below } from '../utilities/mediaQueries';
import { SGlobe } from '../../components/atoms/Globe';
import { misc, colors } from '../utilities/settings';
import { absoluteCenter, button } from '../utilities/elements';
import { pageColor } from '../../js/autoColor';
import fonts from '../utilities/fonts';
import SPicture from '../atoms/SPicture';

const GlobeBar = styled.div`
  position: relative;
  overflow: hidden;

  ${above.ipadLand`
    margin: -50px 0 50px;
    padding: 50px 0;
  `}

  ${below.ipadLand`
    padding: 50px 0 0;
    margin: 0 0 50px;
  `}

  ${SGlobe} {
    position: absolute;

    ${above.ipadLand`
      transition-duration: ${misc.widgetTransition};
      ${({ alignment }) => (alignment === 'right' ? 'right: 95%;' : 'left: 95%;')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'right') ? 'right: 90%' : null)};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'left') ? 'left: 90%' : null)};
      width: 900px;
      top: 50%;
      transform: translateY(-50%);
    `}

    ${below.ipadLand`
      top: 0;
      width: 400px;
      right: 70%;
    `}
  }

  .bar {
    background-color: ${({ color, backgroundColor }) => (color ? pageColor(color) : pageColor(backgroundColor))};
    height: 70%;
    width: 102%;
    position: relative;
    ${absoluteCenter};

    ${above.ipadLand`
      transition-duration: ${misc.widgetTransition};
      ${({ isVisible }) => (isVisible ? 'margin-top: 0' : 'margin-top: 100px')}
    `}

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

  h2 {
    position: relative;
    z-index: 2;
    color: ${colors.white};
    text-align: center;

    ${above.ipadLand`
      padding-top: 50px;
      transition-duration: ${misc.widgetTransition};
      ${({ isVisible }) => (isVisible ? 'margin-top: 0' : 'margin-top: 100px')};
    `}
  }

  .inner {
    position: relative;
    z-index: 2;

    > div {
      width: 100%;
    }

    ${above.ipadLand`
      display: flex;
      align-items: center;
      ${({ columns }) => (columns ? 'margin-right: -50px' : null)};
      flex-direction: ${({ alignment }) => (alignment === 'right' ? 'row' : 'row-reverse')};
      transition-duration: ${misc.widgetTransition};
      ${({ isVisible }) => (isVisible ? 'margin-top: 0' : 'margin-top: 100px')};
      ${({ padTop }) => (padTop === false ? null : 'padding-top: 50px;')};
    `}
  }

  .image {
    width: 100%;
    position: relative;

    ${above.ipadLand`
      transition-duration: ${misc.widgetTransition};
      ${({ alignment }) => (alignment === 'right' ? 'right: -30px' : 'left: -30px')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'left') ? 'left: 0' : null)};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'right') ? 'right: 0' : null)};
      max-width: calc(100% - 480px);
    `}

    ${SPicture} {
      ${below.ipadLand`
        margin: 0 -30px;
      `}

      ${below.ipadPort`
        margin: 0 -15px;
      `}
    }
  }

  .column,
  .content {
    color: ${colors.white};

    h4 {
      font-size: 30px;
      ${fonts.HelveticaLight};
    }

    > a {
      ${button};
      ${({ color }) => ((color && color === 'orange') && `background-color: ${colors.blue}`)};
    }
  }

  .column{


    ${above.ipadLand`
      padding: 0 50px 50px 0;
    `}

    ${below.ipadLand`
      padding-bottom: 50px;
    `}
  }

  .content {

    ${below.ipadLand`
      padding: 0 50px 50px;
    `}

    ${below.mobile`
      padding: 0 20px 50px;
    `}

    ${above.ipadLand`
      width: 480px;
      padding: ${({ alignment }) => (alignment === 'right' ? '0 50px 0 0' : '0 0 0 50px')};
    `}
  }
`;


export default GlobeBar;