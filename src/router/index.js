import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../pages/GetStarted';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Aboutme from '../pages/Aboutme';
import ListProvinsi from '../pages/ListProvinsi'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen component={GetStarted} name="GetStarted" options={{ headerShown: false }}/>
              <Stack.Screen component={Login} name="Login" options={{
                headerTitle:'',
                headerStyle:{
                  backgroundColor:'#67C5E5',
                  shadowOpacity:0,
                  elevation: 0
                } }}/>
              <Stack.Screen component={Register} name="Register" options={{
                headerTitle:'',
                headerStyle:{
                  backgroundColor:'#67C5E5',
                  shadowOpacity:0,
                  elevation: 0 
                } }}/>
              <Stack.Screen component={MyTabs} name="MyTabs" options={{ headerShown: false }} />
              <Stack.Screen component={ListProvinsi} name="ListProvinsi" options={{ headerTitle:"Detail Kasus",headerTitleAlign:'center', headerStyle:{
                  backgroundColor:'#67C5E5',
                  shadowOpacity:0,
                  elevation: 0 
                }}}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
}



function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{backgroundColor:'#000'}}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel:'Beranda',
        tabBarIcon:({color})=>(<Icon name="home" size={26} color={'#000000'}/>)
        }}
        />

      <Tab.Screen name="Tentang Saya" component={Aboutme} options={{
        tabBarLabel:'Tentang Saya',
        tabBarIcon:({color})=>(<Icon name="user" size={26} color={'#000000'}/>)
        }}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#67C5E5'
  },
  bottomTab:{
    backgroundColor:'#67C5E5'
    
  }

})