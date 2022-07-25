const key = process.env.REACT_APP_API_KEY;


export const requests = {
    discover: {
        movie: `/discover/movie?api_key=${key}&page=1`,
        tv: `/discover/tv?api_key=${key}&page=1`
    },
    movies: {
        latest: `/movie/latest?api_key=${key}`,
        popular: `/movie/popular?api_key=${key}`,
        topRated: `/movie/top_rated?api_key=${key}`
    },
    tv: {
        latest: `/tv/latest?api_key=${key}`,
        popular: `/tv/popular?api_key=${key}`,
        topRated: `/tv/top_rated?api_key=${key}`,
        ongoing: `/tv/on_the_air?api_key=${key}`
    },
    getImage(path) {
        return `https://image.tmdb.org/t/p/original/${path}`
    },
    random() {
        const requestsList = [this.discover, this.movies, this.tv];
        let index = Math.floor(Math.random() * requestsList.length);
        const endpoints = [];

        for (const key in requestsList[index]) {
            endpoints.push(requestsList[index][`${key}`]);
        };

        return endpoints[Math.floor(Math.random() * endpoints.length)];
    }
}