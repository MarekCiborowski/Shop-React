import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Navigation extends Component{
    render(){
        
      return <div class="container-box"><nav className="navbar-header">
        
          <NavLink to='/' className='btn-menu'>Home</NavLink>
          <NavLink to='/cart' className='btn-menu'>Cart</NavLink>
          <NavLink to='/yourOrders' className='btn-menu'>Your Orders</NavLink>
        
      </nav>
      </div>
    }
  }
  export default Navigation