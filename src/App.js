import React, {Component} from 'react';
import Logo from './components/Logo'
import Cards from './components/Cards'
import Tables from './components/Tables'
import { Table } from 'react-bootstrap';


class App extends  Component{
  render(){
    return (
      <div>
        <Logo/>
        <Cards/>
        <Tables/>
        
        
        
        
      </div>
    )
  }
}

export default App;
