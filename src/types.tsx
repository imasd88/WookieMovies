/**
 * MovieData 
 */
export interface MovieData {
    backdrop: string;
    cast: string[];
    classification: string;
    director: string | string[];
    genres: string[];
    id: string;
    imdb_rating: number;
    length: string;
    overview: string;
    poster: string;
    released_on: string;
    slug: string;
    title: string;
}

/**
 * MoviewData response from endpoint
 */
 export interface MovieListResponse {
    movies: MovieData[]
}

/**
 * This is the type returned by the helper method `createGenreList()`
 */
export interface GenreCategory {
    name: string
    movies: MovieData[]
}