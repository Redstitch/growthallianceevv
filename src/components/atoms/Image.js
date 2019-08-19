import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import { document } from 'browser-monads';
import { breakpoints, misc } from '../../styles/utilities/settings';
import { absoluteCenter } from '../../styles/utilities/elements';


class Image extends Component {
  state = {
    objectLoading: true,
    small: null,
    medium: null,
    large: null,
    full: null,
  }

  constructor(props) {
    super(props);
    const { src } = this.props;
    const fullImage = document.createElement('img');

    fullImage.setAttribute('src', src.url);

    if (fullImage.complete) {
      this.state = {
        small: src.sizes.small_size,
        medium: src.sizes.middle_size,
        large: src.sizes.large_size,
        full: src.url,
        objectLoading: false,
      };
    }
  }

  imageLoad() {
    const { src } = this.props;
    const fullImage = document.createElement('img');

    fullImage.setAttribute('src', src.url);

    fullImage.onload = () => {
      this.setState({
        objectLoading: false,
        small: src.sizes.small_size,
        medium: src.sizes.middle_size,
        large: src.sizes.large_size,
        full: src.url,
      });
    };
  }

  render() {
    const { src } = this.props;
    const {
      objectLoading, small, medium, large, full,
    } = this.state;
    return (
      <VisibilitySensor
        onChange={(e) => {
          if (e === true) {
            this.imageLoad();
          }
        }}
        partialVisibility
      >
        <SImage objectLoading={objectLoading}>
          <div
            className="imageContainer"
            style={{
              height: '0',
              paddingBottom: `${(src.height / src.width) * 100}%`,
            }}
          >
            <img className="placeholder" src={src.sizes.lqph_size} alt="..." />
            <picture>
              <source
                sizes={`(max-width: ${breakpoints.pageWidth}px) 100vw, ${breakpoints.pageWidth}px`}
                srcSet={`${small ? `${small} ${breakpoints.mobile}w, ` : ''}${medium ? `${medium} ${breakpoints.ipadPort}w, ` : ''}${large ? `${large} ${breakpoints.ipadLand}w, ` : ''}${full ? `${full} ${breakpoints.pageWidth}w` : ''}`}
              />
              <img
                sizes={`(max-width: ${breakpoints.pageWidth}px) 100vw, ${breakpoints.pageWidth}px`}
                srcSet={`${small ? `${small} ${breakpoints.mobile}w, ` : ''}${medium ? `${medium} ${breakpoints.ipadPort}w, ` : ''}${large ? `${large} ${breakpoints.ipadLand}w, ` : ''}${full ? `${full} ${breakpoints.pageWidth}w` : ''}`}
                src={full}
                alt="img"
              />
            </picture>
          </div>
        </SImage>
      </VisibilitySensor>
    );
  }
}

export default Image;

export const SImage = styled.div`
  .imageContainer {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .placeholder {
    ${absoluteCenter}
    transition-duration: ${misc.animSpeed};
    opacity: ${({ objectLoading }) => (objectLoading ? '1' : '0')};
    pointer-events: ${({ objectLoading }) => (objectLoading ? 'auto' : 'none')};
    min-height: 101%;
    min-width: 101%;
  }

  picture {
    img {
      opacity: ${({ objectLoading }) => (objectLoading ? '0' : '1')};
    }
  }
`;
