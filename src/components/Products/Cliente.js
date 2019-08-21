import React from 'react'


const Clientname = ({ name, updateName, show, setShow }) => {
  
 

  return (
    <form  className="d-flex align-items-center  my-4">
      <label className="my-0 mr-2">Cliente: </label>
      {show === true && (
        <>
          <input
            type='text'
            value={name}
            onChange={updateName}
            placeholder='Nombre'
            className='name-value form-control' />
        </>
      )
      }


    </form>
  )
};

export default Clientname;