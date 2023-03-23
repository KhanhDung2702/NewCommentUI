import { View, Text, Dimensions, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';

const cameraTakingHandle = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });


  if (!result.canceled) {
    setMediaContent(result.uri);
  }
};

const mediaChoosingHandle = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 1,
  });

  if (!result.canceled) {
    setMediaContent(result.uri);
  }
};

const Media = () => {
  return (
    <View style= {styles.container}>
        <TouchableOpacity style={styles.choiceButton}
          onPress={() => cameraTakingHandle()}>
            <View style = {styles.buttonContainer}>
              <Image
                style = {styles.mediaButton}
                  source={{
                    uri: 'https://www.citypng.com/public/uploads/preview/camera-blue-icon-transparent-background-11639593096qwajqmhr3m.png'
                  }}
                  />
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.choiceButton}
          onPress={() => mediaChoosingHandle()}>
            <View style = {styles.buttonContainer}>
              <Image
                style = {styles.mediaButton}
                  source={{
                    uri: 'https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/23-512.png'
                    }}
                  />
            </View>
        </TouchableOpacity>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 80,
        //backgroundColor: 'black',
        alignItems:'center',
        flexDirection: 'row',
        
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        height: 60,
        width: 65,
        borderWidth: 1,
        borderColor:'grey',
        borderRadius: 15
    },
    mediaButton:{
        height: 30,
        width: 30,
        
    }
})
export default Media