import React, { Component } from 'react';
import Contador from '../components/estados/Contador';
import Form from '../components/estados/Form';

export default class Estados extends Component {
    render(){
        return(
            <>
                <p>Estados</p>
                <Contador />
                <Form />
            </>
        )
    }
}