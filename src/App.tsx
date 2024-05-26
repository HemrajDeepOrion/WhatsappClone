import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import MainRoutes from './mainComp/MainRoutes';


class App extends React.Component {
  render(){
    return (
      <Box>
        <MainRoutes />
      </Box>
    );
  }
  
}

export default App;
