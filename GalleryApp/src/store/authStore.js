import { makeAutoObservable } from "mobx"

class Auth {
  isApproved = false

  constructor(){
    makeAutoObservable(this)
  }
  
  setIsApproved = () => {
    this.isApproved = !this.isApproved
  }  
}

export const AuthStore = new Auth()