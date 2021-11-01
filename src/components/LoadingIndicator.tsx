import React from 'react'
import { View, ActivityIndicator } from 'react-native'

/**
 * This simple component shows a centralised loading indicator, intended to be used on screens while waiting for data.
 */
export const LoadingIndicator = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size="large"/>
        </View>
    )
}
