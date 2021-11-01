import React from 'react'
import { View, Image } from 'react-native'
import { Colors } from '../constants'

export interface StarRatingViewProps {
    amount: number,
    size?: number
}

// Note - typically, these assets would have @2x and @3x asset files as well. However, in the interests of time saving, this has been passed over
// for the purposes of this exercise. Image attribution: example images from the react-native-stars library by Austin Montgomery
const starEmpty = require('../assets/starEmpty.png')
const starHalf = require('../assets/starHalf.png')
const starFilled = require('../assets/starFilled.png')

// This method returns a set of 5 asset images for the given rating, which can then be rendered
const getStarAssets = (amount) => {
    var assets = []
    for(let i = 0; i < 5; i++) {
        const showEmptyStar = amount < ((i * 2) + 0.5)
        const showHalfStar = amount < ((i * 2) + 1.5)
        assets.push(showEmptyStar ? starEmpty : showHalfStar ? starHalf : starFilled)
    }
    return assets
}

/**
 * This component takes in a rating, out of 10, and displays a 5-star view.
 * @param amount The rating to show, out of 10.
 * @returns A JSX component that displays 5 stars either empty or filled.
 */
export const StarRatingView = (props: StarRatingViewProps) => {
    const { amount, size=25 } = props
    const starAssets = getStarAssets(amount)

    return (
        <View style={{ flexDirection: 'row' }}>
            {starAssets.map((asset, index) => <Image source={asset} key={index} style={{width: size, height: size, marginHorizontal: 1, tintColor: Colors.StarRatingTint}} />)}
        </View>
    )
}