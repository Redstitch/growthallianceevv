import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import NumberItem, { SNumberItem } from '../../atoms/NumberItem';
import { below, above } from '../../../styles/utilities/mediaQueries';
import WidgetHeader from '../../molecules/WidgetHeader';

const NumberTicker = ({ widget, color }) => (
  <SNumberTicker color={color}>
    <Wrapper>
      <WidgetHeader content={widget} color={color} />
      <div className="numbers">
        {widget.numbers.map((number, index) => (
          <NumberItem key={number.number + index} color={color} content={number} alignment={widget.number_alignment} />
        ))}
      </div>
    </Wrapper>
  </SNumberTicker>
);

export default NumberTicker;

const SNumberTicker = styled.div`
  text-align:center;
  padding: 0 0 100px;

  .numbers {

    ${above.ipadPort`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-right: -30px;
    `}

    ${SNumberItem} {

      ${above.ipadPort`
        margin-right: 30px;
      `}

      ${below.ipadPort`
        + div {
          margin-top: 30px;
        }
      `}
    }

    > div {
      width: 100%;
    }
  }
`;
