import React, { Component } from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import Wrapper from '../../../styles/utilities/Wrapper';
import Image from '../../atoms/imgix/Image';
import { Shape1 } from '../../atoms/Shapes';
import SPicture from '../../../styles/atoms/SPicture';
import { colors, misc } from '../../../styles/utilities/settings';
import { absoluteCenter } from '../../../styles/utilities/elements';
import fonts from '../../../styles/utilities/fonts';
import { pageColor } from '../../../js/autoColor';
import { above, below } from '../../../styles/utilities/mediaQueries';


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
          <SSuccessStory color={color} isVisible={isVisible}>
            <div className="image">
              <Image
                src={widget.image.url}
                imgixProps={{
                  imgixParams: {
                    q: '100',
                    h: 276,
                    w: 276,
                  },
                }}
                maxWidth={276}
                minWidth={276}
              />
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

          </SSuccessStory>
        </Wrapper>
      </VisibilitySensor>
    );
  }
}

export default SuccessStory;

const SSuccessStory = styled.div`
  padding: 0 0 50px;
  position: relative;

  ${above.ipadLand`
    transition-duration: ${misc.widgetTransition};
    ${({ isVisible }) => (isVisible ? 'bottom: 0' : 'bottom: -20px')};
  `}

  ${above.ipadPort`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    padding: 0 0 100px;
    align-items: center;
  `}

  .image {
    position: relative;
    width: 267px;
    margin: 20px;

    ${below.ipadPort`
      width: 200px;
      margin: 20px auto 40px;
    `}

    ${SPicture} {
      position: relative;
      z-index: 2;

      ${above.ipadLand`
        transition-duration: ${misc.widgetTransition};
        ${({ isVisible }) => (isVisible ? 'bottom: 0' : 'bottom: -10px')};
      `}
    }

    svg {
      width: calc(100% + 60px);
      fill: ${({ color }) => (color ? pageColor(color) : colors.green)};
      ${absoluteCenter};

      ${above.ipadLand`
        transition-duration: ${misc.widgetTransition};
        ${({ isVisible }) => (isVisible ? 'transform: translate(-50%,-50%) scale(1) rotate(0)' : 'transform: translate(-50%,-50%) scale(.90) rotate(2deg)')};
      `}

      ${below.ipadPort`
        width: calc(100% + 50px);
      `}
    }
  }

  .content {
    position: relative;
    z-index: 3;
    transition-duration: ${misc.widgetTransition};

    ${above.ipadPort`
      width: calc(100% - 267px);
      padding-left: 50px;
    `}

    ${above.ipadLand`
      padding-left: 100px;
    `}

    blockquote {
      background: none;
      border: none;
      padding: 0;
      font-size: 20px;
      ${fonts.HelveticaLight};
    }

    p {
      color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
    }
  }
`;
