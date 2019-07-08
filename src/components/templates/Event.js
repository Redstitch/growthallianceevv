import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import Wrapper from '../../styles/utilities/Wrapper';
import DefaultBanner from '../organisms/banners/DefaultBanner';
import { SEventItem } from '../molecules/EventItem';

export const EventContext = React.createContext();

const Event = ({ data }) => (
  <EventContext.Provider value={{
    mainImage: data.wordpressWpEvent.acf.main_image.url,
  }}
  >
    <Layout>
      <Dochead
        title={data.wordpressWpEvent.title}
        siteName={data.wordpressSiteMetadata.name}
        pageImage={data.wordpressWpEvent.acf.main_image && data.wordpressWpEvent.acf.main_image.localFile.childImageSharp.original.src}
        description={data.wordpressWpEvent.acf.description ? data.wordpressWpEvent.acf.description : data.wordpressSiteMetadata.description}
      />
      <DefaultBanner
        page={{
          title: data.wordpressAcfOptions.options.events_banner_copy.heading,
          mainImage: data.wordpressWpEvent.acf.main_image.localFile.childImageSharp.fixed,
          color: 'blue',
          description: data.wordpressAcfOptions.options.events_banner_copy.copy,
        }}
        content={{
          overlay_color: 'blue',
        }}
      />
      <Wrapper narrow>
        <SEventItem />
      </Wrapper>
    </Layout>
  </EventContext.Provider>

);

export default Event;

export const query = graphql`
query EventQuery($slug: String!) {
  wordpressWpEvent(slug: {eq: $slug}) {
    slug
    title
    acf {
      content
      start_date
      end_date
      start_time
      end_time
      rsvp
      main_image {
        localFile {
          childImageSharp {
            original {
              src
            }
            fixed(width: 1200, quality: 100) {
              tracedSVG
              aspectRatio
              width
              height
              srcSet
              src
            }
          }
        }
      }
    }
  }
  wordpressAcfOptions {
    options {
      events_banner_copy {
        heading
        copy
      }
    }
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;
