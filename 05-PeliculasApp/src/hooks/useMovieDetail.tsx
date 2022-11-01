import { useState, useEffect } from 'react';
import { MovieDetail, MovieCredits, CastElement } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';


interface MovieDetails {
    isLoading: boolean,
    movieDetail?: MovieDetail,
    cast: CastElement[]
}

export const useMovieDetail = ( movieId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieDetail: undefined,
        cast: []
    })

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieDetail>(`/${movieId}`)
        const movieCreditsPromise = movieDB.get<MovieCredits>(`/${movieId}/credits`)

        const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([movieDetailsPromise, movieCreditsPromise])

        setState({
            isLoading: false,
            movieDetail: movieDetailsResponse.data,
            cast: movieCreditsResponse.data.cast
        })
        
    }

    useEffect(() => {
        getMovieDetails()
    }, [])
    
    return {
        ...state
    }
}
