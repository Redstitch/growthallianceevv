
import { css } from 'styled-components';
import { colors, misc } from '../utilities/settings';
import fonts from '../utilities/fonts';
import { above, below } from '../utilities/mediaQueries';
import { SMenuLink } from '../../components/atoms/MenuLink';

const NavStyles = css`
  ul li {
    ${below.ipadLand`
      &.subnav-open {
        ul.sub-nav {
          display: block;
        }
        a.toggle-subnav span:last-child { transform: rotate(0deg); }
      }
    `}
  }
  ul.sub-nav {
    display: none;
    ${above.ipadLand`
      position: absolute;
      top: 100%;
      left: 0;
      margin: 0;
      min-width: 250px;
      padding: 15px 0;
      z-index: 2;
      li {
        display: block;
        margin: 0;
        a {
          display: block;
          color: ${colors.darkerGray};
          ${fonts.HelveticaNeueRegular};
          padding: 15px 30px;
          ${below.widePageWidth`
            padding: 10px;
          `}
        }
      }
    `}
    ${below.ipadLand`
      margin: 0;
      a {
        height: auto;
        display: block;
        color: ${colors.darkerGray};
        ${fonts.HelveticaNeueRegular};
        font-size: 13px;
        padding: 10px 30px;
      }
    `}
    ${SMenuLink} a {
      ${below.ipadLand`
        padding: 15px 30px;
        width: 100%;
      `}
    }
  }
  ${SMenuLink} {
    position: relative;
    a {
      color: ${colors.darkBlue};
      font-size: 16px;
      ${fonts.HelveticaNeueBold};
      ${below.widePageWidth`
        font-size: 14px;
      `}
      ${below.pageWidth`
        font-size: 12px;
      `}
      ${below.ipadLand`
        font-size: 15px;
        height: 65px;
        width: calc(100% - 65px);
      `}
      &:hover {
        opacity: 1;
      }
      &.toggle-subnav {
        height: 65px;
        width: 65px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        span {
          position: absolute;
          top: 30px;
          left: 25px;
          height: 2px;
          width: 15px;
          background-color: ${colors.darkerGray};
          transition-duration: ${misc.animSpeed};
          &:last-child {
            transform: rotate(-90deg);
          }
        }
        ${above.ipadLand`
          display: none;
        `}
      }
    }
  }
`;

export default NavStyles;
