import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import DefaultBanner from '../components/organisms/banners/DefaultBanner';
import Wrapper from '../styles/utilities/Wrapper';
import ContactForm from '../components/molecules/ContactForm';


const ContactUs = () => (
  <Layout>
    <StaticQuery
      query={CONTACTUS_QUERY}
      render={data => (
        <>
          <Dochead
            title="Contact Us"
            siteName={data.wordpressSiteMetadata.name}
            pageImage={data.wordpressAcfOptions.options.contact_banner_image && data.wordpressAcfOptions.options.contact_banner_image.localFile.childImageSharp.original.src}
            description={data.wordpressSiteMetadata.description}
          />
          <DefaultBanner
            page={{
              title: data.wordpressAcfOptions.options.contact_banner_copy.heading,
              mainImage: data.wordpressAcfOptions.options.contact_banner_image.localFile.childImageSharp.fixed,
              color: 'navy',
              description: data.wordpressAcfOptions.options.contact_banner_copy.copy,
            }}
          />
          <Wrapper>
            <div>
              <ContactForm />
            </div>
          </Wrapper>
        </>
      )}
    />
  </Layout>
);

export default ContactUs;


const CONTACTUS_QUERY = graphql`{
  wordpressSiteMetadata {
    name
    description
  }
  wordpressAcfOptions {
    options {
      contact_banner_copy {
        heading
        copy
      }
      contact_banner_image {
        localFile {
          childImageSharp {
            original {
              src
            }
            fixed(quality: 100, width: 1200, height: 350) {
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
}`;
