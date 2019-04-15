import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Image from './atoms/imgix/Image';
import { breakpoints, misc } from '../styles/utilities/settings';
import { below } from '../styles/utilities/mediaQueries';

const Header = () => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => (
      <SHeader>
        <Image
          className="logo"
          src={data.wordpressAcfOptions.options.logo.url}
          maxWidth={400}
          minWidth={200}
          breakPoint={breakpoints.ipadPort}
        />
          this the header
      </SHeader>

    )}
  />
);

export default Header;

const HEADER_QUERY = graphql`{
  wordpressAcfOptions {
    options {
      logo {
        url
      }
    }
  }
}`;


const SHeader = styled.header`
  .logo {
    max-width: 400px;
    transition-duration: ${misc.animSpeed};

    ${below.ipadPort`
      max-width: 200px;
    `}
  }
`;
