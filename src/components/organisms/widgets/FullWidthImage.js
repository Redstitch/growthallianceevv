import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image';

const FullWidthImage = ({ widget }) => (
  <SFullWidthImage>
    <Image src={widget.image} />
  </SFullWidthImage>
);

export default FullWidthImage;

const SFullWidthImage = styled.div``;
