import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindScreen from '../screens/FindScreen';
import RequestScreen from '../screens/RequestScreen';
import DestinationScreen from '../screens/DestinationScreen';

const Home = createNativeStackNavigator();

export function HomeStack(){
    return(
        <Home.Navigator>
            <Home.Screen
                name="FindScreen"
                component={FindScreen}
                options={{headerShown:false}}
            />
            <Home.Screen 
                name="RequestScreen"
                component={RequestScreen}
                options={{headerShown:false}}
            />
            <Home.Screen 
                name="DestinationScreen"
                component={DestinationScreen}
                options={{headerShown:false}}
            />
        </Home.Navigator>
    )
}