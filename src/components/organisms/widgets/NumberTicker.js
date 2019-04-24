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

    ${above.mobile`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-right: -30px;
      flex-wrap: wrap;
    `}

    ${above.ipadPort`
      flex-wrap: nowrap;
    `}

    ${SNumberItem} {

      ${above.mobile`
        padding-right: 30px;
      `}

      ${below.mobile`
        + div {
          margin-top: 30px;
        }
      `}
    }

    > div {

      ${above.mobile`
        width: 50%;
      `}

      ${above.ipadPort`
        width: 100%;
      `}
    }
  }
`;
