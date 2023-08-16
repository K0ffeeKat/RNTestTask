import { StyleSheet, Text, View } from 'react-native'
import { Button } from './Button'
import React from 'react'
import { MainStore } from '../store/mainStore'

export const ErrorView = () => {
  const error = MainStore.error

  return (
    <View style={styles.errorViewContainer}>
      <View style={styles.errorTextContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <Button 
        onPress={() => MainStore.loadPhotos()}
        buttonText='RELOAD'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  errorViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363636'
  },
  errorTextContainer: {
    marginVertical: 10,
    paddingHorizontal: 50
  },
  errorText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    color: '#d9dbda'
  }
})