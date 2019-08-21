import React from 'react';
import logo from '../images/belcorplogo.png';
import auth from '../controller/routes/auth';


export const  Headertwo = ({logoutprop}) => {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">
          <img src={logo}/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active"> Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" onClick={() => { return auth.login(() => { logoutprop.history.push("/pedidos") })}}>Listado de Ordenes</a>
        <a class="nav-item nav-link">Premios</a>
        <a class="nav-item nav-link disabled" tabindex="-1" aria-disabled="true">Reuniones</a>
      </div>
    </div>
    </nav>
  )
};