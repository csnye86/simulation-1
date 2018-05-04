import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import './style.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventoryList: []
    }
  }
  
  componentDidMount(){
    axios.get('/api/inventory').then(res => 
      this.setState({
        inventoryList: res.data
      })
    )
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory = {this.state.inventoryList} />
        <Form method={this.componentDidMount}/>

      </div>
    );
  }
}

export default App;
