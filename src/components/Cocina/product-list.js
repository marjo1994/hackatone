import React, { useState } from 'react'

const ProductList = ({ el }) => {
  const [line, setLine] = useState(true)
  return (
    <li className="list-group-item">
      <label data-testid={el.product.name} >
        <input
          data-testid={el.product.productId}
          onChange={() => line ? setLine(false) : setLine(true)}
          type="radio" /> {el.qty} unid. {el.product.name}
      </label>
    </li>
  )
}

export default ProductList;