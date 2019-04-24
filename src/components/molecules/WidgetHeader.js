import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import urlFixer from '../../js/urlFixer';
import { breakpoints, colors } from '../../styles/utilities/settings';
import { pageColor } from '../../js/autoColor';
import { below } from '../../styles/utilities/mediaQueries';

const WidgetHeader = ({ content, color }) => (
  <SWidgetHeader color={color}>
    <h3>{content.heading.title}</h3>
    {content.heading.copy && <p>{content.heading.copy}</p>}
    <Link to={urlFixer(content.heading.link.page)}>
      {content.heading.link.copy}
    </Link>
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
