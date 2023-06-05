import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image,Dimensions, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';
import Countdown from 'react-native-countdown-component';
import * as Location from 'expo-location';
import firebase from "firebase/app";
import {colors,parameters} from '../global/mstyles';
import HomeHeader from '../components/HomeHeader';
import {filterData, parkingData} from '../global/Data';
import ParkingCard from '../components/ParkingCard';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}){
    const [switchButton, setSwitchButton] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0")
    const [latlng, setLatLng] = useState({})
    const checkPermission = async()=>{
        const hasPermission = await Location.requestForegroundPermissionsAsync();
        if(hasPermission.status === 'granted'){
        const permission = await askPermission()
        return permission
        }
        return true
    };

    const askPermission = async() => {
        const permission = await Location.requestForegroundPermissionsAsync()
        return permission.status === 'granted'
    };

    const getLocation = async()=>{
        try{
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if(!granted) return;
        const {
            coords:{latitude,longitude},
        } = await Location.getCurrentPositionAsync();
        setLatLng({latitude:latitude,longitude:longitude})
        //console.log(latlng);
        }catch(err){
        alert(err)
        }
    }

    useEffect(()=>{
        checkPermission();
        getLocation()
        //console.log(latlng)
    ,[]})

    return(
        <View style={styles.container}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(82, 111, 255, 1)"
            />
            <HomeHeader navigation ={navigation}/>
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
                <View>
                    <View style={{marginTop:10,flexDirection:"row",justifyContent:"center"}}>
                        <TouchableOpacity onPress={()=>{setSwitchButton(true)}}>
                            <View style={{...styles.dashboardButton, backgroundColor:switchButton ? colors.buttons : colors.grey5,marginRight:10}}>
                                <Text style={styles.dashboardText}>Dashboard</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                setSwitchButton(false)
                                navigation.navigate("HomeStack")
                            }}
                        >
                            <View style={{...styles.dashboardButton, backgroundColor:switchButton ? colors.grey5 : colors.buttons}}>
                                <Text style={styles.dashboardText}>Find & Book</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.filterView}>
                    <View style={styles.addressView}>
                        <View style={{flexDirection:"row",alignItems:"center",paddingLeft:10}}>
                            <Icon 
                                type="material-community"
                                name="map-marker"
                                color={colors.grey1}
                                size={25}
                            />
                            <Text style={{marginLeft:5}}>Fivestar rd</Text>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center",marginLeft:20,backgroundColor:colors.cardbackground,borderRadius:15,paddingHorizontal:5,marginRight:20}}>
                            <Icon 
                                type="material-community"
                                name="clock-time-four"
                                color={colors.grey1}
                                size={25}
                            />
                            <Text style={{marginLeft:5}}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Icon 
                            type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={25}
                        />
                    </View>
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data = {filterData}
                        keyExtractor={(item)=>item.id}
                        extraData={indexCheck}
                        renderItem={({item,index})=>(
                            <Pressable onPress={()=>{
                                setIndexCheck(item.id);
                                //console.log(item.id);
                            }}>
                                <View style={indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                    <Image 
                                        style={{height:120,width:170,borderRadius:5}}
                                        source={item.image}
                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected} : {...styles.smallCardText}}>{item.name}</Text>
                                </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Free Parking now</Text>
                </View>
                <View>
                    <View style = {{flexDirection:'row', alignItems:"center"}}>
                        <Text style ={{color:colors.grey3,marginLeft:15,fontSize:16,marginTop:-10,marginRight:5}} >Options changing in</Text>
                        <Countdown 
                            until = {3600}
                            size ={14}
                            digitStyle = {{backgroundColor:colors.lightgreen}}
                            digitTxtStyle ={{color:colors.cardbackground}}
                            timeToShow = {['M','S']}
                            timeLabels = {{m:'Min',s:'Sec'}}
                        />
                    </View>
                    <FlatList 
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={true}
                        data={parkingData}
                        keyExtractor = {(item,index)=>index.toString()}   
                        showsHorizontalScrollIndicator = {false}
                        renderItem={({item})=>(
                            <View style ={{marginRight:5}}
                            >
                                <ParkingCard
                                    screenWidth  ={SCREEN_WIDTH*0.8}
                                    images ={item.images}
                                    parkName ={item.parkName}
                                    farAway ={item.farAway}
                                    businessAddress ={item.businessAddress}
                                    averageReview ={item.averageReview}
                                    numberOfReview ={item.numberOfReview}
                                />
                            </View>
                        )}
                    />
                </View>
                <View style ={styles.headerTextView}>
                    <Text style ={styles.headerText}>Promotions available</Text>
                </View>

                <View>
                    <FlatList 
                        style ={{marginTop:10, marginBottom:10}} 
                        horizontal ={true}
                        data = {parkingData}
                        keyExtractor = {(item,index)=>index.toString()}   
                        showsHorizontalScrollIndicator = {false}
                        renderItem = {({item,index})=>(
                            <View style ={{marginRight:5}}>
                                <TouchableOpacity /*onPress={()=>{
                                    navigation.navigate('SearchScreen', { screen: 'ParkingHomeScreen', params: {id:index,parking:item.parkingName} })
                                }}*/>
                                    <ParkingCard 
                                        screenWidth  ={SCREEN_WIDTH*0.8}
                                        images ={item.images}
                                        parkName ={item.parkName}
                                        farAway ={item.farAway}
                                        businessAddress ={item.businessAddress}
                                        averageReview ={item.averageReview}
                                        numberOfReview ={item.numberOfReview}
                                        OnPressParkCard ={()=>{navigation.navigate('SearchScreen', { screen: 'ParkingHomeScreen', params: {id:index,parking:item.parkingName} })}}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}  
                    />
                </View>
                <View style ={styles.headerTextView}>
                    <Text style ={styles.headerText}>Parking in your Area</Text>
                </View>

                <View style ={{width:SCREEN_WIDTH,paddingTop:10}}>
                { 
                    parkingData.map(item =>(
                        <View key ={item.id} style = {{paddingBottom:20}}>
                        <ParkingCard 
                                screenWidth  ={SCREEN_WIDTH*0.95}
                                images ={item.images}
                                restaurantName ={item.parkName}
                                farAway ={item.farAway}
                                businessAddress ={item.businessAddress}
                                averageReview ={item.averageReview}
                                numberOfReview ={item.numberOfReview}
                            />
                        </View>
                    )
                    )
                }        
            </View>
        </ScrollView>
        { switchButton &&
        <View style={styles.floatButton}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("HomeStack")
            }}>
                <Icon 
                    name="place"
                    type="material"
                    size={32}
                    color={colors.buttons}
                />
                <Text style ={{color:colors.grey2}}>Map</Text>
            </TouchableOpacity>
        </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:29
    },
    dashboardButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5
    },
    dashboardText:{
       marginLeft:5,
       fontSize:16 
    },
    filterView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginHorizontal:10,
        marginVertical:10
    },
    addressView:{
        flexDirection:"row",
        backgroundColor:colors.grey4,
        borderRadius:15,
        paddingVertical:3,
        justifyContent:"space-between",
        paddingHorizontal:40,
        marginLeft:20,
        marginRight:20
    },
    headerText:{
        color:colors.grey2,
        fontSize:20,
        fontWeight:"bold",
        paddingLeft:10
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:200,
        margin:10,
        height:220
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:200,
        margin:10,
        height:220
    },
    smallCardTextSelected:{
        fontWeight:"bold",
        color:colors.cardbackground
    },
    smallCardText:{
        fontWeight:"bold",
        color:colors.grey2
    },
    floatButton:{
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
    }
})