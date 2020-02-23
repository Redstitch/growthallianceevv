import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Wrapper from '../../../styles/utilities/Wrapper';
import TeamMember from '../../molecules/TeamMember';

const TeamList = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpTeam(sort: { fields: acf___order_number, order: ASC }) {
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
      }
    }
  `);
  return (
    <Wrapper>
      {data.allWordpressWpTeam.edges.map(({ node }, index) => (
        <TeamMember key={node.id} index={index} content={node} />
      ))}
    </Wrapper>
  );
};

export default TeamList;
