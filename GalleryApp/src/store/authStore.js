import { makeAutoObservable } from "mobx"

class Auth {
  user = ''
  email = ''
  password = ''
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

  cleanUp = () => {
    this.setEmail('')
    this.setPassword('')
    this.setErrorMessage('')
  }
}

export const AuthStore = new Auth()