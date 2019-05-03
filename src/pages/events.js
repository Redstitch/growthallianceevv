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
            pageImage={data.wordpressAcfOptions.options.events_banner_image && data.wordpressAcfOptions.options.events_banner_image.localFile.childImageSharp.original.src}
            description={data.wordpressSiteMetadata.description}
          />
          <DefaultBanner
            page={{
              title: data.wordpressAcfOptions.options.events_banner_copy.heading,
              mainImage: data.wordpressAcfOptions.options.events_banner_image.localFile.childImageSharp.fixed,
              color: 'blue',
              description: data.wordpressAcfOptions.options.events_banner_copy.copy,
            }}
          />
          <Wrapper narrow>
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
        localFile {
          childImageSharp {
            original {
              src
            }
            fixed(quality: 100, width: 1200) {
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
            }
          }
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
