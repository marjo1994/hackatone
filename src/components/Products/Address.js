import React from 'react'


const Address = ({ address, updateAddress, show, setShow }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    setShow(show === true ? false : true)
  }

  return (
    <form onSubmit={onSubmit} className="d-flex align-items-center  my-4" data-test-id="div">
      <label className="my-0 mr-2">Dirección: </label>
      {show === true && (
        <>
          <input
            type='text'
            value={address}
            onChange={updateAddress}
            placeholder='Dirección'
            className='name-value form-control' />
          <button data-testid='submit' className="checkBtn ml-3 btn btn-color padding-10 mt-0"><i className="fas fa-check"></i></button>
        </>
      )
      }
       {show === false && (
        <>
          <p data-testid="change-name" className="pValue my-0">{address}</p>
          <button data-testid="edit" className="checkBtn ml-3 btn btn-color padding-10 mt-0">Editar</button>
        </>
      )} 

    </form>
  )
};

export default Address;