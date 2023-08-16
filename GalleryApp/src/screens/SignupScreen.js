import { StyleSheet, View, Pressable, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { AuthStore } from '../store/authStore'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Error } from '../components/Error'
import { observer } from 'mobx-react'

export const SignupScreen = observer((props) => {
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

  const moveToLogin = () => {
    cleanUp()
    navigation.replace('Login')
  }

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
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
        {errorMessage ? <Error errorMessage={ errorMessage }/> : null}
      </View>
      <View>
        <Input
          placeholder='jane.doe@email.com'
          onChangeText={setEmail}
        />
        <Input
          placeholder='********'
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.inputWithMargins}
        />
      </View>
      <View style={styles.buttonContainer}>
        { email && password 
        ?
        <Button
          onPress={signUp}
          buttonText='SIGN UP'
        /> 
        : null
        }
        <Pressable
          style={styles.alreadyHaveAccountButton}
          onPress={moveToLogin}
          >
          <Text style={styles.text}>I ALREADY HAVE AN ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363636'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Roboto-Medium',
    color: '#d9dbda'
  },
  alreadyHaveAccountButton: {
    marginTop: 20
  },
  inputWithMargins: {
    marginVertical: 10
  }
})
