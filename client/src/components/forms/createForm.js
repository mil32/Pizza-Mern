import React, { Component } from 'react';
import axios from 'axios';

import Input from './elements/input/'

class createForm extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, pizza:{}}
    }

    handleChange = event => {
        this.setState({ 
            ...this.state,
            pizza: {
                ...this.state.pizza,
                [event.target.name] : event.target.value
            } 
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        
        const { pizza } = this.state;
        // transforma string en array
        pizza.ingredients = pizza.ingredients.split(',').map(st => st.trim()).filter(st => st!=="");

        axios.post(`/api/pizza`,  pizza )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }


    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input label="Pizza Name" name="name" onChange={this.handleChange} required="required"/>
                    <Input label="Ingredients" name="ingredients" onChange={this.handleChange} required="required"/>
                    <Input label="Description" name="description" onChange={this.handleChange} required="required"/>
                    <Input label="Price" name="price" onChange={this.handleChange} required="required"/>
                    {/* 
                    <button type="submit" >ENVIAR</button>
                </form>
            </div>
          );
    }
}
 
export default createForm;