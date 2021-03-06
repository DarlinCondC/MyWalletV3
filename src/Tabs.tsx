import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from '../stacks/HomeStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Configuracion from './screens/Configuracion';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name="Menu Principal" component={HomeStackScreen} options={{headerShown: false}}/>
                <Tab.Screen name="Configuración" component={Configuracion} />
                
            </Tab.Navigator>
            
        </NavigationContainer>
    
    );
};

export default Tabs



