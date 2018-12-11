import React, { Component } from 'react';
<<<<<<< HEAD
import products from '../mockData/products.json'
=======
import products from "../mockData/products"

>>>>>>> 026322ab6f59216cd35de3042822092f608a3ccb
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
