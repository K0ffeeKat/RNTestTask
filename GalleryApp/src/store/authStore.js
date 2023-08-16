import { makeAutoObservable } from "mobx"
import auth from '@react-native-firebase/auth'

class Auth {
  user = ''
  errorMessage = ''


  constructor(){
    makeAutoObservable(this)
  }
  
  setIsApproved = () => {
    this.isApproved = !this.isApproved
  }

  setUser = (text) => {
    this.isUser = text
  }
  
  setEmail = (text) => {
    this.email = text
  }

  setPassword = (text) => {
    this.password = text
  }

  setErrorMessage = (text) => {
    this.errorMessage = text
  }

  cleanErrorLog = () => {
    this.setErrorMessage('')
  }

  login = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.setUser(userCredential.user)
      })
      .catch(error => {
        this.setErrorMessage(error.code)
      })
  }

  signUp = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.setUser(userCredential.user)
      })
      .catch(error => {
        this.setErrorMessage(error.code)
      })
  }

  signOut = () => {
    auth()
      .signOut()
      .then(this.cleanErrorLog())
      .catch(error => console.log(error))
  }

}

export const AuthStore = new Auth()