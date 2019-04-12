import { css } from 'styled-components';
import { breakpoints } from './settings';

export const above = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] + 1}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
