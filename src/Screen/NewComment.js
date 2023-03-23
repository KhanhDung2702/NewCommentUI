import { SafeAreaView} from 'react-native'
import React from 'react'

import Media from '../Components/NewComment/Media'
import TypeComment from '../Components/NewComment/TypeComment'
import BottomTabs, { bottomTabIcons } from '../Components/NewComment/BottomTabs'
import Header from '../Components/NewComment/Header'

//yarn add react-native-elements
//npx expo install expo-image-picker


const NewComment = ( {navigation} ) => {
  return (
    <SafeAreaView>
        <Header navigaton={navigation}/>
        <TypeComment/>
        <Media/>
        <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
    
  )
}
export default NewComment