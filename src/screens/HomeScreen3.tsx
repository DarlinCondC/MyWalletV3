//ventana de registro
//elementos: correo, contraseña y boton registrar
import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, text, number, Alert, TextInput, Image, onChangeText, onChangeNumber, Platform, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Separator = () => (
    <View style={styles.separator} />
);

const HomeScreen3 = () => {
    const navigation = useNavigation();
    const handlePress = () => console.log("Text pressed");
    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>REGISTRO WALLET</Text>
          <Separator />
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>CORREO ELECTRÓNICO</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            placeholder="Email"
            value={text}
          />
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>CONTRASEÑA</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="password"
            keyboardType="numeric"
          />
        </View>
        <Separator />
        <View>
          <View style={styles.fixToText}>
            <Button
              title="REGISTRAR"
              color= 'purple'
              onPress={() => Alert.alert("datos a base")}
            />
          </View>
        </View>
      </SafeAreaView>
    )
}

export default HomeScreen3

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
      justifyContent: 'center',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

