import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBResponse } from "../interfaces/movieInterface"

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upComing: Movie[]
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: []
    })

    const getMovies = async () => {
        const nowPlaying = movieDB.get<MovieDBResponse>('/now_playing')
        const popular = movieDB.get<MovieDBResponse>('/popular')
        const topRated = movieDB.get<MovieDBResponse>('/top_rated')
        const upComing = movieDB.get<MovieDBResponse>('/upcoming')

        const resp = await Promise.all([
            nowPlaying, 
            popular, 
            topRated, 
            upComing
        ])
        
        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upComing: resp[3].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
