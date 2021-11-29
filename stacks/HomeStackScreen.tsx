import * as React from 'react'
import { useEffect } from "react";
import { View, Text, Image, StyleSheet, BackHandler, Alert } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import nuevaCuenta from '../src/screens/nuevaCuenta';
import Importar from '../src/screens/Importar';
import Inicio from '../src/screens/Inicio';
import Balance from '../src/screens/Balance';
import EnvioToken from '../src/screens/EnvioToken';
import RecibirToken from '../src/screens/RecibirToken';
import { CommonActions, useNavigation } from '@react-navigation/native';


const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    

    return (

        <HomeStack.Navigator>
            <HomeStack.Screen name="Inicio" component={Inicio} />
            <HomeStack.Screen name="nuevaCuenta" component={nuevaCuenta} />
            <HomeStack.Screen name="Balance" component={Balance} options={{headerShown: false}} />
            <HomeStack.Screen name="Importar" component={Importar} />
            <HomeStack.Screen name="EnvioToken" component={EnvioToken} />
            <HomeStack.Screen name="RecibirToken" component={RecibirToken} />
        </HomeStack.Navigator>
        
    );
};

export default HomeStackScreen
