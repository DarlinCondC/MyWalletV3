//ventana de importar cuenta
//elementos: correo, contraseña y boton registrar
import * as React from 'react'
import {useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, Alert, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Separator = () => (
    <View style={styles.separator} />
);
const AppButton = ({ onPress, title } :any) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  
);
const Importar = () => {
    const navigation = useNavigation();
    const handlePress = () => console.log("Text pressed");
    const [cuenta, setCuenta] = useState('')

    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>IMPORTAR CUENTA</Text>
          <Separator />
          <Text style={styles.princ2} numberOfLines={3} onPress={handlePress}>Ingrese las 12 palabras para ingresar a su cuenta</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setCuenta(text)}
            placeholder="palabras"
            value={cuenta}
          />
        </View>
        <Separator />
        <View>
          <View style={styles.fixToText}>
            <AppButton 
              title="IMPORTAR" 
              size="sm" 
              backgroundColor='purple'
              onPress={() => navigation.navigate("Balance")} 
            />
          </View>
        </View>
      </SafeAreaView>
    )
}

export default Importar

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
      display: 'flex',
      
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 20,
    },
    textInput: {
      height: 60,
      width: 300,
      margin: 50,
      borderWidth: 1,
      padding: 10,
      alignItems: 'center'
    },
    princ: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'purple',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10
    },
    princ2: {
      fontSize: 15,
      fontWeight: "bold",
      color: 'purple',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
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

