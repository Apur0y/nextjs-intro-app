import { MongoClient, ServerApiVersion } from 'mongodb' 
import dotenv from 'dotenv';
dotenv.config();



function dbConnect(collectionName){
    
    const uri = 'mongodb+srv://nextTest:ch8bcNfm9aS2pRb1@thelaststand.sh6jy.mongodb.net/?retryWrites=true&w=majority&appName=thelaststand'
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db("nextdb").collection(collectionName)

}

export default dbConnect

