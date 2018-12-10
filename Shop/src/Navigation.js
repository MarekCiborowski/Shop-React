import React, { Component } from 'react';

class Navigation extends Component{
    render(){
      return <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/cart'>Cart</NavLink></li>
          <li><NavLink to='/yourOrders'>Your Orders</NavLink></li>
        </ul>
      </nav>
    }
  }
  export default Navigation