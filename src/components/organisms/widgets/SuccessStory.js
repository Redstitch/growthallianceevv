import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Wrapper from '../../../styles/utilities/Wrapper';
import { Shape1 } from '../../atoms/Shapes';
import ItemWImage from '../../../styles/molecules/ItemWImage';
import PageLink from '../../atoms/PageLink';
import BackgroundImage from '../../atoms/BackgroundImage';


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
              <BackgroundImage src={widget.image} />
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
              <div className="button">
                {widget.button.copy && <PageLink content={widget.button} /> }
              </div>
            </div>
          </ItemWImage>
        </Wrapper>
      </VisibilitySensor>
    );
  }
}

export default SuccessStory;
