import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import DefaultBanner from '../components/organisms/banners/DefaultBanner';
import Wrapper from '../styles/utilities/Wrapper';
import EventItem from '../components/molecules/EventItem';
import slugify from '../js/slugify';
import { getToday, getItemDate } from '../js/dateCompare';

function endDateFinder(start, difference) {
  let retDate = null;
  const date1 = new Date(start);
  const diffDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
  const endDate = date1.setDate(date1.getDate() + diffDays);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  if (endDate) {
    retDate = new Date(endDate).toLocaleDateString('en-US', options);
  }
  return retDate;
}

export const compiledEvents = events => {
  const compiledGroup = [];
  const currentGroup = [];

  events.forEach(({ node }) => {
    const eventObj = {};
    const date1 = new Date(node.acf.start_date);
    const date2 = new Date(node.acf.end_date);
    const diffTime = Math.abs(date2 - date1);

    eventObj.title = node.title;
    eventObj.eId = node.id;
    eventObj.excerpt = node.excerpt;
    eventObj.slug = node.slug;
    eventObj.start = node.acf.start_date;
    eventObj.end = endDateFinder(date1, diffTime);
    eventObj.start_time = node.acf.start_time;
    eventObj.end_time = node.acf.end_time;
    compiledGroup.push(eventObj);

    if (node.acf.reoccurring_dates) {
      node.acf.reoccurring_dates.forEach(({ date }, index) => {
        const date3 = new Date(date);
        const reEventObj = {};
        reEventObj.title = node.title;
        reEventObj.slug = slugify(`${node.slug}-${date}`);
        reEventObj.start = date;
        reEventObj.end = endDateFinder(date3, diffTime);
        reEventObj.eId = `re${node.id}${index}`;
        reEventObj.excerpt = node.excerpt;
        reEventObj.start_time = node.acf.start_time;
        reEventObj.end_time = node.acf.end_time;
        compiledGroup.push(reEventObj);
      });
    }
  });

  const sorted = compiledGroup.sort(
    (a, b) => new Date(a.start) - new Date(b.start)
  );

  for (let index = 0; index < sorted.length; index += 1) {
    const event = sorted[index];
    if (parseInt(getToday(), 0) <= parseInt(getItemDate(event.start), 0)) {
      currentGroup.push(event);
    }
  }

  return currentGroup;
};

const events = () => (
  <Layout>
    <StaticQuery
      query={EVENTS_QUERY}
      render={data => (
        <>
          <Dochead
            title="Events"
            siteName={data.wordpressSiteMetadata.name}
            pageImage={
              data.wordpressAcfOptions.options.events_banner_image &&
              data.wordpressAcfOptions.options.events_banner_image.url
            }
            description={data.wordpressSiteMetadata.description}
          />
          <section>
            <DefaultBanner
              page={{
                title:
                  data.wordpressAcfOptions.options.events_banner_copy.heading,
                mainImage: data.wordpressAcfOptions.options.events_banner_image,
                color: 'blue',
                description:
                  data.wordpressAcfOptions.options.events_banner_copy.copy,
              }}
              content={{
                overlay_color: 'blue',
              }}
            />
          </section>
          <Wrapper medium>
            {compiledEvents(data.allWordpressWpEvent.edges).map(evnt => (
              <EventItem key={evnt.eId} content={evnt} />
            ))}
          </Wrapper>
        </>
      )}
    />
  </Layout>
);

export default events;

const EVENTS_QUERY = graphql`
  {
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
    allWordpressWpEvent(sort: { fields: acf___start_date, order: ASC }) {
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
  }
`;
