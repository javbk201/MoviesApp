import 'react-native-gesture-handler';
import React from 'react'
/* Navigation imports */
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import { GradrietProvider } from './src/context/gradientContext';

const AppState = ({children}: any) =>{
 return(
    <GradrietProvider>
    {children}
  </GradrietProvider>
 )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  )
}

export default App;