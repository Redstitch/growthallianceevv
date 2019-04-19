import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../styles/utilities/settings';
import Wrapper from '../styles/utilities/Wrapper';
import fonts from '../styles/utilities/fonts';
import { above, below } from '../styles/utilities/mediaQueries';
import Globe, { SGlobe } from './atoms/Globe';
import { Shape7 } from './atoms/Shapes';

const Footer = () => (
  <SFooter>
    <StaticQuery
      query={FOOTER_QUERY}
      render={data => (
        <>
          <Shape7 />
          <div className="content">
            <Wrapper>
              <div className="columns">
                <div>
                  <h4>{data.wordpressAcfOptions.options.subscribe.heading}</h4>
                  <p>{data.wordpressAcfOptions.options.subscribe.copy}</p>
                  <div dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfOptions.options.subscribe.form,
                  }}
                  />
                </div>
                <div>
                  <h4>Contact Us</h4>
                  <p><a href={`tel:${data.wordpressAcfOptions.options.phone}`}>{data.wordpressAcfOptions.options.phone}</a></p>
                  <p dangerouslySetInnerHTML={{
                    __html: `${data.wordpressAcfOptions.options.street}<br />${data.wordpressAcfOptions.options.city_state_zip}`,
                  }}
                  />
                  {data.wordpressAcfOptions.options.hours.map((time, index) => time.closed === false
                    && (
                      <p
                        key={time.days + index}
                        dangerouslySetInnerHTML={{
                          __html: `${time.days}<br />${time.start_time} - ${time.end_time}`,
                        }}
                      />
                    ))}
                </div>
                <div>
                  <div dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfOptions.options.credits,
                  }}
                  />
                </div>
              </div>
              <Globe rotation="-155deg" />
            </Wrapper>
          </div>
        </>
      )}
    />
  </SFooter>
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

const SFooter = styled.footer`
  overflow: hidden;
  position: relative;
  z-index: 1;

  svg {
    fill: ${colors.darkerBlue};
  }

  .columns {

    ${above.ipadPort`
      display: flex;
      max-width: 852px;
    `}

    img {
      max-width: 160px;
    }

    > div {
      width: 100%;
      font-size: 14px;

      + div {

        ${above.ipadPort`
          max-width: 300px;
          padding-left: 100px;
        `}

        ${below.ipadPort`
          padding-top: 50px;
        `}
      }

      h4 {
        font-size: 14px;
        ${fonts.HelveticaBold};
        margin-bottom: 10px;
      }

      a {
        color: ${colors.white};
      }
    }
  }

  svg {
    display: block;
    width: 100%;
  }

  ${Wrapper} {
    position: relative;
    z-index: 1;
  }

  .content {
    position: relative;
    padding: 100px 0;
    color: ${colors.white};
    background-color: ${colors.navy};

    ${below.ipadPort`
      padding: 50px 0;
    `}


    ${SGlobe} {
      bottom: -100px;
      right: 0;
      width: 100%;
      min-width: 600px;
      max-width: 700px;
      transform: translateY(50%) translateX(50%);
    }
  }
`;
