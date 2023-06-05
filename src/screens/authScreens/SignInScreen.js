import React,{useState, useRef, useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Alert, TouchableOpacity} from 'react-native';
import {colors, parameters, title} from "../../global/styles";
import {Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Formik } from 'formik';
import * as Animatable from 'react-native-animatable';
import firebase from "firebase/app";
import { auth } from "../../firebase";
import { SignInContext } from '../../contexts/authContext';

export default function SignInScreen({navigation}){
    const {dispatchSignedIn} = useContext(SignInContext)

    const [textInput1focussed, setTextInput1Focussed]=useState(false);
    const [textInput2focussed, setTextInput2Focussed]=useState(false);
    const textInput1 = useRef(1);
    const textInput2 = useRef(2);

    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    async function signIn(data){
        try{
            const {password,email} = data
            const user = await firebase.auth().signInWithEmailAndPassword(email,password)

            if(user){
                dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:"signed-in"}})
            }
        }catch(error){
            Alert.alert(
                error.name,
                error.message
            )
        }
    }
    return(
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
            <View style={{marginLeft:20, marginTop:10}}>
                <Text style={title}>Sign-In</Text>
            </View>
            <View style={{alignItems:"center",marginTop:10}}>
                <Text style={styles.text1}>Please enter your email and password</Text>
            </View>
            <Formik
                initialValues = {{email:'',password:''}}
                onSubmit = {(values)=>{
                    if (!values.email || !values.password) {
                        Alert.alert('Error', 'Please provide email and password.');
                        return;
                    }
                    signIn(values)
                }}
            >
                { (props)=>
                <View>
                    <View style={{marginTop:20}}>
                        <View style={styles.textInput1}>
                            <Animatable.View animation={textInput1focussed ? "" : "fadeInLeft"} duration={400}>
                                <Icon 
                                    name="email"
                                    color={colors.grey3}
                                    iconStyle={{color:colors.grey3}}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width:"90%"}}
                                placeholder="Email"
                                placeholderTextColor="gray"
                                keyboardType="email-address"
                                ref = {textInput1}
                                onFocus={()=>{
                                    setTextInput1Focussed(false)
                                }}
                                onBlur={()=>{
                                    setTextInput1Focussed(true)
                                }}
                                onChangeText = {props.handleChange('email')}
                                value={props.values.email}
                            />
                        </View>
                        <View style={styles.textInput2}>
                            <Animatable.View animation={textInput2focussed ? "" : "fadeInLeft"} duration={400}>
                                <Icon 
                                    name="lock"
                                    color={colors.grey3}
                                    iconStyle={{color:colors.grey3}}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width:"80%"}}
                                placeholder="Password"
                                placeholderTextColor="gray"
                                secureTextEntry={!isPasswordVisible}
                                ref={textInput2}
                                onFocus={()=>{
                                    setTextInput2Focussed(false)
                                }}
                                onBlur={()=>{
                                    setTextInput2Focussed(true)
                                }}
                                onChangeText = {props.handleChange('password')}
                                value={props.values.password}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                <Animatable.View animation={textInput2focussed ? "" : "fadeInLeft"} duration={400}>
                                    <Icon 
                                        name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                                        color={colors.grey3}
                                        iconStyle={{color:colors.grey3}}
                                        style={{marginRight:10}}
                                    />
                                </Animatable.View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginHorizontal:20,marginTop:30}}>
                        <Button
                            title="SIGN IN"
                            buttonStyle = {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}
                            onPress = {//()=>{
                                //navigation.navigate("DrawerNavigator")
                                props.handleSubmit
                            }
                        />
                    </View>
                </View>
                }
            </Formik>
            <View style={{alignItems:"center",marginTop:15}}>
                <Text style={{...styles.text1, textDecorationLine:"underline"}}> Forgot Password?</Text>
            </View>
            <View style={{alignItems:"center",marginTop:20,marginBottom:20}}>
                <Text style={{color:colors.grey3,fontSize:16,fontWeight:"bold"}}>OR</Text>
            </View>
            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon 
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    style={styles.socialIcon}
                    onPress={()=>{}}
                />
            </View>
            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                    title="Sign In With Google"
                    button
                    type="google"
                    style={styles.socialIcon}
                    onPress={()=>{}}
                />
            </View>
            <View style={{marginTop:25,marginLeft:20,marginBottom:10}}>
                <Text style={{...styles.text1}}> New on OGPark App?</Text>
            </View>
            <View style={{alignItems:"flex-end", marginHorizontal:20}}>
                <Button 
                    title="Create An Account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                    onPress ={()=>{navigation.navigate("SignUpScreen")}}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color: colors.grey3,
        fontSize: 16
    },

    textInput1:{
        //color: colors.grey3,
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        marginBottom: 20,
        paddingLeft:15,
        //backgroundColor: colors.buttons
    },
    textInput2:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingLeft:15,
        //backgroundColor: colors.buttons
    },
    socialIcon:{
        borderRadius:12,
        height:50
    },
    createButton:{
        backgroundColor:"white",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ffBc52',
        height: 40,
        paddingHorizontal: 20
    },
    createButtonTitle:{
        color: '#526fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    }
})