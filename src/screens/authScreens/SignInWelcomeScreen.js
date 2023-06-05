import React,{useState, useRef, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Image, ImageBackground} from 'react-native';
import {colors, parameters, title} from "../../global/styles";
import {Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { SignInContext } from '../../contexts/authContext';
import firebase from "firebase/app";
import { auth } from '../../firebase';

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
            <ImageBackground source={require('../../../assets/img9.jpg')} style={styles.image}>
                <View style ={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:40}}>    
                    <Text style={{fontSize:26,color:"white",fontWeight:'bold'}}>DISCOVER PARKING LOTS</Text>
                    <Text style={{fontSize:26,color:"white",fontWeight:'bold'}}>IN YOUR AREA</Text>
                </View>
                <View style={{flex:3, justifyContent:"center"}}>
                    <Swiper autoplay ={true} style ={{height:185}}>
                        <View style={styles.slide1}>
                            <Image 
                                source={{uri:"https://i.pinimg.com/originals/6e/0e/b0/6e0eb075897b870dbc0da116110af371.jpg"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image 
                                source={{uri:"https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image 
                                source={{uri:"https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image 
                                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ObnQiVQOSAMBU09U0ltP25m1gDhlZF2b_A&usqp=CAU"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image 
                                source={{uri:"https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=1600"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image 
                                source={{uri:"data:image/jpeg;base64,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"}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image 
                                source={require('../../../assets/imagemap.png')}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image 
                                source={{uri:"https://media.istockphoto.com/id/1148659669/vector/city-map-navigation-gps-navigator-point-marker-icon-top-view-view-from-above-abstract.jpg?s=612x612&w=0&k=20&c=sKEgVVW7TA8DCkwT8yuL_T6MLfQpB0XLxR5Ffb9GEsY="}}
                                style={{height:"100%",width:"100%"}}
                            />
                        </View>
                    </Swiper>
                </View>
                <View style={{flex:4, justifyContent:"flex-end",marginBottom:20}}>
                    <View style={{marginHorizontal:20,marginTop:30}}>
                        <Button 
                            title="SIGN IN"
                            buttonStyle = {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}
                            onPress = {()=>{
                                navigation.navigate("SignInScreen")
                            }}
                        />
                    </View>
                    <View style={{marginHorizontal:20, marginTop:30}}>
                        <Button 
                            title="Create An Account"
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