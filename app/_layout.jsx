import { Stack } from 'expo-router';
import { Text, View, StyleSheet, useColorScheme, StatusBar } from 'react-native';
import { Colors } from '../constants/Colors.js';
import { UserProvider } from '../contexts/UserContext.jsx';
import { BooksProvider } from '../contexts/BooksContext.jsx';
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme =Colors[colorScheme]??Colors.light
  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto"/>
        <Stack screenOptions={{
            headerStyle:{backgroundColor:theme.navBackground},
            headerTintColor:theme.title
          }} >
            <Stack.Screen name='index' options={{title:'Home'}}/>
            <Stack.Screen name='about' options={{title:'About'}}/>
            <Stack.Screen name='contact' options={{title:'Contact',headerShown:false}}/>
            <Stack.Screen name='(auth)' options={{headerShown:false}}/>
            <Stack.Screen name='(dashboard)' options={{headerShown:false}}/>
          </Stack>
          </BooksProvider>
      </UserProvider>
    
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
