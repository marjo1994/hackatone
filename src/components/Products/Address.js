import React from 'react'


const Address = ({ address, updateAddress, show, setShow }) => {


  return (
    <form className="d-flex align-items-center  my-4" data-test-id="div">
      <label className="my-0 mr-2">Dirección: </label>
      {show === true && (
        <>
          <input
            type='text'
            value={address}
            onChange={updateAddress}
            placeholder='Dirección'
            className='name-value form-control' />
        </>
      )
      }

    </form>
  )
};

export default Address;

//className="fas fa-check"