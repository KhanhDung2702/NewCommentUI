import { SafeAreaView, StyleSheet, StatusBar, View, Dimensions} from 'react-native'
import React from 'react'
import Media from '../Components/NewComment/Media'
import TypeComment from '../Components/NewComment/TypeComment'
import BottomTabs, { bottomTabIcons } from '../Components/NewComment/BottomTabs'
import Header from '../Components/NewComment/Header'

//yarn add react-native-elements
//npx expo install expo-image-picker

const NewComment = ( {navigation} ) => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style = {styles.container}>
        <Header navigaton={navigation}/>
        <TypeComment/>
        <Media/>
        <BottomTabs 
          navigaton={navigation}/>
      </View>
    </SafeAreaView>
    
  )
}
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container:{
    height: SCREEN_HEIGHT,
    with: SCREEN_WIDTH,
    //backgroundColor: 'pink',
   
  }
});

export default NewComment