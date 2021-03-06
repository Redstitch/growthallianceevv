import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Wrapper from '../../../styles/utilities/Wrapper';
import WidgetHeader from '../../molecules/WidgetHeader';
import Card from '../../molecules/Card';
import { SBlogFeed } from './BlogFeed';

const CardLinks = ({ widget, color }) => (
  <StaticQuery
    query={CARDLINKS_QUERY}
    render={data => (
      <SBlogFeed
        color={color}
        count={widget.cards_rel ? widget.cards_rel.length : widget.cards.length}
      >
        <Wrapper>
          <WidgetHeader content={widget} color={color} />
          <div className="posts">
            {widget.cards_rel &&
              widget.cards_rel.map(card => (
                <>
                  {card.post_type === 'page' &&
                    data.allWordpressPage.edges.map(
                      ({ node }) =>
                        node.wordpress_id === card.wordpress_id && (
                          <Card
                            key={node.id}
                            content={node}
                            color={color}
                            link={
                              node.parent_element
                                ? `/${node.parent_element.slug}/${node.slug}`
                                : `/${node.slug}`
                            }
                          />
                        )
                    )}
                  {card.post_type === 'event' &&
                    data.allWordpressWpEvent.edges.map(
                      ({ node }) =>
                        node.wordpress_id === card.wordpress_id && (
                          <Card
                            key={node.id}
                            content={node}
                            color={color}
                            link={
                              node.parent_element
                                ? `/${node.parent_element.slug}/${node.slug}`
                                : `/${node.slug}`
                            }
                          />
                        )
                    )}
                  {card.post_type === 'post' &&
                    data.allWordpressPost.edges.map(
                      ({ node }) =>
                        node.wordpress_id === card.wordpress_id && (
                          <Card
                            key={node.id}
                            content={node}
                            color={color}
                            link={
                              node.parent_element
                                ? `/${node.parent_element.slug}/${node.slug}`
                                : `/${node.slug}`
                            }
                          />
                        )
                    )}
                </>
              ))}
            {widget.cards &&
              widget.cards.map((card, index) => (
                <Card
                  key={card.copy.title + index}
                  image={card.image}
                  content={card.copy}
                  color={color}
                  link={card.copy.url}
                  newTab={card.copy.new_tab}
                  pageLink={card.copy.page_link}
                />
              ))}
          </div>
        </Wrapper>
      </SBlogFeed>
    )}
  />
);

export default CardLinks;

const CARDLINKS_QUERY = graphql`
  {
    allWordpressPage {
      edges {
        node {
          id
          wordpress_id
          title
          slug
          path
          parent_element {
            slug
          }
          acf {
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

    allWordpressWpEvent(sort: { fields: acf___start_date, order: ASC }) {
      edges {
        node {
          title
          wordpress_id
          excerpt
          slug
          path
          id
          acf {
            reoccurring_dates {
              date
            }
            start_date
            end_date
            start_time
            end_time
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

    allWordpressPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          path
          categories {
            slug
          }
          acf {
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
          categories {
            slug
          }
        }
      }
    }
  }
`;
