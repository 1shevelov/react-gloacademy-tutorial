import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/header'
import SubHeader from './components/subheader'
import Main from './components/main'

const back_image = process.env.PUBLIC_URL + '/img/back.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  background-color: #242424;
  opacity: 0.8;
`
const SubHeaderWrapper = styled.div`
  height: 90px;
  padding-top: 20px;
`
const MainWrapper = styled.main`
  height: 549px;
  padding-top: 120px;
  background: url(${back_image}) center no-repeat;
  background-size: cover;
`

class App extends Component {

  render() {
    return (

      <div className="App">
        <HeaderWrapper>  
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        
        <SubHeaderWrapper>
          <Grid>
            <SubHeader />
          </Grid>  
        </SubHeaderWrapper>
        <MainWrapper>
          <Main />
        </MainWrapper>

      </div>

      // My first try in styled components
      //
      // <div>
      //   <div className="Countries RF">
      //     <RF first="Russian" second="Federation" />
      //     <ButtonFun line="About" url="https://en.wikipedia.org/wiki/Russia" />
      //   </div>
      //   <div className="Countries KG">
      //     <RF first="Kyrgyz" second="Republic" />
      //     <ButtonFun line="About" url="https://en.wikipedia.org/wiki/Kyrgyzstan" />
      //   </div>
      // </div>
      
      // Content from create-react-app 
      //
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

// const Wrap = styled.div`
//   margin: 20px 0;
//   display: flex;
//   justify-content: center;   
//   `

// function ButtonFun(props) {
//   const Button1 = styled.button`
//     background: rgba(0, 0, 0, 0.5);
//     border-radius: 3px;
//     border: none;
//     color: white;
//     margin: 0 1em;
//     padding: 0.3em 1.2em 0.4em;
//     text-transform: uppercase;
//     letter-spacing: 0.7px;
//     :hover {
//       background: rgba(0, 0, 0, 0.8);
//     }
//   `

//   return (
//     <Wrap>
//       <a href={props.url}><Button1>{props.line}</Button1></a>
//     </Wrap>
//   )
// }

// function RF(props) {
  
//   const StyledDiv = styled.div`
//     padding: 0 10px 5px;
//     color: black;
//     font-weight: bold;
//     text-align: center;
//   `

//   return (
//     <Wrap>  
//       <StyledDiv>
//         <h1>Welcome to {props.first} {props.second}</h1>
//         {/* <a href={props.link}>{props.link}</a> */}
//       </StyledDiv>
//     </Wrap>
//   )
// }

export default App;
