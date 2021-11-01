import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Styles } from '../constants'
import { MovieData } from '../types'
import { MovieThumbnail } from './MovieThumbnail'

interface MovieGenreListProps {
    name: string;
    movies: MovieData[];
    onSelectMovie: (MovieData: MovieData) => void;
}

/**
 * This component consists of a title, with a horizontally scrolling list of movie items shown below it.
 * @param name The name of the genre. This will be shown as a title above the list
 * @param movies The list of movies to display as thumbnails
 * @param onSelectMovie A callback that will be triggered when the user selects a movie. It will be passed the selected movie object
 */

export const MovieGenreList = ({ name, movies, onSelectMovie }: MovieGenreListProps) => {
    return (
        <View>
            <Text style={[Styles.RegularTitle, { paddingLeft: 12}]}>{name}</Text>
            <FlatList
                horizontal
                data={movies}
                renderItem={({item}) => {
                    return <MovieThumbnail key={item.id} movie={item} onSelectMovie={onSelectMovie} />
                }}
                keyExtractor={(movie: MovieData) => movie.id}
            />
        </View>
    )
}