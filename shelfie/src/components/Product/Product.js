import React from'react'


export default function Product(props){
  console.log(props.item)
  let itemDisplay = props.item.map( (item, index) => {
    return (
      <div key={item + index}>
        <h3><img src={item.image} alt=""/></h3>
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
      </div>
    )
  })

  return(
    <div>
      {itemDisplay}
    </div>

  )
}