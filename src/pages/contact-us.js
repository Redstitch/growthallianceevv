import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import DefaultBanner from '../components/organisms/banners/DefaultBanner';
import ContactForm from '../components/molecules/ContactForm';
import GoogleMap from '../components/molecules/GoogleMap';
import { above } from '../styles/utilities/mediaQueries';

const ContactUs = () => (
  <Layout>
    <StaticQuery
      query={CONTACTUS_QUERY}
      render={data => (
        <>
          <Dochead
            title="Contact Us"
            siteName={data.wordpressSiteMetadata.name}
            pageImage={
              data.wordpressAcfOptions.options.contact_banner_image &&
              data.wordpressAcfOptions.options.contact_banner_image.url
            }
            description={data.wordpressSiteMetadata.description}
          />
          <DefaultBanner
            page={{
              title:
                data.wordpressAcfOptions.options.contact_banner_copy.heading,
              mainImage: data.wordpressAcfOptions.options.contact_banner_image,
              color: 'blue',
              description:
                data.wordpressAcfOptions.options.contact_banner_copy.copy,
              noMargin: true,
            }}
            content={{
              overlay_color: 'blue',
            }}
          />
          <ContactBlock>
            <ContactForm />
            <GoogleMap location={data.wordpressAcfOptions.options.location} />
          </ContactBlock>
        </>
      )}
    />
  </Layout>
);

export default ContactUs;

const ContactBlock = styled.div`
  margin-bottom: -50px;

  ${above.ipadLand`
    display: flex;
    align-items: stretch;
    margin-bottom: -100px;
  `}

  > div {
    ${above.ipadLand`
      width: 50%;
    `}
  }
`;

const CONTACTUS_QUERY = graphql`
  {
    wordpressSiteMetadata {
      name
      description
    }
    wordpressAcfOptions {
      options {
        location {
          lat
          lng
        }
        contact_banner_copy {
          heading
          copy
        }
        contact_banner_image {
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
  }
`;
