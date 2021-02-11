import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from '@material-ui/core'
import React, { Component } from 'react'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'Julio',
            lastname: 'Orellana',
            radioButton: 'No',
        }
    }

    handleInputChange = ({type, value}) => this.setState({ [type]: value }) 

    handleRadioButton = (_, value) => this.setState({ radioButton: value})

    render(){
        const { name, lastname, radioButton } = this.state;

        return(
            <>
                <Paper className="textInputs" elevation={2}>
                    <div className="row">
                        <TextField
                            onChange={
                                (event) => 
                                    this.handleInputChange({
                                        type: 'name', 
                                        value: event.target.value,
                                    })
                            }
                            placeholder="Agregar un nombre"
                            label="Nombre"
                            variant="standard"
                            value={name}
                        />
                        <br/>
                        <TextField
                        onChange={
                            (event) => 
                                this.handleInputChange({
                                    type: 'lastname', 
                                    value: event.target.value,
                                })
                            }
                            placeholder="Agregar un Apellido"
                            label="Apellido"
                            variant="standard"
                            value={lastname}
                        />
                    </div>
                    <div className="row">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Activo</FormLabel>
                            <RadioGroup
                                aria-label="active"
                                name="active"
                                onChange={this.handleRadioButton}
                                value={radioButton}
                            >
                                <FormControlLabel value="Si" control={<Radio/>} label="Si"/>
                                <FormControlLabel value="No" control={<Radio/>} label="No"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </Paper>
            </>
        )
    }
}

export default Form;