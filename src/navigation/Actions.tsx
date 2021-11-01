import { ScreenNames } from "../constants"
import { MovieData } from "../types"

/**
 * This method show the Details Screen, if it is available in the current stack.
 * @param navigation The redux-navigation object provided to a screen
 * @param movie The movie to show the details for
 */
export const showDetails = (navigation: any, movie: MovieData) => {
    // navigation.navigate(ScreenNames.DetailScreen, { movie })
}