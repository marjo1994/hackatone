import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Catalogo from './Products'
import Home from './Home'
import Login from './Login'
import Cocina from './Cocina/index'
// import Admin from './Admin/'
import ProtectedRoute from '../controller/routes/protected-route'
// import AdminRoute from '../controller/routes/admin-route'

const Routes = () => {
  return (
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/orders' component={Catalogo} />
        <ProtectedRoute exact path='/home' component={Home} />
        <ProtectedRoute exact path='/pedidos' component={Cocina} />
        <Route path='*' component={() => {
          return (
            <>
              <h1>ERROR 404</h1>
            </>
          )
        }} />
      </Switch>
  )
}

export default Routes;