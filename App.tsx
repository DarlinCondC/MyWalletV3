//prueba primera pantalla
import * as React from 'react';
import { Component } from 'react';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { StyleSheet, Button, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './src/Tabs';


const MyAppl = () => {

  return (
    <Tabs />
    
  );
}

export default MyAppl;


