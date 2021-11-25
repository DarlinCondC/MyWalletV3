//ventana de recibir token
//elementos: codigo qr y direccion publica.
import * as React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, Alert } from 'react-native'

const RecibirToken = () => {
    return (
        <View style={styles.container}>
            <Text>CODIGO QR</Text>
            <TextInput
                    style={styles.textInput}
                    placeholder="PublicKey"
            />
            <Button 
             title="copiar" 
             color= 'purple' 
             onPress={() => Alert.alert("Copiado")}
            />
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
    textInput: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center'
    },
})