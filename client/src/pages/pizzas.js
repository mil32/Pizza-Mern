import React, { Component } from 'react';
import {container } from '../css/layout.module.scss';
import axios from 'axios';

import PizzaGrid from '../components/pizzaGrid';
import CreateForm from '../components/forms/createForm';

export default class pizza extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:true, products:[]}
    }
    
    componentDidMount(){
        this.setProducts();
    }

    setProducts = async () => {
        try {
            const res = await axios.get('/api/pizzas')
            this.setState({
                loading: false,
                products: res.data
            })  
        } catch (error) {
            console.log("ERROR CACHETADO");
            this.setState({ 
                loading: false,
                error: "can't get products"
            })
        }
    }

    render() { 
        return ( 
        <div className={container}>
            <h1>Our Juici Pizzas...</h1>
            {this.state.error ? (
                <h1>No Pizzas Today...</h1>
            ) : (
                <PizzaGrid products={this.state.products} loading={this.state.loading}/>
            )}
            
            <h2>Create your own Pizza!</h2>
            <CreateForm refresh={this.setProducts}/>  
        </div>
        );
    }
}
 