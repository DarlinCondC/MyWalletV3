//ventana de balance
//elementos: balance sol, condor, botones enviar y recibir
import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, SectionList, Image, ScrollView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Separator = () => (
  <View style={styles.separator} />
);


const HomeScreen2 = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View>
            <TextInput style={styles.textInput} placeholder="CONDOR" />
            <TextInput style={styles.textInput2} placeholder="SOLANA" />
            <Image style={styles.LogoCondor} source={require('./img/condor.png')}/>
            <Image style={styles.LogoSolana} source={require('./img/solana.png')}/>
            <View style={styles.fixToText}>
                <Button
                  title="Enviar"
                  color= 'purple'
                  onPress={() => navigation.navigate("Enviar CNDR")}
                />
                <Button 
                  title="Recibir" 
                  color= 'purple' 
                  onPress={() => navigation.navigate("Recibir CNDR")} 
                />
            </View>
            <Image style={styles.Logo} source={require('./img/cartera.png')}/>
            <Image style={styles.Logo2} source={require('./img/assa.png')}/>
            <Image style={styles.Logo3} source={require('./img/intercambio.png')}/>
            <Image style={styles.Logo4} source={require('./img/configuracion.png')}/>
        </View>
      </SafeAreaView>
    )
}

export default HomeScreen2

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
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
      width: 90,
      height: 90,
      left: '-17%',
      top: -260,
    },
    LogoSolana: {
      width: 80,
      height: 80,
      left: '-13%',
      top: -230,
    },
    Logo: {
      width: 50,
      height: 50,
      left: '-18%',
      top: 100,
    },
    Logo2: {
      width: 45,
      height: 45,
      left: '20%',
      top: 53
    },
    Logo3: {
      width: 45,
      height: 45,
      left: '64%',
      top: 10
    },
    Logo4: {
      width: 45,
      height: 45,
      left: '98%',
      top: -35,
    },
    
});


