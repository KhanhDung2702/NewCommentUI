import { createNavigator } from '@react-navigation/native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import NewComment from './NewComment'

//yarn add @react-navigation/stack
//yarn add @react-navigation/native
//yarn add react-native-gesture-handler
//yarn add valid-url

const Stack = createNavigator()

const screenOptions = {
    headerShown: false
}

const Navigation = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'
                         screenOptions = {screenOptions}>
            <Stack.Screen name = 'Home' component={Home}/>
            <Stack.Screen name = 'NewComment' component={NewComment}/>
        </Stack.Navigator>
    </NavigationContainer>
    
}

export default Navigation