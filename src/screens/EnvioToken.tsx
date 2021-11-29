//ventana de enviar token
//elementos: direccion publica, monto y boton enviar
import * as React from 'react'
import {useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, SectionList, TextInput, Alert, Image,TouchableOpacity, Platform, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon, Input } from 'react-native-elements';

const Separator = () => (
    <View style={styles.separator} />
);

const AppButton = ({ onPress, title } :any) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  
);

const EnvioToken = () => {
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
              <Input
                style={styles.input}
                placeholder='Dirección del destinatario'
                rightIcon={{ type: 'font-awesome', name: 'user' }}
                
              /> 
              <Input
                style={styles.input}
                placeholder='Importe'
                rightIcon={{ type: 'font-awesome', name: 'dollar' }}
                
              />               
                <AppButton 
                  title="ENVIAR" 
                  size="sm" 
                  backgroundColor='purple'
                  onPress={() => Alert.alert("Enviado")} 
                />
            </View>
        </SafeAreaView>
    )
}

export default EnvioToken

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

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
      left: '1%',
      top: 5,
    },
    input: {
      
      margin: 12,
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
    button: {
      color: 'purple'
    },

    appButtonContainer: {
      elevation: 8,
      backgroundColor: 'purple',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }, 
    
});