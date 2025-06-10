import * as React from 'react';
import Navigation from './src/navigation/Navigation';
import {WSProvider } from './src/services/api/WSContext';



const APP = () => {
  return (
    <WSProvider>
  <Navigation/>
  </WSProvider>
  );
};

export default APP;


