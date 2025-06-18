import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/GuestOnly'

const AuthLayout = () => {
  const {user} = useUser()
  console.log(user)
  return (
   <GuestOnly>
   <StatusBar style="auto" />
   <Stack 
   screenOptions={{headerShown:false,animation:"none"}}>

   </Stack>
   </GuestOnly>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})