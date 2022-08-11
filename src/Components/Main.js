import React,{Component} from 'react';

export default class App extends Component{
  render(){
    return(
      <main>
        <h2>Tenho {this.props.idade} anos</h2>
      </main>
    )
  }
}