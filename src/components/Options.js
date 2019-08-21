import React from 'react';
import styled from 'styled-components'


const ListItem = styled.li`
  display: inline-block;
  padding-left: 20px;
`; 

const MenuOptions = ({click, options, aClass}) => {
  return (
    <ListItem  className="nav-item" onClick={click}>
      <a className={aClass} data-toggle="tab" href="#" role="tab" >
        <img src ={options} />
      </a>
    </ListItem>
  )
};
export const MenuOptionsListOfOrders = ({click, options, aClass}) => {
  return (
    <ListItem  className="nav-item" onClick={click}>
      <a className={aClass} data-toggle="tab" href="#" role="tab" >
        <p>{options}</p>
      </a>
    </ListItem>
  )
};


export default MenuOptions;