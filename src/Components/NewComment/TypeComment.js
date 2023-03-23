import { View, StyleSheet, Image, ScrollView, Text, TextInput, Dimensions  } from 'react-native'
import React from 'react'
const TypeComment = () => {
  return (
   
    <View style = {styles.container}>
        <Image style = {styles.avatar}
            source={{uri: 'https://img5.thuthuatphanmem.vn/uploads/2021/12/14/tong-hop-meme-gau-truc-weibo-hai-huoc-doc-ba-dao_032047606.jpg'}}/>
        <View >
            <ScrollView keyboardShouldPersistTaps='handled'>
                <TextInput style = {styles.textInput}
                    placeholder="Type something here..."
                    multiline={true}
                    keyboardType="default">
                </TextInput>
            </ScrollView>
        </View>
    </View>
    
  )
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: SCREEN_HEIGHT * 0.72,
        width: SCREEN_WIDTH,
        paddingTop: 20,
        //backgroundColor: 'green',

    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius:50 ,
        //backgroundColor: 'yellow'
    }, 
    textInput:{
        width: SCREEN_WIDTH - 50,
        //backgroundColor:'pink',
        paddingLeft: 20,
        color: '#0f1419',
        fontSize: 18,
        paddingTop: 7,
        textAlign: 'left',
        textAlignVertical: 'top',
    }

})

export default TypeComment