import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface"

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesNow, setMoviesNow] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        const movies = resp.data.results
        setMoviesNow(movies)
        setIsLoading(false)
    }

    useEffect(() => {
        // now_playing
        getMovies()
    }, [])

    return {
        moviesNow,
        isLoading
    }
}
