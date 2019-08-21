import React from 'react'

const Lista = ({ item, remove, increase, decrease }) => {

  return (
    <tr data-testid={`list-${item._id}`} className='d-flex width-100 text-align  my-2'>
      <td className="d-flex col-5 text-align-left">
        
        <p className='my-0 text-black'>{item.nameOfProduct}</p>
      </td>
      {/* <td className='d-flex col-4 justify-content-center align-items-center'>
       
      </td> */}
      <td className="col-4">
        <p className='my-0 text-black'>S/. {item.total}</p>
        <button data-testid='takeQty' onClick={() => decrease(item._id)} className='border-none transparent'><i className="btn btn-secondary btn-sm">-</i></button>
        <span data-testid='qty' className='text-black' >{item.qty}</span>
        <button data-testid='addQty' onClick={() => increase(item._id)} className='border-none transparent'><i className="btn btn-secondary btn-sm">+</i></button>
        <button onClick={() => {
          remove(item._id)
        }} className='border-none transparent padding-trash'><i className="btn btn-danger btn-sm">x</i></button>
      </td>
    </tr>)

}

export default Lista;