import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Error = (props) => {
  const errorMessage = props.errorMessage

  return (
    <View>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#fa5757'
  }
})
