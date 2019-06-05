import React from 'react';
import styled from 'styled-components';
import { pageColor } from '../../../js/autoColor';
import Wrapper from '../../../styles/utilities/Wrapper';
import { colors } from '../../../styles/utilities/settings';
import ImageLoader from '../../atoms/ImageLoader';

const ImageDescription = ({ widget, color }) => (
  <SImageDescription color={color}>
    <Wrapper narrow>
      <p>{widget.description}</p>
      <ImageLoader content={widget.image} />
    </Wrapper>
  </SImageDescription>
);

export default ImageDescription;

const SImageDescription = styled.div`
  margin-bottom: 100px;

  p {
    color: ${colors.darkerGray};
    font-size: 14px;
    text-align: center;
    max-width: 600px;
    padding-bottom: 80px;
    margin: auto;
  }
`;
