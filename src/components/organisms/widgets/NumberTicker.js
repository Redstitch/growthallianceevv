import React from 'react';
import styled from 'styled-components';
import { above, below } from '../../../styles/utilities/mediaQueries';
import NumberItem, { SNumberItem } from '../../atoms/NumberItem';
import WidgetHeader from '../../molecules/WidgetHeader';
import Wrapper from '../../../styles/utilities/Wrapper';
import { numberColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';
import WidgetFooter from '../../molecules/WidgetFooter';

const NumberTicker = ({ widget, color }) => (
  <SNumberTicker color={color}>
    <Wrapper>
      <WidgetHeader content={widget} color={color} />
      {widget.rows.map((row, index) => (
        <NumberRow key={`row${index}`} color={color} rowColor={row.row_color}>
          {row.row_heading && <h4>{row.row_heading}</h4>}
          <div className="numbers">
            {row.numbers.map(number => (
              <NumberItem key={number.number + index} rowColor={row.row_color} color={color} content={number} alignment={widget.number_alignment} />
            ))}
          </div>
        </NumberRow>
      ))}
      <WidgetFooter content={widget} />
    </Wrapper>
  </SNumberTicker>
);

export default NumberTicker;

const SNumberTicker = styled.div`
  text-align: center;
  padding: 0 0 100px;

  .numbers {

    ${above.mobile`
      display: flex;
      align-items: flex-end;
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

const NumberRow = styled.div`
  h4 {
    color: ${({ color, rowColor }) => numberColor(color, rowColor, colors.black)};
  }

  + div {
    margin-top: 50px;
  }
`;
