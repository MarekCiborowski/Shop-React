import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Order from './pages/Order'
import YourOrders from './pages/YourOrders'

class Router extends Component{
    render(){
    return <div>
        <Switch>
            <Route path='/'component={Home}/>
            <Route path='/cart'component={Cart}/>
            <Route path='/order'component={Order}/>
            <Route path='/yourOrders'component={YourOrders}/>
        </Switch>
    </div>
    }
}

export default Router