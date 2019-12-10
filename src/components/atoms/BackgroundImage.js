import React, { Component } from 'react';
import styled from 'styled-components';

class BackgroundImage extends Component {
  render() {
    const { children, className, src, size } = this.props;
    return (
      <SBackgroundImage
        className={className}
        bgImg={size ? src.sizes[size] : src.url}
      >
        {children}
      </SBackgroundImage>
    );
  }
}

export default BackgroundImage;

export const SBackgroundImage = styled.div`
  background-image: ${({ bgImg }) => `url(${bgImg})` || ''};
  background-position: center;
  background-size: cover;
`;
