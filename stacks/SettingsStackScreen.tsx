import * as React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Configuracion from '../src/screens/Configuracion';


const SettingsStackScreen = () => {
    const SettingsStack = createNativeStackNavigator();
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Configuracion" component={Configuracion} />
        </SettingsStack.Navigator>
     
    )
}

export default SettingsStackScreen
