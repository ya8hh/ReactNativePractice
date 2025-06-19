import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'

import {  Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
import UserOnly from '../../components/auth/UserOnly'

const DashBoardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]??Colors.light
  return (
  <UserOnly>
  <Tabs 
  screenOptions={{headerShown:false, tabBarStyle:{
    backgroundColor:theme.navBackground,
    paddingTop:10,
    height:90
  }, tabBarActiveTintColor:theme.iconColourFocused,
  tabBarInactiveTintColor:theme.iconColour
}}
    >

          <Tabs.Screen name='Create' options={{title:'Create',tabBarIcon:({focused})=>(
            <Ionicons
            size={24}
            name={focused?'create':'create-outline'}
            color={focused?theme.iconColourFocused:theme.iconColour}
            />
        )}}/>
          <Tabs.Screen name='Books' options={{title:'Books',tabBarIcon:({focused})=>(
            <Ionicons
            size={24}
            name={focused?'book':'book-outline'}
            color={focused?theme.iconColourFocused:theme.iconColour}
            />
        )}}/>
      
        <Tabs.Screen name='profile' options={{title:'Profile',tabBarIcon:({focused})=>(
            <Ionicons
            size={24}
            name={focused?'person':'person-outline'}
            color={focused?theme.iconColourFocused:theme.iconColour}
            />
        )}}/>
    </Tabs>
    </UserOnly>
  )
}

export default DashBoardLayout

const styles = StyleSheet.create({})