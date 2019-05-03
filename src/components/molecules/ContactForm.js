import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class ContactForm extends Component {
  state = {
    fname: '',
    lname: '',
    _replyTo: '',
    message: '',
    _subject: 'Message from Contact Form',
  }

  formSubmit(url, data) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="contact-form">
        <form>
          <label htmlFor="fname">
          First Name
            <input
              id="fname"
              type="text"
              onChange={(e) => {
                this.setState({
                  fname: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="lname">
          Last Name
            <input
              id="fname"
              type="text"
              onChange={(e) => {
                this.setState({
                  lname: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="email">
          Email Address
            <input
              id="email"
              type="email"
              onChange={(e) => {
                this.setState({
                  _replyTo: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="message">
          Message
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={(e) => {
                this.setState({
                  message: e.target.value,
                });
              }}
            />
          </label>
          <input
            onClick={(e) => {
              e.preventDefault();
              this.formSubmit('https://formspree.io/scott.wambach@redstitchdigital.com', this.state);
            }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
