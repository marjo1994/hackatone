import React, { useState, useEffect } from 'react'
import ProductList from './product-list';
import putOrders from '../../controller/orders/status'
import deleteOrder from '../../controller/orders/delete';

const OrderCard = ({ order }) => {
  const fecha = new Date(order.dateEntry)
  const fechaFinal = new Date(order.dateProcessed)
  const productsArr = order.products
  const [active, setActive] = useState(true)
  const [timer, setTimer] = useState((Date.now() - fecha.getTime()) / 1000)
  const finalTime = (fechaFinal.getTime() - fecha.getTime()) / 1000;

  const changeStatus = (e) => {
    putOrders(order.client, order.products, localStorage.getItem('token'), order.userId, e.target.value, order._id)
      .then(console.log)
    // deleteOrder(localStorage.getItem('token'), order._id)
    //   .then(console.log)
  }
  return (
    <div data-testid={order._id} className="col-sm-12 mt-3">
      <div className="card" >
        <div className="card-header d-flex justify-content-between align-items-center color-morado">
          <div className = "d-flex flex-direction-column">
            <div data-testid={order.client} className="pr-2">Cliente: {order.client}</div>
            <div data-testid={order.direccion} className="pr-2">Dirección: {order.direccion}</div>
          </div>
            {/* <div className="pl-2"></div> */}
          
        </div>
        <div className="card-body">
          <ul className="">
            {productsArr && productsArr.map((el) => {
              return (<ProductList el={el} key={el.product.productId} />)
            })}
          </ul>
        </div>
        <div className="input-group card-footer">
          <select data-testid={`name-${order.client}`} onChange={changeStatus} value={order.status} className="custom-select" id="inputGroupSelect02">
            <option value="pending">Pendiente</option>
            <option value="canceled">Cancelado</option>
            <option data-testid={`delivered-${order.client}`} value="delivered">Entregado</option>
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="inputGroupSelect02">Estado de Orden</label>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OrderCard