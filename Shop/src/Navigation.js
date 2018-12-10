import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component{
    render(){
        const styles="btn btn-primary m-2"
      return <nav className="navbar navbar-light bg-light">
        
          <NavLink to='/' className={styles}>Home</NavLink>
          <NavLink to='/cart' className={styles}>Cart</NavLink>
          <NavLink to='/yourOrders' className={styles}>Your Orders</NavLink>
        
      </nav>
    }
  }
  export default Navigation