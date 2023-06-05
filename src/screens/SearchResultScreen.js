import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import * as Location from 'expo-location';
import SearchResultCard from '../components/SearchResultCard'
import {colors} from "../global/styles";
import { db } from "../firebase";

const SCREEN_WIDTH = Dimensions.get('window').width;
const AVERAGE_SPEED = 30;

export default function SearchResultScreen({navigation,route}) {
  const [parkingCenters, setParkingCenters] = useState([]);
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

  const calculateTime = (lat1, lon1, lat2, lon2) => {
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
    const distance = R * c //* 1000; // Convert distance to meters
    const roundedDistance = distance.toFixed(2);
    return roundedDistance;
    /*const timeInHours = distance / AVERAGE_SPEED;
    const timeInMinutes = timeInHours * 60;
    const roundedTime = timeInMinutes.toFixed(2);
    return roundedTime;*/
  };

  const fetchCategoryCenters = async(item) => {
    try {
      item = route.params.item;
      const trimmedItem = item.replace(/(\S+)\s*parking/gi, '$1').trim();

      console.log(trimmedItem);
      const parkingCentersRef = db.collection('parkingcenters');
      //item = route.params.item;
      const querySnapshot = await parkingCentersRef.where('type', '==', trimmedItem).get();
      
      const parkingCenters = [];
      querySnapshot.forEach((doc) => {
        const parkingCenter = doc.data();
        console.log(parkingCenter);
        parkingCenters.push(parkingCenter);
      });
  
      return parkingCenters;
    } catch (error) {
      console.log('Error fetching parking centers:', error);
      throw error;
    }
  }

  const fetchData = async () => {
    try {
      const centers = await fetchCategoryCenters(route.params.item);
      console.log(centers);
      setParkingCenters(centers);
    } catch (error) {
      // Handle error
      console.log('Error fetching parking centers:', error);
      throw error;
    }
  };

  useEffect(() => {
    checkPermission();
    getLocation();
    fetchData();
  },[])

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
            style ={{backgroundColor:colors.cardbackground}}
            data = {parkingCenters}
            keyExtractor ={(item,index)=>index.toString()}
            renderItem ={({item,index})=> (
              <SearchResultCard 
                screenWidth = {SCREEN_WIDTH}
                images = {item.images}
                averageReview ={item.averageReview}
                numberOfReview ={item.numberOfReview}
                parkName ={item.centerName}
                farAway ={latlng.latitude && calculateTime(
                  latlng.latitude,
                  latlng.longitude,
                  item.location.latitude,
                  item.location.longitude
                ) && console.log(item.otherServices)}
                businessAddress ={item.address}
                serviceData ={item.otherServices}
                OnPressParkingCard ={()=>{navigation.navigate("ParkingHomeScreen",{id:index,parking:item.parkingName})}}
              />
              )}

              ListHeaderComponent ={
                <View>
                    <Text style ={styles.listHeader}>{parkingCenters.length} Result for {route.params.item}</Text>
                </View>
              }   

              showsVerticalScrollIndicator ={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40
  },
  listHeader:{
    color:colors.grey1,
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:10,
    fontWeight:"bold"
  }
})