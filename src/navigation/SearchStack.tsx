import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenNames } from '../constants/ScreenNames'
import { SearchScreen } from '../screens/SearchScreen'

const Stack = createStackNavigator()

export const SearchStack = ()=>{
    return (<Stack.Navigator>
        <Stack.Screen
        name= {ScreenNames.SearchScreen}
        component={SearchScreen}
        options={{headerShown: false}}/>
    </Stack.Navigator>)
}