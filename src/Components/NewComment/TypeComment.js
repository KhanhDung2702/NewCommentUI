import { View, StyleSheet, Image, ScrollView, Text, TextInput  } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native';
const TypeComment = () => {
  return (
    <View >
        <View style = {styles.container}>
            <View>
                <Image
                    source={{
                        uri: 'https://img5.thuthuatphanmem.vn/uploads/2021/12/14/tong-hop-meme-gau-truc-weibo-hai-huoc-doc-ba-dao_032047606.jpg'
                    }}
                    style = {styles.avatar}
                />
            </View>
            <View>
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <TextInput style = {styles.textInput}
                        placeholder="Type something here..."
                        multiline={true}
                        keyboardType="default">
                    </TextInput>
                </ScrollView>
            </View>
        </View>
    </View>
    
  )
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: (SCREEN_HEIGHT *0.7),
        width: SCREEN_WIDTH,
        //backgroundColor: 'black'
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius:50 
    }, 
    textInput:{
        //backgroundColor:'black',
        marginLeft:20,
        color: '#0f1419',
        fontSize: 18,
        paddingTop: 7,
        textAlign: 'left',
        textAlignVertical: 'top',
        width: SCREEN_WIDTH - 70,
    }

    
})

export default TypeComment