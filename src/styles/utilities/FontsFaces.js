import { css } from 'styled-components';

const FontsLocation = '/fonts';

const FontFaces = css`
@import url("https://hello.myfonts.net/count/394e2f");

@font-face {
  font-family: 'HelveticaNeueLTStd-Lt';
  src: url('${FontsLocation}/394E2F_0_0.eot');
  src: url('${FontsLocation}/394E2F_0_0.eot?#iefix') format('embedded-opentype'),url('${FontsLocation}/394E2F_0_0.woff2') format('woff2'),url('${FontsLocation}/394E2F_0_0.woff') format('woff'),url('${FontsLocation}/394E2F_0_0.ttf') format('truetype');}

@font-face {
  font-family: 'HelveticaNeueLTStd-Roman';
  src: url('${FontsLocation}/394E2F_1_0.eot');
  src: url('${FontsLocation}/394E2F_1_0.eot?#iefix') format('embedded-opentype'),url('${FontsLocation}/394E2F_1_0.woff2') format('woff2'),url('${FontsLocation}/394E2F_1_0.woff') format('woff'),url('${FontsLocation}/394E2F_1_0.ttf') format('truetype');}

@font-face {
  font-family: 'HelveticaNeueLTStd-Bd';
  src: url('${FontsLocation}/394E2F_2_0.eot');
  src: url('${FontsLocation}/394E2F_2_0.eot?#iefix') format('embedded-opentype'),url('${FontsLocation}/394E2F_2_0.woff2') format('woff2'),url('${FontsLocation}/394E2F_2_0.woff') format('woff'),url('${FontsLocation}/394E2F_2_0.ttf') format('truetype');}
`;

export default FontFaces;
