import React from 'react';
import styled from 'styled-components';
import ImageLoader from '../../atoms/ImageLoader';

const FullWidthImage = ({ widget }) => (
  <SFullWidthImage>
    <ImageLoader content={widget.image} />
  </SFullWidthImage>
);

export default FullWidthImage;

const SFullWidthImage = styled.div`
  margin-bottom: 100px;
`;
