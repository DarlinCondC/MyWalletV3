//ventana de sesion iniciada
//elementos: balance sol, condor, botones enviar y recibir
import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, text, SectionList, TextInput, Image, onChangeText, onChangeNumber, Platform, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DATA = [
  {
    title: "BALANCE",
    data: ["CONDOR", "SOL"]
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen2 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View>
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item title={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.title}>{title}</Text>
              )}
    />
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
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontWeight: 'normal',
      fontStyle: 'italic',
      color: 'purple',
      fontSize: 20,
      paddingBottom: 20,
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
    
});


