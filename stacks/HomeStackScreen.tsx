import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../src/screens/HomeScreen1';
import HomeScreen1 from '../src/screens/HomeScreen1';
import HomeScreen2 from '../src/screens/HomeScreen2';
import HomeScreen3 from '../src/screens/HomeScreen3';
import HomeScreen4 from '../src/screens/HomeScreen4';
import HomeScreen5 from '../src/screens/HomeScreen5';


const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();
    return (

        <HomeStack.Navigator>
            <HomeStack.Screen name="Pantalla Principal" component={HomeScreen1} />
            <HomeStack.Screen name="Balance" component={HomeScreen2} />
            <HomeStack.Screen name="Registro" component={HomeScreen3} />
            <HomeStack.Screen name="Enviar CNDR" component={HomeScreen4} />
            <HomeStack.Screen name="Recibir CNDR" component={HomeScreen5} />
        </HomeStack.Navigator>
    );
};

export default HomeStackScreen
