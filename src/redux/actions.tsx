import { MovieData, MovieListResponse } from "../types"

export const UpdateMovieListAction = 'UpdateMovies'
export const SetLoadingAction = 'SetLoading'
export const SetErrorAction = 'SetError'

/**
 * This action signals a new list of movies available to Redux, updating that and setting loading to false.
 * @param movies The list of movies to overwrite the current list, if any
 */
export const UpdateMovieList = (movies: MovieData[]) => {
    return {
        type: UpdateMovieListAction,
        payload: movies
    }
}

/**
 * This action signals an update in the loading state. Note that loading is automatically set back to false by
 * either an error or new movie list being set, so this should not be called with false in the ordinary course of events.
 * @param isLoading The new value for the loading state. Should usually be true
 */
export const SetLoading = (isLoading: boolean) => {
    return {
        type: SetLoadingAction,
        payload: isLoading
    }
}

/**
 * This action signals an error in requesting the movie list, and saves that error into Redux, setting loading back to false.
 * @param error The error object to save.
 */
export const SetError = (error: any) => {
    return {
        type: SetErrorAction,
        payload: error
    }
}

/**
 * This method places a call to the API for the movies, and dispatches the response to Redux. It also automatically updates
 * the loading and error states as appropriate.
 */
export const requestMovies = () => {
    return (dispatch) => {
        dispatch(SetLoading(true))
        fetch('https://wookie.codesubmit.io/movies', { 
            method: 'GET',
            headers: { 'Authorization': 'Bearer Wookie2019' }
        })
            .then((response) => response.json())
            .then((data: MovieListResponse) => {
                dispatch(UpdateMovieList(data.movies))
            }).catch((error) => {
                dispatch(SetError(error))
            })
    }
}

/**
 * This simple method resets the error value. This should be called when retrying an API call.
 */
export const clearError = () => {
    return (dispatch) => {
        dispatch(SetError(undefined))
    }
}