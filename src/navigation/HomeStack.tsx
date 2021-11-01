import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenNames } from '../constants/ScreenNames'
import { HomeScreen, DetailScreen } from '../screens'


const Stack = createStackNavigator()

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ScreenNames.HomeScreen}
                component={HomeScreen}
                options={
                    { headerShown: false }
                }
            />
               <Stack.Screen
                name={ScreenNames.DetailScreen}
                component={DetailScreen}
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerBackTitle: 'Back'
                }}
            />
        </Stack.Navigator>
    )
}