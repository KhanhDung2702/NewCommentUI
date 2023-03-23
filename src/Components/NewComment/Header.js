import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'

const Header = ({navigaton}) => {
  return (
    <View style = {styles.headerContainer} >
      <View>
        <TouchableOpacity onPress={() => navigaton.goBack()}>
          <Image style= {styles.headerIcon}
            source = {{
                uri: 'http://cdn.onlinewebfonts.com/svg/img_255487.png'
            }}
          />
        </TouchableOpacity>
      </View>
  
      <View style = {styles.headerButton}>
        <TouchableOpacity>
           <Text style= {styles.headerText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 20,
        //backgroundColor:'blue'
    },
    headerText: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'white'
    },
    headerButton:{
        width: 100, 
        height: 35,
        borderRadius: 50, 
        backgroundColor: '#2596be',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIcon:{
        width: 20,
        height: 20,
        marginLeft: 10,
        resizeMode: 'contain'
    }

})
export default Header