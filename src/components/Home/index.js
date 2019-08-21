import React from 'react';
import Opts from './Menu-opt'
import chef from '../../images/chef.png';
import waitress from '../../images/waitress.png';
import Header from '../Header'
import auth from '../../controller/routes/auth';

const Home = (props) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header logoutprop={props} />
      <section id="home-menu" className="fill-available mb-4 container-fluid d-flex flex-wrap align-content-around justify-content-center">
        <Opts click={() => { return auth.login(() => { props.history.push("/orders") })}} name="ÓRDENES" imgMenu={waitress} />
        <Opts click={() => { return auth.login(() => { props.history.push("/cocina") })}} name="COCINA" imgMenu={chef} />
        {user.roles.admin === true && <Opts click={() => { return auth.login(() => { props.history.push("/admin") })}} name="ADMIN" imgMenu={chef} />}
      </section>
    </>
  )
}

export default Home;