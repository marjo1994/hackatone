import React from 'react';
import Atras from '../images/atrasicon.png'
import auth from '../controller/routes/auth'
import MenuOptions from './Options';
import styled from 'styled-components'

const  HeaderSection = styled.header`
  padding: 5px;
  background: #333333;
`;
const Header = ({ logoutprop, handlerE, handlerC }) => {
  
  return (
    <HeaderSection data-testid="header" className="width-100 mt-2 mb-4 d-flex height-60">
      <ul className="width-100 nav ">
        <li className="nav-item">
          <button onClick={() => { auth.login(() => { logoutprop.history.push("/home") }) }} className="text-center align-self-start mb-4 border-none transparent cursor">
            <img src={Atras} alt="img" className="img-fluid max-50" />
          </button>
        </li>
        <MenuOptions click={handlerE} options="https://d1mmiz9ub7pgyo.cloudfront.net/Lannding/LandingDigitalPeru/esika_logo_white.png" aClass="nav-link active" />
        <MenuOptions click={handlerC} options="https://d1mmiz9ub7pgyo.cloudfront.net/Lannding/LandingDigitalPeru/cyzone_logo_white.png" aClass="nav-link active" />
        <MenuOptions click={handlerC} options="https://d1mmiz9ub7pgyo.cloudfront.net/Lannding/LandingDigitalPeru/lbel_logo_white.png" aClass="nav-link active" />
      </ul>

    </HeaderSection>
  )
};

export default Header;