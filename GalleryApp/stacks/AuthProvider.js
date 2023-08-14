import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const cleanUp = () => {
    setUsername('')
    setEmail('')
    setPassword('')
    setErrorMessage(null)
  };

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        cleanUp()
      })
      .catch(error => {
        setErrorMessage(error.code)
      });
  }

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        cleanUp()
      })
      .catch(error => {
        setErrorMessage(error.code)
      });
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  const value = {
    user, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    errorMessage,
    login,
    signUp,
    signOut
  }
  
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider