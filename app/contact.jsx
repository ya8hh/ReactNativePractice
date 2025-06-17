import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page </Text>
      <Link style={styles.button} href='/'>Home </Link>
    </View>
  )
}

export default Contact

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
        fontStyle:"10",
        borderBottomWidth:1,

    },
   
})