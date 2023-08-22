import { makeAutoObservable } from "mobx"

class Store {

  allPhotos = []
  
  currentPhotoId = ''

  error = ''

  constructor(){
    makeAutoObservable(this)
  }

  async loadPhotos() {
    try {
      this.setError('')
      const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos')
      const object = await res.json()
      this.setAllPhotos(object)
    } catch (error) {
      this.setError(error)
    }
  }

  setError = (error) => {
    this.error = error.toString()
  }

  setAllPhotos = (object) => {
    this.allPhotos = object.photos
  }

  setCurrentPhotoId = (photo) => {
    this.currentPhotoId = photo.id
  }

  get currentPhotoData() {
    return this.allPhotos.find(photo => photo.id === this.currentPhotoId)
    }

}

export const MainStore = new Store()