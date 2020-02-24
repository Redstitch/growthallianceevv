import styled from 'styled-components';
import { above, below } from '../utilities/mediaQueries';
import { misc, colors } from '../utilities/settings';
import { absoluteCenter, button } from '../utilities/elements';
import { pageColor } from '../../js/autoColor';
import fonts from '../utilities/fonts';
import { SBackgroundImage } from '../../components/atoms/BackgroundImage';

const ItemWImage = styled.div`
margin: 100px auto;
position: relative;

${above.ipadLand`
  transition-duration: ${misc.widgetTransition};
  ${({ isVisible }) => (isVisible ? 'bottom: 0' : 'bottom: -20px')};
`}

${above.ipadPort`
  max-width: 1000px;
  margin: 100px auto;
  display: flex;
  align-items: ${({ team }) => (team ? 'flex-start' : 'center')};
`}

${SBackgroundImage} {
  position: relative;
  z-index: 1;
  width: 306px;
  height: 306px;

  ${below.ipadPort`
    width: 250px;
    height: 250px;
  `}
}

.image {
  position: relative;
  width: 350px;
  margin: 20px;
  box-shadow: ${colors.shadow};

  ${below.ipadPort`
    max-width: 250px;
    margin: 20px auto 40px;
  `}

  .gatsby-image-wrapper {
    position: relative;
    z-index: 2;
    max-height: 306px;
    overflow: hidden;
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
      ${({ isVisible }) =>
        isVisible
          ? 'transform: translate(-50%,-50%) scale(1) rotate(0)'
          : 'transform: translate(-50%,-50%) scale(.90) rotate(2deg)'};
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
    color: ${colors.navy};
  }
  .title {
    ${fonts.HelveticaNeueBold};
  }
  h4 {
    color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
  }

  .button a {
    ${button};
    background-color: ${colors.green};
    color: ${colors.white};
    ${fonts.HelveticaNeueBold};
    margin-top: 15px;
    ${below.ipadPort`
    margin-top: 0;
    `}
  }
    strong {
      color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
    }
  }

`;

export default ItemWImage;
