import React, { Component } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { pageColor } from '../../js/autoColor';
import { colors, misc } from '../../styles/utilities/settings';
import { below } from '../../styles/utilities/mediaQueries';
import fonts from '../../styles/utilities/fonts';


class NumberItem extends Component {
  state = {
    isVisible: false,
  }

  render() {
    const {
      content, alignment, color, order,
    } = this.props;
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
        <SNumberItem alignment={alignment} color={color} isVisible={isVisible}>
          <span>
            <CountUp
              start={0}
              end={parseInt(isVisible ? content.number : 0, 0)}
              decimals={(content.number % 1) !== 0 ? 2 : null}
              separator=","
              useEasing
              duration={misc.widgetTransition}
              suffix={content.prefix__suffix === '%' ? content.prefix__suffix : null}
              prefix={content.prefix__suffix === '$' ? content.prefix__suffix : null}
            />
            {content.sub_copy && <span className="sub-copy">{content.sub_copy}</span>}
          </span>
          <h5>
            {content.label}
          </h5>
        </SNumberItem>
      </VisibilitySensor>
    );
  }
}

export default NumberItem;

export const SNumberItem = styled.div`
  display: flex;
  flex-direction: ${({ alignment }) => (alignment === 'top' ? 'column' : 'column-reverse')};
  position: relative;
  transition-duration: ${misc.widgetTransition};
  ${({ isVisible }) => (isVisible ? 'bottom: 0' : 'bottom: -30px')};

  span {
    color: ${({ color }) => (color ? pageColor(color) : colors.green)};
    font-size: 60px;
    font-weight: 200;
    display: block;
    line-height: 1;
    margin: 10px 0;

    ${below.ipadPort`
      font-size: 50px;
      margin-bottom: 5px;
    `}
  }

  .sub-copy {
    font-size: 14px;
    ${fonts.HelveticaBold};
  }

  h5 {
    color: ${colors.white};
    background-color: ${({ color }) => (color ? pageColor(color) : colors.green)};
    clip-path: polygon(3% 0, 98% 4%, 100% 93%, 0% 100%);
    padding: 20px 10px;
    font-size: 14px;
    display: block;
  }

  &:nth-child(4n - 2) {
    span {
      color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
    }

    h5 {
      background-color: ${({ color }) => (color ? pageColor(color) : colors.orange)};
      clip-path: polygon(4% 0, 100% 5%, 97% 93%, 0% 100%);
    }
  }

  &:nth-child(4n - 1) {
    span {
      color: ${({ color }) => (color ? pageColor(color) : colors.blue)};
    }

    h5 {
      background-color: ${({ color }) => (color ? pageColor(color) : colors.blue)};
      clip-path: polygon(2% 3%,98% 6%,100% 94%,0 98%);
    }
  }

  &:nth-child(4n) {
    span {
      color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
    }

    h5 {
      background-color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
      clip-path: polygon(0 0, 100% 0, 98% 98%, 3% 100%);
    }
  }
`;
