import { Client,Account,ID,Avatars } from "react-native-appwrite";

export const client = new Client().setProject('68525675003261a207b1').setPlatform('dev.yash.shelfie')

export const account  =new Account(client)
export const avatars = new Avatars(client)