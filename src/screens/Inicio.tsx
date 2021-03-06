//ventana principal inicio
import * as React from 'react'
import {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Alert, TextInput, Image, TouchableOpacity, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SocialIcon } from 'react-native-elements';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import nuevaCuenta from './nuevaCuenta';
import Importar from './Importar';



//botones
const Separator = () => (
    <View style={styles.separator} />
);
const AppButton = ({ onPress, title } :any) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  
);
  

  export type RootStackParamList = {
    Inicio: undefined;
    Importar: undefined;
    nuevaCuenta: undefined;
  };
  const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen
        name="Importar"
        component={Importar}
      />
      <Stack.Screen
        name="nuevaCuenta"
        component={nuevaCuenta}
      />
    </Stack.Navigator>
  );
};

const Inicio = () => {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Inicio'>;
    const navigation = useNavigation<homeScreenProp>();

    const handlePress = () => console.log("Text pressed");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
      
        <SafeAreaView style={styles.container}>
          <Image style={styles.Logo} source={require('./img/condor.png')} />
        <View>
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>MOUNTAIN WALLET</Text>
        </View>
        <Separator />
        <View>
          <View style={styles.fixToText}>
            <AppButton 
              title="importar cuenta"
              size="sm" 
              backgroundColor='purple'
              onPress={() => navigation.navigate("Importar")} 
            />
            <Separator />
            <AppButton 
              title="crear nueva cuenta"
              size="sm" 
              backgroundColor='purple'
              onPress={() => navigation.navigate("nuevaCuenta")} 
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center'  }}>
            <SocialIcon
              style={styles.Icons}
              type="facebook"
              onPress={() => {
                Alert.alert('Facebook');
              }}
            />
            <SocialIcon
              style={styles.Icons}
              type="twitter"
              onPress={() => {
                Alert.alert('Twitter');
              }}
            />
            <SocialIcon
              style={styles.Icons}
              type="instagram"
              iconColor= "white"
              onPress={() => {
                Alert.alert('Instagram');
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    )
}
export default Inicio

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: Platform.OS === "android" ? 20 : StatusBar.length,
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
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    princ: {
      fontSize: 20,
      fontWeight: "bold",
      color: '#8b008b',
      alignItems: 'center',
      textAlign: 'center',
    },
    fixToText: {
      top: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    Logo: {
        width: 200,
        height: 200,
        alignItems: 'center'
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
    Icons: {
      top: 130,
    }
});

