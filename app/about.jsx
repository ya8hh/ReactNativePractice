import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning React Native</Text>
      <Link style={styles.button} href='/'>Home </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontWeight:"bold",
        fontSize:"18"
    },
    button:{
        marginVertical:20,
        fontWeight:"bold",
        fontStyle:"10"

    },
    link:{
        borderBottomWidth:1,
        marginVertical:10

    }
})