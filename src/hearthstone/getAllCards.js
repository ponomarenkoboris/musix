export function getAllCards() {
    return new Promise(async (resolve, reject) => {
        const requestConfig = {
            method: 'GET',
            headers: {
                "x-rapidapi-key": "cbc4c7cd11msh0153074ae26a9f0p116743jsn190a99d33253",
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
            }
        }
        try{
            const request = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?locale=ruRu&collectible=1', requestConfig)
            const data = await request.json()
            resolve(data)
        } catch(e) {
            return reject('Not found')
        }

    })
}