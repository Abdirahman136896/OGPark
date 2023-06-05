/*import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default function MyAccountScreen(){

    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>My Account</Text>
        </View>
    )
}*/

/*import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const MyAccountScreen = () => {
  const handleUpdateDetails = () => {
    // Handle update details action
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/driver.png')} // Replace with your own image source
            style={styles.avatar}
          />
          <Text style={styles.fullName}>John Doe</Text>
        </View>
        <Text style={styles.phoneNumber}>+1234567890</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={handleUpdateDetails}>
          <Icon
            name="edit"
            type="feather"
            size={24}
            color="black"
            containerStyle={styles.iconBackground}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Wallet</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>My Vehicles</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Notifications</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Favorites</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Invite Friends</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Support</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Privacy Policy</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Logout</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>
      </View>
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
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconContainer: {
    borderRadius: 20,
    backgroundColor: '#526fff',
    padding: 8,
  },
  iconBackground: {
    backgroundColor: '#526fff',
  },
  menu: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
  },
  chevronIcon: {
    marginLeft: 10,
  },
});

export default MyAccountScreen;*/

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { parameters } from '../global/styles';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const MyAccountScreen = () => {
  const handleUpdateDetails = () => {
    // Handle update details action
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/driver.png')} // Replace with your own image source
            style={styles.avatar}
          />
          <Text style={styles.fullName}>John Doe</Text>
        </View>
        <Text style={styles.phoneNumber}>+1234567890</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={handleUpdateDetails}>
          <Icon
            name="edit"
            type="feather"
            size={24}
            color="black"
            containerStyle={styles.iconBackground}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Wallet</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>My Vehicles</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Notifications</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Favorites</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Invite Friends</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Support</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Privacy Policy</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Logout</Text>
          <Icon
            name="chevron-right"
            type="material"
            size={24}
            color="#333"
            containerStyle={styles.chevronIcon}
          />
        </TouchableOpacity>
      </View>
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
    //height:parameters.headerHeight 
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  phoneNumber: {
    fontSize: 14,
    marginLeft: 0,
  },
  iconContainer: {
    borderRadius: 20,
    backgroundColor: '#526fff',
    padding: 8,
  },
  iconBackground: {
    backgroundColor: '#526fff',
  },
  menu: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 16,
  },
  chevronIcon: {
    marginLeft: 10,
  },
});

export default MyAccountScreen;



