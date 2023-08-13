import { action, makeObservable, observable } from "mobx"
import { getData } from "../src/api"

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

    loadPics = () => {
        getData()
        .then((json) => this.data = json.photos)
        .catch((error) => console.error(error))
    }

    updateCurrentPic = ({item}) => {
        this.currentPic = item
    }

}

export const MainStore = new Store()