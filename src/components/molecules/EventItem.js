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
        {content.acf.start_date}
        {content.acf.end_date
          && (
          <>
            {' -'}
            <br />
            {content.acf.end_date}
          </>
          )}
        <br />
        {content.acf.start_time}
        {content.acf.end_time && ` - ${content.acf.end_time}`}
      </div>
    </div>
    <div className="content">
      <h3>{content.title}</h3>
      <div dangerouslySetInnerHTML={{
        __html: content.excerpt,
      }}
      />
      <Link to={`/events/${content.slug}`}>Learn More</Link>
    </div>
  </SEventItem>
);

export default EventItem;


const SEventItem = styled.div`
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
    width: 270px;
    padding-right: 30px;
    color: ${colors.white};

    ${below.ipadPort`
      margin-bottom: 30px;
    `}

    .inner {
      ${fonts.HelveticaNeueBold};
      position: relative;
      padding: 40px 30px;
      height: 190px;
    }

    svg {
      fill: ${colors.blue};
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  .content {

    ${above.ipadPort`
      width: calc(100% - 240px);
    `}

    h3 {
      color: ${colors.blue};
      font-size: 35px;
    }

    a {
      ${button};
    }
  }
`;
