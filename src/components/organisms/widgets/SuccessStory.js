import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Img from 'gatsby-image';
import Wrapper from '../../../styles/utilities/Wrapper';
import { Shape1 } from '../../atoms/Shapes';
import ItemWImage from '../../../styles/molecules/ItemWImage';


class SuccessStory extends Component {
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
        <Wrapper>
          <ItemWImage color={color} isVisible={isVisible}>
            <div className="image">
              <Img fluid={widget.image.localFile.childImageSharp.fluid} />
              <Shape1 />
            </div>
            <div className="content">
              <blockquote>
                {widget.content.quote}
              </blockquote>
              <p dangerouslySetInnerHTML={{
                __html: `<strong>${widget.content.name}</strong><br/>${widget.content.title}`,
              }}
              />
            </div>
          </ItemWImage>
        </Wrapper>
      </VisibilitySensor>
    );
  }
}

export default SuccessStory;
