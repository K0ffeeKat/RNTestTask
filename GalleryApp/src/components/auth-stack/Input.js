import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export const Input = (props) => {
  const {
    onChangeText,
    placeholder,
    inputMarginVertical,
    secureTextEntry
  } = props

  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize='none'
      secureTextEntry={secureTextEntry}
      style={[
        styles.textInput,
        { marginVertical: inputMarginVertical }]}/>
  )
}

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
