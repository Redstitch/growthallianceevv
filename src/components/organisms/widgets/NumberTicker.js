import React from 'react';
import styled from 'styled-components';
import { above, below } from '../../../styles/utilities/mediaQueries';
import NumberItem, { SNumberItem } from '../../atoms/NumberItem';
import WidgetHeader from '../../molecules/WidgetHeader';
import Wrapper from '../../../styles/utilities/Wrapper';

const NumberTicker = ({ widget, color }) => (
  <SNumberTicker color={color}>
    <Wrapper>
      <WidgetHeader content={widget} color={color} />
      {widget.rows.map((row, index) => (
        <div key={`row${index}`} className="numbers">
          {row.numbers.map(number => (
            <NumberItem key={number.number + index} rowColor={row.row_color} color={color} content={number} alignment={widget.number_alignment} />
          ))}
        </div>
      ))}
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
