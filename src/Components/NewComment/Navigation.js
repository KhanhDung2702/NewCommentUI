import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../Screen/Home'
import NewComment from '../../Screen/NewComment'


//yarn add @react-navigation/stack
//yarn add @react-navigation/native
//yarn add react-native-gesture-handler
//yarn add valid-url

const Stack = createStackNavigator()
const screenOptions = {
    headerShown: false
}

const SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name ='Home' component={Home} />
            <Stack.Screen name ='NewComment' component={NewComment} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack