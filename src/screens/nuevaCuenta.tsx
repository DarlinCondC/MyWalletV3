//ventana de crear nueva cuenta
//elementos: correo, contraseña y boton registrar
import * as React from 'react'
import {useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, Alert, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native';
import { Stack } from 'react-native-router-flux';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Balance from './Balance';

const Separator = () => (
    <View style={styles.separator} />
);
const AppButton = ({ onPress, title } :any) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  
);


const nuevaCuenta = () => {
    const navigation = useNavigation();
    const handlePress = () => console.log("Text pressed");
    const [cuenta, setCuenta] = useState('')
    
    /* 
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Balance',
            
          },
        ],
      })
    );
    */

    return (
        <SafeAreaView style={styles.container}>
        <View>
          
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>CREAR CUENTA</Text>
          <Separator />
          <Text style={styles.princ2} numberOfLines={3} onPress={handlePress}>Llave de acceso guarde estas 12 palabras en un lugar seguro, si olvidas tu contraseña,
            con estas palabras podras recuperar tu cuenta</Text>
          <Separator />
          <TouchableOpacity style={styles.nuevaCuenta}>
            <Text>uno dos tres cuatro cinco seis siete ocho nueve diez once doce</Text>
          </TouchableOpacity>
        </View>
        <Separator />
        <View>
          <View style={styles.fixToText}>
            <AppButton 
              title="GUARDE MI CONTRASEÑA" 
              size="sm" 
              backgroundColor='purple'
              onPress={() => navigation.navigate("Balance" as any) } 
            />
          </View>
        </View>
        <Image style={styles.Logo} source={require('./img/condor.png')} />
      </SafeAreaView>
    
    )

  
}

export default nuevaCuenta

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
    nuevaCuenta: {
      top: 20,
      alignItems: 'center',
    },
    princ: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'purple',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      top: -20
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
      top: 30,
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
    Logo: {
      top: 80,
      width: 100,
      height: 100,
      alignItems: 'center'
    },
});

