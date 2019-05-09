import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import SLightBox from '../../../styles/molecules/SLightBox';
import { above } from '../../../styles/utilities/mediaQueries';
import ImageLoader from '../../atoms/ImageLoader';


class Gallery extends Component {
  state = {
    modalOpen: false,
    activeIndex: 0,
  }

  componentDidMount() {
    global.document.addEventListener('click', (e) => {
      const { modalOpen } = this.state;
      if (modalOpen) {
        if (e.target.id === 'outter' || e.key === 'Escape') {
          this.setState(() => ({
            modalOpen: false,
          }));
        }
      }
    });

    global.document.onkeydown = (e) => {
      const { modalOpen } = this.state;
      if (modalOpen) {
        if (e.keyCode === 27) {
          this.setState(() => ({
            modalOpen: false,
          }));
        }
      }
    };
  }

  render() {
    const { widget } = this.props;
    const { modalOpen, activeIndex } = this.state;
    return (
      <Wrapper narrow>
        <SGallery>
          {widget.images.map((image, index) => (
            <a
              key={`image${index}`}
              href={null}
              onClick={() => {
                this.setState(() => ({
                  activeIndex: index,
                  modalOpen: true,
                }));
              }}
            >
              <ImageLoader content={image} />
            </a>
          ))}
          {modalOpen
          && (
          <SLightBox id="outter">
            <div className="inner">
              <ImageLoader content={widget.images[activeIndex]} fixed />
            </div>
          </SLightBox>
          )}
        </SGallery>
      </Wrapper>
    );
  }
}

export default Gallery;

const SGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px 80px 0;


  > a {
    padding: 0 20px 20px 0;
    width: 50%;

    ${above.ipadPort`
      width: 25%;
    `}
  }
`;
