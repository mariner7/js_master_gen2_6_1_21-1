import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Contador from '../components/estados/Contador';
import Form from '../components/estados/Form';
import './style.css'

export default class Props extends Component {

    constructor(props){
        super(props)

        this.state = {
            counter: 0,
            formName: '',
            formLastname: '',
            formActive: null,
        }
    }

    onChangeCounter = (nuevoValor) => this.setState({ counter: nuevoValor})

    onChangeForm = (form) => {
        const {
            name: formName,
            lastname: formLastname,
            radioButton: formActive,
        } = form;

        this.setState({
            formName,
            formLastname,
            formActive,
        })
    }

    render(){
        const {
            counter,
            formName,
            formLastname,
            formActive,
        } = this.state;
        return(
            <>
                <h3>Props</h3>
                <Paper className="props" elevation={1}>
                    <div>
                        <p>Prop counter: {counter}</p>
                    </div>
                    <div className="form">
                        <p>Prop Form Name: {formName}</p>
                        <p>Prop Form Lastname: {formLastname}</p>
                        <p>Prop Form Active: {formActive}</p>
                    </div>
                </Paper>
                <Contador contadorInicial={counter} onChange={this.onChangeCounter} />
                <Form
                    defaultName='Link'
                    defaultLastname='Majoras'
                    defaultActive='No'
                    onChange={this.onChangeForm}
                />
            </>
        )
    }
}