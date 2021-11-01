import React, { FC } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import { Styles } from '../constants/'
import { createGenreList } from '../helpers'
import { MovieGenreList } from '../components'
import { MovieListResponse } from '../types'
import { useDispatch } from 'react-redux'
import { useLocalMovies } from '../hooks/movies'
import { testData } from '../testData'


export const HomeScreen = () => {
    const dispatch = useDispatch()
    const { loading, error, movies } = useLocalMovies()

    // let genreList = createGenreList(movies)

    let genreList = testData.movies

    return (<SafeAreaView>
        <ScrollView>
            <Text style={Styles.Header}>WOOKIE{'\n'}MOVIES</Text>
            {genreList.map((genre) =>
                <MovieGenreList
                    name={genre.overview}
                    key={genre.overview}
                    movies={genreList}
                    onSelectMovie={()=>{}}
                />
            )}
        </ScrollView>
    </SafeAreaView>
    )
}