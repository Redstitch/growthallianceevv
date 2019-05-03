import styled from 'styled-components';
import { above, below } from '../utilities/mediaQueries';
import { SGlobe } from '../../components/atoms/Globe';
import { misc, colors } from '../utilities/settings';
import { absoluteCenter, button } from '../utilities/elements';
import { pageColor } from '../../js/autoColor';
import fonts from '../utilities/fonts';
import Wrapper from '../utilities/Wrapper';

const GlobeBar = styled.div`
  position: relative;
  overflow: hidden;

  ${above.ipadLand`
    ${({ backgroundColor }) => (backgroundColor !== 'blank' ? 'margin: -50px 0 50px; padding: 50px 0;' : 'padding-bottom: 25px;')}
  `}

  ${below.ipadLand`
    ${({ backgroundColor }) => (backgroundColor !== 'blank' ? 'padding: 50px 0 0; margin: 0 0 50px;' : 'padding-bottom: 50px;')}
  `}

  ${SGlobe} {
    position: absolute;

    ${above.ipadLand`
      transition-duration: ${misc.widgetTransition};
      ${({ alignment }) => (alignment === 'right' ? 'right: 95%;' : 'left: 95%;')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'right') ? 'right: 90%' : '')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'left') ? 'left: 90%' : '')};
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
      ${({ alignment }) => (alignment === 'right' ? '' : 'transform: rotateY(180deg);')};

      ${below.ipadLand`
        display: none;
      `}

      + svg {
        top: 100%;
        bottom: unset;
        transform: rotateX(180deg) ${({ alignment }) => (alignment === 'right' ? '' : 'rotateY(180deg)')};
      }
    }
  }

  h2 {
    position: relative;
    z-index: 2;
    color: ${({ backgroundColor }) => (backgroundColor !== 'blank' && colors.white)};
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
      ${({ columns }) => (columns ? 'width: 100%;' : '')}
    }

    ${above.ipadLand`
      display: flex;
      align-items: center;
      ${({ columns }) => (columns ? 'margin-right: -80px' : '')};
      flex-direction: ${({ alignment }) => (alignment === 'right' ? 'row' : 'row-reverse')};
      transition-duration: ${misc.widgetTransition};
      ${({ isVisible }) => (isVisible ? 'margin-top: 0' : 'margin-top: 100px')};
      ${({ padTop, backgroundColor }) => (padTop === false ? '' : `${backgroundColor !== 'blank' ? 'padding-top: 50px' : ''}`)};
    `}
  }

  .image {
    width: 100%;
    position: relative;

    ${above.ipadLand`
      transition-duration: ${misc.widgetTransition};
      ${({ alignment }) => (alignment === 'right' ? 'right: -30px' : 'left: -30px')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'left') ? 'left: 0' : '')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'right') ? 'right: 0' : '')};
      max-width: calc(100% - 480px);
    `}

    .gatsby-image-wrapper {
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
    color: ${({ backgroundColor }) => (backgroundColor === 'blank' ? colors.black : colors.white)};

    h4 {
      font-size: 30px;
      ${fonts.HelveticaNeueLight};
      ${({ backgroundColor, color }) => (backgroundColor === 'blank' && `color: ${(color ? pageColor(color) : colors.navy)}`)};
    }

    > a {
      ${button};
      ${({ color }) => ((color && color === 'orange') && `background-color: ${colors.blue}`)};
    }
  }

  .column{

    ${({ columnAlignment }) => (columnAlignment === 'center' && 'text-align: center;')};

    ${above.ipadLand`
      padding: 0 80px ${({ withButton }) => (withButton ? '0' : '50px')} 0;
    `}

    ${below.ipadLand`
      padding-bottom: ${({ withButton }) => (withButton ? '0' : '50px')};
    `}
  }

  .content {

    ${below.ipadLand`
      padding: 0 80px 50px;
    `}

    ${below.mobile`
      padding: 0 20px 50px;
    `}

    ${above.ipadLand`
      width: 480px;
      padding: ${({ alignment }) => (alignment === 'right' ? '0 50px 0 0' : '0 0 0 50px')};
    `}
  }

  ${Wrapper} {
    ${({ columnAlignment }) => (columnAlignment === 'center' && 'text-align: center;')};

    > a {
      ${button};
      position: relative;
      z-index: 1;
      margin: 20px auto 50px;
    }
  }
`;


export default GlobeBar;
