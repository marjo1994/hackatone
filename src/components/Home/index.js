import React from 'react';
import Opts from './Menu-opt'
import camp12 from '../../images/camp12.jpg';
import camp13 from '../../images/camp13.jpg';
// import Header from '../Header'
import auth from '../../controller/routes/auth';
import { Headertwo } from '../HeaderTwo';

const Home = (props) => {
  // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Headertwo logoutprop={props}/>
      <section className="fill-available mb-4 container-fluid flex-wrap align-content-around justify-content-center">
        <Opts click={() => { return auth.login(() => { props.history.push("/orders") })}} name="CAMPAÑA 12-2019" imgMenu={camp12} />
        <Opts name="CAMPAÑA 13-2019" imgMenu= {camp13}  />
      </section>
    </>
  )
}

export default Home;

// d-flex