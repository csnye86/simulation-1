import React, {Component} from 'react'

class Form extends Component {
  constructor (){
    super ();
    this.state = {
      name: '',
      price: '',
      image: ''
    }
    this.updateUrl = this.updateUrl.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.cancelInput = this.cancelInput.bind(this)


  }

  updateUrl(input){
    this.setState({
      image: input
    })
  }

  updateProduct(input){
    this.setState({
      name: input
    })
  }

  updatePrice(input){
    this.setState({
      price: input
    })
  }

  cancelInput(){
    this.setState({
      image: '',
      name: '',
      price: ''
    })
  }


  render(){

    return(

      <div>
        <input type="text"
          placeholder = 'URL'
          value = {this.state.image}
          onChange = {(e) => {this.updateUrl(e.target.value)}}/>
        <input type="text"
          placeholder = 'Product Name'
          value = {this.state.name}
          onChange = {(e) => {this.updateProduct(e.target.value)}}/>
        <input type="text"
          placeholder = "Price"
          value = {this.state.price}
          onChange = {(e) => {this.updatePrice(e.target.value)}}/>
        <button onClick = {this.cancelInput}>Cancel</button>
        <button>Add to Inventory</button>
      </div>

    )
  }
}


export default Form
