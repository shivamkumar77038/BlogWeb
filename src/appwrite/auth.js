import {Client,Account,Databases} from 'appwrite'; 

const client = new Client();
client.setEndpoint("projecturl").setProject("projectid");

export const account = new Account(client);
export const databases = new Databases(client,"databaseId")