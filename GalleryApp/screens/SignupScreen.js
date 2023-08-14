import { StyleSheet, View, Pressable, Text } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../stacks/AuthProvider'
import Input from '../components/auth/Input'
import Button from '../components/auth/Button'
import Error from '../components/auth/Error'

const SignupScreen = ({navigation}) => {

  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    cleanUp, 
    signUp, 
    errorMessage
  } = useContext(AuthContext)

  return (
    <View style={styles.main}>
      <View>
        {errorMessage != null ? <Error /> : null}
      </View>
      <View>
        <Input 
          placeholder='jane.doe@email.com'
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder='********'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          marginVertical={10}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            signUp(email, password)
          }} 
          buttonText='SIGN UP'
        />
        <Pressable 
          style={{marginTop: 20}}
          onPress={() => {navigation.navigate('Login')}}
          >
          <Text style={styles.text}>I ALREADY HAVE AN ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignupScreen

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
  }
})