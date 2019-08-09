import React, { Component } from 'react';
import {container } from '../css/layout.module.scss';

import PizzaGrid from '../components/pizzaGrid';
import CreateForm from '../components/forms/createForm';

export default class pizza extends Component {
    state = {  }
    render() { 
        return ( 
        <div className={container}>
            <h1>DALE CHE!</h1>
            <PizzaGrid />
            <CreateForm />  
        </div>
        );
    }
}
 