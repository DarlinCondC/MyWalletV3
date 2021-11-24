//ventana de enviar token
//elementos: direccion publica, monto y boton enviar
import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, SectionList, TextInput, Alert, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Separator = () => (
    <View style={styles.separator} />
);

const HomeScreen4 = () => {
    const navigation = useNavigation();
    const handlePress = () => console.log("Text pressed");
    const [email, setEmail] = useState('')
    const [importe, setImporte] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.depo} numberOfLines={1} onPress={handlePress}>Wallet 1</Text>    
            <Separator />
            <Image style={styles.LogoCond} source={require('./img/condor.png')} />
            <Text style={styles.depo} numberOfLines={1} onPress={handlePress}>Depositar</Text>
            
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setEmail(text)}
                    placeholder="Dirección de CNDR del destinatario"
                    value={email}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setImporte(text)}
                    placeholder="Importe"
                    value={importe}
                    keyboardType="numeric"
                />
                <Button 
                title="ENVIAR" 
                color= 'purple' 
                onPress={() => Alert.alert("Enviado")}/>
            </View>
            <Image style={styles.Logo} source={require('./img/cartera.png')}/>
            <Image style={styles.Logo2} source={require('./img/assa.png')}/>
            <Image style={styles.Logo3} source={require('./img/intercambio.png')}/>
            <Image style={styles.Logo4} source={require('./img/configuracion.png')}/>
        </SafeAreaView>
    )
}

export default HomeScreen4

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',

    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 20,
    },
    LogoCond: {
      width: 80,
      height: 80,
      left: '30%',
      top: 5,
    },
    textInput: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      alignItems: 'center'
    },
    depo: {
      fontSize: 20,
      fontWeight: "normal",
      color: 'purple',
      alignItems: 'center',
      textAlign: 'center',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    Logo: {
      width: 50,
      height: 50,
      left: '-40%',
      top: 240,
    },
    Logo2: {
      width: 45,
      height: 45,
      left: '-20%',
      top: 190,
    },
    Logo3: {
      width: 45,
      height: 45,
      left: '5%',
      top: 140
    },
    Logo4: {
      width: 45,
      height: 45,
      left: '40%',
      top: 100,
    },
    
});