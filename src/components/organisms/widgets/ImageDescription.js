import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { pageColor } from '../../../js/autoColor';
import Wrapper from '../../../styles/utilities/Wrapper';
import { colors } from '../../../styles/utilities/settings';

const ImageDescription = ({ widget, color }) => (
  <SImageDescription color={color}>
    <Wrapper narrow>
      <p>{widget.description}</p>
      <Img fluid={widget.image.localFile.childImageSharp.fluid} />
    </Wrapper>
  </SImageDescription>
);

export default ImageDescription;

const SImageDescription = styled.div`
  margin-bottom: 100px;

  p {
    color: ${({ color }) => (color ? pageColor(color) : colors.black)};
    margin-bottom: 60px;
  }
`;
