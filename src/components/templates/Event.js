import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import Wrapper from '../../styles/utilities/Wrapper';

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
      <Wrapper>
        {data.wordpressWpEvent.title}
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
  wordpressSiteMetadata {
    name
    description
  }
}`;
