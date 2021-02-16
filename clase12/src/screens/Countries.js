import { Button } from '@material-ui/core';
import React from 'react';
import { Api } from '../lib/Api'
import PropTypes from 'prop-types';

export default class Countries extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            countries: [],
        }
    }

    callback = () => {
        const { onCall } = this.props;
        const { countries } = this.state;
        onCall(countries);
    }

    fetchCountries = async () => {
        const response = await Api.getCountries();
        const { data: countries } = response;
        this.setState({ countries }, this.callback)
    }

    render(){

        const { countries } = this.state;
        const found = countries.length 
        ? (
            <div className="message">
                Países encontrados con datos de coronavirus {countries.length}
            </div> 
        ): <div className="message">Sin países con información</div>

        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.fetchCountries}>
                    Buscar Países
                </Button>
                {found}
            </div>
        )
    }
}

Countries.propTypes = {
    onCall: PropTypes.func,
}

Countries.defaultProps = {
    onCall: () => {},
}