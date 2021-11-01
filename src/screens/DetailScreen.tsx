import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native'
import { MoviePosterAspectRatio, StarRatingView, ClassificationView } from '../components'
import { Colors, Styles } from '../constants'
import { getReleaseYear } from '../helpers'
import { MovieData } from '../types'

export const DetailScreen = ({ route }) => {

    const movie: MovieData = route.params.movie
    const directorString = Array.isArray(movie.director) ? movie.director.join(', ') : movie.director

    return (<ScrollView>
        <View style={{ height: 310 }}>
            <Image source={{ uri: movie.backdrop }} style={styles.backdrop} />
            <Image source={{ uri: movie.poster }} style={styles.poster} />
            <Text style={styles.title}>{`${movie.title} (${movie.imdb_rating.toFixed(1)})`}</Text>
            <View style={styles.starAndClassificationContainer}>
                <StarRatingView amount={movie.imdb_rating} />
                <ClassificationView rating={movie.classification} />
            </View>
        </View>
        <Text style={styles.body}>{`${getReleaseYear(movie.released_on)} | ${movie.length} | ${directorString}`}</Text>
        <Text style={styles.body}>{`Cast: ${movie.cast.join(', ')}`}</Text>
        <Text style={styles.subBody}>{`Description: ${movie.overview}`}</Text>
    </ScrollView >)
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        aspectRatio: 1920 / 1080
    },
    poster: {
        aspectRatio: MoviePosterAspectRatio,
        width: 125,
        position: 'absolute',
        left: 32,
        bottom: 0,
        borderColor: 'white',
        borderWidth: 3
    },
    title: {
        ...Styles.RegularTitle,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 100,
        left: 170,
        right: 12,
        color: 'white',
        // backgroundColor: Colors.MovieTitleBackgroundShadow
    },
    starAndClassificationContainer: {
        position: 'absolute',
        bottom: 10,
        left: 170,
    },
    body: {
        ...Styles.BodyText,
        marginHorizontal: 16,
        marginVertical: 8
    },
    subBody: {
        ...Styles.SmallBody,
        marginHorizontal: 16,
        marginVertical: 8
    }
})