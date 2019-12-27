import { createGlobalStyle } from 'styled-components';
import { typography } from './utilities/elements';
import fonts from './utilities/fonts';
import FontFaces from './utilities/FontsFaces';
import { below } from './utilities/mediaQueries';

const GlobalStyle = createGlobalStyle`
  ${FontFaces};
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    margin: 0;
    padding: 0;
    ${fonts.HelveticaNeueRegular};
    ${typography};
    &.fixed { overflow: hidden; }
  }

  html {
    box-sizing: border-box;
  }

  html,body {
    height:100%;
}

  main {
    display: block;
    overflow-x: hidden;
    margin-top: 129px;

    ${below.widePageWidth`
      margin-top: 106px;
    `}
    ${below.pageWidth`
      margin-top: 86px;
    `}
    ${below.ipadLand`
      margin-top: 75px;
    `}
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  img {
    height: auto;
    width: 100%;
  }

  .bgimage {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

`;

export default GlobalStyle;
