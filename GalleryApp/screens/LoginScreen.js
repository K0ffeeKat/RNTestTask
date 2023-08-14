import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../stacks/AuthProvider'
import Error from '../components/auth/Error'
import Input from '../components/auth/Input'
import Button from '../components/auth/Button'

const LoginScreen = ({navigation}) => {

  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    errorMessage, 
    login
  } = useContext(AuthContext)

  return (
    <View style={styles.main}>
      <View>
        {errorMessage != null ? <Error /> : null}
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Text style={[styles.text, 
          {color: 'white', 
          textAlign: 'center'
          }]}>You can either use test@test.com & 1234567 or create your own account</Text>
      </View>
      <View>
        <Input 
          onChangeText={(text) => setEmail(text)}
          placeholder='jane.doe@email.com'/>
        <Input 
          onChangeText={(text) => setPassword(text)}
          placeholder='********'
          secureTextEntry={true} 
          marginVertical={10}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => {
            login(email, password)
          }} 
          buttonText='SIGN IN'
          />
        <Pressable 
          onPress={() => navigation.navigate('Signup')}
          style={{marginTop: 20}}
          >
          <Text style={styles.text}>CREATE NEW ACCOUNT</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default LoginScreen

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
  }
})