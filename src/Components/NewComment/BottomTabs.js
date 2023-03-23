import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/windows/32/228BE6/home-page.png',
        inactive: 'https://img.icons8.com/windows/32/null/home-page.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios/50/228BE6/search--v1.png',
        inactive: 'https://img.icons8.com/ios/50/null/search--v1.png'
    },
    {
        name: 'Bell',
        active: 'https://img.icons8.com/ios/50/228BE6/appointment-reminders--v1.png',
        inactive: 'https://img.icons8.com/ios/50/null/appointment-reminders--v1.png'
    },
    {
        name: 'Setting',
        active: 'https://img.icons8.com/ios/50/228BE6/settings--v1.png',
        inactive: 'https://img.icons8.com/ios/50/null/settings--v1.png'
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('NewComment')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={ () => setActiveTab(icon.name)}>
            <Image source={{uri: activeTab == icon.name ? icon.active : icon.inactive }} 
                  style= {styles.icon} />
        </TouchableOpacity>
    )
  return (
    
    <View>
      <Divider width={1} orientation='vertical'/>
      <View style ={styles.tabContainer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon}/>
      ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

  tabContainer:{
    marginTop: 10,
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