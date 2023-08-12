import { getData } from "../src/api"

class Store {
    data = []

    loadPics = () => {
        getData()
        .then((json) => this.data = json.photos)
        .catch((error) => console.error(error))
    }

}

export const MainStore = new Store()