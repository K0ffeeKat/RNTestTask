import { makeAutoObservable, runInAction } from "mobx"

class Store {

    data = []
    currentPic = []

    constructor(){
      makeAutoObservable(this)
    }

    async loadPics() {
        let res = await fetch('https://api.slingacademy.com/v1/sample-data/photos')
        let object = await res.json()
        runInAction(() => {
          this.data = object.photos
        })
    }

    updateCurrentPic = ({item}) => {
        this.currentPic = item
    }

}

export const MainStore = new Store()