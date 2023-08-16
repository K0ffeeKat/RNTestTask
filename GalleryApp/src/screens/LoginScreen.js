import { StyleSheet, View, Pressable, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { Error } from '../components/Error'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { AuthStore } from '../store/authStore'
import { observer } from 'mobx-react'

export const LoginScreen = observer((props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    setUser,
    cleanUp
  } = AuthStore

  const navigation = props.navigation

  const moveToSignup = () => {
    cleanUp()
    navigation.navigate('Signup')
  }

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch(error => {
        setErrorMessage(error.code)
      })
  }

  return (
    <View style={styles.main}>
      <View>
        {errorMessage ? <Error errorMessage={errorMessage}/> : null}
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
          onChangeText={setEmail}
          placeholder='jane.doe@email.com'
          />
        <Input
          onChangeText={setPassword}
          placeholder='********'
          secureTextEntry={true}
          style={styles.inputWithMargins}
          />
      </View>
      <View style={styles.buttonContainer}>
        {email && password 
        ?
        <Button
          onPress={login}
          buttonText='SIGN IN'
          />
        : null
        }
        <Pressable
          onPress={moveToSignup}
          style={styles.newAccountButton}
          >
          <Text style={styles.text}>CREATE NEW ACCOUNT</Text>
        </Pressable>
      </View>

    </View>
  )
})

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
  },
  inputWithMargins: {
    marginVertical: 10
  }
})