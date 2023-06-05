/*import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default function MyBookingScreen(){

    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>My Reservations Screen</Text>
        </View>
    )
}*/

/*import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';

const MyBookingScreen = () => {
  const [showOngoing, setShowOngoing] = useState(true);

  const handleToggleSections = () => {
    setShowOngoing(!showOngoing);
  };

  const renderOngoingReservations = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Ongoing Reservations</Text>
      </View>

      <View style={styles.reservationItem}>
        <View style={styles.imageContainer}>
          <Text style={styles.pricePerHour}>$5/hr</Text>
          <Image
            source={require('../../assets/uberGo.png')} // Replace with your own image source
            style={styles.image}
          />
        </View>

        <View style={styles.reservationInfo}>
          <Text style={styles.parkingName}>Parking Center A</Text>
          <CountDown
            until={94608000} // Replace with your countdown duration in seconds
            size={24}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ h: null, m: null, s: null }}
            digitStyle={styles.countdownDigit}
            separatorStyle={styles.countdownSeparator}
          />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add Time</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHistoryReservations = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>History</Text>
      </View>

      <View style={styles.reservationItem}>
        <View style={styles.imageContainer}>
          <Text style={styles.pricePerHour}>$5/hr</Text>
          <Image
            source={require('../../assets/categories/img4.jpg')} // Replace with your own image source
            style={styles.image}
          />
        </View>

        <View style={styles.reservationInfo}>
          <Text style={styles.parkingName}>Parking Center B</Text>
          <Text style={styles.address}>123 Main St, City</Text>
          <View style={styles.ratings}>
            <Icon name="star" type="material" size={16} color="#f9c200" />
            <Icon name="star" type="material" size={16} color="#f9c200" />
            <Icon name="star" type="material" size={16} color="#f9c200" />
            <Icon name="star" type="material" size={16} color="#f9c200" />
            <Icon name="star" type="material" size={16} color="#f9c200" />
          </View>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
            </View>
          <TouchableOpacity style={styles.likeButton}>
            <Icon name="heart" type="feather" size={24} color="#ff0000" />
          </TouchableOpacity>
        </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Bookings</Text>
      </View>

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={handleToggleSections}
      >
        <Text style={styles.toggleButtonText}>
          {showOngoing ? 'Show History' : 'Show Ongoing'}
        </Text>
      </TouchableOpacity>

      {showOngoing ? renderOngoingReservations() : renderHistoryReservations()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#526fff',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: '#526fff',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reservationItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
  },
  pricePerHour: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  reservationInfo: {
    flex: 1,
    marginLeft: 10,
  },
  parkingName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countdownDigit: {
    backgroundColor: '#526fff',
    borderRadius: 4,
    marginHorizontal: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  countdownSeparator: {
    color: '#526fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#526fff',
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  ratings: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bookNowButton: {
    backgroundColor: '#526fff',
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default MyBookingScreen;*/

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors, parameters } from '../global/mstyles';
import { Icon } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';

const MyBookingScreen = () => {
  const [activeButton, setActiveButton] = useState('ongoing');

  const handleButtonPress = (button) => {
    setActiveButton(button);
  };

  const renderOngoingReservations = () => (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={styles.sectionContainer}>
            <View style={styles.ongoingReservationItem}>
                <View style={styles.ongoingReservationInfo}>
                    <Text style={styles.parkingName}>Parking Center A</Text>
                    <Text style={styles.timeRemaining}>Time Remaining</Text>
                    <CountDown
                        until={94608000} // Replace with your countdown duration in seconds
                        size={16}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{ h: null, m: null, s: null }}
                        digitStyle={styles.countdownDigit}
                        separatorStyle={styles.countdownSeparator}
                    />
                </View>

                <Image
                    source={require('../../assets/uberGo.png')} // Replace with your own image source
                    style={styles.vehicleImage}
                />

                <TouchableOpacity style={styles.addTimeButton}>
                    <Text style={styles.buttonText}>Add Time</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );

  const renderHistoryReservations = () => (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={styles.sectionContainer}>
        <View style={styles.reservationItem}>
            <View style={styles.imageContainer}>
            <Text style={styles.pricePerHour}>$5/hr</Text>
            <Image
                source={require('../../assets/categories/img4.jpg')} // Replace with your own image source
                style={styles.image}
            />
            </View>

            <View style={styles.reservationInfo}>
            <Text style={styles.parkingName}>Parking Center B</Text>
            <Text style={styles.address}>123 Main St, City</Text>
            <View style={styles.ratings}>
                <Icon name="star" type="material" size={16} color="#f9c200" />
                <Icon name="star" type="material" size={16} color="#f9c200" />
                <Icon name="star" type="material" size={16} color="#f9c200" />
                <Icon name="star" type="material" size={16} color="#f9c200" />
                <Icon name="star" type="material" size={16} color="#f9c200" />
            </View>
            <TouchableOpacity style={styles.bookNowButton}>
                <Text style={styles.buttonText1}>Book Now</Text>
            </TouchableOpacity>
                </View>
            <TouchableOpacity style={styles.likeButton}>
                <Icon name="heart" type="feather" size={24} color="#ff0000" />
            </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Bookings</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'ongoing' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleButtonPress('ongoing')}
        >
          <Text style={{fontSize: 16,fontWeight: 'bold',color: 'black'}}>Ongoing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'history' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleButtonPress('history')}
        >
          <Text style={{fontSize: 16,fontWeight: 'bold',color: 'black'}}>History</Text>
        </TouchableOpacity>
      </View>

      {activeButton === 'ongoing'
        ? renderOngoingReservations()
        : renderHistoryReservations()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
  header: {
    backgroundColor: '#526fff',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#ccc',
  },
  inactiveButton: {
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ongoingReservationItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
  },
  parkingName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeRemaining: {
    fontSize: 14,
  },
  countdownTimer: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  vehicleImage: {
    width: 80,
    height: 80,
  },
  addTimeButton: {
    backgroundColor: '#526fff',
    borderRadius: 8,
    padding: 10,
    marginTop:100,
    marginLeft:-200,
    alignItems:"flex-start"
    //width:"100%"
  },
  reservationItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
  },
  pricePerHour: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  reservationInfo: {
    flex: 1,
    marginLeft: 10,
  },
  parkingName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countdownDigit: {
    backgroundColor: '#526fff',
    borderRadius: 4,
    marginHorizontal: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  countdownSeparator: {
    color: '#526fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#526fff',
    borderRadius: 8,
    padding: 10,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  ratings: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bookNowButton: {
    backgroundColor: '#526fff',
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default MyBookingScreen;
