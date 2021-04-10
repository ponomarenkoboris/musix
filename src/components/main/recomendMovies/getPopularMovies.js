export function getPopularMovies() {
    return new Promise(async (resolve, reject) => {
        const requestConf = {
            method: 'GET',
            headers: {
                "x-rapidapi-key": "cbc4c7cd11msh0153074ae26a9f0p116743jsn190a99d33253",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        }
        try {
            const request = await fetch('https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fadventure', requestConf);
            const filmsList = await request.json();
            const films = await filmsList.slice(0, 20).map( async tconst => {
                const req = await fetch(`somelink/${tconst}`);
                return req
            })
            resolve(films)
        } catch (e) {
            reject(new Error({ message: 'IMDB api status 503' }, e))
        }
    })
}