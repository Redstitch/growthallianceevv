import { css } from 'styled-components';
import { colors } from './settings';

export const richTextContent = css`
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

  ul, ol {
    margin-left: 15px;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  a {
    color: ${colors.blue};
    text-decoration: underline;

    &:hover {
      color: ${colors.orange};
    }
  }

  blockquote {
    background-color: ${colors.lightGray};
    padding: 20px;
    border-left: 20px solid ${colors.gray};
  }

  hr {
    margin: 40px 0;
    max-width: 80%;
  }
`;

export const gatsbyBG = css`
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    z-index: 0;
  }
`;
