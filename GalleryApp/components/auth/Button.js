import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Button = (props) => {

  const { onPress, buttonText } = props

  return (
    <Pressable
      onPress={onPress} 
      style={styles.button}
      >
        <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#33f567',
      width: 100,
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontFamily: 'Roboto-Medium',
      color: '#363636'
    }
})