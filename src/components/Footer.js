import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const Footer = () => (
  <footer>
    This is the footer.
    <StaticQuery
      query={FOOTER_QUERY}
      render={data => (
        <>
          {' '}
          {data.wordpressAcfOptions.options.phone}
        </>
      )}
    />
  </footer>
);

export default Footer;

const FOOTER_QUERY = graphql`{
  wordpressAcfOptions {
    options {
      phone
      street
      city_state_zip
      hours {
        closed
        days
        start_time
        end_time
      }
      credits
      subscribe {
        heading
        copy
        form
      }
    }
  }
}`;
