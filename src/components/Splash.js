import React, { Component } from 'react';
import styled from 'styled-components';

const myWhite = 'rgba(255, 255, 255, 0.85)';

const SplashWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  h1 {
    margin: 0;
  }
  h4 {
  }
  .center-div {
    height: calc(100% - 64px);
    width: auto;
    display: grid;
    align-content: center;
    justify-items: center;
  }
  .btns-div {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
  .btn {
    cursor: pointer;
    background: none;
    border: 1px solid ${myWhite};
    border-radius: 4px;
    color: ${myWhite};
    padding: 10px 20px;
  }
  .btn-cta {
    background: ${myWhite};
    color: rgba(0, 0, 0, 0.9);
  }
`;

export default class Splash extends Component {
  render() {
    return (
      <SplashWrapper>
        <div className="center-div">
          <h1>My awesome headline</h1>
          <h4>more text, about me, etc etc trust me hire me pls thx</h4>
          <div className="btns-div">
            <button className="btn">Learn more</button>
            <button className="btn btn-cta">Get in touch</button>
          </div>
        </div>
      </SplashWrapper>
    );
  }
}
