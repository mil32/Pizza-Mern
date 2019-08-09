import React, { Component } from 'react';
import axios from 'axios';

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
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange} required />
                    <input type="text" name="ingredients" placeholder="Ingredients" onChange={this.handleChange} required/>
                    <input type="text" name="description" placeholder="Description" onChange={this.handleChange} required/>
                    <input type="number" name="price" min="0" placeholder="Price" onChange={this.handleChange}  required/>
                    <button type="submit" >ENVIAR</button>
                </form>
            </div>
          );
    }
}
 
export default createForm;