import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
//import ParkingMapScreen from '../screens/ParkingMapScreen';
//import HomeScreenM from '../screens/HomeScreenM';
//import FindScreen from '../screens/FindScreen';
import { HomeStack } from './StackNavigators';
import { ParkStack } from './parkStack';
import DrawerNavigator from './DrawerNavigator';

const App = createStackNavigator();

export default function AppStack() {

    return(
        <App.Navigator>
            <App.Screen
                name="App"
                component={DrawerNavigator}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="HomeStack"
                component={HomeStack}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="ParkStack"
                component={ParkStack}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </App.Navigator>
    )
}