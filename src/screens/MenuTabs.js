import React from 'react';
import { View, StyleSheet,FlatList,TouchableOpacity,Text} from 'react-native';
import {menuData} from '../global/Data'
import MenuCard from '../components/MenuCard';
//import ProductMainCard from '../components/ProductMainCard'

export function Route1(){
    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                <Text> Menu Tabs </Text>
            </View>
        </View>
    )
}

export const Route2 = ()=>(<View style={styles.scene}/>)
export const Route3 = ()=>(<View style={styles.scene}/>)
export const Route4 = ()=>(<View style={styles.scene}/>)
export const Route5 = ()=>(<View style={styles.scene}/>)
export const Route6 = ()=>(<View style={styles.scene}/>)
export const Route7 = ()=>(<View style={styles.scene}/>)

const styles = StyleSheet.create({
    scene: {
      flex: 1,
      backgroundColor: '#673ab7'
    },
    view2:{
        marginTop:5,
        paddingBottom:20
    },
    scene2: { 
        backgroundColor: '#673ab7'
    }
  });