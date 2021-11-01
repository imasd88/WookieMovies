import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../constants'

/**
 * This simple component, intended to display a classification rating, is simply a circular text object that alters it's color depending
 * upon the supplied classification. Longer-term this could be adapted to show an Australian Classification rating icon.
 */
export const ClassificationView = ({rating}) => {
    let backgroundColor: string
    switch(rating) {
        case '7+': backgroundColor = Colors.ClassificationG; break;
        case '13+': backgroundColor = Colors.ClassificationM; break;
        default: backgroundColor = Colors.ClassificationDefault; break;
    }

    return (
    <View style={{ width: 40, height: 40, backgroundColor, justifyContent: 'center', borderRadius: 20, marginTop: 6, marginLeft: 6 }}>
        <Text style={{color: 'white', borderRadius: 20, textAlign: 'center' }}>{rating}</Text>
    </View>
    )
}