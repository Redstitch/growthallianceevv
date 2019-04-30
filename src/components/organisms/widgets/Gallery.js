import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import Lightbox from '../../molecules/Lightbox';


class Gallery extends Component {
  state = {
    // modalOpen: false,
    activeIndex: 0,
  }

  render() {
    const { widget } = this.props;
    const { activeIndex } = this.state;
    return (
      <Wrapper>
        <SGallery>
          {widget.images.map(image => (
            <a href={null}>
              <Img fluid={image.localFile.childImageSharp.fluid} />
            </a>
          ))}
          <Lightbox content={widget.images[activeIndex].localFile.childImageSharp.fixed} />
        </SGallery>
      </Wrapper>
    );
  }
}

export default Gallery;

const SGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;

  > a {
    width: 20%;
    padding: 0 20px 20px 0;
  }
`;
