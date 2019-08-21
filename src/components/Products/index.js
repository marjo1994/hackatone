import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Clientname from './Cliente';
import Direccion from './Address'
import Products from './Products';
import Pedido from './Pedido'
import postOrders from '../../controller/orders/orders'
import ctrl from '../../controller/products';
import { Slider } from './Slideshow';


const Home = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('ESIKA')
  const [prodData, setProdData] = useState([]);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true)

  const updateName = (e) => {
    setName(e.target.value)
  }
  const updateAddress = (e) => {
    setAddress(e.target.value)
  }

  const mapFunc = (fn) => (id) => {
    setItems(fn(items, id))
  }

  const increase = mapFunc(ctrl.increase)
  const decrease = mapFunc(ctrl.decrease)
  const remove = mapFunc(ctrl.delete)
  const userId = JSON.parse(localStorage.getItem('user'))._id;
  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch(`http://165.22.166.131:4000/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    }).then(resp => resp.json())
      .then(data => {
        setProdData(data)
      })
  }, [])

  
  const handlerSetEsika = () => {
    setType('ESIKA')
  }

  const handlerSetCyzone = () => {
    setType('CYZONE')
  }
  
  return (
    <>
      <Header logoutprop={props} handlerE={handlerSetEsika} handlerC={handlerSetCyzone} />

      <main id="menu" className="container-fluid d-flex flex-wrap align-content-around">
    
        <section className="row">
          <div className="col-md-6">
            <Slider />
               <div className="card-columns">
              {type === 'ESIKA' && (
                <Products  data={prodData} brand="ESIKA" add={increase} />
              )}
              {type === 'CYZONE' && (
                <Products  data={prodData} brand="CYZONE" add={increase} />
              )}
            </div>
          </div>
          
            <div className="col-md-6">
            <h3 className="text-align">PEDIDO</h3>
            <Clientname name={name} updateName={updateName} show={show} setShow={setShow} />
            <Direccion name={address} updateAddress={updateAddress} show={show} setShow={setShow} />
            <Pedido
            items={ctrl.mix(prodData, items)}
            remove={remove} decrease={decrease}
            increase={increase}
            postOrder={() => {
              postOrders(name,
                address,
                items.map(el => ({ product: el._id, qty: el.qty })),
                token,
                userId)
                .then((order) => {
                  console.log(order)
                  setItems([]);
                  setName("");
                  setAddress("");
                  setShow(true)
                })
                .catch(console.error)
            }} />
            </div>
          </section>

      </main>
    </>
  )
};

export default Home;