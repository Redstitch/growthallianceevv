import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors, breakpoints } from '../../../styles/utilities/settings';

const RichText = ({ widget, color }) => (
  <Wrapper narrow={!widget.wide}>
    <SRichText
      color={color}
      dangerouslySetInnerHTML={{
        __html: widget.copy,
      }}
    />
  </Wrapper>
);

export default RichText;

export const SRichText = styled.div`
  overflow-x: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  strong {
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
  }

  p,
  dl,
  mark,
  pre,
  ol,
  ul {
    color: ${colors.darkerGray};
  }

  h2 {
    line-height: 1.35;
  }

  ul,
  ol {
    margin-left: 25px;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  em {
    font-style: italic;
  }

  img {
    width: auto;
    max-width: 100%;

    &.aligncenter,
    &.alignnone,
    &.alignleft,
    &.alignright {
      display: block;
      padding: 0 auto 30px;
      margin: 0 auto;
    }

    &.alignleft {
      @media screen and (min-width: ${breakpoints.ipadPort}px) {
        float: left;
        padding: 0 30px 30px 0;
        margin: 0;
      }
    }

    &.alignright {
      @media screen and (min-width: ${breakpoints.ipadPort}px) {
        float: right;
        padding: 0 0 30px 30px;
        margin: 0;
      }
    }
  }
`;
