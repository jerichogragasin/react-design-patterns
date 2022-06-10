import React from 'react'

function LargeProductListitem({product}) {
    const {name, price, decription, rating} = product;
  return (
    <div>
        <h1>{name}</h1>
        <p>{price}</p>
        <h3>Description</h3>
        <p>{decription}</p>
        <p>Average Rating: {rating}</p>
    </div>
  )
}

export default LargeProductListitem