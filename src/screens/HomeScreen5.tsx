//ventana de recibir token
//elementos: codigo qr y direccion publica.
import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, Alert } from 'react-native'

const HomeScreen5 = () => {
    return (
        <View style={styles.container}>
            <Text>CODIGO QR</Text>
            <TextInput
                    style={styles.textInput}
                    placeholder="MyAddress"
            />
            <Button 
             title="copiar" 
             color= 'purple' 
             onPress={() => Alert.alert("Copiado")}
            />
            <Image style={styles.Logo} source={require('./img/cartera.png')}/>
            <Image style={styles.Logo2} source={require('./img/assa.png')}/>
            <Image style={styles.Logo3} source={require('./img/intercambio.png')}/>
            <Image style={styles.Logo4} source={require('./img/configuracion.png')}/>
        </View>
        
    )
}

export default HomeScreen5

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
      display: 'flex',
    },
    textInput: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center'
    },
    Logo: {
        width: 50,
        height: 50,
        left: '-40%',
        top: 440,
      },
      Logo2: {
        width: 45,
        height: 45,
        left: '-12%',
        top: 395,
      },
      Logo3: {
        width: 45,
        height: 45,
        left: '15%',
        top: 350
      },
      Logo4: {
        width: 45,
        height: 45,
        left: '40%',
        top: 305,
      },
})