import React,{Component} from 'react';
import ReactImg from './Images/react.png';
import styled from 'styled-components';

const Imagem=styled.img`
  width:400px;
`
export default class App extends Component{
    render(){
        return(
          <footer>
            <p>Estou estudando {this.props.tecnologia}</p>
            <Imagem src={ReactImg} alt='Imagem-React'/>
          </footer>
        )
    }
}