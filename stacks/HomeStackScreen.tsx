import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import nuevaCuenta from '../src/screens/nuevaCuenta';
import Importar from '../src/screens/Importar';
import Inicio from '../src/screens/Inicio';
import Balance from '../src/screens/Balance';
import EnvioToken from '../src/screens/EnvioToken';
import RecibirToken from '../src/screens/RecibirToken';


const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();


    return (

        <HomeStack.Navigator>
            <HomeStack.Screen name="Inicio" component={Inicio} />
            <HomeStack.Screen name="nuevaCuenta" component={nuevaCuenta} />
            <HomeStack.Screen name="Balance" component={Balance} />
            <HomeStack.Screen name="Importar" component={Importar} />
            <HomeStack.Screen name="EnvioToken" component={EnvioToken} />
            <HomeStack.Screen name="RecibirToken" component={RecibirToken} />
        </HomeStack.Navigator>
        
    );
};

export default HomeStackScreen
