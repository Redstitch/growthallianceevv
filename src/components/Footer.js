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
            <Wrapper wide>
              <div className="columns">
                <div>
                  <h4>{data.wordpressAcfOptions.options.subscribe.heading}</h4>
                  <div dangerouslySetInnerHTML={{
                    __html: `<p>${data.wordpressAcfOptions.options.subscribe.copy}</p>${data.wordpressAcfOptions.options.subscribe.form}`,
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
                  <div
                    className="credits"
                    dangerouslySetInnerHTML={{
                      __html: data.wordpressAcfOptions.options.credits,
                    }}
                  />
                </div>
              </div>
            </Wrapper>
          </div>
        </>
      )}
    />
    <Globe rotation="-155deg" />
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


  .columns {

    margin-left: 50px;
    ${below.ipadMid`
      margin-left: 25px;
    `}


    .subscribe-form {
      max-width: 300px;

      form {
        position: relative;
        display: flex;
        width: 100%;
        padding-top: 10px;
      }

      input {
        flex: 1;
        padding: 12px 10px;
        font-size: 14px;
        outline: 0;
      }

      button {
        flex: 0 0 100px;
        padding-top: 3px;
        border: 0;
        font-size: 12px;
        ${fonts.HelveticaNeueBold};
        text-transform: uppercase;
        background: ${colors.orange};
        color: ${colors.white};
      }

    }


    ${above.ipadPort`
      display: flex;
      max-width: 877px;
    `}

    img {
      max-width: 160px;
    }

    p {
      margin-bottom: 25px;
    }

    > div {
      padding-right: 100px;

      width: 100%;
      font-size: 14px;
      :first-of-type {
        min-width: 400px;
      ${below.ipadLand`
        min-width: 350px;
      `}
      }

      ${below.ipadMid`
        padding-right: 20px;
      `}

      ${below.ipadPort`
        padding-top: 50px;
      `}

      h4 {
        font-size: 14px;
        ${fonts.HelveticaNeueBold};
        margin-bottom: 10px;
      }

      .credits {
        ${fonts.HelveticaNeueBold};
        p {
          margin-bottom: 10px;
          font-size: 12px;
        }
      }

      a {
        color: ${colors.white};
      }
    }
  }

  svg {
    fill: ${colors.navy};
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



  }
  ${SGlobe} {
    bottom: -330px;
    right: -250px;
    width: 100%;
    min-width: 600px;
    max-width: 700px;
    transform: rotate(15deg);
  }
`;
