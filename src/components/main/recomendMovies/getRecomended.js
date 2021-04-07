export function getRecomended() {
    return new Promise((resolve, reject) => {
        fetch("https://imdb8.p.rapidapi.com/title/get-ratings?tconst=tt0944947", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "cbc4c7cd11msh0153074ae26a9f0p116743jsn190a99d33253",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
            .then(response => {
                if (response.ok) return response.json()
            })
            .then(list => {
                console.log(list)
                resolve(list)
            })
            .catch(err => {
                console.error(err);
            });
    })
}