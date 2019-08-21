import React from 'react'
import Lista from './Lista'

const Pedido = ({ items, remove, increase, decrease, postOrder }) => {

  

  const total = items.reduce((a, b) => ({ total: a.total + b.total }), { total: 0 })

  const articles = items.length;
 

  return (
    <>
    
    <table className='d-flex  column  '>
      <thead className='width-100'>
        <tr className='d-flex width-100 text-align  align-items-center my-2'>
          <th className='col-4 my-1'>Producto</th>
          <th className='col-4 my-1'>Precio</th>
        </tr>
      </thead>
      <tbody className='width-100'>
        {items.map(i => (
          <Lista item={i} key={i._id} remove={remove} increase={increase} decrease={decrease} />
        ))}
        <tr className=' d-flex width-100 text-align  align-items-center '>
        <td className='col-4 my-1'>Articulos: {articles}</td>
          <td className='col-4 my-1'>Total: S/. {total.total}</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <button  onClick={postOrder} className='btn-color btn btn-dark '>Confirmar Pedido</button>
    </>
  )
}

export default Pedido