import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native';

/**
 * This component, intended for use with screens, displays a central text error message, with a red Retry button beneath.
 * @param error The error that caused the prompt to be displayed. This will be string-converted and shown to the user
 * @param onRetry The callback that will be triggered when the user taps on the Retry button
 */
export const FullscreenError = ({ error, onRetry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{`There was an error fetching the information (${error}). Tap below to try again.`}</Text>
            <Pressable style={styles.retryButton} onPress={onRetry}>
                <Text style={styles.retryText}>Retry</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
    },
    message: {
        marginHorizontal: 40, 
        textAlign: 'center'
    },
    retryButton: {
        borderRadius: 10, 
        marginVertical: 12, 
        backgroundColor: 'red'
    },
    retryText: {
        fontSize: 26, 
        paddingHorizontal: 12, 
        paddingVertical: 6, 
        color: 'white'
    }
})