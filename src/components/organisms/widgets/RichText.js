import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';

const RichText = ({ widget, color }) => (
  <Wrapper narrow>
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
  margin-bottom: 100px;

  h1, h2, h3, h4, h5, h6, a {
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
  }
`;
