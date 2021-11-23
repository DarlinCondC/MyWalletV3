//ventana de enviar token
//elementos: direccion publica, monto y boton enviar
import React from 'react'
import { View, Text, Button, StyleSheet, number, SafeAreaView, text, SectionList, TextInput, Image, onChangeText, onChangeNumber, Platform, StatusBar, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Separator = () => (
    <View style={styles.separator} />
);

const HomeScreen4 = () => {
    const navigation = useNavigation();
    const handlePress = () => console.log("Text pressed");
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.depo} numberOfLines={1} onPress={handlePress}>Wallet 1</Text>    
            <Separator />
            <Text style={styles.depo} numberOfLines={1} onPress={handlePress}>Depositar</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    placeholder="Dirección de CNDR del destinatario"
                    value={text}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeNumber}
                    placeholder="Importe"
                    value={number}
                    keyboardType="numeric"
                />
                <Button 
                title="ENVIAR" 
                color= 'purple' 
                onPress={() => Alert.alert("Enviado")}/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen4

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
        width: 66,
        height: 58,
    }
});