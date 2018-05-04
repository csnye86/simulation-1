import React, { Component } from 'react';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventoryList: [
          {name: 'Hat',
          price: '24.99',
          image: 'http://images.footballfanatics.com/FFImage/thumb.aspx?i=/productImages/_2784000/ff_2784602_full.jpg&w=340'
        },
          {name: 'Shirt',
          price: '19.99',
          image: 'https://gear.blizzard.com/media/catalog/product/cache//550x550/a4e40ebdc3e371adff845072e1c73f37/o/v/overwatch-long-sleeve-shirt.png'
          }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory = {this.state.inventoryList} />
        <Form />

      </div>
    );
  }
}

export default App;
