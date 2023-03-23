import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'


const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
        <Button title='Go to New Comment' onPress={() => navigation.navigate('NewComment')}></Button>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
})
export default Home
