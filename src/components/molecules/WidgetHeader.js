import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/utilities/settings';
import { pageColor } from '../../js/autoColor';
import { below } from '../../styles/utilities/mediaQueries';
import PageLink from '../atoms/PageLink';

const WidgetHeader = ({ content, color }) => (
  <SWidgetHeader color={color}>
    {content.heading.title && <h3>{content.heading.title}</h3>}
    {content.heading.copy && <p>{content.heading.copy}</p>}
    {content.heading.button.copy
      && (
      <PageLink content={content.heading.button} />
      )
    }
  </SWidgetHeader>
);

export default WidgetHeader;

const SWidgetHeader = styled.div`
  margin-bottom: 50px;
  text-align: center;

  > p {
    max-width: ${breakpoints.mobile}px;
    margin: 0 auto 20px;
  }

  h3 {
    font-size: 45px;
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
    font-weight: 400;

    ${below.ipadPort`
      font-size: 30px;
    `}
  }

  a {
    color: ${colors.orange};
    font-weight: 700;
    position: relative;
    display: inline-block;

    &:before {
      content: '';
      display: inline-block;
      margin: 2px 5px 0 0;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;

      border-left: 7px solid ${colors.orange};
    }
  }
`;
