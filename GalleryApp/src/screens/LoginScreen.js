import { StyleSheet, View, Pressable, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../stacks/AuthProvider'
import { Error } from '../components/auth-stack/Error'
import { Input } from '../components/auth-stack/Input'
import { Button } from '../components/auth-stack/Button'

export const LoginScreen = ({ navigation }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    login
  } = useContext(AuthContext)

  const signIn = (email, password) => {
    login(email, password)
  }

  return (
    <View style={styles.main}>
      <View>
        {errorMessage != null ? <Error /> : null}
      </View>
      <View style={styles.messageContainer}>
        <Text style={[
          styles.text,
          styles.message
        ]}>
          You can either use test@test.com &
          1234567 or create your own account</Text>
      </View>
      <View>
        <Input
          onChangeText={(text) => setEmail(text)}
          placeholder='jane.doe@email.com'
          />
        <Input
          onChangeText={(text) => setPassword(text)}
          placeholder='********'
          secureTextEntry={true}
          inputMarginVertical={10}
          />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={signIn}
          buttonText='SIGN IN'
          />
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={styles.newAccountButton}
          >
          <Text style={styles.text}>CREATE NEW ACCOUNT</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  messageContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  message: {
    color: 'white',
    textAlign: 'center'
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
    fontFamily: 'Roboto-Medium',
    color: '#d9dbda'
  },
  newAccountButton: {
    marginTop: 20
  }
})