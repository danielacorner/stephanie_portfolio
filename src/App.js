import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* background: blue; */
  background-image: url('https://picsum.photos/1000/1000');
  background-attachment: fixed;
  .veil-filter {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;
class App extends Component {
  state = {
    count: 0,
    menuIsOpen: false
  };
  classMethod() {
    console.log('clicked!');
  }
  render() {
    return (
      <Wrapper>
        <div className="veil-filter">
          <Navbar />
          {/* splash page */}
          <Splash />
          <Works />
          <div className="works" />
          <Contact />
          <div className="contact" />
        </div>
      </Wrapper>
    );
  }
}

export default App;
