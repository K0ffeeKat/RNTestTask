import { makeAutoObservable } from "mobx"

class Store {

  allPhotos = []
  
  currentPhoto = []

  error = []

  constructor(){
    makeAutoObservable(this)
  }

  async loadPhotos() {
    try {
      const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos')
      const object = await res.json()
      this.setAllPhotos(object)
    } catch (error) {
      this.setError(error)
    }
  }

  setError = (error) => {
    this.error = error
  }

  setAllPhotos = (object) => {
    this.allPhotos = object.photos
  }

  updateCurrentPhoto = (photo) => {
      this.currentPhoto = photo
  }

}

export const MainStore = new Store()