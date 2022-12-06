class DataSource{
    static searchMovie(keyword){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=6aca553ee5d5656e1b71d4aa749586e5&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.results){
                console.log(responseJson.results);
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        });
    }
}

export default DataSource;