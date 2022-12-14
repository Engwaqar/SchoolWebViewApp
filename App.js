
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Bpsandc from './screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashPic from './splashPic.jpg';
const Stack = createStackNavigator();

function splashScreen({ navigation }) {
  setTimeout(() => {
        navigation.replace('Bpsandc'); // Stack Name
  }, 3000);


  return (
    <View
      style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1, }}>
      <Image  
      //  source={{uri:'https://erp.campusmanager.online/img/UploadedStuf/829af55b-5421-4a95-9756-1671afba5d93.jpg'}} 
         source={splashPic}
      style={{ width: 330, height: 350,resizeMode:'contain' }} />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash_Screen" component={splashScreen} options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Bpsandc" component={Bpsandc} options={{ headerTitle:'Lasanian Lyceum School', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 14 }, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


