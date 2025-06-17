import { StyleSheet, Text, View, Image} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import Logo from '../assets/testFood.jpg';

//themed   component 
import ThemedView from '../components/ThemedView';
const Home = () => {
  return (
    <ThemedView style={styles.container}>
       <Image source={Logo} style={styles.img}/>
      <Text style={styles.title}>Heading Number 1</Text>
      <Text style={{marginTop:20,marginBottom:25}}>Reading List Elements</Text>
      <Link style={styles.link} href='/about'>About Page</Link>
      <Link  style={styles.link} href='/contact'>Contact Page</Link>
    
    </ThemedView>
  )
}

export default Home

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
    img:{
        height:144,
        width:144,
        borderRadius:5,
        marginVertical:10
    },
    link:{
        borderBottomWidth:1, 
        marginVertical:10

    }
})