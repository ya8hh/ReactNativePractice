import { Client,Account,ID,Avatars,Databases } from "react-native-appwrite";

export const client = new Client().setProject('68525675003261a207b1').setPlatform('dev.yash.shelfie').setEndpoint('https://fra.cloud.appwrite.io/v1')

export const account  =new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)