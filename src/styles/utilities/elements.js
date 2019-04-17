import { css } from 'styled-components';
import { colors, misc } from './settings';
import fonts from './fonts';
import SPicture from '../atoms/SPicture';

export const typography = css`
  line-height: 1.5;

  h1, h2, h3, h4, h5, h6, ul, ol, p, blockquote {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 800;
  }

  h1 { font-size: 35px; }
  h2 { font-size: 30px; }
  h3 { font-size: 26px; }
  h4 { font-size: 22px; }
  h5 { font-size: 18px; }
  h6 { font-size: 16px; }

  ol, ul {
    list-style: none;
  }

  a {
    color: ${colors.blue};
    text-decoration: none;
    transition-duration: ${misc.animSpeed};
    opacity: 1;

    &:hover {
      opacity: 0.6;
    }
  }

  blockquote, q {
    background-color: ${colors.lightGray};
    padding: 20px;
    border-left: 20px solid ${colors.gray};
    quotes: none;

    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  hr {
    margin: 40px 0;
    max-width: 80%;
  }

  strong {
    ${fonts.HelveticaBold};
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`;

export const imageBG = css`
  ${SPicture} {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    z-index: 0;
  }
`;
