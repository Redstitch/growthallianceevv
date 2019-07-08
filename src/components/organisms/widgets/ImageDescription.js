import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { colors } from '../../../styles/utilities/settings';
import ImageLoader from '../../atoms/ImageLoader';

const ImageDescription = ({ widget, color }) => (
  <SImageDescription color={color}>
    <Wrapper narrower>
      <div dangerouslySetInnerHTML={{
        __html: widget.description,
      }}
      />
      <div className="image">
        <ImageLoader content={widget.image} />
      </div>
    </Wrapper>
  </SImageDescription>
);

export default ImageDescription;

const SImageDescription = styled.div`
  margin: 100px 0;

  p {
    color: ${colors.darkerGray};
    font-size: 15px;
    text-align: center;
    padding-bottom: 80px;
    margin: auto;
  }
`;
