import axios from 'axios'

const CLIENT_ID = '8a67165f8493462bb25b036b4639c561'

// TODO change secret
const CLIENT_SECRET = 'afb2e371cf1a449bbf8c89bdb7a07ff0'
const REDIRECT_URL_FROM_SPOTIFY = 'http://192.168.1.68:777/'

export function sendSearchRequestAPI(value, type) {
    const token = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
        if (!token) return 'Необходимо пройти регистрацию'
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
        data.then(response => resolve(response.data?.artists?.items))
        data.catch(error => reject({ customMess: 'Some thing got wrong', ...error }))
    })
}

function getUserDataAPI(token) {
    return new Promise((resolve, reject) => {
        if (!token) return 'Необходимо пройти регистрацию'
        const requestConfig = {
            method: 'GET',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const userData = axios.request(requestConfig);
        userData.then(response => resolve(response.data))
        userData.catch(error => reject(['some went wrong', error]))
    })

}

export function fetchUserData(code) { // return user data
    return new Promise((resolve, reject) => {
        const requestConfig = {
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            data: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(REDIRECT_URL_FROM_SPOTIFY)}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
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
                    getUserDataAPI(response.data.access_token)
                        .then(data => {
                            console.log(data)
                            localStorage.setItem('display_name', data.display_name)
                            localStorage.setItem('user_avatar', data.images[0].url)
                            localStorage.setItem('user_uri', data.uri)
                            resolve()
                        })
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}

export function requestAuthorization() {
    const scopes = 'user-read-private user-read-email ugc-image-upload'
    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scopes}&redirect_uri=${encodeURI(REDIRECT_URL_FROM_SPOTIFY)}`
}