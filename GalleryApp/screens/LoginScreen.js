import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.main}>
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Text style={[styles.text, {color: 'white', textAlign: 'center'}]}>You can either use test@test.com & 1234567 or create your own account</Text>
      </View>
      <View>
        <TextInput 
          placeholder='jane.doe@email.com' 
          style={styles.textInput}/>
        <TextInput 
          placeholder='********' 
          secureTextEntry={true} 
          style={[styles.textInput, {marginVertical: 10}]}/>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={[styles.text, {color: '#363636'}]}>SIGN IN</Text>
        </Pressable>
        <Pressable style={{marginTop: 20}}>
          <Text style={[styles.text, {color: '#d9dbda'}]}>CREATE NEW ACCOUNT</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#7d7d7d',
    borderRadius: 20,
    paddingLeft: 20,
    fontSize: 15, 
    width: 350,
    height: 50
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#33f567',
    width: 100,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Roboto-Medium'
  }
})