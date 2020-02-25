import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Dochead from '../Dochead';
import Wrapper from '../../styles/utilities/Wrapper';
import DefaultBanner from '../organisms/banners/DefaultBanner';
import { SEventItem } from '../molecules/EventItem';
import { SRichText } from '../organisms/widgets/RichText';

export const EventContext = React.createContext();

const Event = ({
  pageContext,
  data: {
    wordpressSiteMetadata,
    wordpressWpEvent: { title, acf },
  },
}) => (
  <EventContext.Provider
    value={{
      mainImage: acf.main_image.url,
    }}
  >
    <Layout>
      <Dochead
        title={title}
        siteName={wordpressSiteMetadata.name}
        pageImage={acf.main_image && acf.main_image.url}
        description={
          acf.description ? acf.description : wordpressSiteMetadata.description
        }
      />
      <section>
        <DefaultBanner
          page={{
            title,
            mainImage: acf.main_image,
            color: 'blue',
            description: `${pageContext.date}<br />${
              acf.start_time
            }${acf.end_time && ` - ${acf.end_time}`}`,
          }}
          content={{
            overlay_color: 'blue',
          }}
        />
      </section>
      <section>
        <Wrapper medium>
          <SEventItem>
            <SRichText>
              <div
                dangerouslySetInnerHTML={{
                  __html: acf.content,
                }}
              />
            </SRichText>
          </SEventItem>
        </Wrapper>
      </section>
    </Layout>
  </EventContext.Provider>
);

export default Event;

export const query = graphql`
  query EventQuery($slug: String!) {
    wordpressWpEvent(slug: { eq: $slug }) {
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
  }
`;
