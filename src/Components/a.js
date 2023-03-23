import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';



const BottomTabs = () => {
    const navigation = useNavigation();
  return (
    
    <View style ={styles.container}>
      <Divider width={1} orientation='vertical'/>
      <View style ={styles.tabContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={{uri: 'https://img.icons8.com/windows/32/null/home-page.png'}}
                  style= {styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={{uri: 'https://img.icons8.com/ios/50/null/search--v1.png'}}
                  style= {styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={{uri: 'https://img.icons8.com/ios/50/null/appointment-reminders--v1.png'}}
                  style= {styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={{uri: 'https://img.icons8.com/ios/50/null/settings--v1.png'}}
                  style= {styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    height: 45
  },

  tabContainer:{
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal: 30,
  },  
  icon:{
    width: 30,
    height: 30,
  },
  wrapper:{
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999
  }
})

export default BottomTabs
