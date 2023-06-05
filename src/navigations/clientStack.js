import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import ParkingHomeScreen from '../screens/ParkingHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuItemsScreen from '../screens/MenuItemsScreen';

const ClientSearch = createStackNavigator()

export function ClientStack({navigation,route}) {

useLayoutEffect(()=>{
    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName === "ParkingHomeScreen" || "MenuItemsScreen"){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }
},[navigation,route])
  return (
    <ClientSearch.Navigator>
        <ClientSearch.Screen
            name="Search Screen"
            component={SearchScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        <ClientSearch.Screen
            name="SearchResultScreen"
            component={SearchResultScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        <ClientSearch.Screen
            name="ParkingHomeScreen"
            component={ParkingHomeScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        <ClientSearch.Screen
            name="MenuItemsScreen"
            component={MenuItemsScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
    </ClientSearch.Navigator>
  )
}

const styles = StyleSheet.create({})