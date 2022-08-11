import React,{Component} from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js'

const GlobalStyle=createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
`
const Container=styled.div`
  background:blueviolet;
  width:30rem;
  text-align:center;
  font-family:'Roboto';
  margin:0 auto;
  color:white;
  height:100vh;

  .mainContainer{
    padding-top:100px;
  }
`
export default class App extends Component{
  render(){
    return(
      <Container>
        <GlobalStyle/>
        <div className='mainContainer'>
          <Header nome='Leonardo'/>
          <Main idade={20}/>
          <Footer tecnologia='React'/>
        </div>
      </Container>
    )
  }
}