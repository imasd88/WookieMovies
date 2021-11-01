import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { ScreenNames, HomeIcon, SearchIcon } from '../constants'
import { HomeStack } from './HomeStack'
import { SearchStack } from './SearchStack'

const Tab = createMaterialBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"

            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name={ScreenNames.HomeStack}
                component={HomeStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused, color }) => {
                        return HomeIcon({ color: color, size: 25 })
                    }
                }}
            />
            <Tab.Screen
                name={ScreenNames.SearchStack}
                component={SearchStack}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ focused, color }) => { return SearchIcon({ color: color, size: 25 }) }
                }}
            />
        </Tab.Navigator>
    )
}