import moment from "moment";
import { GenreCategory, MovieData } from "./types";

/**
 * This method takes in an array of movies, and outputs an array of genres containing all the movies that include that genre.
 * @param movies The list of movies to process
 * @returns An array of objects containing a genre name and an array of movies that include that genre
 */
export const createGenreList = (movies: MovieData[]): GenreCategory[] => {
    var genres: string[] = []
    movies.forEach((movie) => genres.push(...movie.genres))
    genres = [... new Set(genres)].sort() // force all entries to be unique, and sort alphabetically

    var result: GenreCategory[] = []

    genres.forEach((genre) => {
        const includedMovies = movies.filter((movie) => movie.genres.includes(genre))
        if(includedMovies.length > 0) {
            result.push({
                name: genre,
                movies: includedMovies
            })
        }
    })

    return result
}

/**
 * This method takes in an ISO8601 formatted string, and outputs the year represented by that string
 * @param releaseDate An ISO8601 string
 * @returns The year represented by that string
 */
export const getReleaseYear = (releaseDate: string) => {
    return `${moment(releaseDate).year()}`
}