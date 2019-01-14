import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {

  render() {
    return (
      <div>
        <div className="Countries RF">
          <RF first="Russian" second="Federation" />
          <ButtonFun line="About" url="https://en.wikipedia.org/wiki/Russia" />
        </div>
        <div className="Countries KG">
          <RF first="Kyrgyz" second="Republic" />
          <ButtonFun line="About" url="https://en.wikipedia.org/wiki/Kyrgyzstan" />
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

const Wrap = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;   
  `

function ButtonFun(props) {
  const Button1 = styled.button`
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    border: none;
    color: white;
    margin: 0 1em;
    padding: 0.3em 1.2em 0.4em;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    :hover {
      background: rgba(0, 0, 0, 0.8);
    }
  `

  return (
    <Wrap>
      <a href={props.url}><Button1>{props.line}</Button1></a>
    </Wrap>
  )
}

function RF(props) {
  
  const StyledDiv = styled.div`
    padding: 0 10px 5px;
    color: black;
    font-weight: bold;
    text-align: center;
  `

  return (
    <Wrap>  
      <StyledDiv>
        <h1>Welcome to {props.first} {props.second}</h1>
        {/* <a href={props.link}>{props.link}</a> */}
      </StyledDiv>
    </Wrap>
  )
}

export default App;
