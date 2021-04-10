export function findInfo(selector, val) {
    return new Promise((resolve, reject) => {
        fetch(`https://imdb8.p.rapidapi.com/title/find?q=${val}`, {
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'x-rapidapi-key': 'cbc4c7cd11msh0153074ae26a9f0p116743jsn190a99d33253',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}