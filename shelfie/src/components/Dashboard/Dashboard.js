import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
  // constructor (){
  //   super ();

  // }


  render(){
    let inventoryDisplay = this.props.inventory.map( (item, index) => {
      return (
        <div key = {item + index} ><Product name = {item.name} price = {item.price} image ={item.image} /></div>
      )
    }
  )

    return(

      <div>
        Dashboard
        {/* <Product /> */}
        {inventoryDisplay}
      </div>

    )
  }
}

export default Dashboard