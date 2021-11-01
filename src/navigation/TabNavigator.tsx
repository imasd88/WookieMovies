import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from './HomeStack'
import { ScreenNames } from '../constants/ScreenNames'
import { SearchStack } from './SearchStack'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                component={HomeStack}
                name={ScreenNames.HomeStack}
                options={
                    {
                        tabBarLabel: "Home",
                        // tabBarIcon: HomeIcon,
                        headerShown: false,
                    }
                } />
                <Tab.Screen
                component={SearchStack}
                name={ScreenNames.SearchStack}
                options={
                    {
                        tabBarLabel: "Home",
                        // tabBarIcon: HomeIcon,
                        headerShown: false,
                    }
                } />
        </Tab.Navigator>
    )
}