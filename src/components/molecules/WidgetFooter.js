import React from 'react';
import styled from 'styled-components';
import { button } from '../../styles/utilities/elements';
import { colors } from '../../styles/utilities/settings';
import { pageColor } from '../../js/autoColor';
import PageLink from '../atoms/PageLink';

const WidgetFooter = ({ content, color }) => (
  <SWidgetFooter color={color}>
    {content.footer.copy && <p>{content.footer.copy}</p>}
    {content.footer.button.copy && <PageLink content={content.footer.button} /> }
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
