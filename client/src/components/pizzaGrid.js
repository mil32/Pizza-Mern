import React, { Component } from 'react';
import axios from 'axios';
import layout from '../css/layout.module.scss';

import PizzaCard from './productCard/pizzaCard';

class pizzaGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:true, products:[]}
    }

    componentDidMount(){
        this.setProducts();
    }
    
    // toggleLoading = ()=>{
    //     this.setState((prevState) =>( {
    //         ...this.state,
    //         loading: !prevState.loading,
    //     }))
    // }

    setProducts = async () => {
        const res = await axios.get('/api/pizzas');
        this.setState({
            loading: false,
            products: res.data
        })  
    }

    render() { 
        const {products, loading} = this.state;
        return ( 
           <div className={layout.productGrid}>
                {
                    products.length >0 ?
                    products.map(prod => ( <PizzaCard data={prod} />))
                    : ""
                }
            </div>
         );
    }
}
 
export default pizzaGrid;