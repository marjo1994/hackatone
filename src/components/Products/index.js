import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Clientname from './Cliente';
import Direccion from './Address'
import Products from './Products';
import Pedido from './Pedido'
import MenuOpts from '../Options';
import postOrders from '../../controller/orders/orders'
import ctrl from '../../controller/products';
import { Catalogue } from './Catalogue';

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
        // console.log(data)
        setProdData(data)
      })
  }, [])

  console.log(prodData)

  return (
    <>
      <Header logoutprop={props} />
      <main id="menu" className="container-fluid d-flex flex-wrap align-content-around">
        <Clientname name={name} updateName={updateName} show={show} setShow={setShow} />
        <Direccion name={address} updateAddress={updateAddress} show={show} setShow={setShow} />

        <section className="row">
        {/* <Catalogue /> */}
          <div className="col-md-6">
            <ul className="nav nav-tabs w-100" role="tablist">
              <MenuOpts click={() => setType('ESIKA')} options="ESIKA" aClass="nav-link active" />
              <MenuOpts click={() => setType('CYZONE')} options="CYZONE" aClass="nav-link" />
            </ul>
            <div data-testid='opt' className="card-columns">
              {type === 'ESIKA' && (
                <Products  data={prodData} brand="ESIKA" add={increase} />
              )}
              {type === 'CYZONE' && (
                <Products  data={prodData} brand="CYZONE" add={increase} />
              )}
            </div>
          </div>
          

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
        </section>

      </main>
    </>
  )
};

export default Home;