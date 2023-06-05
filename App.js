import 'react-native-gesture-handler';
import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
//import HomeScreen from './src/screens/HomeScreen';
import { SignInContextProvider } from './src/contexts/authContext';
import { OriginContextProvider, DestinationContextProvider } from './src/contexts/contexts'
import RootNavigator from './src/navigations/RootNavigator';

const App = () => {
  return (
    <SignInContextProvider>
      <DestinationContextProvider>
        <OriginContextProvider>
          <RootNavigator />
        </OriginContextProvider>
      </DestinationContextProvider>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
