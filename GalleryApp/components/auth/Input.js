import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const Input = (props) => {
  
const {
    onChangeText, 
    placeholder,
    marginVertical, 
    secureTextEntry
} = props

  return (
    <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          autoCapitalize='none'
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, 
                {marginVertical: marginVertical}]}/>
  )
}

export default Input

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#7d7d7d',
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 15, 
        width: 350,
        height: 50
      }
})