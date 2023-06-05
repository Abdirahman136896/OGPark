import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
//import SearchScreen from '../screens/SearchScreen';
import MyBookingScreen from '../screens/MyBookingScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import { ClientStack } from './clientStack';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
            screenOptions = {{
                activeTintColor : colors.buttons,
                headerShown: false
            }}
        >
            <ClientTabs.Screen 
                name="HomeScreen"
                component = {HomeScreen}
                options={
                    {
                        tabBarLabel:"Home",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name="SearchScreen"
                component = {ClientStack}
                options={
                    {
                        tabBarLabel:"Search",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                                name ='search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name="MyBookingScreen"
                component = {MyBookingScreen}
                options={
                    {
                        tabBarLabel:"My Bookings",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen 
                name="MyAccountScreen"
                component = {MyAccountScreen}
                options={
                    {
                        tabBarLabel:"My Account",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />
        </ClientTabs.Navigator>
    )
}