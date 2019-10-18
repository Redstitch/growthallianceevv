import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Shape2 } from '../atoms/Shapes';
import { colors } from '../../styles/utilities/settings';
import fonts from '../../styles/utilities/fonts';
import { button } from '../../styles/utilities/elements';
import { above, below } from '../../styles/utilities/mediaQueries';

const EventItem = ({ content }) => (
  <SEventItem>
    <div className="information">
      <div className="inner">
        <Shape2 />
        <span className="date">
          {content.start}
        </span>
        <span className="time">
          {content.start_time}
          {content.end_time && ` - ${content.end_time}`}
        </span>
      </div>
    </div>
    <div className="content">
      <h2>{content.title}</h2>
      <div
        className="bodycopy"
        dangerouslySetInnerHTML={{
          __html: content.excerpt,
        }}
      />
      <Link to={`/events/${content.slug}`}>Learn More</Link>
    </div>
  </SEventItem>
);

export default EventItem;

export const SEventItem = styled.div`



  padding: 0 50px;

  ${above.ipadPort`
    display: flex;
    align-items: flex-start;
  `}

  + div {
    margin-top: 100px;
  }

  &:last-of-type {
    margin-bottom: 100px;
  }

  .information {
    color: ${colors.white};

    .date {
      font-size: 24px;
      line-height: 1.15;
    }

    .time {
      font-size: 15px;
      padding-top: 8px;
      display: block;
    }

    ${above.ipadPort`
      width: 300px;
      padding-right: 30px;
    `}

    ${below.ipadPort`
      background-color: ${colors.blue};
      margin-bottom: 30px;
    `}

    .inner {
      ${fonts.HelveticaNeueBold};
      position: relative;
      padding: 40px 30px;

      ${above.ipadPort`
        height: 190px;
      `}

      ${below.ipadPort`
        padding: 30px;
      `}

    }

    svg {
      fill: ${colors.blue};
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      ${below.ipadPort`
        display: none;
      `}
    }
  }

  div .event {
    a {
      ${fonts.HelveticaNeueBold};
      font-weight: bold;
    }
  }

  .content {

    ${above.ipadPort`
      width: calc(100% - 240px);
    `}

    h2 {
      color: ${colors.blue};
      font-size: 35px;
    }

    h1, h2, h3, h4, h5, h6, a, strong {
      color: ${colors.blue};
    }

    .bodycopy {
      color: ${colors.darkerGray};
    }

    > a {
      ${button};
      ${fonts.HelveticaNeueBold};
    }
  }
`;
