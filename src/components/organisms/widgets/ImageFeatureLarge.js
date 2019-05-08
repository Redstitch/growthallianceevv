import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Img from 'gatsby-image';
import Wrapper from '../../../styles/utilities/Wrapper';
import { WideAngle } from '../../atoms/Shapes';
import Globe from '../../atoms/Globe';
import GlobeBar from '../../../styles/organisms/GlobeBar';
import PageLink from '../../atoms/PageLink';

class ImageFeatureLarge extends Component {
  state = {
    isVisible: false,
  }

  render() {
    const { widget, color, order } = this.props;
    const { isVisible } = this.state;
    return (
      <VisibilitySensor
        onChange={(e) => {
          if (e === true) {
            this.setState(() => ({
              isVisible: true,
            }));
          }
        }}
        partialVisibility={order !== 0}
      >
        <GlobeBar padTop={false} alignment={widget.content.image_alignment} color={color} backgroundColor={widget.content.background_color} isVisible={isVisible}>
          <div className="bar">
            <WideAngle />
            <WideAngle />
          </div>
          <Globe rotation="100deg" />
          <Wrapper wide>
            <div className="inner">
              <div className="content">
                <h4>{widget.content.heading}</h4>
                <p>{widget.content.content}</p>
                {widget.content.button.copy && <PageLink content={widget.content.button} /> }
              </div>
              <div className="image">
                <Img fluid={widget.image.localFile.childImageSharp.fluid} />
              </div>
            </div>

          </Wrapper>
        </GlobeBar>
      </VisibilitySensor>

    );
  }
}


export default ImageFeatureLarge;
