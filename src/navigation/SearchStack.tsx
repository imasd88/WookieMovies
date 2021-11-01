import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenNames } from '../constants/ScreenNames'
import { SearchScreen, DetailScreen } from '../screens'

const Stack = createStackNavigator()

export const SearchStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen
            name={ScreenNames.SearchScreen}
            component={SearchScreen}
            options={{ headerShown: false }} />
        <Stack.Screen
            name={ScreenNames.DetailScreen}
            component={DetailScreen}
            options={{
                headerShown: true,
                headerTitle: "",
                headerBackTitle: 'Back'
            }}
        />
    </Stack.Navigator>)
}