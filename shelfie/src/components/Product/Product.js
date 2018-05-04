import React from'react'


export default function Product(props){

  return(
    <div>
      <h3><img src={props.image} alt=""/></h3>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
    </div>

  )
}