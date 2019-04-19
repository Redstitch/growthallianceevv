import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import urlFixer from '../../../js/urlFixer';
import Wrapper from '../../../styles/utilities/Wrapper';
import NumberItem, { SNumberItem } from '../../atoms/NumberItem';
import { colors } from '../../../styles/utilities/settings';
import { pageColor } from '../../../js/autoColor';
import { below, above } from '../../../styles/utilities/mediaQueries';

const NumberTicker = ({ widget, color }) => (
  <SNumberTicker color={color}>
    <Wrapper>
      <div className="heading">
        <h3>{widget.heading.title}</h3>
        {widget.heading.copy && <p>{widget.heading.copy}</p>}
        <Link to={urlFixer(widget.heading.link.page)}>
          {widget.heading.link.copy}
        </Link>
      </div>
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

  .heading {
    margin-bottom: 50px;
  }

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

  h3 {
    font-size: 45px;
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
    font-weight: 400;

    ${below.ipadPort`
      font-size: 30px;
    `}
  }

  a {
    color: ${colors.orange};
    font-weight: 700;
    position: relative;
    display: inline-block;

    &:before {
      content: '';
      display: inline-block;
      margin: 2px 5px 0 0;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;

      border-left: 7px solid ${colors.orange};
    }
  }
`;
