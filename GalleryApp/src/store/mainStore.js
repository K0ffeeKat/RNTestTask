import { makeAutoObservable } from "mobx"

class Store {

  allPhotos = []
  
  currentPhoto = []

  constructor(){
    makeAutoObservable(this)
  }

  async loadPhotos() {
    try {
      let res = await fetch('https://api.slingacademy.com/v1/sample-data/photos')
      let object = await res.json()
      this.setAllPhotos(object)
    } catch (error) {
      console.log(error)
    }
  }

  setAllPhotos = (object) => {
    this.allPhotos = object.photos
  }

  updateCurrentPhoto = (photo) => {
      this.currentPhoto = photo
  }

}

export const MainStore = new Store()