import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { colors,parameters } from '../global/mstyles';
import { filterData } from '../global/mdata';
import { carsAround } from '../global/mdata';
import { mapStyle } from "../global/mapStyle";
import * as Location from 'expo-location';
import { db } from "../firebase";

const SCREEN_WIDTH = Dimensions.get('window').width

//const HomeScreenM = ({navigation}) => {
export default function FindScreen({navigation}){
  const [latlng, setLatLng] = useState({})
  const [parkingCenters, setParkingCenters] = useState([]);

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

  const fetchParkingCenters = async () => {
    try {
      const snapshot = await db.collection('parkingcenters').get();

      const centers = snapshot.docs.map(doc => {
        const data = doc.data();
        const { latitude, longitude } = data.location;
        console.log(data.location);
        return {
          id: doc.id,
          centerName: data.centerName,
          latitude,
          longitude,
        };
      });

      setParkingCenters(centers);
    } catch (error) {
      console.log('Error fetching parking centers: ', error);
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Difference in latitude
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Difference in longitude
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Convert distance to meters
    return distance;
  };

  const map = useRef(1);

  useEffect(()=>{
    checkPermission();
    getLocation();
    fetchParkingCenters();
    //console.log(latlng)
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Icon type = "material-community"
                name = "arrow-left"
                color = {colors.white}
                size = {40}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.home}>
            <Text style={styles.text1}>Destress Tracing your Parking </Text>
            <View style={styles.view1}>
              <View style={styles.view8}>
                <Text style={styles.text2}>Pick a spot. Reserve it. Relax and let us guide you there</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("RequestScreen")}}>
                  <View style={styles.button1}>
                    <Text style={styles.button1Text}>Find parking with OGPark</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <Image 
                  style={styles.image1}
                  source={require('../../assets/ogCar.png')}
                />
              </View>
            </View>
        </View>
        <View>
              <FlatList
              numRows={5}
              horizontal= {true}
              showsHorizontalScrollIndicator={false}
              data={filterData}
              keyExtractor = {(item)=>item.id}
              renderItem = {({item})=>(
                <View style={styles.card}>
                  <View style={styles.view2}>
                    <Image style={styles.image2} 
                          source={item.image} />
                  </View>
                  <View>
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                </View>
              )}
              />
            </View>
            <View style={styles.view3}>
              <Text style={styles.text3}> Where to? </Text>
              <View style={styles.view4}>
              <Icon type = "material-community"
                name = "clock-time-eight"
                color = {colors.grey1}
                size = {27}
              />
              <Text style={{marginLeft:5}}>Now</Text>
              <Icon type = "material-community"
                name = "chevron-down"
                color = {colors.grey1}
                size = {27}
              />
            </View>
            </View>
            <View style={styles.view5}>
              <View style={styles.view6}>
                <View style={styles.view7}>
                  <Icon type = "material-community"
                    name = "map-marker"
                    color = {colors.black}
                    size = {23}
                  />
                </View>
                <View>
                  <Text style={{fontSize:18,color:colors.black}}>Fivestar Rd</Text>
                  <Text style={{color:colors.grey3}}>Muhoho Avenue, South C</Text>
                </View>
                <View>
                <Icon type = "material-community"
                    name = "chevron-right"
                    color = {colors.grey}
                    size = {27}
                />
                </View>
              </View>
            </View>
            <View style={{...styles.view5, borderBottomWidth:0}}>
              <View style={styles.view6}>
                <View style={styles.view7}>
                  <Icon type = "material-community"
                    name = "map-marker"
                    color = {colors.black}
                    size = {23}
                  />
                </View>
                <View>
                  <Text style={{fontSize:18,color:colors.black}}>Ole Sangale Road</Text>
                  <Text style={{color:colors.grey3}}>Madaraka Shopping Center</Text>
                </View>
                <View>
                <Icon type = "material-community"
                    name = "chevron-right"
                    color = {colors.grey}
                    size = {27}
                />
                </View>
              </View>
            </View>
            <Text style={styles.text4}>Parking spots near your location</Text>
            <View style={{alignItems:"center", justifyContent:"center"}}>
            {latlng.latitude && latlng.longitude && (
                <MapView
                  ref={map}
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  customMapStyle={mapStyle}
                  showsUserLocation={true}
                  followsUserLocation={true}
                  initialRegion={{
                    latitude: latlng.latitude,
                    longitude: latlng.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                >
                  {parkingCenters.map(parkingCenter => {
                    const { id, centerName, latitude, longitude } = parkingCenter;
                    const distance = calculateDistance(
                      latlng.latitude,
                      latlng.longitude,
                      latitude,
                      longitude
                    );

                    if (distance <= 3000) {
                      return (
                        <MapView.Marker
                          key={id}
                          coordinate={{ latitude, longitude }}
                          title={centerName}
                          description={`Distance: ${distance.toFixed(2)} meters`}
                        >
                          <Image 
                            source={require('../../assets/parking-sign.png')}
                            style={styles.carsAround}
                            resizeMode="cover"
                          />
                        </MapView.Marker>
                      );
                    }
                  })}
                </MapView>
                )}
              </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
    </View>
  )
}

//export default HomeScreenM;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight
    },
    
        header:{
        backgroundColor:colors.blue,
        height:parameters.headerHeight,
        alignItems:"flex-start"
      },
    
      image1:{
        height:100,
        width:100,
      },
    
      image2:{
        height:60,
        width:60,
        borderRadius:30,
      },
    
      home:{
        backgroundColor:colors.blue,
        paddingLeft:20,
      },
    
      text1:{
        color:colors.white,
        fontSize:21,
        paddingBottom:20,
        paddingTop:20
      },
    
      text2:{
        color:colors.white,
        fontSize:16
      },
    
      view1:{
        flexDirection:"row",
        flex:1,
        paddingTop:30
      },
    
      button1:{
        height:40,
        width:230,
        backgroundColor:colors.black,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
      },
    
      button1Text:{
        color:colors.white,
        fontSize:17,
        marginTop:-2
      },
    
      card:{
        alignItems:"center",
        margin:SCREEN_WIDTH/60
      },
    
      view2:{
        marginBottom:5,
        borderRadius:10,
        backgroundColor:colors.grey6
      },
    
      title:{
        color:colors.black,
        fontSize:16
      },
    
      view3:{
        flexDirection:"row",
        marginTop :5,
        height:50,
        backgroundColor:colors.grey6,
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:15
      },
    
      text3:{
        marginLeft:15,
        fontSize:20,
        color:colors.black
      },
    
      view4:{ 
        flexDirection:"row",
        alignItems:"center",
        marginRight:15,
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:20
      },
    
      view5:{ 
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        paddingVertical:25,
        justifyContent:"space-between",
        marginHorizontal:15,
        borderBottomColor:colors.grey4,
        borderBottomWidth:1,
        flex:1
      },
    
      view6:{
        alignItems:"center",
        flex:5,
        flexDirection:"row"
      },
    
      view7:{
        backgroundColor:colors.grey6,
        height:40,
        width:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginRight:20
      },
    
      map:{
        height: 150,
        marginVertical: 0,
        width:SCREEN_WIDTH*0.92
      },
    
      text4:{ 
        fontSize:20,
        color:colors.black,
        marginLeft:20,
        marginBottom:20
      },
    
      icon1:  {
        marginLeft:10,
        marginTop:5
      },
    
      view8: {
        flex:4,
        marginTop:-25
      },
    
      carsAround: {
      width: 28,
      height: 20,
    
      }, 
    
      location: {
        width: 16,
        height: 16,
        borderRadius:8,
        backgroundColor:colors.blue,
        alignItems:"center",
        justifyContent:"center"
        
        }, 
        
      view9:{
        width:4,
        height:4,
        borderRadius:2,
        backgroundColor:"white"
      }
})