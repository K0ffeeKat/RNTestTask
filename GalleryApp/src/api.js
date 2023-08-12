export const getData = () => {
    return fetch('https://api.slingacademy.com/v1/sample-data/photos').then((res) => res.json())
}