import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
        <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title ={true}>Contact</ThemedText>
      <Link style={styles.button} href='/'>
      
      <ThemedText> Back Home</ThemedText> </Link>
    </ThemedView>
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