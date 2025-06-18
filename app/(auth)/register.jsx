import { Keyboard, StyleSheet ,Text, TouchableWithoutFeedback} from 'react-native'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/Colors'
const Register = () => {
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
   const [error,setError] =useState(null);
  const {user,register} = useUser()
  const handleSubmit = async ()=>{
    setError(null)
    try {
      await register(email,password)
      console.log("current user is:",user)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
        <Spacer/>        

        <ThemedText title={true} style={styles.title}>Register For An Account</ThemedText>
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
          <Text style={{color:'#f2f2f2'}}> Register</Text>
        </ThemedButton>
        <Spacer/>
        {error&& <Text style={styles.error}>{error}</Text>}
        <Spacer height={100}/>
        <Link href="/login" >
        <ThemedText style={{textAlign:'center'}}>
            Login Instead
        </ThemedText>
        </Link>
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

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