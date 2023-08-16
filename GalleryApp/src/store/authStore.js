import { makeAutoObservable } from "mobx"

class Auth {
  user = ''
  email = null
  password = null
  errorMessage = null


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
    this.setEmail(null)
    this.setPassword(null)
    this.setErrorMessage(null)
  }
}

export const AuthStore = new Auth()