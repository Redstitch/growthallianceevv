import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import urlFixer from '../../js/urlFixer';
import { button } from '../../styles/utilities/elements';
import { colors } from '../../styles/utilities/settings';
import { pageColor } from '../../js/autoColor';

const WidgetFooter = ({ content, color }) => (
  <SWidgetFooter color={color}>
    {content.footer.copy && <p>{content.footer.copy}</p>}
    {content.footer.button.link
      && (
      <Link to={urlFixer(content.footer.button.link)}>
        {content.footer.button.copy}
      </Link>
      )
    }
  </SWidgetFooter>
);

export default WidgetFooter;

const SWidgetFooter = styled.div`
  margin-top: 20px !important;

  a {
    ${button}
  }

  p {
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
  }
`;
