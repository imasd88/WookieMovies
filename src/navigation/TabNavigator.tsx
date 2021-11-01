import React from 'react'
import Image from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScreenNames, HomeIcon, SearchIcon } from '../constants'
import { HomeStack } from './HomeStack'
import { SearchStack } from './SearchStack'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={ScreenNames.HomeStack}
                component={HomeStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: HomeIcon,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={ScreenNames.SearchStack}
                component={SearchStack}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: SearchIcon,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}