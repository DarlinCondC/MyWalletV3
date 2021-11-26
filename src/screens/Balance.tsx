//ventana de balance
//elementos: balance sol, condor, botones enviar y recibir
import * as React from 'react'
import {Component} from 'react'
import { View, Button, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Alert, Platform, StatusBar } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import EnvioToken from './EnvioToken';
import RecibirToken from './RecibirToken';


const Separator = () => (
  <View style={styles.separator} />
);

const AppButton = ({ onPress, title } :any) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  
);

  export type RootStackParamList = {
    Balance: undefined;
    EnvioToken: undefined;
    RecibirToken: undefined;
  };
const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
return (
  <Stack.Navigator initialRouteName="Balance">
    <Stack.Screen
      name="EnvioToken"
      component={EnvioToken}
    />
    <Stack.Screen
      name="RecibirToken"
      component={RecibirToken}
    />
  </Stack.Navigator>
);
};



const Balance = () => {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'RecibirToken'>;
    const navigation = useNavigation<homeScreenProp>();
    const props = useNavigation();
    return (
      
      <SafeAreaView style={styles.container}>
        <View>
          <Image style={styles.LogoCondor} source={require('./img/condor.png')}/>
          <TextInput style={styles.textInput} placeholder="CONDOR" />
          <Image style={styles.LogoSolana} source={require('./img/solana.png')}/>
          <TextInput style={styles.textInput2} placeholder="SOLANA" />
            <View style={styles.fixToText}>
                
                <AppButton 
                  title="ENVIAR"
                  size="sm" 
                  backgroundColor='purple'
                  onPress={() => navigation.navigate("EnvioToken")} 
                />
                <AppButton 
                  title="RECIBIR" 
                  size="sm" 
                  backgroundColor='purple'
                  onPress={() => navigation.navigate("RecibirToken")} 
                />
            </View>
        </View>
      </SafeAreaView>
    )
}

export default Balance

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      alignItems: 'center',
      display: 'flex',
      flexDirection: "row",
      justifyContent: "center",
      alignContent: 'center'
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: 'purple',
      fontSize: 20,
      paddingBottom: 20,
    },
    title2: {
      textAlign: 'center',
      marginVertical: 8,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: 'purple',
      fontSize: 15,
      paddingBottom: 20,
    },
    textInput: {
      height: 40,
      width: 180,
      margin: 50,
      top: -20,
      borderWidth: 1,
      padding: 5,
    },
    textInput2: {
      height: 40,
      width: 180,
      margin: 50,
      top: -30,
      borderWidth: 1,
      padding: 5,
    },
    princ: {
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
      backgroundColor: "#AEA5B2",
      height: 40,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    LogoCondor: {
      width: 80,
      height: 80,
      left: '35%',
      top: 20,
    },
    LogoSolana: {
      width: 80,
      height: 80,
      left: '35%',
      top: 10,
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


