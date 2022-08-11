import React,{Component} from 'react';
import styled from 'styled-components';

const Titulo=styled.h1`
  text-shadow:0px 1px 4px black;
`
export default class App extends Component{
	render(){
		return(
			<header>
        <p>Meu nome é<Titulo>{this.props.nome}</Titulo></p>
			</header>
		)
	}
}