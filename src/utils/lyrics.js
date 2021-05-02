import axios from 'axios';

function getLyricsAPI(artist, song) {
    return new Promise((resolve, reject) => {
        const requestConfig = {
            method: 'GET',
            url: `https://mourits-lyrics.p.rapidapi.com/?artist=${artist}&song=${song}`,
            headers: {
                "x-rapidapi-key": "cbc4c7cd11msh0153074ae26a9f0p116743jsn190a99d33253",
                "x-rapidapi-host": "mourits-lyrics.p.rapidapi.com"
            }
        }
        axios.request(requestConfig)
            .then(response => {
                if (response.status === 200) resolve(response)
            })
            .catch(error => reject(error))
    })
}