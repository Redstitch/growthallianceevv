import { css } from 'styled-components';
import { breakpoints } from './settings';
import { above, below } from './mediaQueries';

export const wrap = css`
  max-width: ${breakpoints.pageWidth}px;
  padding: 0 30px;
  margin: 0 auto;
  ${below.ipadPort`
    padding: 0 15px;
  `}
`;

export const wrapNarrow = css`
  max-width: ${breakpoints.pageWidth / 1.5}px;
  margin: 0 30px;
  ${below.ipadPort`
    margin: 0 15px;
  `}
`;

export const wrapWide = css`
  max-width: ${breakpoints.pageWidth * 1.5}px;
  margin: 0 30px;
  ${below.ipadPort`
    margin: 0 15px;
  `}
`;

export const flex = css`
  ${above.ipadPort`
    display: flex;
    &.center {
      align-items: center;
    }
    &.even {
      justify-content: space-between;
    }
  `}
`;
