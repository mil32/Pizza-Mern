import React from 'react';
import layout from '../css/layout.module.scss';
import PizzaCard from './productCard/pizzaCard';

export default function pizzaGrid(props) {
    const {products, loading} = props;
        return ( 
           <div className={layout.productGrid}>
                {
                    products.length >0 ?
                    products.map((prod,i) => ( <PizzaCard data={prod} key={i} />))
                    : ""
                }
            </div>
         );
}