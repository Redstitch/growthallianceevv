import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/utilities/settings';
import fonts from '../../styles/utilities/fonts';
import { button } from '../../styles/utilities/elements';
import { above } from '../../styles/utilities/mediaQueries';

const ContactForm = () => (
  <SContactForm>
    <div className="inner">
      <h2>Send us a message</h2>
      <form action="http://localhost:8888/contact.php" method="POST">
        <label htmlFor="fname">
          First Name
          <input name="fname" id="fname" type="text" />
        </label>
        <label htmlFor="osduiegnpiouenv307h09uhvsoihu">
          You Shouldnt See This
          <input id="osduiegnpiouenv307h09uhvsoihu" name="osduiegnpiouenv307h09uhvsoihu" type="text" />
        </label>
        <label htmlFor="lname">
          Last Name
          <input name="lname" id="lname" type="text" />
        </label>
        <label htmlFor="email">
          Email Address
          <input name="email" id="email" type="email" />
        </label>
        <label htmlFor="message">
          Message
          <textarea name="message" id="message" cols="30" rows="10" />
        </label>
        <input type="submit" id="submit" name="submit" value="Submit" />
      </form>
    </div>
  </SContactForm>
);

export default ContactForm;

const SContactForm = styled.div`
  .inner {
    padding: 70px 15px;

    ${above.ipadLand`
      max-width: ${breakpoints.pageWidth / 2}px;
      margin: 0 0 0 auto;
      padding: 70px 100px 120px 30px;
    `}
  }

  h2 {
    color: ${colors.blue};
  }

  label, input, textarea {
    display: block;
    color: ${colors.blue};
  }

  input,
  textarea {
    font-size: 18px;
    width: 100%;
    appearance: none;
    padding: 10px;
    border: 1px solid ${colors.darkGray};
  }

  label {
    font-size: 22px;
    ${fonts.HelveticaBold};

    &[for="osduiegnpiouenv307h09uhvsoihu"] {
      display: none;
    }

    + label {
      margin-top: 30px;
    }
  }

  input {
    line-height: 40px;

    &[type="submit"] {
      width: auto;
      margin-top: 30px;
      ${button};
    }
  }
`;
