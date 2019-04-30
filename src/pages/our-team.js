import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Dochead from '../components/Dochead';
import DefaultBanner from '../components/organisms/banners/DefaultBanner';
import Wrapper from '../styles/utilities/Wrapper';
import TeamMember from '../components/molecules/TeamMember';


const OurTeam = () => (
  <Layout>
    <StaticQuery
      query={OURTEAM_QUERY}
      render={data => (
        <>
          <Dochead
            title="Our Team"
            siteName={data.wordpressSiteMetadata.name}
            pageImage={data.wordpressAcfOptions.options.team_banner_image && data.wordpressAcfOptions.options.team_banner_image.localFile.childImageSharp.original.src}
            description={data.wordpressSiteMetadata.description}
          />
          <DefaultBanner mainImage={data.wordpressAcfOptions.options.team_banner_image.localFile.childImageSharp.fixed} mainColor="navy" content={data.wordpressAcfOptions.options.team_banner_copy} />
          <Wrapper>
            {data.allWordpressWpTeam.edges.map(({ node }, index) => (
              <TeamMember key={node.id} index={index} content={node} />
            ))}
          </Wrapper>
        </>
      )}
    />
  </Layout>
);

export default OurTeam;


const OURTEAM_QUERY = graphql`{
  wordpressAcfOptions {
    options {
      team_banner_copy {
        heading
        copy
      }
      team_banner_image {
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
  allWordpressWpTeam {
    edges {
      node {
        id
        title
        acf {
          color
          title
          email
          description
          main_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 276, maxHeight: 276, quality: 100) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
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
