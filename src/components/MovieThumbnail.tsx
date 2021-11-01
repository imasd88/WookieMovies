import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import { Styles } from '../constants'
import { getReleaseYear } from '../helpers'
import { MovieData } from '../types'

export const MoviePosterAspectRatio = 342/513

interface MovieThumbnailProps {
    movie: MovieData;
    onSelectMovie: (MovieData: MovieData) => void;
}

/**
 * This component renders a preview item of a single movie, with the poster shown and the title and year underneath it
 * @param movie The movie object to show as a thumbnail. The poster, title, and year will be shown
 * @param onSelectMovie This callback will be triggered when a movie is tapped on, passed the selected movie
 */
export const MovieThumbnail = ({ movie, onSelectMovie }) => {
    return (
        <Pressable onPress={() => { onSelectMovie(movie) }}>
        <View style={{width: 120, margin: 12}}>
            <Image source={{uri: movie.poster}} style={{ aspectRatio: MoviePosterAspectRatio }} />
            <Text style={Styles.SmallTitle}>{movie.title}</Text>
            <Text style={Styles.Subtext}>{getReleaseYear(movie.released_on)}</Text>
        </View>
        </Pressable>
    )
}