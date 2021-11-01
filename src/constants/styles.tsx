import { StyleSheet } from 'react-native'
import { Colors } from './colors'

export const Styles = StyleSheet.create({
    Header: {
        fontSize: 40,
        textAlign: 'center',
        margin: 16,
    },
    RegularTitle: {
        fontSize: 22,
    },
    SmallTitle: {
        fontSize: 15,
    },
    BodyText: {
        fontSize: 18,
    },
    SmallBody: {
        fontSize: 17,
    },
    Subtext: {
        fontSize: 13,
        color: Colors.FadedText
    }
})