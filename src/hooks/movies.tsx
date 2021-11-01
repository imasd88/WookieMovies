import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestMovies } from '../redux/actions'
import { MovieReducerState } from "../redux/reducer"
import { MovieData, MovieListResponse } from '../types'

/**
 * This hook will, if necessary, make a call to the API to fetch the list of movies. If the movies have already
 * been fetched, it will instead return the result from Redux. A loading and error state are also available.
 * @returns An object containing a loading boolean, an optional error value, and a list of movies
 */
export const useLocalMovies = () => {
    const dispatch = useDispatch()
    
    // State initially returns undefined - Redux is not correctly preloading state
    const state = useSelector((state: MovieReducerState) => state) 
    const loading = state?.loading
    const error = state?.error
    const movies = state?.movies

    useEffect(() => {
        if((error === undefined) && (movies === undefined || movies?.length == 0)) {
            dispatch(requestMovies())
        }
    }, [error === undefined])

    return { loading, error, movies }
}

/**
 * This hook will, if necessary, make a call to the API to search the available movies for given keywords. It will make a
 * new call if the error state, movie list, or search string have changed. If the search string is less than 4 characters,
 * it will not make a request (as the API does not return data in those cases). This method is state-based and does not tie
 * into Redux.
 * @param searchString The string to pass a search query to the API
 * @returns A set of state-based variables for handling loading, errors, and the returned data
 */
export const useSearchedMovies = (searchString: string) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>()
    const [movies, setMovies] = useState<MovieData[]>([])

    const baseUrl = "https://wookie.codesubmit.io/movies"

    useEffect(() => {
        if(movies.length > 0) { return } // no need to refresh if data is already present
        if(searchString.length < 4) { // search strings less than 4 characters do not return data
            setMovies([])
            return
        }
        setLoading(true)
        const url = searchString.length > 0 ? `${baseUrl}?q=${searchString}` : baseUrl
        fetch(url, { 
            method: 'GET',
            headers: { 'Authorization': 'Bearer Wookie2019' }
        })
        .then((response) => response.json())
        .then((data: MovieListResponse) => {
            setMovies(data.movies)
        }).catch((error) => {
            setError(error)
        }).finally(() => setLoading(false))
    }, [movies.length === 0, searchString, error === undefined])
    

    return { loading, setLoading, error, setError, movies, setMovies }
}