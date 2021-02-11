import './App.css';
import React, { useState } from 'react';
import Header from './components/headers/AppHeader'
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import { AppBar, Tab } from '@material-ui/core';
import Contador from './components/estados/Contador'
import Form from './components/estados/Form';

// stateless components
function App() {

  /**
   * const arreglo1 = ['perros','gatos']
   * 
   * const [perros, gatos] = arreglo1
   */

  const [tabIndex, updateTabIndex] = useState('1') // [valorActual, functionReference()<- que actualiza el valor actual]

  const onChangeTabIndex = (event, value) => updateTabIndex(value)

  return (
    <div>
      <Header />
      <TabContext value={tabIndex}>
        <AppBar position="static">
          <TabList onChange={onChangeTabIndex}>
            <Tab label="Inicio" value="1" />
            <Tab label="Estados" value="2" />
            <Tab label="Props" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <p>Inicio</p>
        </TabPanel>
        <TabPanel value="2">
          <p>Estados</p>
          <Contador />
          <Form />
        </TabPanel>
        <TabPanel value="3">
          <p>Props</p>
        </TabPanel>
      </TabContext>
    </div> 
  );
}

export default App;