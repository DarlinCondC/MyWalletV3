//prueba primera pantalla
import React, { Component } from 'react';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { StyleSheet, Button, View, SafeAreaView, Text,  ScrollView, text, number, Alert, TextInput, Image, onChangeText, onChangeNumber, Platform, StatusBar } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './src/Tabs';
//botones
const Separator = () => (
  <View style={styles.separator} />
);

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
}

//dimensiones logo condor
const styles1 = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  condorLogo: { 
    width: 300,
    height: 300,
  },
});

const MyAppl = () => {

  const handlePress = () => console.log("Text pressed");

  return (
    <Tabs />
  );
}
/////

export default MyAppl;


//export default DisplayAnImage;


/////////
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
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  textInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  princ: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'purple',
    alignItems: 'center',
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 20,
  },
});

