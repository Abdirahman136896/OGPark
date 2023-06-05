/*import React,{useState} from 'react'

import {View, Text, StyleSheet,TouchableOpacity,
         ScrollView,FlatList,Pressable, Image, Dimensions} from 'react-native';
import { Button, SocialIcon, Icon } from 'react-native-elements'

export default function BusinessTerminalScreen(){

    return(
        <View style = {styles.container}>
            <Text>Welcome to Business console</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    }
})*/

import React,{useState, useRef, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Image, ImageBackground} from 'react-native';
import {colors, parameters, title} from "../global/styles";
import {Button, SocialIcon} from 'react-native-elements';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { SignInContext } from '../contexts/authContext';
import firebase from "firebase/app";
import { auth } from '../firebase';

const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

export default function SignInWelcomeScreen({navigation}) {
    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:"signed-in"}})
            }else{
                dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:null}})
            }
        })
    },[])

    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/img9.jpg')} style={styles.image}>
                <View style ={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:40}}>    
                    <Text style={{fontSize:26,color:"white",fontWeight:'bold'}}>WORK WITH OGPARK</Text>
                    <Text style={{fontSize:26,color:"white",fontWeight:'bold'}}>EARN BY PROVIDING PARKING</Text>
                </View>
                <View style={{flex:3, justifyContent:"center"}}>
                    <Swiper autoplay ={true} style ={{height:185}}>
                        <View style={styles.slide1}>
                            <Image 
                                source={{uri:"data:image/jpeg;base64,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"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image 
                                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRKPn88mYNuZyYeJIhYfvUCcheA4ooxDOcrddksOLwBLKADTq5baKVCJt4AiRHyRJ4B0&usqp=CAU"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image 
                                source={{uri:"https://media.istockphoto.com/id/1358825369/vector/isometric-parking-lot-displayed-on-screen-car-park-location-on-smartphone-smartphone.jpg?s=612x612&w=0&k=20&c=ElmJNOOpV8YpKi6mwenRwNSeqrmUvyJ_i1IBx1HEckE="}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image 
                                source={require('../../assets/busimg1.jpg')}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image 
                                source={{uri:"https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image 
                                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp977D11ZjAdd4_QvH60HEYlGRWzgrLQKGVQ&usqp=CAU"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image 
                                source={{uri:"data:image/jpeg;base64,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"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                    </Swiper>
                </View>
                <View style={{flex:4, justifyContent:"flex-end",marginBottom:20}}>
                    <View style={{marginHorizontal:20,marginTop:30}}>
                        <Button 
                            title="BUSINESS SIGN IN"
                            buttonStyle = {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}
                            onPress = {()=>{
                                navigation.navigate("SignInScreen")
                            }}
                        />
                    </View>
                    <View style={{marginHorizontal:20, marginTop:30}}>
                        <Button 
                            title="Create A Business Account"
                            buttonStyle = {styles.createButton}
                            titleStyle = {styles.createButtonTitle}
                            onPress ={()=>{navigation.navigate("SignUpScreen")}}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons,
    },

    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})