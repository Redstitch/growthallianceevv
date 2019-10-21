import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { src, size, alt } = this.props;
    return (
      <img
        src={size ? src.sizes[size] : src.url}
        alt={alt || null}
        title={alt || null}
      />
    );
  }
}

export default Image;
