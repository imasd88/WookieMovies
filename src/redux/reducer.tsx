import { MovieData } from "../types"
import { SetErrorAction, SetLoadingAction, UpdateMovieListAction } from "./actions"

export interface MovieReducerState {
    movies: MovieData[];
    loading: boolean;
    error: any
}

const initialState: MovieReducerState = {
    movies: [],
    loading: false,
    error: undefined
}

export default (state: MovieReducerState = initialState, action) => {
    switch(action.type) {
        case UpdateMovieListAction:
            return { ...state, movies: action.payload, loading: false }
        case SetLoadingAction:
            return { ...state, loading: action.payload }
        case SetErrorAction:
            return { ...state, error: action.payload, loading: false }
    }
}