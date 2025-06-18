import { StyleSheet,Pressable ,Text, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useState } from 'react'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import {useUser} from '../../hooks/useUser'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
const Login = () => {
  
 
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [error,setError] =useState(null);
  const {user,login} = useUser()
   const handleSubmit = async ()=>{
    setError(null)
    try {
      await login(email,password)
      console.log("current user is:",user)
    } catch (error) {
      setError(error.message)
    }
    console.log('login form submitted',email,password)
    console.log('current user:',user)
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
        <Spacer/>        

        <ThemedText title={true} style={styles.title}>Login To Your Account</ThemedText>
        <ThemedTextInput 
        style={{width:'80%',marginBottom:20}}
        placeholder='Email'
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        />

        {/* password input */}
            <ThemedTextInput 
        style={{width:'80%',marginBottom:20}}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        />
        
        <ThemedButton 
        onPress={handleSubmit}
        >
          <Text style={{color:'#f2f2f2'}}> Login</Text>
        </ThemedButton>
        <Spacer/>
        {error&& <Text style={styles.error}>{error}</Text>}
        <Spacer height={100}/>
        <Link href="/register" >
        <ThemedText style={{textAlign:'center'}}>
            Register Instead
        </ThemedText>
        </Link>
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'

    },
    title:{
        textAlign:'center',
        fontSize:18,
        marginBottom:30
    },
    error:{
      color:Colors.warning,
      padding:10,
      backgroundColor:'#f5c1c8',
      borderColor:Colors.warning,
      borderWidth:1,
      borderRadius:6,
      marginHorizontal:10,
    }
})