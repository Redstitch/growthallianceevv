import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const FullWidthImage = ({ widget }) => (
  <SFullWidthImage>
    <Img fluid={widget.image.localFile.childImageSharp.fluid} />
  </SFullWidthImage>
);

export default FullWidthImage;

const SFullWidthImage = styled.div`
  margin-bottom: 100px;
`;
