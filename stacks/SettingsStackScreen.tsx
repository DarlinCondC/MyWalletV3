import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsScreen1 from '../src/screens/SettingsScreen1';
import SettingsScreen2 from '../src/screens/SettingsScreen2';
import SettingsScreen3 from '../src/screens/SettingsScreen3';

const SettingsStackScreen = () => {
    const SettingsStack = createNativeStackNavigator();
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings1" component={SettingsScreen1} />
            <SettingsStack.Screen name="Settings2" component={SettingsScreen2} />
            <SettingsStack.Screen name="Settings3" component={SettingsScreen3} />
        </SettingsStack.Navigator>
     
    )
}

export default SettingsStackScreen
