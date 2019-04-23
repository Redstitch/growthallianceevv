import React from 'react';
import styled from 'styled-components';
import Banner from '../../atoms/imgix/Banner';

const FullWidthImage = ({ widget }) => (
  <SFullWidthImage>
    <Banner src={widget.image.url} />
  </SFullWidthImage>
);

export default FullWidthImage;

const SFullWidthImage = styled.div`
  margin-bottom: 100px;
`;
