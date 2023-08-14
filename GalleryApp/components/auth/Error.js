import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../stacks/AuthProvider'

const Error = () => {

  const {errorMessage} = useContext(AuthContext)

  return (
    <View>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    error: {
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        color: '#fa5757'
    }
})