import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { mapStyle } from '../global/mapStyle';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { colors } from '../global/styles';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { db } from "../firebase";

const MapComponent = ({ userOrigin, userDestination }) => {
  const [carPosition, setCarPosition] = useState(null);
  const [parkingCenters, setParkingCenters] = useState([]);
  
  const mapRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (userDestination.latitude !== null) {
        console.log("userDestination: ", userDestination);
        console.log("userOrigin: ", userOrigin);
        mapRef.current.fitToCoordinates(
          [userOrigin, userDestination],
          {
            edgePadding: {
              top: 100,
              right: 50,
              left: 50,
              bottom: 200,
            },
            animated: true,
          }
        );
      }
    }, 500);

    fetchParkingCenters();
  }, [userOrigin, userDestination]);

  const fetchParkingCenters = async () => {
    try {
      const snapshot = await db.collection('parkingcenters').get();

      const centers = snapshot.docs.map(doc => {
        const data = doc.data();
        console.log("Data", data);
        const { latitude, longitude } = data.location;
        //console.log(data.location);
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

  const renderCarMarker = () => {
    if (carPosition) {
      return (
        <MapView.Marker coordinate={carPosition} anchor={{ x: 0.5, y: 0.5 }}>
          <Image
            source={require('../../assets/ride.png')}
            style={styles.car}
            resizeMode="cover"
          />
        </MapView.Marker>
      );
    }
    return null;
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        ref={mapRef}
      >
        {userOrigin.latitude !== null && (
          <MapView.Marker coordinate={userOrigin} anchor={{ x: 0.5, y: 0.5 }}>
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerOrigin2}
              resizeMode="cover"
            />
          </MapView.Marker>
        )}

        {userDestination.latitude !== null && (
          <MapView.Marker
            coordinate={userDestination}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerDestination}
              resizeMode="cover"
            />
          </MapView.Marker>
        )}

        {userDestination.latitude !== null && (
          <MapViewDirections
            origin={userOrigin}
            destination={userDestination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={colors.black}
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  top: 100,
                  right: 50,
                  left: 50,
                  bottom: 200,
                },
                animated: true,
              });
            }}
          />
        )}

        {parkingCenters.map((parkingCenter) => {
          const { id, centerName, latitude, longitude } = parkingCenter;
          const distance = calculateDistance(
            userDestination.latitude,
            userDestination.longitude,
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

        {renderCarMarker()}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
  car: {
    width: 40,
    height: 20,
  },
  markerOrigin2: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  markerDestination: {
    width: 16,
    height: 16,
  },
});

export default MapComponent;
