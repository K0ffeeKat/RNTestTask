import { makeAutoObservable } from "mobx"

class ColumnSwitch {

  isEnabled = false

  constructor(){
    makeAutoObservable(this)
  }

  setIsEnabled = () => {
    this.isEnabled = !this.isEnabled
  }
}

export const SwitchStore = new ColumnSwitch()