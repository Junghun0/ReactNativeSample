/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './view/HomeScreen';
import SearchScreen from './view/SearchScreen';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab>
                <Tab.Screen name = "Home" component = {HomeScreen}/>
                <Tab.Screen name = "Search" component = {SearchScreen}/>
            </Tab>
        </NavigationContainer>
    )
}

export default App;
