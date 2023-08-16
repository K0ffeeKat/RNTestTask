import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react'

export const Input = observer((props) => {
  const {
    onChangeText,
    placeholder,
    style,
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
        style 
      ]}/>
  )
})

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
