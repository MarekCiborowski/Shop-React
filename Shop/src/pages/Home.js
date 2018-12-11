import React, { Component } from 'react';
import products from "../mockData/products"

class Home extends Component {
    state = { 
        cart:this.props.cart,
     }
    render() { 
        return ( 
            <React.Fragment>
        <h1>Sklepik</h1> 
        <div><b>{ products.name }</b></div>
        <div><i>{ products.description }</i></div>
        <div>${ products.price }</div>
        </React.Fragment>
        );
        
    }

    initProducts = () =>{
        

    }

}
 
export default Home;
