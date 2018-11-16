import React, { Component } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  width: 100%;
  background: lightgrey;
`;

export default class Contact extends Component {
  handleClick = () => {
    console.log('sent!');
  };
  render() {
    return (
      <ContactWrapper>
        <div className="name-and-email">
          <span className="field name-field">
            name:
            <input type="text" />
          </span>
          <span className="field email-field">
            email:
            <input type="email" />
          </span>
        </div>
        <div className="textarea-div">
          message:
          <textarea cols="30" rows="10" className="field message-field" />
        </div>
        <button onClick={this.handleClick}>Send!</button>
      </ContactWrapper>
    );
  }
}
