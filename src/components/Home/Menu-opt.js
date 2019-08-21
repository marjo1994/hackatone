import React from 'react'

const MenuOpts = ({ name, click, imgMenu }) => {
  return (
    <div className="container-menu" onClick={click} >
      <h1>{name}</h1>
      <img src={imgMenu} alt="Menu" className=" img-fluid mb-4 "/>
      
    </div>
  )
};

export default MenuOpts;

//filter-img