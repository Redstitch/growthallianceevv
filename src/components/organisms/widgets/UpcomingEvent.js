import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery, Link } from 'gatsby';
import urlFixer from '../../../js/urlFixer';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';
import fonts from '../../../styles/utilities/fonts';
import { button } from '../../../styles/utilities/elements';
import { above, below } from '../../../styles/utilities/mediaQueries';

const UpcomingEvent = ({ widget, color }) => (
  <StaticQuery
    query={UPCOMINGEVENT_QUERY}
    render={data => (
      <Wrapper wide>
        <SUpcomingEvent color={color}>
          <div className="copy">
            <h4>{widget.heading_copy}</h4>
            <p>{widget.copy}</p>
            <Link to={urlFixer(widget.button.url)}>
              {widget.button.copy}
            </Link>
          </div>
          <div className="event">
            {data.allWordpressWpEvent.edges.map(({ node }) => (
              <React.Fragment key={node.id}>
                <sup>Featured Upcoming Event</sup>
                <h4>{node.title}</h4>
                <p dangerouslySetInnerHTML={{
                  __html: `<strong>${node.acf.start_date}${node.acf.end_date && ` - ${node.acf.end_date}`}${node.acf.start_time && `<br/>${node.acf.start_time}`}${node.acf.end_time && ` - ${node.acf.end_time}`}</strong>`,
                }}
                />
                <div dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
                />
                <Link to={`/events/${node.slug}`}>
                  Learn more
                </Link>
              </React.Fragment>
            ))}
          </div>
        </SUpcomingEvent>
      </Wrapper>
    )}
  />
);

export default UpcomingEvent;

const UPCOMINGEVENT_QUERY = graphql`{
  allWordpressWpEvent(limit: 1, sort: {order: DESC, fields: acf___start_date}) {
    edges {
      node {
        id
        title
        slug
        excerpt
        acf {
          start_date
          end_date
          start_time
          end_time
          content
        }
      }
    }
  }
}`;

const SUpcomingEvent = styled.div`
  margin-bottom: 100px;

  ${above.ipadPort`
    display: flex;
    align-items: center;
  `}

  > div {
    width: 100%;
  }

  h4 {
    font-size: 45px;
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
      padding-bottom: 50px;
    `}

    h4 {
      color: ${({ color }) => (color ? pageColor(color) : colors.green)};
    }

    a {
      ${button};
    }
  }

  .event {
    background-color: ${({ color }) => (color ? pageColor(color) : colors.green)};
    clip-path: polygon(0 0, 98% 2%, 100% 94%, 0% 100%);
    color: ${colors.white};
    position: relative;
    padding: 70px 50px;

    ${below.ipadPort`
      padding: 50px 30px;
    `}

    sup {
      ${fonts.HelveticaNeueBold};
    }

    a {
      margin-top: 30px;
      ${button};
    }
  }
`;
