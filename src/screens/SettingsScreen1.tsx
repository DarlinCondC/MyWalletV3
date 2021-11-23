import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen1 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <Text style={styles.config}>Configuración</Text>
        </View>
    )
}

export default SettingsScreen1

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
      display: 'flex',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
    config: {
        fontWeight: 'normal',
        fontStyle: 'italic',
        fontSize: 30,
        color: 'purple'
    },
})
