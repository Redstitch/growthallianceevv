import React, { Component } from 'react';
import { Link } from 'gatsby';
import VisibilitySensor from 'react-visibility-sensor';
import Img from 'gatsby-image';
import Wrapper from '../../../styles/utilities/Wrapper';
import urlFixer from '../../../js/urlFixer';
import { WideAngle } from '../../atoms/Shapes';
import Globe from '../../atoms/Globe';
import GlobeBar from '../../../styles/organisms/GlobeBar';

// TODO: Add angle to mobile version

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
                {widget.content.button.copy
                && (
                <Link to={urlFixer(widget.content.button.link)}>
                  {widget.content.button.copy}
                </Link>
                )
              }
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
