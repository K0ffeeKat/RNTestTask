import { action, makeObservable, observable } from "mobx"

class Store {
    data = []
    currentPic = []

    constructor(){
        makeObservable(this, {
            data: observable,
            currentPic: observable,
            loadPics: action,
            updateCurrentPic: action
        })
    }

    async loadPics() {
        let res = await fetch('https://api.slingacademy.com/v1/sample-data/photos')
        let object = await res.json()
        this.data = object.photos
        
    }

    updateCurrentPic = ({item}) => {
        this.currentPic = item
    }

}

export const MainStore = new Store()