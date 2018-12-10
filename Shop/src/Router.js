import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Home from './pages/home'
import Order from './pages/order'
import YourOrders from './pages/yourOrders'

class Router extends Component{
    render(){
    return <div>
        <Switch>
            <Route exact path='/'component={Home}/>
            <Route exact path='/cart'component={Cart}/>
            <Route exact path='/order'component={Order}/>
            <Route exact path='/yourOrders'component={YourOrders}/>
        </Switch>
    </div>
    }
}

export default Router