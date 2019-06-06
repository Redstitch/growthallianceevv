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

  p {
    font-size: 15px;
    line-height: 1.75;
  }

  ${above.ipadLand`
    ${({ backgroundColor }) => (backgroundColor !== 'blank' ? 'margin: -50px 0 50px; padding: 80px 0 90px;' : 'padding-bottom: 25px;')}
  `}

  ${below.ipadLand`
    ${({ backgroundColor }) => (backgroundColor !== 'blank' ? 'padding: 50px 0 0; margin: 0 0 50px;' : 'padding-bottom: 50px;')}
  `}

  ${SGlobe} {
    position: absolute;

    ${above.ipadLand`
      transition-duration: ${misc.widgetTransition};
      ${({ alignment }) => (alignment === 'right' ? 'right: 95%;' : 'left: 95%;')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'right') ? 'right: 80%' : '')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'left') ? 'left: 80%' : '')};
      width: 700px;
      top: 15px;
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
    ${fonts.HelveticaNeueRegular};
    font-size: 40px;
    font-weight: normal;
    position: relative;
    z-index: 2;
    color: ${({ backgroundColor }) => (backgroundColor !== 'blank' && colors.white)};
    text-align: center;

    ${above.ipadLand`
      padding-top: 60px;
      padding-bottom: 15px;
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
      justify-content: center;
      align-items: center;
      ${({ columns }) => (columns ? 'margin-right: -70px' : '')};
      flex-direction: ${({ alignment }) => (alignment === 'right' ? 'row' : 'row-reverse')};
      transition-duration: ${misc.widgetTransition};
      ${({ isVisible }) => (isVisible ? 'margin-top: 0' : 'margin-top: 100px')};
      ${({ padTop, backgroundColor }) => (padTop === false ? '' : `${backgroundColor !== 'blank' ? 'padding-top: 50px' : ''}`)};
    `}

    p {
      margin-bottom: 24px;
    }
  }

  .image {
    width: 100%;
    position: relative;

    ${above.ipadLand`
      transition-duration: ${misc.widgetTransition};
      ${({ alignment }) => (alignment === 'right' ? 'right: -30px' : 'left: -30px')};
      ${({ isVisible, alignment }) => ((isVisible && alignment === 'left') ? 'left: 0; padding-right: 15px' : '')};
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
    color: ${({ backgroundColor }) => (backgroundColor === 'blank' ? colors.darkerGray : colors.white)};

    h3 {
      font-size: 48px;
      line-height: 1;
      margin-bottom: 18px;
      ${fonts.HelveticaNeueLight};
      ${({ backgroundColor, color }) => (backgroundColor === 'blank' && `color: ${(color ? pageColor(color) : colors.navy)}`)};
    }

    h4 {
      font-size: 26px;
      line-height: 1.15;
      margin-bottom: 26px;
      ${fonts.HelveticaNeueLight};
      ${({ backgroundColor, color }) => (backgroundColor === 'blank' && `color: ${(color ? pageColor(color) : colors.navy)}`)};
    }

    h5 {
      font-size: 60px;
      margin-bottom: -10px;
      ${fonts.HelveticaNeueLight};
    }

    > a {
      ${fonts.HelveticaNeueBold};
      ${button};
      ${({ color }) => ((color && color === 'orange') && `background-color: ${colors.blue}`)};
      margin-top: 8px;
    }
  }

  .column{
  max-width: 40%;
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
      ${fonts.HelveticaNeueBold};
    }
  }
`;


export default GlobeBar;
