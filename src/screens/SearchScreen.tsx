import React, { useState } from 'react'
import { SafeAreaView, View, KeyboardAvoidingView, Pressable, Text, FlatList } from 'react-native'
import { FullscreenError, LoadingIndicator, StarRatingView, TextField } from '../components'
import { Styles } from '../constants'
import { getReleaseYear } from '../helpers'
import { useSearchedMovies } from '../hooks/movies'
import { showDetails } from '../navigation/Actions'
import { MovieData } from '../types'

interface SearchResultProps {
    movie: MovieData
    onSelect: (MovieData: MovieData) => void;
}

const SearchResult = ({ movie, onSelect }: SearchResultProps) => {
    return (
        <Pressable style={{ paddingHorizontal: 12, paddingVertical: 6 }} onPress={() => onSelect(movie)} >
            <Text style={Styles.RegularTitle}>{movie.title}</Text>
            <Text style={[Styles.Subtext, { paddingBottom: 4 }]}>{`${getReleaseYear(movie.released_on)} | ${movie.genres.join(', ')}`}</Text>
            <StarRatingView amount={movie.imdb_rating} size={15} />
        </Pressable>
    )
}

export const SearchScreen = ({ navigation }) => {
    const [searchString, setSearchString] = useState("")
    const { loading, error, movies, setError, setMovies } = useSearchedMovies(searchString)

    if (error) { return <FullscreenError error={error} onRetry={() => setError(undefined)} /> }

    let sortedMovies = movies.sort((first, second) => first.imdb_rating > second.imdb_rating ? -1 : 1)

    let mainComponent: JSX.Element
    if (loading) {
        mainComponent = <LoadingIndicator />
    } else if ((sortedMovies.length === 0) && (searchString.length >= 4)) {
        mainComponent = (
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={[Styles.RegularTitle, { marginHorizontal: 30 }]}>No results were returned for your search.</Text>
            </View>
        )
    } else {
        mainComponent = (
            <FlatList
                data={sortedMovies}
                renderItem={(item) => <SearchResult movie={item.item} onSelect={(movie) => showDetails(navigation, movie)} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        )
    }

    return (
        <SafeAreaView >
            <KeyboardAvoidingView behavior='padding'>
                <TextField
                    text={searchString}
                    onChangeText={(newText: string) => {
                        setSearchString(newText)
                        setMovies([])
                    }}
                    style={{ margin: 12 }}
                    placeholder={"Enter a keyword... (4+ characters)"}
                />
                {mainComponent}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
