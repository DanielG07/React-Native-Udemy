import axios from "axios"

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '5794a04a564d3997c116db6a4a1f30e9',
        language: 'es-ES'
    }
})

export default movieDB