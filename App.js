/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './view/HomeScreen';
import SearchScreen from './view/SearchScreen';
import {View, Text} from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <View>
            <Text>sdfijasdpoifjsadofsdjfdsaopfijsdapdsofijsfpasf</Text>
            <NavigationContainer>
                <Tab>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Search" component={SearchScreen}/>
                </Tab>
            </NavigationContainer>
        </View>
    )
}
