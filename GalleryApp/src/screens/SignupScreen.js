import { StyleSheet, View, Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import { AuthStore } from '../store/authStore'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Error } from '../components/Error'
import { observer } from 'mobx-react'

export const SignupScreen = observer((props) => {
  const {
    errorMessage,
    signUp,
    cleanErrorLog
  } = AuthStore

  const navigation = props.navigation

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const moveToLogin = () => {
    cleanErrorLog()
    navigation.navigate('Login')
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
          onPress={() => signUp(email, password)}
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
