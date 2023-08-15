import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../stacks/AuthProvider'

export const Error = () => {
  const { errorMessage } = useContext(AuthContext)

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
