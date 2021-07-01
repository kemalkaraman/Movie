import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  Home  from './Home'
import  Favorite  from './Favorite'
import  Settings  from './Settings'

const Tab = createBottomTabNavigator();
const MainRoot = () => {
    return (
        <Tab.Navigator    tabBarOptions={{
            activeTintColor: "#333",
            inactiveTintColor: "#999",
            keyboardHidesTabBar: true,
           
          }}
          initialRouteName="Home">
          <Tab.Screen options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} component={Home} name="Home"  />
          <Tab.Screen options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }} name="Favorite" component={Favorite} />
          <Tab.Screen options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }} name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default MainRoot;

const styles = StyleSheet.create({
container :{
    flex : 1,
    marginTop:getStatusBarHeight(), 
}
})