import React, { Component } from 'react';
import { document } from 'browser-monads';
import styled from 'styled-components';

import { misc } from '../../styles/utilities/settings';

class BackgroundImage extends Component {
  state = {
    placeholderLoading: true,
    objectLoaded: false,
    fullQuality: null,
  }

  constructor(props) {
    super(props);
    const { src } = props;
    const fullImage = document.createElement('img');

    fullImage.setAttribute('src', src.url);

    if (fullImage.complete) {
      this.state = {
        fullQuality: src.url,
        objectLoaded: true,
      };
    }
  }

  componentDidMount() {
    const { objectLoaded } = this.state;

    if (objectLoaded !== true) {
      this.imageLoad();
    }
  }

  imageLoad() {
    const { src } = this.props;
    const fullImage = document.createElement('img');

    fullImage.setAttribute('src', src.url);

    fullImage.onload = () => {
      this.setState({
        objectLoaded: true,
        fullQuality: src.url,
      });
    };
  }


  render() {
    const { children, className, src } = this.props;
    const { placeholderLoading, objectLoaded, fullQuality } = this.state;
    return (
      <SBackgroundImage
        className={className}
        bgImg={(objectLoaded && !placeholderLoading) ? fullQuality : src.sizes.lqph_size}
      >
        {placeholderLoading
        && (
        <>
          <img
            onLoad={() => {
              this.setState({
                placeholderLoading: false,
              });
            }}
            style={{ display: 'none' }}
            src={src.sizes.lqph_size}
            alt="..."
          />
          <img
            onLoad={() => {
              this.setState({
                objectLoaded: true,
              });
            }}
            style={{ display: 'none' }}
            src={fullQuality}
            alt="..."
          />
        </>
        )
        }
        {children}
      </SBackgroundImage>
    );
  }
}

export default BackgroundImage;

export const SBackgroundImage = styled.div`
  background-image: ${({ bgImg }) => (`url(${bgImg})` || '')};
  background-position: center;
  background-size: cover;
  transition-duration: ${misc.animSpeed};
`;
