import React, { Component } from 'react'
import EscalabIcon from '../../assets/escalab_icon.jpg'
import './style.css'
class AppHeader extends Component  {

    llamarAlerta = () => { alert('AppHeader')}

    render(){
        // Debe ir un return con el UI a mostrar
        return(
            <div
              className="header"
              style={{
                 backgroundColor: 'silver'
              }}
              onClick={this.llamarAlerta}
            >
                <img alt="header" className="icon" src={EscalabIcon} />
                <p>React JS</p>
            </div>
        )
    }
}

export default AppHeader;