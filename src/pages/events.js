import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import DefaultBanner from '../components/organisms/banners/DefaultBanner';
import Wrapper from '../styles/utilities/Wrapper';
import EventItem from '../components/molecules/EventItem';
import slugify from '../js/slugify';
import { getToday, getItemDate } from '../js/dateCompare';

function compiledEvents(events) {
  const compiledGroup = [];

  events.forEach(({ node }) => {
    const eventObj = {};
    eventObj.title = node.title;
    eventObj.eId = node.id;
    eventObj.excerpt = node.excerpt;
    eventObj.slug = node.slug;
    eventObj.start = node.acf.start_date;
    eventObj.start_time = node.acf.start_time;
    eventObj.end_time = node.acf.end_time;
    compiledGroup.push(eventObj);
    if (node.acf.reoccurring_dates) {
      node.acf.reoccurring_dates.forEach(({ date }, index) => {
        const reEventObj = {};
        reEventObj.title = node.title;
        reEventObj.eId = `re${node.id}${index}`;
        reEventObj.excerpt = node.excerpt;
        reEventObj.start_time = node.acf.start_time;
        reEventObj.end_time = node.acf.end_time;
        reEventObj.slug = slugify(`${node.slug}-${date}`);
        reEventObj.start = date;
        compiledGroup.push(reEventObj);
      });
    }
  });

  const sorted = compiledGroup.sort((a, b) => new Date(a.start) - new Date(b.start));
  return sorted;
}

const events = () => (
  <Layout>
    <StaticQuery
      query={EVENTS_QUERY}
      render={data => (
        <>
          <Dochead
            title="Events"
            siteName={data.wordpressSiteMetadata.name}
            pageImage={data.wordpressAcfOptions.options.events_banner_image && data.wordpressAcfOptions.options.events_banner_image.url}
            description={data.wordpressSiteMetadata.description}
          />
          <DefaultBanner
            page={{
              title: data.wordpressAcfOptions.options.events_banner_copy.heading,
              mainImage: data.wordpressAcfOptions.options.events_banner_image,
              color: 'blue',
              description: data.wordpressAcfOptions.options.events_banner_copy.copy,
            }}
            content={{
              overlay_color: 'blue',
            }}
          />
          <Wrapper medium>
            {compiledEvents(data.allWordpressWpEvent.edges).map(evnt => parseInt(getToday(), 0) <= parseInt(getItemDate(evnt.start), 0)
                  && <EventItem key={evnt.eId} content={evnt} />)}
          </Wrapper>
        </>
      )}
    />
  </Layout>
);

export default events;

const EVENTS_QUERY = graphql`{
  wordpressSiteMetadata {
    name
    description
  }
  wordpressAcfOptions {
    options {
      events_banner_copy {
        heading
        copy
      }
      events_banner_image {
        width
        height
        url
        name
        sizes {
          large_size
          lqph_size
          middle_size
          small_size
          x_large_size
          x_small_size
          xx_large_size
          xx_small_size
        }
      }
    }
  }
  allWordpressWpEvent(sort: {fields: acf___start_date, order: ASC}) {
    edges {
      node {
        title
        excerpt
        slug
        id
        acf {
          reoccurring_dates {
            date
          }
          start_date
          end_date
          start_time
          end_time
        }
      }
    }
  }
}`;
