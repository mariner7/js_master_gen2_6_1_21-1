import React, { Component} from 'react';
import './style.css'
import { Paper, Button } from '@material-ui/core'


// stateful components
class Contador extends Component {

    constructor(props){
        super(props)
        this.state = {
            valorContador: 0,
        }
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    componentDidUpdate(){
    }

    shouldComponentUpdate(){
        const { valorContador } = this.state;
        console.log('shouldComponentUpdate', {valorContador })
        if(valorContador <= 0){
            return false
        }
        return true
    }

    sumarContador = () => {
        const { valorContador } = this.state;

        this.setState({ valorContador:  valorContador + 1})
    }

    restarContador = () => {
        const { valorContador } = this.state;

        if(valorContador <= 0){
            return
        }

        this.setState({ valorContador:  valorContador - 1})
    }

    render(){
        const { valorContador } = this.state;
        console.log({ valorContador })
        return(
            <>
                <h1>Contador</h1>
                <Paper className="contador" elevation={3}>
                    <Button onClick={this.sumarContador} variant="contained" color="primary">
                        +
                    </Button>
                    <div className="contador-texto">{valorContador}</div>
                    <Button onClick={this.restarContador} variant="contained" color="primary">
                        -
                    </Button>
                </Paper>
            </>
        )
    }
}

export default Contador;