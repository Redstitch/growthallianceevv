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
            pageImage={data.wordpressAcfOptions.options.team_banner_image && data.wordpressAcfOptions.options.team_banner_image.url}
            description={data.wordpressSiteMetadata.description}
          />
          <DefaultBanner
            page={{
              title: data.wordpressAcfOptions.options.team_banner_copy.heading,
              mainImage: data.wordpressAcfOptions.options.team_banner_image,
              color: 'navy',
              description: data.wordpressAcfOptions.options.team_banner_copy.copy,
            }}
            content={{
              overlay_color: 'navy',
            }}
          />
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
    }
  }
  wordpressSiteMetadata {
    name
    description
  }
}`;
