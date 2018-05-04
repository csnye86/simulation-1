import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
  // constructor (){
  //   super ();

  // }


  render(){
    let inventoryDisplay = this.props.inventory.map( (item, index) => {
      return (
        <div key = {item + index} ><Product item = {this.props.inventory} /></div>
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