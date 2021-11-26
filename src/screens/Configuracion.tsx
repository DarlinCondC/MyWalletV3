import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Configuracion = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <Text style={styles.config}>Configuración</Text>
            <Text style={styles.mant}>SE ENCUENTRA EN MANTENIMIENTO</Text>
            <Image style={styles.img} source={require('./img/meme.jpg')}/>
        </View>
    )
}

export default Configuracion

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
    mant: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 50,
        color: 'purple'
    },
    img: {
        height: 400,
        width: 400,
    }
})
