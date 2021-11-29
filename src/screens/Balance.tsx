//ventana de balance
//elementos: balance sol, condor, botones enviar y recibir
import * as React from 'react'
//import {Component} from 'react'
import { useEffect } from "react";
import { View, Button, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Alert, Platform, StatusBar, BackHandler, ImageBackground } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import EnvioToken from './EnvioToken';
import RecibirToken from './RecibirToken';
//import { CommonActions } from '@react-navigation/native';



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
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
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
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Balance'>;
    const navigation = useNavigation<homeScreenProp>();
    useEffect(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);
    return (
     
      <SafeAreaView style={styles.container}>
        <View>
          <Image style={styles.LogoCondor} source={require('./img/condor.png')}/>
          <Text style= {styles.textBalance}>CONDOR</Text>
          <Image style={styles.mural} source={require('./img/panel.png')}/>
          <Image style={styles.LogoSolana} source={require('./img/solana.png')}/>
          <Text style= {styles.textBalance2}>SOLANA</Text>
          <View style={styles.fixToText} >
                <AppButton 
                  title="ENVIAR"
                  size="xs" 
                  backgroundColor='purple'
                  onPress={() => navigation.navigate("EnvioToken")} 
                />
                <Separator />
                <AppButton 
                  title="RECIBIR" 
                  size="xs" 
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
    },
    backGround: {
      flex: 1,
      resizeMode: 'cover',
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
    textBalance: {
      fontSize: 20,
      color: '#8b008b',
      top: -50,
      left: '41%',
      justifyContent: 'center'
    },
    textBalance2: {
      fontSize: 20,
      color: '#8b008b',
      top: 50,
      left: '42.5%',
      justifyContent: 'center'
    },
    princ: {
      fontSize: 20,
      fontWeight: "normal",
      color: 'purple',
      alignItems: 'center',
      textAlign: 'center',
    },
    fixToText: {
      justifyContent: 'center',
      top: 110,
      flexDirection: 'column',
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
      width: 100,
      height: 100,
      top: -100,
      left: '40%',
      justifyContent: 'center'
    },
    LogoSolana: {
      width: 90,
      height: 90,
      top: 20,
      left: '42%',
      justifyContent: 'center'
    },
    mural: {
      height: 90,
      width: 500,
      padding: 10
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


