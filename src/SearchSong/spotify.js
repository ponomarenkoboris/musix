import axios from 'axios'
// TODO
const CLIENT_ID = localStorage.getItem('client_id') ?? ''
const CLIENT_SECRET = localStorage.getItem('client_secret') ?? ''
const REDIRECT_URL = 'http://192.168.1.68/search-song'

export function sendSearchRequest(value, type) {
    const requestConfig = {
        url: `https://api.spotify.com/v1/search?q=${value}&type=${type}`,
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer `
        }
    }
    const data = axios.request(requestConfig)
    data.then(response => response.json())
        .then(data => data.items)
    data.catch(error => console.log(error))

    return data
}

export function getToken() {
    // const requestConfig = {
    //     url: `https://api.spotify.com/v1/search?q=${searchVal.current.value}&type=${type}`,
    //     method: 'GET',
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${AUTHUSER}`
    //     }
    // }
}

export function requestAuthorization(clientId, clientSecret) {
    localStorage.setItem('client_id', clientId)
    localStorage.setItem('client_secret', clientSecret)
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURI(REDIRECT_URL)}&show_dialog=true
    &scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position 
    user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private`
}