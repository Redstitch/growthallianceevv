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
        <div className="footer">
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
                  <div className="social">
                    <a href="https://www.youtube.com/user/EvansvilleGAGE"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>

                    <a href="https://twitter.com/GrowthAlliance"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>

                    <a href="https://www.facebook.com/GrowthAlliance"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="icon facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>

                    </div>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
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

  .social {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .icon {
    line-height: 23px;
    height: 25px;
    width: auto;
    padding-right: 15px;
  }

  .facebook {
    height: 23px;
  }

  .columns {
    margin-left: 10px;
    ${below.ipadLand`
      margin-left: 0;
      div:first-of-type {
        max-width: 375px;
      }
    `}



    .subscribe-form {
      max-width: 300px;

      form {
        position: relative;
        display: flex;
        width: 100%;
        padding-top: 20px;
        ${below.ipadMid`
          margin-bottom: 11px;
        `}
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


    ${above.ipadMid`
      display: flex;
      max-width: 940px;
    `}

    img {
      max-width: 160px;
    }

    p {
      margin-bottom: 15px;
    }

    > div {
      margin-right: 45px;
      :first-of-type {
        margin-right: 70px;
      }
      
      ${below.ipadLand`
        margin-right: 60px;
      `}
      ${below.ipadMid`
        margin-right: 35px;
      `}

      width: 100%;
      font-size: 16px;
      :first-of-type {
        min-width: 333px;
      }

      ${below.ipadMid`
        padding-right: 20px;
      `}

      ${below.ipadMid`
        padding-top: 50px;
      `}

      h4 {
        font-size: 16px;
        ${fonts.HelveticaNeueBold};
        margin-bottom: 15px;
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

    ${below.ipadMid`
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
