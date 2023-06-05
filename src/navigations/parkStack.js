import React, { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParkingHomeScreen from '../screens/ParkingHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Park = createNativeStackNavigator();

export function ParkStack({navigation, route}){
    useLayoutEffect(()=>{
    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName === "ParkingHomeScreen"){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }
},[navigation,route])
    return(
        <Park.Navigator>
            <Park.Screen
                name="ParkingHomeScreen"
                component={ParkingHomeScreen}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
            />
        </Park.Navigator>
    )
}