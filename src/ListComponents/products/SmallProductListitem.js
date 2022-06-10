import React from 'react'

function SmallProductListitem({product}) {
const {name, price} = product;
console.log(product)
  return (
    <div>
         <h1>{name} - {price}</h1>
    </div>
  )
}

export default SmallProductListitem