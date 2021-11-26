//ventana de recibir token
//elementos: codigo qr y direccion publica.
import * as React from 'react'
import { View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity, Clipboard } from 'react-native'
//import Clipboard from '@react-native-clipboard/clipboard'
import ClipboardToast from 'react-native-clipboard-toast';


const RecibirToken = () => {
    let publicKey = '34cv456bdsXsd'
    //const copyIt = () => Clipboard.setString(publicKey)

    return (
        <View style={styles.container}>
            <Text style={styles.qr}>CODIGO QR</Text>
            <Image style={styles.Logo} source={require('./img/qr.jpg')}/>
            <TouchableOpacity style={styles.touchable}>
                <Text>Publick key: </Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <Button 
                title="copiar" 
                color= 'purple' 
                onPress={() => Alert.alert("copiado")}
                />
            </View>
        </View>
        
    )
}

export default RecibirToken

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
      display: 'flex',
    },
    qr: {
        color: '#8b008b'
    },
    touchable: {
        top: 50,
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 7,
        alignItems: 'center'
    },
    Logo: {
        top: 30,
        width: 100,
        height: 100,
        alignItems: 'center'
    },
    button: {
        top: 50
    }
})