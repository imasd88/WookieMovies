import React from 'react'
import { Image } from 'react-native'

// Image attribution: Freepik at flaticon.com

export const HomeIcon = ({color, size}) => {
    return <Image style={{width: size, height: size, tintColor: color}} source={require('../assets/home.png')} />
}

export const SearchIcon = ({color, size}) => {
    return <Image style={{width: size, height: size, tintColor: color}} source={require('../assets/search.png')} />
}