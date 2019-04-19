import React, { Component } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { pageColor } from '../../js/autoColor';
import { colors } from '../../styles/utilities/settings';
import { below } from '../../styles/utilities/mediaQueries';


class NumberItem extends Component {
  state = {
    isVisible: false,
  }

  render() {
    const { content, alignment, color } = this.props;
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
        partialVisibility
      >
        <SNumberItem alignment={alignment} color={color}>
          <span>
            <CountUp
              start={0}
              end={isVisible ? content.number : 0}
              decimals={(content.number % 1) !== 0 ? 2 : null}
              separator=","
              suffix={content.prefix__suffix === '%' ? content.prefix__suffix : null}
              prefix={content.prefix__suffix === '$' ? content.prefix__suffix : null}
            />
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

  span {
    color: ${({ color }) => (color ? pageColor(color) : colors.green)};
    font-size: 60px;
    font-weight: 200;
    display: block;
    margin-bottom: 10px;

    ${below.ipadPort`
      font-size: 50px;
      margin-bottom: 5px;
    `}
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
      color: ${({ color }) => (color ? pageColor(color) : colors.darkerBlue)};
    }

    h5 {
      background-color: ${({ color }) => (color ? pageColor(color) : colors.darkerBlue)};
      clip-path: polygon(0 0, 100% 0, 98% 98%, 3% 100%);
    }
  }
`;
