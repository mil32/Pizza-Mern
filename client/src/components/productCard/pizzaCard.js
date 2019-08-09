import React, {Component} from 'react';

import style from './card.module.scss';

function pizzaCard(props)  {

        const {name, ingredients, description, price} = props.data; 
        return ( 
            <div className={style.card}>
                <div className={style.image}></div>
                <div className={style.data}>
                    <h2>{name? name : "No Name"}</h2>
                    <p>{ingredients.map( (item, index) => (index ? ', ' : '') + item ) } </p>
                    <p>{description}</p>
                    <div className={style.price}>{`$ ${price}`}</div>
                    <button onClick=""> Agregar </button> 
                </div>
            </div>
         );
    
}
 
export default pizzaCard;