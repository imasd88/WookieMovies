import React, { FC } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import { Styles } from '../constants/'
import { createGenreList } from '../helpers'
import { FullscreenError, LoadingIndicator, MovieGenreList } from '../components'
import { MovieListResponse } from '../types'
import { useDispatch } from 'react-redux'
import { useLocalMovies } from '../hooks/movies'
import { testData } from '../testData'
import { showDetails } from '../navigation/Actions'
import { clearError } from '../redux/actions'


export const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, error, movies } = useLocalMovies()

    if (loading || (loading === undefined)) { return <LoadingIndicator /> }
    if (error) { return <FullscreenError error={error} onRetry={() => dispatch(clearError())} /> }

    let genreList = createGenreList(movies)

    return (<SafeAreaView>
        <ScrollView>
            <Text style={Styles.Header}>WOOKIE{'\n'}MOVIES</Text>
            {genreList.map((genre) =>
                <MovieGenreList
                    name={genre.name}
                    key={genre.name}
                    movies={genre.movies}
                    onSelectMovie={(movie) => showDetails(navigation, movie)}
                />
            )}
        </ScrollView>
    </SafeAreaView>
    )
}