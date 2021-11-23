//ventana principal
import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, text, number, Alert, TextInput, Image, onChangeText, onChangeNumber, Platform, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'


//botones
const Separator = () => (
    <View style={styles.separator} />
);
/*<Image
            style={styles1.condorLogo}
            source={require('./src/screens/img/condor.png')}
          />*/

const HomeScreen1 = () => {
    const navigation = useNavigation();
    const handlePress = () => console.log("Text pressed");
    return (
        <SafeAreaView style={styles.container}>
        <View>
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
              title="REGISTRARME"
              color= 'purple'
              onPress={() => navigation.navigate("Registro")}
            />
              <Button title="INICIAR SESIÓN" 
              color= 'purple' 
              onPress={() => navigation.navigate("Balance")} 
              />
          </View>
          <Text style={styles.title}>
            Olvide mi contraseña !!
          </Text> 
        </View>
      </SafeAreaView>
    )
}
export default HomeScreen1

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
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

