import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


export const TextField = (props) => {
    const { text, onChangeText, placeholder } = props

    return (
        <View {...props} style={[styles.container, props.style]}>
            <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1
    },
    textInput: {
        padding: 6,
    }
})