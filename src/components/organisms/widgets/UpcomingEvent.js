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

const UpcomingEvent = ({ widget, color }) => (
  <StaticQuery
    query={UPCOMINGEVENT_QUERY}
    render={data => (
      <Wrapper medium>
        <SUpcomingEvent color={color}>
          <div className="copy">
            <h4>{widget.heading_copy}</h4>
            <p>{widget.copy}</p>
            {widget.button.copy && <PageLink content={widget.button} /> }
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
  margin: 100px auto;


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
      padding: 0 50px 100px;
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

    ${below.ipadPort`
      margin: 0 -50px;
    `}


  .event {
    background-color: ${({ color }) => (color ? pageColor(color) : colors.green)};
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
