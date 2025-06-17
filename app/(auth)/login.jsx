import { StyleSheet,Pressable ,Text} from 'react-native'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
const Login = () => {
  
  const handleSubmit =()=>{
    console.log('login form submitted')
  }




  return (
    <ThemedView style={styles.container}>
    <Spacer/>        

    <ThemedText title={true} style={styles.title}>Login To Your Account</ThemedText>
    <ThemedButton 
    onPress={handleSubmit}
    >
      <Text style={{color:'#f2f2f2'}}> Login</Text>
    </ThemedButton>
    <Spacer height={100}/>
    <Link href="/register" >
    <ThemedText style={{textAlign:'center'}}>
        Register Instead
    </ThemedText>
    </Link>
    </ThemedView>
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
    }
})