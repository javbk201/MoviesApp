import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '168cd2a19f3ffa0e7f1df3bde7f76cd1',
        language: 'es-CO'

    }
});

export default movieDB;