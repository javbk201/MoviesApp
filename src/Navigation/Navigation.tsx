import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home/Home';
import Details from '../Screens/Details/Details';
import { Movie } from '../interfaces/MovieDBinterfaces';

export type RootStackParams = {
    Home: undefined,
    Details: Movie,
}


const Stack = createStackNavigator<RootStackParams>();

export default function Navigation() {
    return (
       <Stack.Navigator 
        screenOptions={{
            headerShown: false, 
            cardStyle: {
                backgroundColor: 'white',
            }
        }}>
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Details" component={Details} />
       </Stack.Navigator> 
    )
}
