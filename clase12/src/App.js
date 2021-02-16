import './App.css';
import React, { useState } from 'react';
import Header from './components/headers/AppHeader'
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import { AppBar, Tab } from '@material-ui/core';
import Estados from './screens/Estados';
import Props from './screens/Props';
import Fetch from './screens/Fetch';

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
            <Tab label="Fetch" value="4" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <p>Inicio</p>
        </TabPanel>
        <TabPanel value="2">
          <Estados />
        </TabPanel>
        <TabPanel value="3">
          <Props/>
        </TabPanel>
        <TabPanel value="4">
          <Fetch />
        </TabPanel>
      </TabContext>
    </div> 
  );
}

export default App;