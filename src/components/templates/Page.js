import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Image from '../atoms/Image';
import { breakpoints } from '../../styles/utilities/settings';

const Page = ({ data }) => (
  <Layout>
    <Image src={data.wordpressPage.acf.featured_image.url} sources={[[320, breakpoints.mobile], [768, breakpoints.ipadPort]]} />
  </Layout>
);

export default Page;

export const query = graphql`
query PageQuery($slug: String!) {
  wordpressPage(slug: {eq: $slug}) {
    slug
    acf {
      featured_image {
        url
        name
      }
    }
  }
}`;
