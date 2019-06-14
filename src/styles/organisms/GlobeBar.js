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
    ${({ backgroundColor }) => (backgroundColor !== 'blank' ? 'margin: -50px 0; padding: 80px 0;' : 'padding-bottom: 25px;')}
  `}

  ${below.ipadLand`
    ${({ backgroundColor }) => (backgroundColor !== 'blank' ? 'padding: 0; margin: 0 0 50px;' : 'padding-bottom: 50px;')}
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
      top: -100px;
      width: 800px;
      right: 65%;
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
    ${below.ipadLand`
      font-size: 35px;
      text-align: left;
      padding: 85px 0 60px;
      line-height: 1.15;
      margin: 0 auto;
      max-width: 500px;
  `}

  }

  .inner {
    position: relative;
    z-index: 2;

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

    > div {
      ${({ columns }) => (columns ? 'width: 100%;' : '')}
    }


    p {
      margin-top: 20px;
      margin-bottom: 24px;
    }

    .column {
      max-width: 500px;
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

    ${below.ipadLand`
      margin: 45px 0 0;
    `}

    .gatsby-image-wrapper {
      ${below.ipadLand`
        margin: 0 -50px;
        // max-height: 300px;
      `}

    }


  }

  .column,
  .content {
    color: ${({ backgroundColor }) => (backgroundColor === 'blank' ? colors.darkerGray : colors.white)};

    ${below.ipadLand`
      width: 95%;
      max-width: 500px;
      margin: 0 auto 20px;
    `}

    h3 {
      font-size: 46px;
      line-height: 1;
      margin-bottom: 18px;
      ${fonts.HelveticaNeueLight};
      ${({ backgroundColor, color }) => (backgroundColor === 'blank' && `color: ${(color ? pageColor(color) : colors.navy)}`)};

      ${below.pageWidth`
        font-size: 35px;
        padding-top: 50px;
      `}
    }

    h4 {
      font-size: 26px;
      line-height: 1.15;
      margin-bottom: 26px;
      ${fonts.HelveticaNeueRegular};
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
      max-width: none;
      &:last-of-type {
      }
      &:first-of-type {
        margin-top: 50px;
      }
    `}
  }

  .content {

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
