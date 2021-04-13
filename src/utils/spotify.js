import axios from 'axios'
import { addResults } from "../app/results";

const CLIENT_ID = '8a67165f8493462bb25b036b4639c561'
const CLIENT_SECRET = 'e4b0d91f834048e59a36889ff617ab2e'
const REDIRECT_URL = 'http://192.168.1.68:777/search-song'


export function sendSearchRequestAPI(value, type) {
    const token = localStorage.getItem('access_token');
    if (!token) return
    const requestConfig = {
        url: `https://api.spotify.com/v1/search?q=${value}&type=${type}&offset=0&limit=20`,
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    const data = axios.request(requestConfig)
    data.then(response => response.json())
        .then(data => {
            console.log('data.items', data.items)
            addResults(data.items)
        })
    data.catch(error => console.log(error))
}

// function getUserDataAPI() {
//     const requestConfig = {
//         method: 'GET',
//         url: 'https://api.spotify.com/v1/me',
//         headers: {
//             'Authorization': `Bearer ${}`
//         }
//     }
// }

function fetchAccessToken(code) {
    console.log('code', code)
    const requestConfig = {
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        data: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(REDIRECT_URL)}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`
        }
    }
    axios.request(requestConfig)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('refresh_token', response.data.refresh_token)
            }
        })
}

export function getCode() {
    if (window.location.search.length > 0) {
        const urlParams = new URLSearchParams(window.location.search)
        fetchAccessToken(urlParams.get('code'))
        window.history.pushState('', '', REDIRECT_URL) // clear param from url
    }
}

export function requestAuthorization() {
    const scopes = 'user-read-private user-read-email'
    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scopes}&redirect_uri=${encodeURI(REDIRECT_URL)}`
}