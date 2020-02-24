import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery, Link } from 'gatsby';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';
import fonts from '../../../styles/utilities/fonts';
import { button } from '../../../styles/utilities/elements';
import { above, below } from '../../../styles/utilities/mediaQueries';
import PageLink from '../../atoms/PageLink';
import { compiledEvents } from '../../../pages/events';

const UpcomingEvent = ({ widget, color }) => (
  <StaticQuery
    query={UPCOMINGEVENT_QUERY}
    render={data => (
      <Wrapper medium>
        <SUpcomingEvent color={color}>
          <div className="copy">
            <h4>{widget.heading_copy}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: widget.copy,
              }}
            />
            {widget.button.copy && <PageLink content={widget.button} />}
          </div>
          <div className="event">
            {compiledEvents(data.allWordpressWpEvent.edges).map(
              (evnt, index) =>
                index === 0 && (
                  <React.Fragment key={evnt.eId}>
                    <sup>Featured Upcoming Event</sup>
                    <h4>{evnt.title}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `<strong>${evnt.start}${evnt.end &&
                          ` - ${evnt.end}`}${evnt.start &&
                          `<br/>${evnt.start_time}`}${evnt.end_time &&
                          ` - ${evnt.end_time}`}</strong>`,
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: evnt.excerpt,
                      }}
                    />
                    <Link to={`/events/${evnt.slug}`}>Learn more</Link>
                  </React.Fragment>
                )
            )}
          </div>
        </SUpcomingEvent>
      </Wrapper>
    )}
  />
);

export default UpcomingEvent;

const UPCOMINGEVENT_QUERY = graphql`
  {
    allWordpressWpEvent(sort: { fields: acf___start_date, order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          acf {
            reoccurring_dates {
              date
            }
            start_date
            end_date
            start_time
            end_time
            content
          }
        }
      }
    }
  }
`;

const SUpcomingEvent = styled.div`
  margin: 0 auto 100px;

  ${above.ipadPort`
    display: flex;
    align-items: center;
  `}

  > div {
    width: 100%;
  }

  h4 {
    font-size: 46px;
    line-height: 1;
    margin-left: -2px;
    ${fonts.HelveticaNeueRegular};

    ${below.ipadPort`
      font-size: 32px;
    `}
  }

  .copy {
    ${above.ipadPort`
      padding-right: 50px;
    `}

    ${below.ipadPort`
      padding: 0 0 100px;
    `}

    h4 {
      color: ${({ color }) => (color ? pageColor(color) : colors.green)};
      margin-bottom: 18px;
    }

    p {
      color: ${colors.darkerGray};
      margin-bottom: 34px;
    }

    a {
      ${button};
      ${fonts.HelveticaNeueBold};
    }
  }

  .event {
    background-color: ${({ color }) =>
      color ? pageColor(color) : colors.green};
    clip-path: polygon(0 0, 98% 2%, 100% 94%, 0% 100%);
    color: ${colors.white};
    position: relative;
    padding: 70px 50px;

    ${below.ipadPort`
      padding: 100px 50px;
    `}

    sup {
      ${fonts.HelveticaNeueBold};
      margin-bottom: 20px;
      display: block;
    }

    p {
      color: ${colors.white};
    }

    a {
      margin-top: 15px;
      ${button};
      ${fonts.HelveticaNeueBold};
    }
  }
`;
