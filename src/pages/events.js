import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import DefaultBanner from '../components/organisms/banners/DefaultBanner';
import Wrapper from '../styles/utilities/Wrapper';
import EventItem from '../components/molecules/EventItem';
import { getToday, getItemDate } from '../js/dateCompare';

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
            {data.allWordpressWpEvent.edges.map(({ node }) => parseInt(getToday(), 0) <= parseInt(getItemDate(node.acf.start_date), 0)
                && <EventItem key={node.id} content={node} />)}
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
          start_date
          end_date
          start_time
          end_time
        }
      }
    }
  }
}`;
